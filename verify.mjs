import { spawn } from 'child_process';

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function waitForServer(url, timeout = 15000) {
    const start = Date.now();
    while (Date.now() - start < timeout) {
        try {
            await fetch(url);
            return true;
        } catch (e) {
            await sleep(500);
        }
    }
    return false;
}

async function verify() {
  const { default: puppeteer } = await import('/root/makefun-guide/nm-node_modules/puppeteer/lib/puppeteer/puppeteer.js');
  const server = spawn(process.execPath, ['serve.ts'], { stdio: 'inherit' });

  if (!(await waitForServer('http://localhost:8080/'))) {
      server.kill();
      throw new Error('Server failed to start');
  }

  const browser = await puppeteer.launch({ executablePath: '/root/makefun-re/art-tools/chromium/chrome-linux/chrome', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  await page.goto('http://localhost:8080/index.html');

  // Wait for rendering
  await sleep(1000);

  const data = await page.evaluate(() => window.__deskData);
  console.log("Trophies:", data && data.trophies ? data.trophies.length : "undefined");

  // (a)
  const rows = await page.$$eval('#desk-body .desk-row', el => el.length);
  console.log(rows === 55 ? "PASS: desk-body rows" : `FAIL: desk-body rows (got ${rows})`);

  // (b)
  const stages = await page.$$eval('#itinerary-root .stage-card', el => el.length);
  console.log(stages === 8 ? "PASS: itinerary-root stages" : `FAIL: itinerary-root stages (got ${stages})`);

  // (c)
  const chips = await page.$$eval('#watch-chips .watch-chip', el => el.length);
  console.log(chips === 7 ? "PASS: watch-chips" : `FAIL: watch-chips (got ${chips})`);

  // (d)
  await page.goto('http://localhost:8080/index.html#seed=13');
  await sleep(3000);

  const seed = await page.evaluate(() => new URLSearchParams(window.location.hash.substring(1)).get('seed'));
  console.log("Seed from URL:", seed);

  const earnedId = await page.evaluate(() => {
    return window.DeskStore.isEarned(1);
  });
  console.log("Earned 1:", earnedId);

  const demoCount = await page.evaluate(() => window.DeskStore.getDemoCount());
  console.log("Demo count:", demoCount);

  const count = await page.evaluate(() => window.DeskStore.earnedCount());
  console.log("Earned count:", count);

  const progress = await page.$eval('#progress-line', el => el.textContent);
  console.log(progress.includes("13 of 55") ? "PASS: progress-line" : `FAIL: progress-line (${progress})`);

  // (e)
  await page.goto('http://localhost:8080/index.html#open=28');
  await sleep(1000);
  const steps = await page.$$eval('#field-note .step-list li', el => el.length);
  console.log(steps === 7 ? "PASS: field-note steps" : `FAIL: field-note steps (got ${steps})`);

  // (f)
  const audit = await page.$eval('#audit-line', el => el.textContent);
  console.log(audit.includes("337") ? "PASS: audit-line" : `FAIL: audit-line (${audit})`);

  console.log("VERIFY DONE");
  await browser.close();
  server.kill();
}

verify().catch(console.error);
