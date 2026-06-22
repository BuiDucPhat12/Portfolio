import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base is '/' for local dev; set to '/portfolio/' if deploying to a GitHub Pages project subpath
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
})
