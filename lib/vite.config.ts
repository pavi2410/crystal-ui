import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from '@tailwindcss/vite';
import dts from "vite-plugin-dts";
import { resolve } from "path";

import packageJson from "./package.json";

export default defineConfig({
  plugins: [
    tailwindcss(),
    solid(),
    dts({ insertTypesEntry: true }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src/"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "organic-ui",
      fileName: "index",
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.peerDependencies),
        "solid-js",
        "solid-js/web",
        "solid-js/store",
      ],
    },
  },
});
