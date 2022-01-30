import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  // dev server起動でwindow open
  server: {
    open: true,
  },
  root: "./src",
  build: {
    // root (= ./src) から見た相対パスで指定
    outDir: "../public",
    // git hub pages用
    // outDir: '../docs',
    emptyOutDir: true,
  },
  plugins: [react(), VitePWA()],
});
