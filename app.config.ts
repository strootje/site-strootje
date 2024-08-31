import { defineConfig } from "@solidjs/start/config";
import { default as unocss } from "unocss/vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  middleware: "./src/middleware.ts",
  ssr: true,

  vite: {
    plugins: [unocss(), imagetools()],
  },
});
