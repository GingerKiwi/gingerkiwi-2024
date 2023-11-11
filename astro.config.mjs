import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://gingerkiwi.dev',
  integrations: [tailwind(), sitemap({
    filter: page => !/https:\/\/gingerkiwi\.dev\/blog\/[0-9]+/.test(page),
    customPages: ['https://www.gingerkiwi.dev/linkedin'],
    changefreq: 'weekly',
    lastmod: new Date(),
    priority: 0.85,
    serialize: item => {
      if (item.url.at(-1) === '/') {
        item.url = item.url.slice(0, -1);
      }
      return item;
    },
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en-CA',
        en: 'en-NZ',
        fr: 'fr-FR'
      }
    }
  }), react()]
});