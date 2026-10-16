import { existsSync } from "node:fs";
import { join } from "node:path";
import { getCollection, type CollectionEntry } from "astro:content";
import { langs, type Lang } from "../i18n/translations";

export type Post = CollectionEntry<"blog">;

/** "gl/some-post" -> "gl" and "some-post". */
export const postLang = (post: Post) => post.id.split("/")[0] as Lang;
export const postSlug = (post: Post) => post.id.split("/").slice(1).join("/");

/** Published posts in one language, newest first. Drafts show in dev only. */
export async function getPosts(lang: Lang): Promise<Post[]> {
  const posts = await getCollection(
    "blog",
    (p) => postLang(p) === lang && (import.meta.env.DEV || !p.data.draft),
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** The languages a post exists in, for hreflang and the language switcher. */
export async function postLangs(slug: string): Promise<Lang[]> {
  const found = await Promise.all(langs.map(async (l) => (await getPosts(l)).some((p) => postSlug(p) === slug)));
  return langs.filter((_, i) => found[i]);
}

/** The languages with at least one post. The blog index only exists for these. */
export async function blogLangs(): Promise<Lang[]> {
  const counts = await Promise.all(langs.map(async (l) => (await getPosts(l)).length));
  return langs.filter((_, i) => counts[i] > 0);
}

/**
 * The post's own share card, from `npm run og`. That runs by hand, not on
 * Netlify, so a post published before its card exists falls back to the
 * language's site card instead of pointing at a missing image.
 */
export function postCard(lang: Lang, slug: string): string | undefined {
  const path = `/og/${lang}/${slug}.png`;
  return existsSync(join(process.cwd(), "public", path)) ? path : undefined;
}

const locales: Record<Lang, string> = { es: "es-ES", gl: "gl-ES", en: "en-US" };
export const formatDate = (date: Date, lang: Lang) =>
  new Intl.DateTimeFormat(locales[lang], { day: "numeric", month: "long", year: "numeric" }).format(date);
