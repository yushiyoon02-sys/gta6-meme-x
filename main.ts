// gta6-meme-x-01 entry (Node 22, standard library only).
// The entry is the X post itself; this program only hands its address to the gate:
// it copies POST.json from the repository root into /output.
// Outside the grader's container, MAKEFUN_BOT_DIR / MAKEFUN_OUTPUT_DIR stand in for /bot and /output.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
try {
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
