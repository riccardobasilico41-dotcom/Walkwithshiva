/**
 * Downloads images and HTML code for the S. Egidio Luxury Healthcare Stitch project screens.
 * Requires STITCH_API_KEY environment variable.
 * Generate your key at: stitch.withgoogle.com → Profile → Settings → API Keys → Create Key
 */

import { Stitch } from '@google/stitch-sdk';
import { writeFile, mkdir } from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';

const PROJECT_ID = '13184756136394094829';

const SCREENS = [
  { id: '4661eebe8293450fb541dad753b28b73', name: 'chi-siamo' },
  { id: 'ad1439151ae54e10b2e0b599382367fc', name: 'servizi-co-working' },
  { id: '31e5367e139a44668bf50b722a78afb3', name: 'contatti-e-journal' },
  { id: 'dd91aff1a9554a4bbeb62ce6bc5d9477', name: 'home-page-hero-evolution-1' },
  { id: '39b9bca2f9f54e239fa39006a75ddb74', name: 'home-page-hero-evolution-2' },
];

async function downloadUrl(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`);
  const buffer = await res.arrayBuffer();
  await writeFile(destPath, Buffer.from(buffer));
}

async function main() {
  const apiKey = process.env.STITCH_API_KEY;
  if (!apiKey) {
    console.error('Error: STITCH_API_KEY is not set.');
    console.error('Generate your key at: stitch.withgoogle.com → Profile → Settings → API Keys → Create Key');
    process.exit(1);
  }

  const stitch = new Stitch({ apiKey });
  const project = stitch.project(PROJECT_ID);

  await mkdir('screens', { recursive: true });

  for (const screen of SCREENS) {
    console.log(`\nFetching screen: ${screen.name} (${screen.id})`);
    try {
      const s = await project.getScreen(screen.id);

      const htmlUrl = await s.getHtml();
      const imageUrl = await s.getImage();

      const htmlPath = path.join('screens', `${screen.name}.html`);
      const imgPath = path.join('screens', `${screen.name}.png`);

      console.log(`  HTML URL: ${htmlUrl}`);
      console.log(`  Image URL: ${imageUrl}`);

      await downloadUrl(htmlUrl, htmlPath);
      console.log(`  ✓ Saved HTML → ${htmlPath}`);

      if (imageUrl) {
        await downloadUrl(imageUrl, imgPath);
        console.log(`  ✓ Saved image → ${imgPath}`);
      }
    } catch (err) {
      console.error(`  ✗ Error: ${err.message}`);
    }
  }

  console.log('\nDone!');
}

main();
