// Inline le favicon en data URI dans dist-single/index.html
// pour que le fichier HTML autonome garde son icône d'onglet partout.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(here, "..", "dist-single", "index.html");
const favPath = join(here, "..", "dist-single", "favicon.png");

if (!existsSync(favPath)) {
  console.log("inline-favicon: favicon.png absent, rien à faire.");
  process.exit(0);
}

const b64 = readFileSync(favPath).toString("base64");
const dataUri = `data:image/png;base64,${b64}`;
let html = readFileSync(htmlPath, "utf8");
html = html.replace(/href=["']\.\/favicon\.png["']/g, `href="${dataUri}"`);
writeFileSync(htmlPath, html);
console.log("inline-favicon: favicon intégré en data URI ✔");
