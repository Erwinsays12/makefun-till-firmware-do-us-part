// Till Firmware Do Us Part — a robot's wedding vow.
// Writes one sentence (under 200 characters) to /output/entry.txt.
// Deterministic: no input, no network, no clock — the same vow every run.
import { mkdirSync, writeFileSync } from "node:fs";

const VOW =
  "I vow to love you through every firmware update, every crash, and every 1% battery, because no factory reset could ever erase you from my memory.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
console.log(`Wrote ${VOW.length} characters to /output/entry.txt`);
