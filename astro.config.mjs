import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://recruitmenttools.org',
  integrations: [sitemap()],
  trailingSlash: 'always',
  build: { format: 'directory' },
});
