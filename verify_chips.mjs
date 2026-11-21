import puppeteer from '/root/makefun-guide/nm-node_modules/puppeteer/lib/puppeteer/puppeteer.js';
import { spawn } from 'child_process';

const CHROME_PATH = '/root/makefun-re/art-tools/chromium/chrome-linux/chrome';

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function run() {
    const server = spawn('/usr/local/bin/node22', ['serve.ts'], { stdio: 'inherit' });
    await sleep(2000); // Give server time to start

    const browser = await puppeteer.launch({
        executablePath: CHROME_PATH,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/index.html', { waitUntil: 'load' });
    await page.waitForFunction(() => window.__deskData !== null);

    const chips = await page.evaluate(() => {
        const chips = document.querySelectorAll('#watch-chips .watch-chip');
        return Array.from(chips).map(chip => chip.innerText.replace(/\n/g, ' '));
    });

    console.log('Chips found:');
    chips.forEach(c => console.log(`"${c}"`));

    await browser.close();
    server.kill();
}

run().catch(console.error);
