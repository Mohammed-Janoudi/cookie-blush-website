import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
<<<<<<< Updated upstream
=======
  base: mode === "production" ? "/cookie-blush-website/" : "/", // ✅ Fix for local & GitHub Pages
>>>>>>> Stashed changes
  server: {
    host: "localhost",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< Updated upstream
=======
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
>>>>>>> Stashed changes
}));
