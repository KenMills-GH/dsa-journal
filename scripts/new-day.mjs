import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const [dayRaw, ...topicParts] = process.argv.slice(2);
const topicRaw = topicParts.join(" ").trim();

if (!dayRaw || !topicRaw) {
  console.log("Usage:");
  console.log("  npm run new:day -- 01 hashmaps");
  console.log('  npm run new:day -- 02 "sliding window"');
  process.exit(1);
}

const day = String(dayRaw).padStart(2, "0");
const topicSlug = topicRaw
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "_")
  .replace(/^_+|_+$/g, "");

const dsaFileName = `day${day}_${topicSlug}.js`;
const noteFileName = `day${day}.md`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// dsa-journal root (one level up from scripts)
const DJ_ROOT = path.resolve(__dirname, "..");

const dsaDir = path.join(DJ_ROOT, "dsa");
const notesDir = path.join(DJ_ROOT, "notes");
const scriptsDir = path.join(DJ_ROOT, "scripts");

const dsaPath = path.join(dsaDir, dsaFileName);
const notesPath = path.join(notesDir, noteFileName);

if (!fs.existsSync(dsaDir)) fs.mkdirSync(dsaDir, { recursive: true });
if (!fs.existsSync(notesDir)) fs.mkdirSync(notesDir, { recursive: true });
if (!fs.existsSync(scriptsDir)) fs.mkdirSync(scriptsDir, { recursive: true });

if (!fs.existsSync(dsaPath)) {
  fs.writeFileSync(
    dsaPath,
    `// ${dsaFileName}
// Topic: ${topicRaw}
// Goal: solve 2–3 problems, then write a clean final solution in /answers.

function main() {
  console.log("${dsaFileName} ready");
}

main();
`,
    "utf8"
  );
}

if (!fs.existsSync(notesPath)) {
  const templatePath = path.join(notesDir, "TEMPLATE.md");
  const template = fs.existsSync(templatePath)
    ? fs.readFileSync(templatePath, "utf8")
    : "# Day __ — __\n\n## Problems\n- [ ]\n\n## Takeaways\n1.\n2.\n";

  const filled = template.replace("Day __ — __", `Day ${day} — ${topicRaw}`);
  fs.writeFileSync(notesPath, filled, "utf8");
}

console.log("Created/verified:");
console.log(" -", dsaPath);
console.log(" -", notesPath);

// Update NOTES_INDEX.md after creating files
try {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const updatePath = path.join(__dirname, "update-index.mjs");
  execSync(`node "${updatePath}"`, { stdio: "inherit" });
} catch {
  // ignore index failures so new-day still works
}
