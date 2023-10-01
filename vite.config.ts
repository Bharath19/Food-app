import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://www.swiggy.com",
        changeOrigin: true,
      },
      "/dapi": {
        target: "https://www.swiggy.com",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
});
