import vue from "@vitejs/plugin-vue2";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src")
		}
	},
	plugins: [vue()]
});
