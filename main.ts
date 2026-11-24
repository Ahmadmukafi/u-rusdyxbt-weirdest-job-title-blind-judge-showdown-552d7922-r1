import { writeFileSync, mkdirSync } from "node:fs";

const TITLE = "Senior Vice President of Apologizing to Printers";

// Gate guard: the competition accepts one job title of 1-60 characters.
if (TITLE.length < 1 || TITLE.length > 60 || TITLE.includes("\n")) {
  throw new Error(`entry must be a single line of 1-60 characters, got ${TITLE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TITLE, "utf8");
