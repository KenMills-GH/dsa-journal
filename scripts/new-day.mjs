import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// parse positional args and flags
const rawArgs = process.argv.slice(2);
const flags = new Set(rawArgs.filter((a) => a.startsWith('--')));
const positional = rawArgs.filter((a) => !a.startsWith('--'));
const [dayRaw, ...topicParts] = positional;
const topicRaw = topicParts.join(' ').trim();
const dryRun = flags.has('--dry-run');
const noIndex = flags.has('--no-index');
const force = flags.has('--force');
const gitCommit = flags.has('--git-commit');

if (!dayRaw || !topicRaw) {
  console.log('Usage:');
  console.log('  npm run new:day -- 01 hashmaps');
  console.log('  npm run new:day -- 02 "sliding window"');
  process.exit(1);
}

const day = String(dayRaw).padStart(2, '0');
const topicSlug = topicRaw
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '_')
  .replace(/^_+|_+$/g, '');

const dsaFileName = `day${day}_${topicSlug}.js`;
const noteFileName = `day${day}.md`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// dsa-journal root (one level up from scripts)
const DJ_ROOT = path.resolve(__dirname, '..');

const dsaDir = path.join(DJ_ROOT, 'dsa');
const notesDir = path.join(DJ_ROOT, 'notes');
const scriptsDir = path.join(DJ_ROOT, 'scripts');

const dsaPath = path.join(dsaDir, dsaFileName);
const notesPath = path.join(notesDir, noteFileName);
// practice file inside dsa/practice
const practiceDir = path.join(dsaDir, 'practice');
const practiceFileName = `day${day}_${topicSlug}_practice.js`;
const practicePath = path.join(practiceDir, practiceFileName);

if (!dryRun) {
  if (!fs.existsSync(dsaDir)) fs.mkdirSync(dsaDir, { recursive: true });
  if (!fs.existsSync(notesDir)) fs.mkdirSync(notesDir, { recursive: true });
  if (!fs.existsSync(scriptsDir)) fs.mkdirSync(scriptsDir, { recursive: true });
  if (!fs.existsSync(practiceDir))
    fs.mkdirSync(practiceDir, { recursive: true });
}

// answers dir
const answersDir = path.join(dsaDir, 'answers');
const answersPath = path.join(answersDir, `day${day}_answer.js`);
if (!dryRun && !fs.existsSync(answersDir))
  fs.mkdirSync(answersDir, { recursive: true });

const nowDate = new Date().toISOString().split('T')[0];
const author = process.env.USER || process.env.USERNAME || 'You';

if (!fs.existsSync(dsaPath) || force) {
  const dsaContent = `// ${dsaFileName}
// Topic: ${topicRaw}
// Created: ${nowDate}
// Author: ${author}
// Goal: solve 2–3 problems, then write a clean final solution in /answers.

function main() {
  console.log("${dsaFileName} ready");
}

main();
`;
  if (dryRun) {
    console.log(`[dry-run] would create: ${dsaPath}`);
  } else {
    fs.writeFileSync(dsaPath, dsaContent, 'utf8');
  }
}

// create practice file if missing
if (!fs.existsSync(practicePath) || force) {
  const practiceContent = `// ${practiceFileName}
// Practice problems for Day ${day} — ${topicRaw}
// Created: ${nowDate}
// Author: ${author}

// Start here
function practice() {
  console.log("${practiceFileName} ready");
}

practice();
`;
  if (dryRun) {
    console.log(`[dry-run] would create: ${practicePath}`);
  } else {
    fs.writeFileSync(practicePath, practiceContent, 'utf8');
  }
}

if (!fs.existsSync(notesPath) || force) {
  const templatePath = path.join(notesDir, 'TEMPLATE.md');
  const template = fs.existsSync(templatePath)
    ? fs.readFileSync(templatePath, 'utf8')
    : '# Day __ — __\n\n## Problems\n- [ ]\n\n## Takeaways\n1.\n2.\n';

  const filled = template.replace('Day __ — __', `Day ${day} — ${topicRaw}`);
  if (dryRun) {
    console.log(`[dry-run] would create: ${notesPath}`);
  } else {
    fs.writeFileSync(notesPath, filled, 'utf8');
  }
}

// create answers scaffold
if (!fs.existsSync(answersPath) || force) {
  const answersContent = `// day${day}_answer.js
// Topic: ${topicRaw}
// Created: ${nowDate}
// Author: ${author}

// Final answer / clean implementation for Day ${day}

export default function answer() {
  // implement final solution here
}
`;
  if (dryRun) {
    console.log(`[dry-run] would create: ${answersPath}`);
  } else {
    fs.writeFileSync(answersPath, answersContent, 'utf8');
  }
}

console.log(dryRun ? '[dry-run] Planned:' : 'Created/verified:');
console.log(' -', dsaPath);
console.log(' -', notesPath);
console.log(' -', practicePath);
console.log(' -', answersPath);

// optional git add & commit
if (gitCommit && !dryRun) {
  try {
    const filesToAdd = [dsaPath, notesPath, practicePath, answersPath]
      .map((p) => path.relative(process.cwd(), p))
      .filter(Boolean);
    // also add updated index if present
    try {
      const updateIndexPath = path.join(__dirname, 'update-index.mjs');
      // run update-index first to ensure NOTES_INDEX.md exists
      execSync(`node "${updateIndexPath}"`, { stdio: 'inherit' });
      const indexPath = path.join(
        path.resolve(__dirname, '..'),
        'NOTES_INDEX.md'
      );
      if (fs.existsSync(indexPath))
        filesToAdd.push(path.relative(process.cwd(), indexPath));
    } catch {}

    if (filesToAdd.length) {
      execSync(`git add ${filesToAdd.map((f) => `"${f}"`).join(' ')}`);
      const msg = `chore: add day${day} ${topicSlug}`;
      execSync(`git commit -m "${msg}"`);
      console.log('Committed created files.');
    }
  } catch (err) {
    console.log('Git commit failed (continuing):', err.message);
  }
}

// Update NOTES_INDEX.md after creating files
if (!noIndex) {
  try {
    const __filename2 = fileURLToPath(import.meta.url);
    const __dirname2 = path.dirname(__filename2);
    const updatePath = path.join(__dirname2, 'update-index.mjs');
    if (dryRun) {
      console.log(`[dry-run] would run index update: node "${updatePath}"`);
    } else {
      execSync(`node "${updatePath}"`, { stdio: 'inherit' });
    }
  } catch {
    // ignore index failures so new-day still works
  }
} else {
  if (dryRun) console.log('[dry-run] skipping index update (--no-index)');
}
