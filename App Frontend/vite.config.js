import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
//import sass from '@vitejs/plugin-sass';
//import sass from 'vite-plugin-sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //sass(),
    // other plugins if any
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
