import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3015,
  },
  preview: {
    port: 3050,
  },
  build: {
    incremental: true,
    babel: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
    cache: true,
    minify: true,
    chunks: true,
    moduleBundling: true,
    modulePreload: true,
    prerenderPaths: ["/"],
    outDir: "build",
    mode: "production",
    debug: true,
    devCode: true,
  },
})
