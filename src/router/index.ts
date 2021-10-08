/*
 * @Author: luyao
 * @Date: 2021-10-02 23:21:17
 * @LastEditTime: 2021-10-08 13:57:01
 * @Description:
 * @LastEditors: luyao
 * @FilePath: /vue3-tsx-vite-admin/src/router/index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '../store/index'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        meta: {
            title: "Home",
            keepAlive: true,
            scrollTop: 0
        },
        component: () => import('@views/home/index'),
        children: [
            {
                path: "/opt/table",
                name: "Table",
                component: () => import("@views/table"),
                meta: {
                    title: "Table",
                    ishidden: false,
                    keepAlive: true, // 需要被缓存
                    act: "/opt/table",
                }
            },
            {
                path: "/opt/form",
                name: "Form",
                component: () => import("@views/form"),
                meta: {
                    title: "form",
                    ishidden: false,
                    keepAlive: true, // 需要被缓存
                    act: "/opt/form",
                }
            },
            {
                path: "/opt/test",
                name: "test",
                component: () => import("@views/test"),
                meta: {
                    title: "test",
                    ishidden: false,
                    keepAlive: true, // 需要被缓存
                    act: "/opt/test",
                }
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
// const tabMenus = store.state.tabMenus;

// router.beforeEach((to: any, from, next) => {

//     next();
// });
export default router;