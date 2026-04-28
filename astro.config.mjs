// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 🚨 RIGA FONDAMENTALE: Senza questa la sitemap non viene generata
  site: 'https://volontariando.it',
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});