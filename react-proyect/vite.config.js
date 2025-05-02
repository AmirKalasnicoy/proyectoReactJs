import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  // Esto se ejecuta después del build para copiar el archivo
  closeBundle() {
    copyFileSync('public/_redirects', 'dist/_redirects');
  }
})
