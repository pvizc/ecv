// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pvizc.com',
  // Se sirve en pvizc.com/learn-english. La build va a dist/learn-english/
  // para que las rutas de los ficheros coincidan con las URLs que recibe el
  // Worker de assets (ver wrangler.jsonc).
  base: '/learn-english',
  outDir: './dist/learn-english',
  // Español en la raíz (/), inglés en /en/.
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});