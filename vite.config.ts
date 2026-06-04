import contentCollections from "@content-collections/vite";
import deno from "@deno/vite-plugin";
import { tanstackStart } from "@tanstack/solid-start/plugin/vite";
import { nitro } from "nitro/vite";
import uno from "unocss/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  build: {
    outDir: ".output/public",
  },
  plugins: [
    deno(),
    contentCollections({
      configPath: "content.config.ts",
    }),
    uno(),
    tanstackStart({
      // prerender: {
      //   crawlLinks: true,
      //   enabled: true,
      // },
      router: {
        addExtensions: true,
        generatedRouteTree: "route-tree.gen.ts",
        quoteStyle: "double",
        semicolons: true,
      },
      // sitemap: {
      //   enabled: true,
      // },
    }),
    nitro({
      compatibilityDate: "latest",
      preset: "deno-server",
    }),
    solid({
      ssr: true,
    }),
  ],
  server: {
    proxy: {
      "/api/event": "https://stats.strooware.nl",
    },
  },
});
