// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://joalopez.com.ar',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/demos/'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
