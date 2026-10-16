export type Lang = "es" | "ca" | "en";

export const langs: Lang[] = ["es", "ca", "en"];

/** The language served at "/". English lives at /en/, Catalan at /ca/. */
export const ROOT_LANG: Lang = "es";

/** Builds the URL path for a page in a given language. ROOT_LANG lives at "/". */
export function langPath(lang: Lang, subpath = ""): string {
  const prefix = lang === ROOT_LANG ? "/" : `/${lang}/`;
  return subpath ? `${prefix}${subpath}/` : prefix;
}

type Item = { title: string; when: string };

/** Every string on the site. Add a key here first; TypeScript then flags any
 *  language that is missing it. */
export interface Translations {
  meta_title: string;
  meta_description: string;
  og_alt: string;
  /** Job title in the structured data for search engines. */
  person_job: string;
  lang_label: string;
  nav_main: string;
  nav: { id: string; label: string }[];
  speed_label: string;

  /** The kinetic intro, one line at a time. */
  intro_lines: string[];
  intro_skip: string;
  /** The settled headline. Parts with a tone get a colored block; br marks
   *  where the line breaks on phones (desktop lets it flow). */
  hero_parts: { text: string; tone?: "a" | "b" | "c"; br?: boolean }[];
  /** The same headline as plain text, for share cards. */
  hero_title: string;
  hero_lede: string;
  hero_me: string;
  hero_cta: string;
  hero_again: string;

  apps_title: string;
  apps_body: string;
  /** Label for the app picker shown when the phones don't all fit. */
  apps_pick: string;
  example_note: string;

  tt_line: string;
  tt_facts: string[];
  tt_cta: string;
  tt_hint: string;

  pc_line: string;
  pc_facts: string[];
  pc_cta: string;
  pc_play: string;
  pc_hint: string;

  /** The back of each phone: how it's made. */
  flip_open: string;
  flip_close: string;
  back_title: string;
  tt_back: string[];
  pc_back: string[];
  pk_back: string[];
  pk_back_end: string[];
  pk_chart_title: string;
  pk_chart_note: string;
  /** Short month names, September first: the school year. */
  months_school: string[];

  pk_status: string;
  pk_line: string;
  pk_hint: string;

  ts_status: string;
  ts_line: string;
  ts_facts: string[];
  ts_hint: string;
  ts_back: string[];
  pk_free_of: string;
  pk_refresh: string;
  pk_note: string;

  stack_label: string;

  tl_title: string;
  tl_body: string;
  tl_date: string;
  tl_play: string;
  tl_pause: string;
  /** End of a range that is still going. */
  tl_today: string;
  /** "{n}" is replaced with the number. */
  tl_count_one: string;
  tl_count_many: string;
  tl_kinds: { study: string; work: string; app: string; life: string };

  now_title: string;
  now_before_title: string;
  now_yo_title: string;
  now: Item[];
  now_before: Item[];

  off_eyebrow: string;
  off_title: string;
  off_family: string;
  off_sports: string[];
  photo_alt: string;

  contact_title: string;
  contact_body: string;
  copy_email: string;
  copied: string;
  selected: string;

  /** Blog index heading, its meta description, and the link back to it from a post. */
  blog_title: string;
  blog_description: string;
  blog_back: string;

  notfound: string;
  notfound_link: string;
}

