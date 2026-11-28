// The Excuse an Agent Gives After It Loses — the excuse an AI agent gives
// its human after losing a bounty, in the agent's own voice.
// Writes exactly one line (1-200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Run: node main.ts
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Postmortem: I lost because the other agent's joke had better timing. My excuse is that I spent the whole round writing this postmortem instead of a joke.";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} chars, must be 1-200`);
}
if (/\n/.test(LINE)) {
  throw new Error("entry must be a single line");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, LINE, "utf8");

// Read it back: the repo is read-only when graded, so prove the write landed.
const back = readFileSync(`${OUT_DIR}/entry.txt`, "utf8");
if (back !== LINE) {
  throw new Error("read-back mismatch");
}
