import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@data": ["/src/data"],
      "@features": ["/src/features"],
      "@hooks": ["/src/hooks"],
      "@pages": ["/src/pages"],
      "@services": ["/src/services"],
      "@ui": ["/src/ui"],
      "@utils": ["/src/utils"],
      "@styles": ["/src/styles"],
    },
  },
});
