import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  output: "server",
  adapter: vercel({
    edgeMiddleware: true
  }),
  image: {
    domains: ["images.ctfassets.net", "downloads.ctfassets.net"]
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/variables.scss";`
        }
      }
    }
  },
  integrations: [svelte()]
});