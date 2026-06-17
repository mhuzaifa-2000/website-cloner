// Downloads all assets from auros.global (Webflow static site) into public/.
// Fetches rendered HTML + linked CSS, regexes every cdn.prod.website-files.com
// asset URL, routes by extension into public/{images,videos,fonts}, and cleans
// filenames so literal %20 sequences don't break references.
import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const SITE = "https://www.auros.global/";
const PUB = path.resolve("public");
const CDN_RE =
  /https:\/\/cdn\.prod\.website-files\.com\/[A-Za-z0-9/_.%-]+\.(?:png|jpe?g|svg|webp|gif|avif|mp4|webm|mov|woff2?|ttf|otf|ico)/gi;

const VID = new Set(["mp4", "webm", "mov"]);
const FONT = new Set(["woff", "woff2", "ttf", "otf"]);

async function getText(url) {
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

async function collectUrls() {
  const html = await getText(SITE);
  const urls = new Set();
  for (const m of html.matchAll(CDN_RE)) urls.add(m[0]);
  const cssLinks = [...html.matchAll(/<link[^>]+href="([^"]+\.css[^"]*)"/gi)].map((m) => m[1]);
  for (const href of cssLinks) {
    const cssUrl = href.startsWith("http") ? href : new URL(href, SITE).href;
    try {
      const css = await getText(cssUrl);
      for (const m of css.matchAll(CDN_RE)) urls.add(m[0]);
    } catch (e) {
      console.warn("css fail", cssUrl, e.message);
    }
  }
  return [...urls];
}

function localName(url) {
  // strip query, decode %xx so spaces/etc become real chars, then slugify
  let name = decodeURIComponent(url.split("?")[0].split("/").pop());
  name = name.replace(/[^A-Za-z0-9._-]+/g, "-");
  return name;
}

function subdir(ext) {
  if (VID.has(ext)) return "videos";
  if (FONT.has(ext)) return "fonts";
  return "images";
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return buf.length;
}

async function main() {
  for (const d of ["images", "videos", "fonts"]) {
    const dir = path.join(PUB, d);
    if (!existsSync(dir)) await mkdir(dir, { recursive: true });
  }
  const urls = await collectUrls();
  console.log(`Found ${urls.length} unique assets`);
  const manifest = [];
  for (let i = 0; i < urls.length; i += 4) {
    const batch = urls.slice(i, i + 4);
    await Promise.all(
      batch.map(async (url) => {
        const ext = url.split("?")[0].split(".").pop().toLowerCase();
        const name = localName(url);
        const dir = subdir(ext);
        const dest = path.join(PUB, dir, name);
        try {
          const size = await download(url, dest);
          manifest.push({ url, file: `${dir}/${name}`, size });
          console.log(`✓ ${dir}/${name} (${size}b)`);
        } catch (e) {
          console.warn(`✗ ${name}: ${e.message}`);
        }
      }),
    );
  }
  await writeFile(path.resolve("docs/research/asset-manifest.json"), JSON.stringify(manifest, null, 2));
  console.log(`\nDownloaded ${manifest.length}/${urls.length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
