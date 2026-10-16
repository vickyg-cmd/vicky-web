# Victoria González Malavé: portfolio ideas

Design exploration for Victoria's portfolio site. It will replace her Wix site (vickygonzalezmalave.wixsite.com/victoria-gonzalez-ma). Gallery with every variant: https://claude.ai/artifact/QGnM8SyCSXPsyihstVLWWi (private). Variant files are in `design/variants/`.

**Status (2026-10-16):** Building. The site is a cross of #6 and #7: #6's kinetic hero (speed control now one cycling button, like a voice note) and #7's working phones on a yellow stage. Languages are ES at the root, `/en/` and `/ca/` (Catalan added at Jimmy's request). Victoria sent her palette; the tokens are in `src/styles/global.css`. More apps from her are on the way: each one is a phone component in `src/components/apps/`. PassCat (Passaport Català, her FlutterFlow app, live on the App Store since 2026-02-27 and on Google Play; source at github.com/vickyg-cmd/passcat-app, private) was added as the third phone, copied from its App Store screenshots. Below 1100px the apps section shows one phone at a time, with a segmented picker that stays in step with swiping. Each phone also flips over ("¿Cómo está hecha?") to a back with notes on how the app is made: TermoTrendy's from its privacy policy, PassCat's from its repo, and PK UPC's from her project doc, including a monthly demand chart. The "Antes" list became a timeline you can drag from 2021 to now, in `src/data/timeline.ts`. Some of its months are guesses because the sources only give a year; Victoria should check them.

## Brief

