import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components"),
      styles: path.resolve(__dirname, "src/styles"),
      api: path.resolve(__dirname, "src/api"),
      store: path.resolve(__dirname, "src/store"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        prependData: `@import "src/styles/_index.scss";`,
      },
    },
  },
  plugins: [react()],
});
