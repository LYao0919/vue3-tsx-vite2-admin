/*
 * @Author: your name
 * @Date: 2021-08-03 15:22:07
 * @LastEditTime: 2021-09-14 00:02:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import vueJsx from "@vitejs/plugin-vue-jsx";
import path from 'path';
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  server: {
    host: "devfe.doublefs.com",
    open: true,
    port: 3333,
    hmr: { overlay: false }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: './',
  optimizeDeps: {
    include: [
      'axios',
      'vuex',
      'vue-router',
      'vant'
    ]
  },
  build: {
    target: 'esnext',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

    rollupOptions: {
      output: {
        manualChunks: {
        },
        sourcemap: false,
      },
    },
    chunkSizeWarningLimit: 400,
    brotliSize: false
  },
})