- **Purpose:** a portfolio for a junior mobile developer. Main path: open TermoTrendy on the App Store, then GitHub, then email. A quieter line for freelance work. She's employed, but on what is probably an extended internship, so the site serves both.
- **Languages:** Spanish at the root, English at `/en/`. No Galician.
- **Who she is (Jimmy's words):** quick, very positive, talks fast, likes her family.
- **Spread:** wide. "Make it interesting."
- **Reference:** variant.com (from Jimmy, round 2). What carried over is the standard of craft: every piece is a finished, tactile UI element that actually works, not a sketch of an idea. Only #8 copies its layout.

## Real material

Everything on the pages comes from these sources. Nothing else is invented, except the placeholders and the examples marked below.

- **LinkedIn PDF** (`vicky-web/Profile.pdf`):
  - **Now:** junior software architect at NTT DATA (Oct 2026 to now). FlutterFlow developer and tech lead at two.zero, Sant Cugat (Sept 2025 to now).
  - **Before:** indie iOS developer since Feb 2024. Epitech teaching assistant (ASTEK) and hub manager (Mar to Jun 2026). Fullstack intern at Inmatic (Jun to Dec 2025). IT services intern at the UPC Terrassa campus (Dec 2023 to May 2024). Science tutoring (2022 to 2025). A month of SwiftUI study in New York, CodeWithChris online course (Aug 2024).
  - **Education:** Epitech Bachelor + Master in Software Engineering (2024 to 2027). UPC (2022 to 2024).
  - **Online:** Bluesky `vickythedev.bsky.social`.
- **TermoTrendy** (App Store id6757545419): free, v1.0, released 14 Jan 2026, iOS 17.5+, Lifestyle category. Picks the day's outfit from your own closet based on location and weather. Solo project in SwiftUI. The icon and two screenshots are in `variants/img/`.
- **PK UPC:** a SwiftUI app, on hold. It shows free spaces in the 75-space Rambla Sant Nebridi lot at the UPC Terrassa campus. Her own project doc estimates at least 150 interested drivers a day. Its screenshot is in `design/source/pk-orig.jpg`.
- **Epitech projects:** `my_printf` (C, team), `my_hunter` (C, a Mario Wonder game), `101pong` (Python, team). GitHub: `vickyg-cmd`.
- **Wix site:**
  - Her greeting "Hi! Hola!", and her old CV link behind a click on Mario.
  - Skills: C, C++, Swift, Python, Xcode, Godot 4, VHDL.
  - Sports with levels: gym climbing 6c, via ferrata K5, canyoning, rafting, snowboard, crossa with Castellers de Sarrià (2021 to 2022), federated rhythmic gymnastics and artistic skating.
  - Volunteering.
- **Photo:** her portrait from the Wix home page, `variants/img/vicky.jpg`. Jimmy OK'd it for the exploration.

## Round 1 (rejected)

Each variant hung on a metaphor taken from her CV. Jimmy's verdict: too many gimmicks, too flat, not her, and not mobile-dev enough. All four counts at once.

1. **Croquis:** projects drawn as routes on a climbing topo, graded on the French scale with her 6c gym ceiling as the cap.
2. **¿Qué me pongo?:** a toy TermoTrendy reads Barcelona's live weather (Open-Meteo) and recolors the page.
3. **Victoria 3.0:** her career as an app's release notes, filtered with `:has()`.
4. **Castell:** the page builds a castell from the base up as you scroll.

Lesson: don't build a personality out of a sports list. Lead with the apps and let her come through in tone, color and pace.

## Round 2

### 5. Desliza (sent to Victoria)

- **Shape:** a swipe deck, like an app's onboarding. Story-style progress bars, arrow buttons, keyboard arrows, and the mouse wheel moves it sideways on desktop.
- **Cards:** hello, TermoTrendy, how it works (add clothes, check the weather, make the outfit), PK UPC with a 75-space lot drawing, now, off the screen, contact with a copy button.
- **Look:** Unbounded + Onest. One saturated card at a time: TermoTrendy's pink, sky, green and yellow, plus the lilac of her blazer.
- **Fit:** the most phone-native shape, and every card is short. Risk: desktop visitors have to flick sideways too.
- **Astro notes:** each card is a component; CSS scroll-snap, a small script for the progress bars, and `animation-timeline: view(inline)` behind `@supports`.

### 6. A toda velocidad (sent to Victoria)

- **Shape:** a kinetic intro, then a bright long page. Her intro flicks past one line at a time on changing colors ("¡Hola!", "Hi!", "Soy Victoria.", "Hablo rápido.", "Programo igual."…). A voice-note speed pill (1×, 1.5×, 2×) sets the pace of every animation on the page. It ends on a settled hero with "Otra vez" to replay.
- **Sections:** TermoTrendy with tilted screenshots; PK UPC, whose lot fills space by space when it scrolls into view (a labeled demo); a ticker of her stack; now; off the screen; contact.
- **Look:** Bricolage Grotesque only, pushed hard on width and weight. Lilac, tomato, sun yellow, sky.
- **Fit:** the most her, going by Jimmy's description. Risk: the motion is the personality, so with reduced motion it becomes a plain bright page.

### 7. Tócalas (sent to Victoria)

- **Shape:** tool first. Two working phones on a loud yellow stage, built in HTML/CSS, not screenshots.
- **TermoTrendy phone:** home and weather screens copied from the real app, with an iOS-style navigation stack (push and back). The outfit and closet screens are recreated examples, labeled on screen.
- **PK UPC phone:** a concept screen with a ring gauge and a 75-space grid. "Actualizar" deals a new demo morning. Labeled as concept and demo data.
- **Below:** Now / Before / Me in three columns on black, then a big email with a copy button.
- **Look:** Schibsted Grotesk for the page, rounded type inside the phones to match iOS. Black on yellow.
- **Fit:** the strongest proof she makes apps; a recruiter plays with it in five seconds. Risk: the page around the phones is plainer, and the recreated screens have to stay true to the real app.
- **Claude's pick.** Possible cross: #6's fast intro and colors around #7's phones.

### 8. Piezas (not sent)

- **Shape:** the variant.com layout. A left panel with a write-to-me box, and a dark masonry wall of small working widgets:
  - TermoTrendy pocket version with temperature chips
  - PK UPC parking meter, one bar per space
  - timeline scrubber from 2022 to 2026, with play
  - 6c gauge on a 4a to 8a scale
  - keycaps for her stack
  - her photo through an RGB subpixel grid on canvas
  - an ES/EN switch as a tile
  - family placeholder
  - contact
- **Behavior:** "Sorpréndeme" reshuffles the wall with View Transitions and swaps the accent.
- **Fit:** shows craft at the widget level. Risk: closest to the reference, so it reads as a borrowed format, and it's the busiest.

## Ideas not built yet

- **Bright and plain:** a big photo, one loud color, large type, screenshot tiles, a warm "about me". Personality only through color and copy. Pitched as the baseline, then dropped for #8.
- **Voice note hero:** the intro as a voice-note bubble with waveform and speed control. Only with a real recording from her, never a fake one.
- **Widgets from #8 to reuse on any winner:** the timeline scrubber, the keycaps and the PK UPC meter would each work as one section on another shape.

## Open questions for Victoria

- **Email:** Wix shows `gonzalezmalavevictoria@gmail.com`, LinkedIn shows `vickygonzalezmalave@gmail.com`. All variants use the LinkedIn one.
- **Family:** every variant has a placeholder for a line (or a photo) about her family. She writes it.
- **Tone lines to confirm:** "Hablo rápido", "Programo igual", "Contesto rápido" and "Rápida, alegre y siempre haciendo algo" come from Jimmy's description of her, not from her.
- **Screens:** does she have more TermoTrendy screenshots (the outfit result, the closet) and any PK UPC screens? #7 would then use real screens throughout.
- **Phone number:** left off all pages. Does she want it?
- **Domain**, and whether she wants Catalan later (she lives in Catalonia; for now it's ES + EN only).

## Next

Wait for Victoria's reaction to #5, #6 and #7. Then either iterate ("more like #7", or a cross) or hand off: write `design/tokens.css` and `design/direction.md` from the winner, and build the site with `/spin-astro` (ES root + EN only, so the Galician language has to come out of the skeleton).
