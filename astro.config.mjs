import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "hybrid",
  site: "https://punto-norte-website-m4axl0xms-gaizka-zuazos-projects.vercel.app/",
  integrations: [
    tailwind(),
    icon({
      iconDir: "src/assets/icons"
    }),
    react()
  ],
  adapter: vercel()
});
