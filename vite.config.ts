import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  // dev server起動でwindow open
  server: {
    open: true,
  },
  'import/resolver': {
    alias: {
      map: [['@', './src']],
    },
  },
  root: './src',
  base: './',
  build: {
    // root (= ./src) から見た相対パスで指定
    outDir: '../public',
    emptyOutDir: true,
  },
  plugins: [
    // Emotionが提供するcssプロパティ等を反映するために必要となる
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    VitePWA(),
    checker({
      eslint: {
        lintCommand: 'eslint . --ext .js,.jsx,.ts,.tsx',
      },
    }),
    checker({ typescript: true }),
  ],
});
