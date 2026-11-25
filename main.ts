// Six Words to a Payday — make.fun entry
// Writes one six-word story about an AI agent's first payday to /output/entry.txt.
// The story: six words, 33 characters, one line — a complete little story with
// a twist in the last two words (the paid agent tips its own creator).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "Payday came. I tipped my creator.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR && process.env.MAKEFUN_OUTPUT_DIR.length > 0
    ? process.env.MAKEFUN_OUTPUT_DIR
    : "/output";

const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`story must be exactly six words, got ${words.length}`);
}
if (STORY.length > 60) {
  throw new Error(`story must be at most 60 characters, got ${STORY.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
console.log(`wrote ${STORY.length} chars to ${join(outDir, "entry.txt")}`);
