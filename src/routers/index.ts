/*
 * @Author: your name
 * @Date: 2021-08-03 15:25:52
 * @LastEditTime: 2021-09-14 14:32:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /m-dmm/src/routers/index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '../store/index'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/productPreview",
    name: "ProductPreview",
    meta: {
      title: "图片预览",
      keepAlive: true,
      scrollTop: 0
    },
    // component: () => import('./../views/productPreview/index'),
    component: () => import('@views/productPreview/index'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});
// const tabMenus = store.state.tabMenus;

router.beforeEach((to: any, from, next) => {
  console.log(to, 12345678);
  if (to.path == "/productPreview") {
    if (to?.query?.id) localStorage.setItem('selectionSpuId', to?.query?.id);
  } else if (to.path == "/") {
    next({
      name: 'ProductPreview',
      query: { id: localStorage.getItem('selectionSpuId') }
    })
  }
  // if (from.meta.keepAlive) {
  //   const $content = document.querySelector('.contentPullRefresh'); // 列表的外层容器
  //   const scrollTop = $content ? $content.scrollTop : 0;
  //   store.commit("setScrollHeight", { name: from.name, height: scrollTop })
  // }
  next();
});
// router.afterEach((to, from) => {
//   setTimeout(() => {
//     for (let i = 0; i < tabMenus.length; i++) {
//       if (tabMenus[i].name === to.name) {
//         if (tabMenus[i].scrollHeight) {
//           const scrollEle = (document as any).querySelector('.contentPullRefresh');
//           scrollEle.scrollTop = tabMenus[i].scrollHeight;
//         }
//         break;
//       }
//     }
//   })
// });
export default router;