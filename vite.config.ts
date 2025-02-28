import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/2025/', // Ensures Vite generates correct URLs for assets
  build: {
    outDir: 'dist',
  }
})
