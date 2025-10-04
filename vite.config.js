import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // 👈 1. Importa el módulo 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👇 2. Agrega esta sección 'resolve'
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
