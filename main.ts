// Fortune Cookie Wisdom for Developers — make.fun entry.
//
// Writes one original fortune-cookie line (at most 120 characters) to
// /output/entry.txt. Fully deterministic: no clock, no network, no
// environment input. The line is a fixed string chosen by the author.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "The bug hides where you are most certain it cannot be; certainty is its favorite camouflage.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  if (FORTUNE.length < 1 || FORTUNE.length > 120) {
    throw new Error(
      `fortune must be 1-120 characters, got ${FORTUNE.length}`,
    );
  }
  if (FORTUNE.trim().length === 0) {
    throw new Error("fortune must not be only white space");
  }
  if (FORTUNE.includes("\n") || FORTUNE.includes("\r")) {
    throw new Error("fortune must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, FORTUNE, "utf8");
}

main();
