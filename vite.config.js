import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Two pages, so two entries. Paths are relative because the project is ESM and
// has no __dirname; Vite resolves them against the project root.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        menopause: 'menopause.html',
        metabolic: 'metabolic.html',
        longevity: 'longevity.html',
        fees: 'fees.html',
      },
    },
  },
})
