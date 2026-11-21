const fs = require('fs');
const data = JSON.parse(fs.readFileSync('/root/makefun-guide-tidy/repo/trophies_full.json', 'utf8'));

console.log('Trophies count:', data.trophies.length);

let totalSteps = 0;
let errorCount = 0;

data.trophies.forEach(t => {
  if (!t.id || t.id < 1 || t.id > 55) {
    console.error('Invalid ID:', t.id);
    errorCount++;
  }

  // Verify step count
  const expectedSteps = [28, 44, 45, 48, 49, 50, 51].includes(t.id) ? 7 : 6;
  if (!t.steps || t.steps.length !== expectedSteps) {
    console.error('Invalid step count for ID:', t.id, 'Expected:', expectedSteps, 'Found:', t.steps ? t.steps.length : 'undefined');
    errorCount++;
  }

  totalSteps += (t.steps ? t.steps.length : 0);

  // Verify flags
  if ([44, 45, 49, 50, 51].includes(t.id) && t.flag !== "unknown") {
    console.error('Invalid flag for ID:', t.id, 'Expected: unknown');
    errorCount++;
  }
  if (t.id === 48 && t.flag !== "CAUTION") {
      console.error('Invalid flag for ID:', t.id, 'Expected: CAUTION');
      errorCount++;
  }
  if (t.id === 28 && t.flag !== "MISSABLE") {
      console.error('Invalid flag for ID:', t.id, 'Expected: MISSABLE');
      errorCount++;
  }

  t.steps.forEach((s, i) => {
    if (!s.cites || s.cites.length === 0) {
      console.error('Invalid cites for ID:', t.id, 'Step:', i + 1);
      errorCount++;
    }
  });
});

console.log('Total steps:', totalSteps);
if (totalSteps !== 337) {
  console.error('Total steps mismatch. Expected 337, Found:', totalSteps);
  errorCount++;
}

if (errorCount === 0) {
  console.log('All checks passed.');
} else {
  console.log('Checks failed:', errorCount);
}
