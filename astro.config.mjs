// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Production URL: used for canonical links, Open Graph URLs and the sitemap.
  site: 'https://zohomatt.github.io',
  integrations: [sitemap()],
});
