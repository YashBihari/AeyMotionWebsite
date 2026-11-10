import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  const previewHost = process.env.VERCEL_ENV === 'preview'
    ? process.env.VERCEL_BRANCH_URL || process.env.VERCEL_URL
    : undefined;
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'social-image-origin',
        transformIndexHtml(html) {
          return previewHost
            ? html.replaceAll('https://www.aeymotion.com/share-preview-hero.png', `https://${previewHost}/share-preview-hero.png`)
            : html;
        },
      },
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
