#!/usr/bin/env node
// Turns a project folder (images + optional info.md from the project template)
// into a site project at src/content/projects/<name>/.
//
//   npm run import-project -- "/path/to/09 CV Website/Projects/05 Winery" winery
//
// - Images (jpg, jpeg, png, webp) are copied in file-name order, resized to at most
//   2400 px on the long side. The first one becomes the cover.
// - info.md (optional) fills in title, year, location, role, text and captions.
// - An existing index.md keeps its text; only fields found in info.md and the
//   image list are updated. New projects start as drafts.

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { parse, stringify } from 'yaml';

const [src, name] = process.argv.slice(2);
if (!src || !name) {
  console.error('Usage: npm run import-project -- "<source folder>" <project-name>');
  process.exit(1);
}

const root = path.dirname(path.dirname(new URL(import.meta.url).pathname));
const dest = path.join(root, 'src/content/projects', name);
fs.mkdirSync(dest, { recursive: true });

const slugify = (s) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// --- info.md -------------------------------------------------------------
function readInfo(dir) {
  const file = ['info.md', 'Info.md', 'INFO.md'].map((f) => path.join(dir, f)).find(fs.existsSync);
  if (!file) return null;
  const text = fs.readFileSync(file, 'utf8');
  const fields = {};
  const sections = {};
  let current = null;
  for (const line of text.split('\n')) {
    const h = line.match(/^##\s+(.+)/);
    if (h) { current = h[1].trim().toLowerCase(); sections[current] = []; continue; }
    if (current) { sections[current].push(line); continue; }
    const kv = line.match(/^([^:#]+):\s*(.*)$/);
    if (kv && kv[2].trim()) fields[kv[1].trim().toLowerCase()] = kv[2].trim();
  }
  const body = (k) => (sections[k] ?? []).join('\n').trim();
  const captions = {};
  for (const l of sections['image captions'] ?? []) {
    const m = l.match(/^\s*([^:]+\.(?:jpe?g|png|webp)):\s*(.+)$/i);
    if (m) captions[m[1].trim()] = m[2].trim();
  }
  return { fields, body, captions };
}

const info = readInfo(src);

// --- images --------------------------------------------------------------
const images = fs
  .readdirSync(src)
  .filter((f) => /\.(jpe?g|png|webp)$/i.test(f) && !f.startsWith('.'))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

for (const old of fs.readdirSync(dest)) {
  if (/\.(jpe?g|png|webp)$/i.test(old)) fs.rmSync(path.join(dest, old));
}

const imported = [];
for (const [i, f] of images.entries()) {
  const base = slugify(f.replace(/\.[^.]+$/, '').replace(/^\d+[-_ ]*/, '')) || 'image';
  const out = `${String(i + 1).padStart(2, '0')}-${base}.jpg`;
  await sharp(path.join(src, f))
    .rotate()
    .resize({ width: 2400, height: 2400, fit: 'inside', withoutEnlargement: true })
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(dest, out));
  imported.push({ file: out, caption: info?.captions[f] });
  console.log(`  image  ${f}  ->  ${out}`);
}

// --- index.md ------------------------------------------------------------
const indexPath = path.join(dest, 'index.md');
let data = { title: name, summary: 'To be written.', category: 'architecture', context: 'To confirm', draft: true };
let content = '\nContent coming soon.\n';
if (fs.existsSync(indexPath)) {
  const m = fs.readFileSync(indexPath, 'utf8').match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (m) { data = { ...data, ...parse(m[1]) }; content = m[2]; }
}

if (info) {
  const f = info.fields;
  const pick = (...keys) => keys.map((k) => f[k]).find((v) => v && !/^\(?optional\)?$/i.test(v));
  const cat = (pick('category') ?? '').toLowerCase();
  Object.assign(data, Object.fromEntries(Object.entries({
    title: pick('title'),
    year: pick('year'),
    location: pick('location (city, country)', 'location'),
    category: cat.includes('analytic') ? 'urban-analytics' : cat.includes('urban') ? 'urban-design' : cat.includes('arch') ? 'architecture' : undefined,
    context: pick('studio, client or school', 'studio', 'client', 'school'),
    role: pick('your role', 'role'),
  }).filter(([, v]) => v)));
  const tools = info.body('tools');
  if (tools) data.stack = tools.split(/[,·\n]/).map((s) => s.replace(/^[-*]\s*/, '').trim()).filter(Boolean);
  const brief = info.body('brief');
  if (brief) data.summary = brief.split(/(?<=\.)\s/)[0];
  const parts = [['What it is', brief], ['What I did', info.body('what i did')], ['Result', info.body('result')]]
    .filter(([, t]) => t)
    .map(([h, t]) => `## ${h}\n\n${t}\n`);
  if (parts.length) content = '\n' + parts.join('\n');
}

delete data.cover;
delete data.images;
if (imported.length) {
  data.cover = `./${imported[0].file}`;
  if (imported.length > 1) {
    data.images = imported.slice(1).map((im) => (im.caption ? { src: `./${im.file}`, caption: im.caption } : { src: `./${im.file}` }));
  }
}

fs.writeFileSync(indexPath, `---\n${stringify(data).trim()}\n---\n${content}`);
console.log(`\nWrote src/content/projects/${name}/index.md (${imported.length} images${data.draft ? ', draft' : ''}).`);
console.log(`Add '${name}' to src/data/projects.ts to set its position.`);
