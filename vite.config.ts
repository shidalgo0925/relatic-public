import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Tailwind v4 vía PostCSS (postcss.config.mjs), no @tailwindcss/vite: evita
// resolución a chunks internos de Vite que cambian entre versiones.

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    // 5173 es el puerto por defecto de Vite; si está ocupado, Vite prueba el siguiente (ver consola).
    port: 5173,
    strictPort: false,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: false,
  },
})
