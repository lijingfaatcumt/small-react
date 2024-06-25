import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  esbuild: {
    jsxInject: `import { jsx } from 'react/jsx'`,
    jsxFactory: "jsx",
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./packages/react"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "./src/main.tsx"),
      },
    },
  },
});
