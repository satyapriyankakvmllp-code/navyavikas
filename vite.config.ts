import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // On Netlify, `URL` is your live site address (custom domain if you set one).
  // It is put into the share-preview tags (og:image etc.) automatically at build time.
  const env = loadEnv(mode, '.', '');
  const siteUrl = (env.URL || env.VITE_SITE_URL || '').replace(/\/$/, '');

  return {
    plugins: [
      react(),
      {
        name: 'inject-site-url',
        transformIndexHtml: (html: string) => html.replace(/__SITE_URL__/g, siteUrl),
      },
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
