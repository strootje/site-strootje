import { defineConfig } from "@solidjs/start/config";
import { default as unoPlugin } from "unocss/vite";

export default defineConfig({
	middleware: "./src/middleware.ts",
	ssr: true,

	vite: {
		plugins: [unoPlugin()],
	},
});
