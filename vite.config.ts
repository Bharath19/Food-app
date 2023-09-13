import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://www.swiggy.com",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
    },
  },
});
