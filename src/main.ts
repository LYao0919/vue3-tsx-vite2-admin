/*
 * @Author: your name
 * @Date: 2021-08-03 15:22:07
 * @LastEditTime: 2021-09-13 23:31:21
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /m-dmm/src/main.ts
 */
import { createApp } from 'vue'
import App from './App'
import router from './routers/index'
import store from './store/index'
import Vant from 'vant'
import 'vant/lib/index.css';
import './assets/css/global.less';
import "./utils/rem"


createApp(App)
  .use(router)
  .use(store)
  .use(Vant)
  .mount('#app')
