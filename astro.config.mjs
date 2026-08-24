// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// Update `site` to your real production domain before deploy (used for SEO, sitemap, RSS).
export default defineConfig({
  site: 'https://portofolio-fazry.vercel.app',
  vite: {
    // Cast avoids a cosmetic type clash between Astro's bundled Vite and
    // the Vite types @tailwindcss/vite resolves; runtime is unaffected.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
  integrations: [sitemap(), icon()],
});
