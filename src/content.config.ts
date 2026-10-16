import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Posts live in src/content/blog/<lang>/<slug>.md. A translation keeps the
 * same filename in each language folder, so the URL and the hreflang
 * alternates line up. A post can exist in one language only.
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** Drafts build in dev only, but still get a share card from `npm run og`. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
