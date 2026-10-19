// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// If the repo is not named procabertmessa.github.io, set `base` to '/<repo-name>'.
export default defineConfig({
  site: 'https://procabertmessa.github.io',
  base: '/',
  integrations: [sitemap()],
});
