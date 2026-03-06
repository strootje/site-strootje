import deno from "@deno/vite-plugin";
import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin";
import { tanstackStart } from "@tanstack/solid-start/plugin/vite";
import uno from "unocss/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [
    deno(),
    tanstackStart({
      router: {
        addExtensions: true,
        generatedRouteTree: "route-tree.gen.ts",
        quoteStyle: "double",
      },
    }),
    nitroV2Plugin({
      preset: "deno-server",
      compatibilityDate: "2026-03-05",
    }),
    solid({ ssr: true }),
    uno(),
  ],

  server: {
    proxy: {
      "/api/event": "https://stats.strooware.nl",
    },
  },
});
