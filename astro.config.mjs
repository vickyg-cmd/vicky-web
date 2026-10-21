import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://vickygonzalezmalave.com",
  integrations: [sitemap()],
  build: {
    // The one stylesheet is small; inlining it saves a render-blocking request.
    inlineStylesheets: "always",
  },
  vite: {
    // Lets a phone on the tailnet load `npm run dev -- --host`.
    server: { allowedHosts: [".tail507ffb.ts.net"] },
  },
});
