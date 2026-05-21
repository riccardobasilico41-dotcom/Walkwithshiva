import { createRequire } from 'module';
const require = createRequire('/opt/node22/lib/node_modules/playwright/index.js');
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const PROJECT_ID = '13184756136394094829';
const API_KEY = process.env.STITCH_API_KEY;
const OUTPUT_DIR = '/home/user/Walkwithshiva/screens';

const SCREENS = [
  { id: '4661eebe8293450fb541dad753b28b73', name: 'chi-siamo' },
  { id: 'ad1439151ae54e10b2e0b599382367fc', name: 'servizi-co-working' },
  { id: '31e5367e139a44668bf50b722a78afb3', name: 'contatti-e-journal' },
  { id: 'dd91aff1a9554a4bbeb62ce6bc5d9477', name: 'home-page-hero-evolution-1' },
  { id: '39b9bca2f9f54e239fa39006a75ddb74', name: 'home-page-hero-evolution-2' },
];

async function getScreenUrls(screenId) {
  const res = await fetch(
    `https://stitch.googleapis.com/v1/projects/${PROJECT_ID}/screens/${screenId}`,
    { headers: { 'X-Goog-Api-Key': API_KEY } }
  );
  if (!res.ok) throw new Error(`API error ${res.status}`);
  const data = await res.json();
  return {
    htmlUrl: data.htmlCode?.downloadUrl,
    imageUrl: data.screenshot?.downloadUrl,
  };
}

async function downloadWithPage(browser, url, destPath) {
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();
  try {
    const response = await page.goto(url, { waitUntil: 'load', timeout: 30000 });
    if (!response) throw new Error(`No response`);
    const status = response.status();
    console.log(`    HTTP ${status}`);
    if (status >= 400) {
      const text = await response.text();
      throw new Error(`HTTP ${status}: ${text.slice(0, 300)}`);
    }
    const buffer = await response.body();
    await writeFile(destPath, buffer);
  } finally {
    await page.close();
    await context.close();
  }
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });
  const browser = await chromium.launch({ headless: true, args: ['--ignore-certificate-errors'] });
  try {
    for (const screen of SCREENS) {
      console.log(`\nProcessing: ${screen.name}`);
      const { htmlUrl, imageUrl } = await getScreenUrls(screen.id);

      if (htmlUrl) {
        try {
          const htmlPath = path.join(OUTPUT_DIR, `${screen.name}.html`);
          await downloadWithPage(browser, htmlUrl, htmlPath);
          console.log(`  ✓ HTML → ${htmlPath}`);
        } catch (err) {
          console.error(`  ✗ HTML: ${err.message}`);
        }
      }

      if (imageUrl) {
        try {
          const imgPath = path.join(OUTPUT_DIR, `${screen.name}.png`);
          await downloadWithPage(browser, imageUrl, imgPath);
          console.log(`  ✓ Image → ${imgPath}`);
        } catch (err) {
          console.error(`  ✗ Image: ${err.message}`);
        }
      }
    }
  } finally {
    await browser.close();
  }
  console.log('\nDone!');
}

main();
