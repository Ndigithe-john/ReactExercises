import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@components": ["/src/components"],
      "@utils": ["/src/utils"],
      "@services": ["/src/services"],
      "@features": ["/src/features"],
    },
  },
});
