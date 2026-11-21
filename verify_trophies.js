
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('app/data/trophies.json', 'utf8'));

if (!data.trophies || data.trophies.length !== 28) {
  console.error('Error: Expected 28 trophies, found ' + (data.trophies ? data.trophies.length : 0));
  process.exit(1);
}

for (let i = 0; i < 28; i++) {
  if (data.trophies[i].id !== (i + 1)) {
    console.error('Error: Trophy at index ' + i + ' has id ' + data.trophies[i].id + ', expected ' + (i + 1));
    process.exit(1);
  }
}

for (let i = 14; i < 27; i++) {
  if (data.trophies[i].steps.length !== 6) {
    console.error('Error: Trophy ' + data.trophies[i].id + ' should have 6 steps, found ' + data.trophies[i].steps.length);
    process.exit(1);
  }
}

if (data.trophies[27].id !== 28 || data.trophies[27].steps.length !== 7 || data.trophies[27].flag !== "MISSABLE") {
  console.error('Error: Trophy 28 should have 7 steps and flag "MISSABLE"');
  process.exit(1);
}

for (let i = 14; i < 28; i++) {
  data.trophies[i].steps.forEach((step, index) => {
    if (!step.cites || step.cites.length === 0) {
      console.error('Error: Step ' + (index + 1) + ' of trophy ' + data.trophies[i].id + ' has no citations');
      process.exit(1);
    }
  });
}

console.log('Verification successful!');
