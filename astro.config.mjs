import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), icon({
    iconDir: "src/assets/icons"
  }), react()],
  adapter: vercel()
});