import puppeteer from '/root/makefun-guide/nm-node_modules/puppeteer/lib/puppeteer/puppeteer.js';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const SHOTS_FILE = './shots.json';
const SCREENSHOTS_DIR = './screenshots';
const CHROME_PATH = '/root/makefun-re/art-tools/chromium/chrome-linux/chrome';

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

async function run() {
    if (!fs.existsSync(SCREENSHOTS_DIR)) fs.mkdirSync(SCREENSHOTS_DIR);

    const shots = JSON.parse(fs.readFileSync(SHOTS_FILE, 'utf8'));
    const server = spawn(process.execPath, ['serve.ts'], { stdio: 'inherit' });

    if (!(await waitForServer('http://localhost:8080/'))) {
        server.kill();
        throw new Error('Server failed to start');
    }

    for (const [index, shot] of shots.entries()) {
        let quality = 82;
        let filePath = path.join(SCREENSHOTS_DIR, shot.file);
        let success = false;

        while (!success && quality >= 60) {
            const browser = await puppeteer.launch({
                executablePath: CHROME_PATH,
                args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
            });
            const page = await browser.newPage();
            await page.setCacheEnabled(false);
            await page.setViewport(shot.viewport);
            await page.goto('http://localhost:8080/index.html', { waitUntil: 'load' });
            await page.waitForFunction(() => window.__deskData !== null);

            // Apply actions based on index (hardcoded to match shots.json)
            if (index === 0) { // 1-cover
                await page.evaluate(() => {
                    const trophiesToEarn = window.__deskData.trophies.slice(0, 13).map(t => t.id);
                    window.DeskStore.applyDemoEarned(trophiesToEarn);
                    window.DeskTable.render(window.__deskData);
                    window.FieldNote.open(28);
                    document.querySelector('#field-note').scrollIntoView();
                });
            } else if (index === 1) { // 2-filter
                await page.evaluate(() => {
                    window.DeskFilters.setGroup('collectibles');
                    window.DeskTable.render(window.__deskData);
                    document.querySelector('#desk-table').scrollIntoView();
                });
            } else if (index === 2) { // 3-watch
                await page.evaluate(() => {
                    window.DeskStore.setVeil(true);
                    window.DeskTable.render(window.__deskData);
                    window.FieldNote.open(48);
                    document.querySelector('#field-note').scrollIntoView();
                });
            } else if (index === 3) { // 4-note
                await page.evaluate(() => {
                    window.FieldNote.open(2);
                    document.querySelector('#field-note').scrollIntoView();
                });
            }

            await page.waitForFunction(() => document.querySelectorAll('.desk-row').length > 0);
            await sleep(2000);
            await page.screenshot({ path: filePath, type: 'jpeg', quality });
            await browser.close();

            const stats = fs.statSync(filePath);
            if (stats.size <= 262144) {
                console.log(`${shot.file}: ${stats.size} bytes`);
                success = true;
            } else {
                quality = quality === 82 ? 70 : 60;
            }
        }
    }

    server.kill();
    console.log("SHOTS DONE");
}

run().catch(console.error);
