import { defineConfig } from "vite";

export default defineConfig({
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
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
    },
  },
});
