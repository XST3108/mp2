import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      // GitHub Pages 没有路由功能，直接打开 /mp2/meal/52772 会 404。
      // 把 index.html 复制成 404.html，这样任何地址都会加载我们的 React 应用。
      name: 'copy-404',
      closeBundle() {
        copyFileSync('dist/index.html', 'dist/404.html')
      },
    },
  ],
  base: '/mp2/',
})
