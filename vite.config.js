import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,       // Dev server runs on localhost:3000
    open: true,       // Auto-opens browser on npm run dev
  },
  build: {
    outDir: 'dist',
    sourcemap: true,  // Useful for debugging production builds
  },
})
