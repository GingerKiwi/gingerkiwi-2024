import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://gingerkiwi.dev',
  integrations: [tailwind(), sitemap({
    filter: (page) => !/https:\/\/nikolovlazar\.com\/blog\/[0-9]+/.test(page),
  })]
});