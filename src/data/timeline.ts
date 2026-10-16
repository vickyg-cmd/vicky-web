import type { Lang } from "../i18n/translations";

export type Kind = "study" | "work" | "app" | "life";

export interface Event {
  /** "YYYY-MM". A launch has no end. */
  start: string;
  /** "YYYY-MM", or "now" for things still going. Leave out for a one-month event. */
  end?: string;
  kind: Kind;
  title: Record<Lang, string>;
}

/** The scrubber runs from FIRST to NOW, one step per month. */
export const FIRST = "2021-01";
export const NOW = "2026-10";

// From her LinkedIn (Profile.pdf), her Wix site and the App Store. Where a
// source only gives a year, the month is a guess: January for the castellers,
// September for the start of a school year. Ask Victoria to check those.
export const events: Event[] = [
  {
    start: "2021-01",
    end: "2022-12",
    kind: "life",
    title: { es: "Crossa con los Castellers de Sarrià", ca: "Crossa amb els Castellers de Sarrià", en: "Crossa with the Castellers de Sarrià" },
  },
  {
    start: "2022-01",
    end: "2025-12",
    kind: "work",
    title: { es: "Clases de ciencias", ca: "Classes de ciències", en: "Science tutoring" },
  },
  {
    start: "2022-09",
    end: "2024-06",
    kind: "study",
    title: { es: "Estudios en la UPC", ca: "Estudis a la UPC", en: "Studying at UPC" },
  },
  {
    start: "2023-12",
    end: "2024-05",
    kind: "work",
    title: { es: "Prácticas en servicios TIC, UPC Terrassa", ca: "Pràctiques als serveis TIC, UPC Terrassa", en: "IT services intern, UPC Terrassa" },
  },
  {
    start: "2024-02",
    end: "now",
    kind: "app",
    title: { es: "Desarrolladora iOS por mi cuenta", ca: "Desenvolupadora iOS pel meu compte", en: "Indie iOS developer" },
  },
  {
    start: "2024-08",
    kind: "study",
    title: { es: "Un mes estudiando SwiftUI en Nueva York", ca: "Un mes estudiant SwiftUI a Nova York", en: "A month studying SwiftUI in New York" },
  },
  {
    start: "2024-09",
    end: "now",
    kind: "study",
    title: { es: "Bachelor + Máster en Epitech", ca: "Bachelor + Màster a Epitech", en: "Bachelor + Master at Epitech" },
  },
  {
    start: "2025-06",
    end: "2025-12",
    kind: "work",
    title: { es: "Prácticas fullstack en Inmatic", ca: "Pràctiques fullstack a Inmatic", en: "Fullstack intern at Inmatic" },
  },
  {
    start: "2025-09",
    end: "now",
    kind: "work",
    title: { es: "FlutterFlow y tech lead en two.zero", ca: "FlutterFlow i tech lead a two.zero", en: "FlutterFlow and tech lead at two.zero" },
  },
  {
    start: "2026-01",
    kind: "app",
    title: { es: "TermoTrendy sale en el App Store", ca: "TermoTrendy surt a l'App Store", en: "TermoTrendy goes live on the App Store" },
  },
  {
    start: "2026-02",
    kind: "app",
    title: { es: "PassCat sale en el App Store y Google Play", ca: "PassCat surt a l'App Store i Google Play", en: "PassCat goes live on the App Store and Google Play" },
  },
  {
    start: "2026-03",
    end: "2026-06",
    kind: "work",
    title: { es: "Asistente docente y hub manager en Epitech", ca: "Assistent docent i hub manager a Epitech", en: "Teaching assistant and hub manager at Epitech" },
  },
  {
    start: "2026-10",
    end: "now",
    kind: "work",
    title: { es: "Arquitecta de software junior en NTT DATA", ca: "Arquitecta de programari júnior a NTT DATA", en: "Junior software architect at NTT DATA" },
  },
];

/** Months since FIRST: "2021-01" → 0. */
export function monthIndex(ym: string): number {
  const [y, m] = (ym === "now" ? NOW : ym).split("-").map(Number);
  const [fy, fm] = FIRST.split("-").map(Number);
  return (y - fy) * 12 + (m - fm);
}
