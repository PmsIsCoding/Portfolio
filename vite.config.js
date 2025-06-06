import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  build: {
    outDir: 'dist',
    assetsDir: './'  // Pour que les assets soient servis depuis la racine
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
