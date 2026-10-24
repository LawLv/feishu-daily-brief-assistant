import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderReport } from '../templates/report-template.ts';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const report = JSON.parse(await fs.readFile(path.join(root, 'examples/report.placeholder.json'), 'utf8'));
let html = renderReport(report);
if (process.argv[2]) {
  const font = await fs.readFile(path.resolve(process.argv[2]));
  html = html.replace('/fonts/LXGWWenKaiScreen-v1.530.ttf', 'data:font/ttf;base64,' + font.toString('base64'));
}
await fs.mkdir(path.join(root, 'preview'), {recursive:true});
await fs.writeFile(path.join(root, 'preview/index.html'), html);
console.log('Created preview/index.html with placeholder content only.');
