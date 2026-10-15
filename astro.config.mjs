// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// If the repo is not named catalan-maap.github.io, set `base` to '/<repo-name>'.
export default defineConfig({
  site: 'https://catalan-maap.github.io',
  base: '/',
  integrations: [sitemap()],
});
