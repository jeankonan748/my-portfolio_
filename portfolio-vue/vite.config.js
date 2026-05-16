import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/my-portfolio/Jean-KONAN',
  plugins: [vue()],
  build: {
    outDir: 'dist',
  },
})
