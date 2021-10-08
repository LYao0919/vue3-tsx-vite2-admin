/*
 * @Author: your name
 * @Date: 2021-08-03 15:22:07
 * @LastEditTime: 2021-10-08 18:06:56
 * @LastEditors: luyao
 * @Description: In User Settings Edit
 * @FilePath: /vue3-tsx-vite-admin/src/main.ts
 */
import { createApp } from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import './assets/css/global.less';
import dbsGlobalComp from './components/index'

const app = createApp(App)

dbsGlobalComp(app)


app.use(router)
app.use(store)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')
