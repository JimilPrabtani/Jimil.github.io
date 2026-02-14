import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  // Using root path for custom domain (jimilpabtani.me) and user site (jimilprabtani.github.io)
=======
  // Using root path for custom domain (jimilprabtani.me) and user site (jimilprabtani.github.io)
>>>>>>> 869af70 (Initial Commit)
  base: '/',
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
