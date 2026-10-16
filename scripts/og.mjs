// Renders the share images from the site's own CSS so they match the pages.
// Restyle every card once the site has its look.
//
//   npm run og             everything
//   npm run og -- site     public/og/og-<lang>.png, 1200x630, one per language (each carries the headline)
//   npm run og -- posts    public/og/<lang>/<slug>.png, 1200x630, one per blog post, drafts included
//   npm run og -- social   design/social/square-<lang>.png (1080x1080) and story-<lang>.png
//                          (1080x1920), for posting by hand; not part of the site
//
// Netlify doesn't run this. Run it after changing the hero copy or adding or
// retitling a post, then commit the PNGs. A post without its card falls back
// to the site card (src/lib/blog.ts). Share previews are cached by URL, so a
// changed card can take a while to show up on WhatsApp or LinkedIn.
//
// Needs a Chromium-based browser. Set CHROME_PATH if it isn't at the default.
import { chromium } from "playwright-core";
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { translations, langs } from "../src/i18n/translations.ts";

const root = resolve(import.meta.dirname, "..");
const file = (p) => pathToFileURL(join(root, p)).href;
const executablePath = process.env.CHROME_PATH ?? "/Applications/Chromium.app/Contents/MacOS/Chromium";
const what = process.argv[2] ?? "all";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const shell = (body) => `<!doctype html>
<html><head><meta charset="utf-8">
<link rel="stylesheet" href="${file("src/styles/global.css")}">
<style>
  html, body { margin: 0; }
  .og {
    width: 100vw; height: 100vh; box-sizing: border-box;
    display: flex; flex-direction: column; justify-content: center; gap: 28px;
    padding: 0 88px; background: var(--brand); color: var(--paper);
  }
  .og h1 { font-family: var(--serif); font-weight: 400; font-size: 64px; line-height: 1.05; max-width: 900px; margin: 0; }
  .og p { font-size: 26px; font-weight: 700; margin: 0; }
  .og .eyebrow { font-size: 22px; font-weight: 400; opacity: 0.8; }
  .og--square h1 { font-size: 96px; }
  .og--square .lede, .og--story .lede { font-size: 40px; font-weight: 400; line-height: 1.3; max-width: 860px; }
  /* Stories: Instagram covers roughly the top and bottom 250px with its own
     controls, so keep everything inside the middle. */
  .og--story { padding: 260px 96px; justify-content: space-between; }
  .og--story h1 { font-size: 120px; }
</style></head>
<body>${body}</body></html>`;

const siteCard = (t) => shell(`<div class="og">
  <h1>${esc(t.hero_title)}</h1>
  <p>vickygonzalezmalave.netlify.app</p>
</div>`);

const postCard = (t, title) => shell(`<div class="og">
  <p class="eyebrow">${esc(t.blog_title)} · ${esc(t.meta_title)}</p>
  <h1>${esc(title)}</h1>
  <p>vickygonzalezmalave.netlify.app</p>
</div>`);

const squareCard = (t) => shell(`<div class="og og--square">
  <h1>${esc(t.hero_title)}</h1>
  <p class="lede">${esc(t.hero_lede)}</p>
  <p>vickygonzalezmalave.netlify.app</p>
</div>`);

const storyCard = (t) => shell(`<div class="og og--story">
  <h1>${esc(t.hero_title)}</h1>
  <p class="lede">${esc(t.hero_lede)}</p>
  <p>vickygonzalezmalave.netlify.app</p>
</div>`);

/** The title from a post's frontmatter; enough for a card, no YAML library. */
function postTitle(path) {
  const block = readFileSync(path, "utf8").match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
  const line = block.split("\n").find((l) => l.startsWith("title:")) ?? "";
  return line.slice("title:".length).trim().replace(/^(["'])(.*)\1$/, "$2");
}

const browser = await chromium.launch({ executablePath });
const tab = await browser.newPage({ viewport: { width: 1200, height: 630 } });

// Each card is written to a real file and opened from there: a page set with
// setContent() is about:blank, which Chromium won't let load the site's CSS
// from disk, so the card would silently render unstyled.
const scratch = join(root, "node_modules/.og-card.html");

async function shoot(html, out, width = 1200, height = 630) {
  mkdirSync(resolve(out, ".."), { recursive: true });
  await tab.setViewportSize({ width, height });
  writeFileSync(scratch, html);
  await tab.goto(pathToFileURL(scratch).href, { waitUntil: "networkidle" });
  await tab.screenshot({ path: out });
  console.log("wrote", out.slice(root.length + 1));
}

if (what === "all" || what === "site") {
  for (const lang of langs) {
    await shoot(siteCard(translations[lang]), join(root, `public/og/og-${lang}.png`));
  }
}

if (what === "all" || what === "posts") {
  for (const lang of langs) {
    const dir = join(root, "src/content/blog", lang);
    if (!existsSync(dir)) continue;
    for (const name of readdirSync(dir).filter((f) => f.endsWith(".md")).sort()) {
      const title = postTitle(join(dir, name));
      await shoot(postCard(translations[lang], title), join(root, `public/og/${lang}/${name.slice(0, -3)}.png`));
    }
  }
}

if (what === "all" || what === "social") {
  for (const lang of langs) {
    await shoot(squareCard(translations[lang]), join(root, `design/social/square-${lang}.png`), 1080, 1080);
    await shoot(storyCard(translations[lang]), join(root, `design/social/story-${lang}.png`), 1080, 1920);
  }
}

await browser.close();
rmSync(scratch, { force: true });
