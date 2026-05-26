import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

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
  // Static-first: most pages prerender, but pages that opt out with
  // `export const prerender = false` are rendered on-demand by the adapter.
  output: "static",
  // Deploying to Vercel. To self-host or switch off Vercel:
  //   npm install @astrojs/node && replace with: adapter: node({ mode: "standalone" })
  adapter: vercel(),
});
