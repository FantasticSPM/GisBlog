import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport  from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Cesium from 'vite-plugin-cesium'
// https://vite.dev/config/
export default defineConfig({
  server:{
    host:true,
  },
  base:'./',
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    Cesium(),
    AutoImport({
      imports:[
        'vue', 
        'vue-router', 
        'pinia',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:`@use "@/assets/globalStyleVariables.scss" as *;`,
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
