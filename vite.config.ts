/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    browser: {
      enabled: true,
      name: "firefox",
      provider: "playwright",
    },
  },
});
