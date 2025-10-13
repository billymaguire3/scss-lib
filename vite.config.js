import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@styles": resolve(__dirname, "src/styles"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        tueyDesigns: resolve(__dirname, "src/tuey-designs/tuey-designs.html"),
        ryderCup: resolve(__dirname, "src/ryder-cup/ryder-cup.html"),
      },
    },
  },
});
