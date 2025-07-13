import { defineConfig, presetIcons, presetWebFonts, presetWind3 } from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";

export default defineConfig({
  presets: [
    presetWind3(),
    presetScrollbar(),

    presetWebFonts({
      provider: "bunny",
      fonts: {
        other: "Montserrat",
        title: "Fascinate Inline",
      },
    }),

    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
      collections: {
        simple: () =>
          import("@iconify-json/simple-icons/icons.json", {
            with: { type: "json" },
          }).then((i) => i.default),
        solid: () =>
          import("@iconify-json/fa6-solid/icons.json", {
            with: { type: "json" },
          }).then((i) => i.default),
        brands: () =>
          import("@iconify-json/fa6-brands/icons.json", {
            with: { type: "json" },
          }).then((i) => i.default),
      },
    }),
  ],
});
