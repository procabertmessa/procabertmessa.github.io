// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// If the repo is not named procabert.github.io, set `base` to '/<repo-name>'.
export default defineConfig({
  site: 'https://procabert.github.io',
  base: '/',
  integrations: [sitemap()],
});
