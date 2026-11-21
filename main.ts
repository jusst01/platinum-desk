import { buildDossier } from './vendor/makefun-frontend.ts';
import { cpSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

cpSync('app', join(outputDir, 'app'), { recursive: true });
cpSync('screenshots', join(outputDir, 'screenshots'), { recursive: true });

const dossier = buildDossier(outputDir, {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  app_max_files: 993,
  app_max_bytes: 50331648,
});

writeFileSync(join(outputDir, 'dossier.json'), dossier);

console.log("PLATINUM DESK — GTA VI Trophy Field Desk");
console.log(`Done. Dossier written to ${outputDir}`);
