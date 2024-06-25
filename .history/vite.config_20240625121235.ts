import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    alias: {
      React: "./packages/react",
    },
  },
});
