import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    alias: {
      React: path.resolve(__dirname, "./packages/react"),
    },
  },
});
