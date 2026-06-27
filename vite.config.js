import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE on `base`:
// - If you deploy to a USERNAME.github.io repo (a "user site"), keep base: '/'
// - If you deploy to a normal project repo (e.g. github.com/iamrlz/portfolio),
//   GitHub Pages serves it at /portfolio/, so set base: '/portfolio/'
//   (replace "portfolio" with your actual repo name)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
