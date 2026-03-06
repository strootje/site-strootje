import { presetHeroPatterns } from "@julr/unocss-preset-heropatterns";
import { defineConfig, presetIcons, presetWebFonts, presetWind4 } from "unocss";

const iconify = async (name: string) => {
  const { default: iconjson } = await import(name, { with: { type: "json" } });
  return iconjson;
};

export default defineConfig({
  shortcuts: {
    "grid-layout": "grid-cols-[[hero-start]_1fr_[content-start]_minmax(auto,48ch)_[content-end]_1fr_[hero-end]]",
  },

  rules: [
    ["corner-squircle", { "corner-shape": "squircle" }],
  ],

  presets: [
    presetWind4({
      dark: "media",
    }),
    presetHeroPatterns(),
    presetWebFonts({
      provider: "bunny",
      fonts: {
        mono: ["NChivo Mono:300"],
      },
    }),
    presetIcons({
      collections: {
        brand: () => iconify("@iconify-json/fa7-brands/icons.json"),
        solar: () => iconify("@iconify-json/solar/icons.json"),
      },
    }),
  ],
});
