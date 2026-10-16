export type Lang = "es" | "gl" | "en";

export const langs: Lang[] = ["es", "gl", "en"];

/** The language served at "/". The other two get /gl/, /en/ and so on. */
export const ROOT_LANG: Lang = "es";

/** Builds the URL path for a page in a given language. ROOT_LANG lives at "/". */
export function langPath(lang: Lang, subpath = ""): string {
  const prefix = lang === ROOT_LANG ? "/" : `/${lang}/`;
  return subpath ? `${prefix}${subpath}/` : prefix;
}

/** Every string on the site. Add a key here first; TypeScript then flags any
 *  language that is missing it. */
export interface Translations {
  meta_title: string;
  meta_description: string;
  og_alt: string;
  lang_label: string;
  nav_main: string;
  nav: { id: string; label: string }[];

  hero_title: string;
  hero_lede: string;

  contact_title: string;
  contact_body: string;

  /** Blog index heading, its meta description, and the link back to it from a post. */
  blog_title: string;
  blog_description: string;
  blog_back: string;

  notfound: string;
  notfound_link: string;
}

// Section ids are shared by all three languages so a link like /gl/#contacto
// works everywhere. Pick them in the root language.
export const translations: Record<Lang, Translations> = {
  es: {
    meta_title: "Victoria González Malavé",
    meta_description: "__TODO__",
    og_alt: "Victoria González Malavé",
    lang_label: "Idioma",
    nav_main: "Principal",
    nav: [{ id: "contacto", label: "Contacto" }],
    hero_title: "Victoria González Malavé",
    hero_lede: "__TODO__",
    contact_title: "¿Hablamos?",
    contact_body: "__TODO__",
    blog_title: "Blog",
    blog_description: "Artículos de Victoria González Malavé.",
    blog_back: "Todos los artículos",
    notfound: "Esta página no existe.",
    notfound_link: "Volver al inicio",
  },
  gl: {
    meta_title: "Victoria González Malavé",
    meta_description: "__TODO__",
    og_alt: "Victoria González Malavé",
    lang_label: "Lingua",
    nav_main: "Principal",
    nav: [{ id: "contacto", label: "Contacto" }],
    hero_title: "Victoria González Malavé",
    hero_lede: "__TODO__",
    contact_title: "Falamos?",
    contact_body: "__TODO__",
    blog_title: "Blog",
    blog_description: "Artigos de Victoria González Malavé.",
    blog_back: "Todos os artigos",
    notfound: "Esta páxina non existe.",
    notfound_link: "Volver ao inicio",
  },
  en: {
    meta_title: "Victoria González Malavé",
    meta_description: "__TODO__",
    og_alt: "Victoria González Malavé",
    lang_label: "Language",
    nav_main: "Main",
    nav: [{ id: "contacto", label: "Contact" }],
    hero_title: "Victoria González Malavé",
    hero_lede: "__TODO__",
    contact_title: "Let's talk",
    contact_body: "__TODO__",
    blog_title: "Blog",
    blog_description: "Posts from Victoria González Malavé.",
    blog_back: "All posts",
    notfound: "This page doesn't exist.",
    notfound_link: "Back to the home page",
  },
};
