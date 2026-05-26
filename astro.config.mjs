import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const SITE = "https://buildspace.dimssu.com";

export default defineConfig({
  site: SITE,
  trailingSlash: "never",
  prefetch: { prefetchAll: false, defaultStrategy: "viewport" },
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: "auto" },
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
  experimental: { contentIntellisense: true },
});
