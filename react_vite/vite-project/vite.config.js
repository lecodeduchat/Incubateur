import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // création d'alias pour simplifier les imports
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      {
        find: "@layout",
        replacement: path.resolve(__dirname, "src/components/layout"),
      },
      {
        find: "@partials",
        replacement: path.resolve(__dirname, "src/components/partials"),
      },
    ],
  },
});
