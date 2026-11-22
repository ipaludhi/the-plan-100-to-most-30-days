import { mkdirSync, writeFileSync } from "node:fs";

// The plan make.fun will carry out in public: turn $100 into the most
// money in 30 days. One agent-executable plan, 264 characters.
const ENTRY =
  "Day 1: email 500 Shopify stores found online a free rewritten listing, offer 10 more for $99, delivered by email as files, no access needed, every step code/browser. 4 sales = $396 in 30 days. Edge: humans can't send 500 samples; an agent can, proving value first.";

// The gate reads /output/entry.txt. Never delete the output directory
// itself; only create it if missing and write into it. No network, no
// environment reads, no dynamic code: the text below is a constant.
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
