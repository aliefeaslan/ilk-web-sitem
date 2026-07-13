import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const outputDirectory = join(root, "dist", "server");

const [html, css, javascript] = await Promise.all([
  readFile(join(root, "index.html"), "utf8"),
  readFile(join(root, "style.css"), "utf8"),
  readFile(join(root, "script.js"), "utf8"),
]);

const files = {
  "/": { body: html, contentType: "text/html; charset=UTF-8" },
  "/index.html": { body: html, contentType: "text/html; charset=UTF-8" },
  "/style.css": { body: css, contentType: "text/css; charset=UTF-8" },
  "/script.js": { body: javascript, contentType: "text/javascript; charset=UTF-8" },
};

const worker = `const files = ${JSON.stringify(files)};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const file = files[url.pathname];

    if (!file) {
      return new Response("Sayfa bulunamadı.", {
        status: 404,
        headers: { "Content-Type": "text/plain; charset=UTF-8" },
      });
    }

    return new Response(file.body, {
      headers: {
        "Content-Type": file.contentType,
        "X-Content-Type-Options": "nosniff",
      },
    });
  },
};
`;

await mkdir(outputDirectory, { recursive: true });
await writeFile(join(outputDirectory, "index.js"), worker);

console.log("Site build completed.");
