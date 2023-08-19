import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/dapi": "https://www.swiggy.com",
    },
  },
  resolve: {
    alias: {
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
    },
  },
});
