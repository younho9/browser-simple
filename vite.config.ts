/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	test: {
		browser: {
			enabled: true,
			name: "firefox",
			provider: "playwright",
		},
	},
});
