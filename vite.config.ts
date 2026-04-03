import deno from "@deno/vite-plugin";
import { tanstackStart } from "@tanstack/solid-start/plugin/vite";
import { nitro } from "nitro/vite";
import uno from "unocss/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [
    deno(),
    uno({ mode: "per-module" }),
    tanstackStart({
      router: {
        addExtensions: true,
        generatedRouteTree: "route-tree.gen.ts",
        quoteStyle: "double",
      },
    }),
    nitro({
      compatibilityDate: "latest",
      preset: "deno-server",
    }),
    solid({ ssr: true }),
  ],

  server: {
    proxy: {
      "/api/event": "https://stats.strooware.nl",
    },
  },
});
