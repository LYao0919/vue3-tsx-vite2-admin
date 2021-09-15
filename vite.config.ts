/*
 * @Author: your name
 * @Date: 2021-08-03 15:22:07
 * @LastEditTime: 2021-09-15 17:20:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from 'path';
import styleImport from 'vite-plugin-style-import';
import viteCompression from "vite-plugin-compression"; //gzip必备插件

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
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
  server: {
    host: "devfe.doublefs.com",
    open: true,
    port: 3333,
    hmr: { overlay: false },
    https: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      "@views": path.resolve(__dirname, './src/views'),
      "@components": path.resolve(__dirname, './src/components'),
      "@utils": path.resolve(__dirname, './src/utils'),
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

