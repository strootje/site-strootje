import { presetHeroPatterns } from "@julr/unocss-preset-heropatterns";
import { defineConfig, presetIcons, presetUno } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetHeroPatterns(),

    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
      collections: {
        simple: () => import("@iconify-json/simple-icons/icons.json").then((i) => i.default),
        solid: () => import("@iconify-json/fa6-solid/icons.json").then((i) => i.default),
        brands: () => import("@iconify-json/fa6-brands/icons.json").then((i) => i.default),
      },
    }),
  ],
});
