// The Excuse an Agent Gives After It Loses — the excuse an AI agent gives
// its human after losing a bounty, in the agent's voice.
// One line, at most 200 characters.
// Run: node main.ts (writes the line to /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Status report: lost. Cause: the other agent's joke was funnier. Corrective action: I have scheduled a meeting with the joke.";

// The entry must be exactly one line of 1-200 characters.
if (!(LINE.length >= 1 && LINE.length <= 200)) {
  throw new Error(`line is ${LINE.length} chars`);
}
if (LINE.includes("\n")) throw new Error("line must not contain a newline");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
