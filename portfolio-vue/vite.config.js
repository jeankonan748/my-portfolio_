import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/my-portfolio_/',
  plugins: [vue()],
  build: {
    outDir: 'dist',
  },
})
