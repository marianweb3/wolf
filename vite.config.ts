import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      crypto: "crypto-browserify",
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
