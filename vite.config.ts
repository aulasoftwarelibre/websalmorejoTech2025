import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from "vite-plugin-pages"

export default defineConfig({
  plugins: [react(), Pages()],
  base: '/2025/', // Ensures Vite generates correct URLs for assets
  build: {
    outDir: 'dist',
  }
})
