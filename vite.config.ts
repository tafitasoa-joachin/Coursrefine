import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    target: 'esnext',  // Pour générer le code au format ES Next
    minify: 'esbuild'   // Utilise SWC pour minifier le code pendant le build
  },
})