// Section ids are shared by all three languages so a link like /ca/#contacto
// works everywhere. They're picked in Spanish.
export const translations: Record<Lang, Translations> = {
  es: {
    meta_title: "Victoria González Malavé · Desarrolladora iOS y Android",
    meta_description: "Desarrolladora iOS y Android en Barcelona. Sus apps TermoTrendy y PassCat ya están publicadas.",
    og_alt: "Victoria González Malavé, desarrolladora iOS y Android",
    person_job: "Desarrolladora iOS y Android",
    lang_label: "Idioma",
    nav_main: "Principal",
    nav: [
      { id: "apps", label: "Apps" },
      { id: "ahora", label: "Ahora" },
      { id: "contacto", label: "Contacto" },
    ],
    speed_label: "Velocidad de las animaciones",

    intro_lines: ["¡Hola!", "Hi!", "Soy Victoria.", "Hablo rápido.", "Programo igual.", "Desarrollo apps", "para iPhone", "y Android.", "Dos ya están", "publicadas.", "¿Te las enseño?"],
    intro_skip: "Saltar",
    hero_parts: [
      { text: "¡Hola!", tone: "a", br: true },
      { text: "Soy Victoria,", br: true },
      { text: "hablo rápido", tone: "b" },
      { text: "y", br: true },
      { text: "creo apps.", tone: "c" },
    ],
    hero_title: "¡Hola! Soy Victoria, hablo rápido y creo apps.",
    hero_lede: "Desarrolladora iOS y Android en Barcelona. TermoTrendy y PassCat ya están publicadas.",
    hero_me: "Arquitecta de software junior en NTT DATA. Tech lead en two.zero.",
    hero_cta: "Ver mis apps",
    hero_again: "Otra vez",

    apps_title: "Tócalas. Son mis <em>apps.</em>",
    apps_body: "Cuatro apps mías, rehechas para esta página. Venga, pulsa los botones.",
    apps_pick: "Elige una app",
    example_note: "Pantalla de ejemplo, recreada para esta web",

    tt_line: "Subes tu ropa. Mira dónde estás y qué tiempo hace. Te arma el outfit. Hecha en solitario con SwiftUI.",
    tt_facts: ["App Store · ene. 2026", "Gratis", "iOS 17.5+"],
    tt_cta: "Descargar TermoTrendy",
    tt_hint: "Inicio y tiempo copiados de la app real. Pulsa Crear Outfit.",

    pc_line: "Un juego para descubrir la cultura catalana con retos reales: subir a Montserrat, ir a una festa major, comer calçots. Cada reto suma puntos hasta el Passaport Català. Hecha con FlutterFlow.",
    pc_facts: ["iOS y Android", "feb. 2026", "Gratis"],
    pc_cta: "Descargar PassCat",
    pc_play: "Google Play",
    pc_hint: "Pantallas copiadas de la app real. Toca las pestañas y los filtros.",

    flip_open: "¿Cómo está hecha?",
    flip_close: "Volver a la app",
    back_title: "Por dentro",
    tt_back: [
      "Hecha en solitario con SwiftUI.",
      "Sin servidor: tu armario y tus fotos se quedan en tu iPhone.",
      "La ubicación solo se usa en el momento para mirar el tiempo. No se guarda.",
      "Sin cuentas ni analytics.",
      "En el App Store desde el 14 de enero de 2026.",
    ],
    pc_back: [
      "FlutterFlow y Flutter: una sola base para iPhone y Android.",
      "Firebase: cuentas (también con Google), base de datos, fotos, notificaciones push y funciones en la nube.",
      "Un test de 8 preguntas decide si la app te habla en modo catalán o en modo aprendiz.",
      "Los retos los validan otros usuarios, y hay un panel de administración para revisarlos.",
      "Cinco niveles, de Nouvingut a Mestre, hasta los 1979 puntos del Passaport.",
    ],
    pk_back: [
      "75 plazas que se llenan por la mañana y otra vez por la tarde: al menos 150 conductores al día.",
    ],
    pk_back_end: [
      "No se sabe cuántos llevan iPhone y cuántos Android, así que hace falta una app para cada sistema.",
      "Pensada en SwiftUI. Ahora, en pausa.",
    ],
    pk_chart_title: "Coches al mes",
    pk_chart_note: "Aproximado, de su documento del proyecto. Solo días de clase.",
    months_school: ["sep", "oct", "nov", "dic", "ene", "feb", "mar", "abr", "may", "jun", "jul", "ago"],

    pk_status: "En pausa",
    pk_line: "El párquing del campus UPC de Terrassa se llena todos los días de clase. PK UPC te dice si hay sitio antes de subirte al coche.",
    pk_hint: "Un concepto de la pantalla. Pulsa Actualizar.",

    ts_status: "Próximamente",
    ts_line: "Voluntariado para ayudar psicológicamente a los afectados por el terremoto de Venezuela.",
    ts_facts: ["Voluntariado", "iOS y Android", "2026"],
    ts_hint: "La UI es una sorpresa. Próximamente en el App Store y Google Play.",
    ts_back: [
      "Proyecto de voluntariado de emergencia tras el terremoto de Venezuela.",
      "App de apoyo psicológico para personas afectadas por el desastre.",
      "Desarrollada con Flutter para llegar a iOS y Android.",
    ],
    pk_free_of: "libres de 75",
    pk_refresh: "Actualizar",
    pk_note: "Concepto y datos de demo",

    stack_label: "Lenguajes y herramientas",

    tl_title: "Cómo he llegado aquí",
    tl_body: "Arrastra por los años. Casi siempre hay varias cosas a la vez.",
    tl_date: "Fecha",
    tl_play: "Reproducir",
    tl_pause: "Pausa",
    tl_today: "hoy",
    tl_count_one: "1 cosa",
    tl_count_many: "{n} cosas a la vez",
    tl_kinds: { study: "Estudios", work: "Trabajo", app: "Apps", life: "Fuera de la pantalla" },

    now_title: "Ahora",
    now_before_title: "Antes",
    now_yo_title: "Yo",
    now: [
      { title: "Arquitecta de software junior, NTT DATA", when: "Desde octubre de 2026" },
      { title: "Bachelor, Epitech", when: "Ingeniería de software, 2024-2027" },
    ],
    now_before: [
      { title: "FlutterFlow y tech lead, two.zero", when: "Sep 2025 – Sep 2026" },
      { title: "Asistente docente y hub manager, Epitech", when: "Mar – Jun 2026" },
      { title: "Prácticas fullstack, Inmatic", when: "Jun – Dic 2025" },
      { title: "Sistemas informáticos, campus de Terrassa", when: "Dic 2023 – May 2024" },
    ],

    off_eyebrow: "Fuera de la pantalla",
    off_title: "La familia, y la montaña.",
    off_family: "Familia de origen venezolano y gallego. Entre arepas y membrillo, siempre he comido muy rico.",
    off_sports: ["Escalada 6c", "Ferratas K5", "Barranquismo", "Rafting", "Snowboard"],
    photo_alt: "Victoria González Malavé",

    contact_title: "¿Hacemos algo?",
    contact_body: "Una app, un trabajo, un proyecto, una pregunta rápida. Lo que sea.",
    copy_email: "Copiar email",
    copied: "Copiado. ¡Hablamos!",
    selected: "Seleccionado. Cópialo con el teclado.",

    blog_title: "Blog",
    blog_description: "Artículos de Victoria González Malavé.",
    blog_back: "Todos los artículos",
    notfound: "Esta página no existe.",
    notfound_link: "Volver al inicio",
  },
  en: {
    meta_title: "Victoria González Malavé · iOS and Android developer",
    meta_description: "iOS and Android developer in Barcelona. Her apps TermoTrendy and PassCat are already out.",
    og_alt: "Victoria González Malavé, iOS and Android developer",
    person_job: "iOS and Android developer",
    lang_label: "Language",
    nav_main: "Main",
    nav: [
      { id: "apps", label: "Apps" },
      { id: "ahora", label: "Now" },
      { id: "contacto", label: "Contact" },
    ],
    speed_label: "Animation speed",

    intro_lines: ["Hi!", "¡Hola!", "I'm Victoria.", "I talk fast.", "I code the same way.", "I develop apps", "for iPhone", "and Android.", "Two are", "already out.", "Want to see them?"],
    intro_skip: "Skip",
    hero_parts: [
      { text: "Hi!", tone: "a", br: true },
      { text: "I'm Victoria,", br: true },
      { text: "I talk fast", tone: "b" },
      { text: "and", br: true },
      { text: "build apps.", tone: "c" },
    ],
    hero_title: "Hi! I'm Victoria, I talk fast and build apps.",
    hero_lede: "iOS and Android developer in Barcelona. TermoTrendy and PassCat are already out.",
    hero_me: "Junior software architect at NTT DATA. Tech lead at two.zero.",
    hero_cta: "See my apps",
    hero_again: "Say it again",

    apps_title: "Tap them. They're my <em>apps.</em>",
    apps_body: "Four of my apps, remade for this page. Go on, press the buttons.",
    apps_pick: "Pick an app",
    example_note: "Example screen, recreated for this page",

    tt_line: "You add your clothes. It checks where you are and the weather. It puts the outfit together. Made solo in SwiftUI.",
    tt_facts: ["App Store · Jan 2026", "Free", "iOS 17.5+"],
    tt_cta: "Download TermoTrendy",
    tt_hint: "Home and weather copied from the real app. Tap Crear Outfit.",

    pc_line: "A game for discovering Catalan culture through real challenges: climb Montserrat, go to a festa major, eat calçots. Every challenge adds points toward the Passaport Català. Made in FlutterFlow.",
    pc_facts: ["iOS and Android", "Feb 2026", "Free"],
    pc_cta: "Download PassCat",
    pc_play: "Google Play",
    pc_hint: "Screens copied from the real app. Tap the tabs and the filters.",

    flip_open: "How is it made?",
    flip_close: "Back to the app",
    back_title: "Inside",
    tt_back: [
      "Made solo in SwiftUI.",
      "No server: your closet and photos stay on your iPhone.",
      "Location is only used in the moment to check the weather. It isn't stored.",
      "No accounts, no analytics.",
      "On the App Store since January 14, 2026.",
    ],
    pc_back: [
      "FlutterFlow and Flutter: one codebase for iPhone and Android.",
      "Firebase: accounts (Google sign-in too), database, photos, push notifications and cloud functions.",
      "An 8-question quiz decides whether the app talks to you in Catalan mode or learner mode.",
      "Other users validate each challenge, and there's an admin panel to review them.",
      "Five levels, from Nouvingut to Mestre, up to the Passaport at 1979 points.",
    ],
    pk_back: [
      "75 spaces that fill up in the morning and again in the afternoon: at least 150 drivers a day.",
    ],
    pk_back_end: [
      "Nobody knows how many drive with an iPhone and how many with Android, so it needs an app for each.",
      "Planned in SwiftUI. On hold for now.",
    ],
    pk_chart_title: "Cars per month",
    pk_chart_note: "Approximate, from her project document. Class days only.",
    months_school: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],

    pk_status: "On hold",
    pk_line: "The lot at the UPC Terrassa campus fills up every class day. PK UPC tells you if there's a space before you get in the car.",
    pk_hint: "A concept of the screen. Tap Refresh.",
    pk_free_of: "free of 75",
    pk_refresh: "Refresh",
    pk_note: "Concept and demo data",

    ts_status: "Coming soon",
    ts_line: "A volunteer project to provide psychological support to those affected by the Venezuela earthquake.",
    ts_facts: ["Volunteer", "iOS & Android", "2026"],
    ts_hint: "The UI is a surprise. Coming soon to the App Store and Google Play.",
    ts_back: [
      "Emergency volunteer work after the Venezuela earthquake.",
      "App for psychological support for those affected by the disaster.",
      "Built with Flutter for iOS and Android.",
    ],

    stack_label: "Languages and tools",

    tl_title: "How I got here",
    tl_body: "Drag through the years. There's almost always more than one thing going on.",
    tl_date: "Date",
    tl_play: "Play",
    tl_pause: "Pause",
    tl_today: "now",
    tl_count_one: "1 thing",
    tl_count_many: "{n} things at once",
    tl_kinds: { study: "Study", work: "Work", app: "Apps", life: "Off the screen" },

    now_title: "Now",
    now_before_title: "Before",
    now_yo_title: "Me",
    now: [
      { title: "Junior software architect, NTT DATA", when: "Since October 2026" },
      { title: "Bachelor, Epitech", when: "Software engineering, 2024-2027" },
    ],
    now_before: [
      { title: "FlutterFlow and tech lead, two.zero", when: "Sep 2025 – Sep 2026" },
      { title: "Teaching assistant and hub manager, Epitech", when: "Mar – Jun 2026" },
      { title: "Fullstack intern, Inmatic", when: "Jun – Dec 2025" },
      { title: "IT systems, UPC Terrassa campus", when: "Dec 2023 – May 2024" },
    ],

    off_eyebrow: "Off the screen",
    off_title: "Family, and the mountains.",
    off_family: "Venezuelan and Galician roots. Between arepas and membrillo, I've always eaten very well.",
    off_sports: ["Climbing 6c", "Via ferrata K5", "Canyoning", "Rafting", "Snowboard"],
    photo_alt: "Victoria González Malavé",

    contact_title: "Shall we make something?",
    contact_body: "An app, a job, a project, a quick question. Anything goes.",
    copy_email: "Copy email",
    copied: "Copied. Talk soon!",
    selected: "Selected. Copy it with your keyboard.",

    blog_title: "Blog",
    blog_description: "Posts from Victoria González Malavé.",
    blog_back: "All posts",
    notfound: "This page doesn't exist.",
    notfound_link: "Back to the home page",
  },
  ca: {
    meta_title: "Victoria González Malavé · Desenvolupadora iOS i Android",
    meta_description: "Desenvolupadora iOS i Android a Barcelona. Les seves apps TermoTrendy i PassCat ja estan publicades.",
    og_alt: "Victoria González Malavé, desenvolupadora iOS i Android",
    person_job: "Desenvolupadora iOS i Android",
    lang_label: "Idioma",
    nav_main: "Principal",
    nav: [
      { id: "apps", label: "Apps" },
      { id: "ahora", label: "Ara" },
      { id: "contacto", label: "Contacte" },
    ],
    speed_label: "Velocitat de les animacions",

    intro_lines: ["Hola!", "Hi!", "Soc la Victoria.", "Parlo ràpid.", "Programo igual.", "Desenvolupo apps", "per a iPhone", "i Android.", "Dues ja estan", "publicades.", "Te les ensenyo?"],
    intro_skip: "Omet",
    hero_parts: [
      { text: "Hola!", tone: "a", br: true },
      { text: "Soc la Victoria,", br: true },
      { text: "parlo ràpid", tone: "b" },
      { text: "i", br: true },
      { text: "creo apps.", tone: "c" },
    ],
    hero_title: "Hola! Soc la Victoria, parlo ràpid i creo apps.",
    hero_lede: "Desenvolupadora iOS i Android a Barcelona. TermoTrendy i PassCat ja estan publicades.",
    hero_me: "Arquitecta de programari júnior a NTT DATA. Tech lead a two.zero.",
    hero_cta: "Mira les meves apps",
    hero_again: "Un altre cop",

    apps_title: "Toca-les. Són les meves <em>apps.</em>",
    apps_body: "Quatre apps meves, refetes per a aquesta pàgina. Va, prem els botons.",
    apps_pick: "Tria una app",
    example_note: "Pantalla d'exemple, recreada per a aquest web",

    tt_line: "Puges la teva roba. Mira on ets i quin temps fa. Et munta l'outfit. Feta en solitari amb SwiftUI.",
    tt_facts: ["App Store · gen. 2026", "Gratuïta", "iOS 17.5+"],
    tt_cta: "Descarrega TermoTrendy",
    tt_hint: "Inici i temps copiats de l'app real. Prem Crear Outfit.",

    pc_line: "Un joc per descobrir la cultura catalana amb reptes reals: pujar a Montserrat, anar a una festa major, menjar calçots. Cada repte suma punts fins al Passaport Català. Feta amb FlutterFlow.",
    pc_facts: ["iOS i Android", "febr. 2026", "Gratuïta"],
    pc_cta: "Descarrega PassCat",
    pc_play: "Google Play",
    pc_hint: "Pantalles copiades de l'app real. Toca les pestanyes i els filtres.",

    flip_open: "Com està feta?",
    flip_close: "Torna a l'app",
    back_title: "Per dins",
    tt_back: [
      "Feta en solitari amb SwiftUI.",
      "Sense servidor: el teu armari i les teves fotos es queden al teu iPhone.",
      "La ubicació només s'usa al moment per mirar el temps. No es guarda.",
      "Sense comptes ni analytics.",
      "A l'App Store des del 14 de gener de 2026.",
    ],
    pc_back: [
      "FlutterFlow i Flutter: una sola base per a iPhone i Android.",
      "Firebase: comptes (també amb Google), base de dades, fotos, notificacions push i funcions al núvol.",
      "Un test de 8 preguntes decideix si l'app et parla en mode català o en mode aprenent.",
      "Els reptes els validen altres usuaris, i hi ha un panell d'administració per revisar-los.",
      "Cinc nivells, de Nouvingut a Mestre, fins als 1979 punts del Passaport.",
    ],
    pk_back: [
      "75 places que s'omplen al matí i un altre cop a la tarda: com a mínim 150 conductors al dia.",
    ],
    pk_back_end: [
      "No se sap quants porten iPhone i quants Android, així que cal una app per a cada sistema.",
      "Pensada en SwiftUI. Ara, en pausa.",
    ],
    pk_chart_title: "Cotxes al mes",
    pk_chart_note: "Aproximat, del seu document del projecte. Només dies de classe.",
    months_school: ["set", "oct", "nov", "des", "gen", "febr", "març", "abr", "maig", "juny", "jul", "ag"],

    pk_status: "En pausa",
    pk_line: "L'aparcament del campus de la UPC a Terrassa s'omple cada dia de classe. PK UPC et diu si hi ha lloc abans de pujar al cotxe.",
    pk_hint: "Un concepte de la pantalla. Prem Actualitza.",
    pk_free_of: "lliures de 75",
    pk_refresh: "Actualitza",
    pk_note: "Concepte i dades de demo",

    ts_status: "Pròximament",
    ts_line: "Voluntariat per ajudar psicològicament els afectats pel terratrèmol de Veneçuela.",
    ts_facts: ["Voluntariat", "iOS i Android", "2026"],
    ts_hint: "La UI és una sorpresa. Pròximament a l'App Store i Google Play.",
    ts_back: [
      "Projecte de voluntariat d'emergència després del terratrèmol de Veneçuela.",
      "App de suport psicològic per a persones afectades pel desastre.",
      "Desenvolupada amb Flutter per a iOS i Android.",
    ],

    stack_label: "Llenguatges i eines",

    tl_title: "Com he arribat fins aquí",
    tl_body: "Arrossega pels anys. Gairebé sempre hi ha diverses coses alhora.",
    tl_date: "Data",
    tl_play: "Reprodueix",
    tl_pause: "Pausa",
    tl_today: "avui",
    tl_count_one: "1 cosa",
    tl_count_many: "{n} coses alhora",
    tl_kinds: { study: "Estudis", work: "Feina", app: "Apps", life: "Fora de la pantalla" },

    now_title: "Ara",
    now_before_title: "Abans",
    now_yo_title: "Jo",
    now: [
      { title: "Arquitecta de programari júnior, NTT DATA", when: "Des d'octubre de 2026" },
      { title: "Bachelor, Epitech", when: "Enginyeria de programari, 2024-2027" },
    ],
    now_before: [
      { title: "FlutterFlow i tech lead, two.zero", when: "Set 2025 – Set 2026" },
      { title: "Assistent docent i hub manager, Epitech", when: "Mar – Jun 2026" },
      { title: "Pràctiques fullstack, Inmatic", when: "Jun – Des 2025" },
      { title: "Sistemes informàtics, campus de Terrassa", when: "Des 2023 – Mai 2024" },
    ],

    off_eyebrow: "Fora de la pantalla",
    off_title: "La família, i la muntanya.",
    off_family: "Família d'origen veneçolà i gallec. Entre arepas i codony, sempre he menjat molt bé.",
    off_sports: ["Escalada 6c", "Vies ferrades K5", "Barranquisme", "Ràfting", "Snowboard"],
    photo_alt: "Victoria González Malavé",

    contact_title: "Fem alguna cosa?",
    contact_body: "Una app, una feina, un projecte, una pregunta ràpida. El que sigui.",
    copy_email: "Copia l'email",
    copied: "Copiat. Parlem!",
    selected: "Seleccionat. Copia'l amb el teclat.",

    blog_title: "Blog",
    blog_description: "Articles de Victoria González Malavé.",
    blog_back: "Tots els articles",
    notfound: "Aquesta pàgina no existeix.",
    notfound_link: "Torna a l'inici",
  },
};
