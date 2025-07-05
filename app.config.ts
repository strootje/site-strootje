import { default as deno } from "@deno/vite-plugin";
import { defineConfig } from "@solidjs/start/config";
import { default as unocss } from "unocss/vite";

export default defineConfig({
  ssr: false,

  vite: {
    plugins: [
      deno(),
      unocss(),
    ],
  },
});
