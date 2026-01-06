import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// repo root is two levels up from dsa-journal/scripts
const REPO_ROOT = path.resolve(__dirname, "..", "..");

const NOTES_DIR = path.join(REPO_ROOT, "notes");
const OUT_FILE = path.join(REPO_ROOT, "NOTES_INDEX.md");

function extractDayNumber(filename) {
  // matches day01.md, day1.md, day10.md, etc.
  const m = filename.match(/^day(\d+)\.md$/i);
  return m ? Number(m[1]) : null;
}

function titleFromNote(filepath, fallback) {
  try {
    const text = fs.readFileSync(filepath, "utf8");
    // First markdown H1
    const m = text.match(/^#\s+(.*)\s*$/m);
    return m ? m[1].trim() : fallback;
  } catch {
    return fallback;
  }
}

function main() {
  if (!fs.existsSync(NOTES_DIR)) {
    console.log("No notes/ folder found. Nothing to index.");
    process.exit(0);
  }

  const files = fs
    .readdirSync(NOTES_DIR)
    .filter((f) => /^day\d+\.md$/i.test(f));

  const entries = files
    .map((f) => {
      const dayNum = extractDayNumber(f);
      const absolutePath = path.join(NOTES_DIR, f);
      const relPath = path
        .relative(REPO_ROOT, absolutePath)
        .replace(/\\/g, "/");
      const title = titleFromNote(
        absolutePath,
        `Day ${String(dayNum).padStart(2, "0")}`
      );
      return { dayNum, file: f, relPath, title };
    })
    .filter((e) => e.dayNum !== null)
    .sort((a, b) => a.dayNum - b.dayNum);

  const lines = [];
  lines.push("# Notes Index");
  lines.push("");
  lines.push("> This file is auto-generated. Run: `npm run index:notes`");
  lines.push("");
  lines.push("## Daily notes");
  lines.push("");

  if (entries.length === 0) {
    lines.push("- (No day notes found yet)");
  } else {
    for (const e of entries) {
      const dayLabel = String(e.dayNum).padStart(2, "0");
      lines.push(`- **Day ${dayLabel}** — [${e.title}](${e.relPath})`);
    }
  }

  lines.push("");
  fs.writeFileSync(OUT_FILE, lines.join("\n"), "utf8");
  console.log("Updated:", OUT_FILE);
}

main();
