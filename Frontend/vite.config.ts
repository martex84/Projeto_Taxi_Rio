import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@main": path.resolve(__dirname, "./src/main"),
      "@login": path.resolve(__dirname, "./src/features/login"),
      "@passageiro": path.resolve(__dirname, "./src/features/passageiro"),
      "@motorista": path.resolve(__dirname, "./src/features/motorista"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
});
