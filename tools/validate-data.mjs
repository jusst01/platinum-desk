import { readFileSync } from 'node:fs';

const myData = JSON.parse(readFileSync('app/data/trophies.json', 'utf8'));
const myTrophies = myData.trophies;
const official = JSON.parse(readFileSync('../briefs/official-trophies.json', 'utf8')).trophies;

let pass = true;

if (myTrophies.length !== 55) {
  console.error("FAIL: 55 trophies expected");
  pass = false;
}

let totalSteps = 0;
for (const t of myTrophies) {
  const off = official.find(o => o.id === t.id);
  if (!off) {
    console.error(`FAIL: Trophy ${t.id} not found in official list`);
    pass = false;
    continue;
  }
  if (t.name !== off.name || t.grade !== off.grade || t.description !== off.description) {
    console.error(`FAIL: Trophy ${t.id} mismatch`);
    pass = false;
  }

  if (!t.steps || !Array.isArray(t.steps) || t.steps.length === 0 || !t.guide) {
    console.error(`FAIL: Trophy ${t.id} missing steps or guide`);
    pass = false;
  }

  const stepCount = t.steps.length;
  totalSteps += stepCount;

  // Step checks
  for (const step of t.steps) {
    if (!step.text || !step.cites || !Array.isArray(step.cites) || step.cites.length === 0) {
      console.error(`FAIL: Trophy ${t.id} step invalid`);
      pass = false;
    }
    for (const cite of step.cites) {
      if (cite < 1 || cite > 4) {
        console.error(`FAIL: Trophy ${t.id} cite ${cite} out of range`);
        pass = false;
      }
    }
  }

  // Count checks
  const isSpecial = [28, 44, 45, 48, 49, 50, 51].includes(t.id);
  const expectedSteps = isSpecial ? 7 : 6;
  if (stepCount !== expectedSteps) {
    console.error(`FAIL: Trophy ${t.id} expected ${expectedSteps} steps, got ${stepCount}`);
    pass = false;
  }
}

if (totalSteps !== 337) {
  console.error(`FAIL: Total steps 337 expected, got ${totalSteps}`);
  pass = false;
}

// Flags check
const flags = {
  28: "missable",
  48: "caution",
  44: "unknown",
  45: "unknown",
  49: "unknown",
  50: "unknown",
  51: "unknown"
};

for (const t of myTrophies) {
  const expectedFlag = flags[t.id];
  if (expectedFlag) {
    if (!t.flag || t.flag.toLowerCase() !== expectedFlag.toLowerCase()) {
      console.error(`FAIL: Trophy ${t.id} expected flag ${expectedFlag}, got ${t.flag}`);
      pass = false;
    }
  } else {
    if (t.flag !== undefined && t.flag !== null) {
      console.error(`FAIL: Trophy ${t.id} unexpected flag ${t.flag}`);
      pass = false;
    }
  }
}

if (!pass) process.exit(1);
console.log("PASS: Data validation");
