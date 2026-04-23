import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 5174,
    // Si 5174 está ocupado, Vite usa el siguiente y lo muestra en consola (sigue funcionando el dev).
    strictPort: false,
  },
  preview: {
    host: '0.0.0.0',
    port: 4174,
    strictPort: false,
  },
})
