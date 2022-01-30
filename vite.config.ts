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
  base: "./",
  build: {
    // root (= ./src) から見た相対パスで指定
    outDir: "../public",
    emptyOutDir: true,
  },
  plugins: [react(), VitePWA()],
});
