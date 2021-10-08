import { defineComponent } from "vue-demi";

/*
 * @Author: luyao
 * @Date: 2021-10-03 00:29:17
 * @LastEditTime: 2021-10-08 10:48:02
 * @Description:
 * @LastEditors: luyao
 * @FilePath: /m-dmm的副本/src/views/home/components/tags.tsx
 */

import { computed } from "vue-demi";
import { useStore } from "vuex";
import { onBeforeRouteUpdate, RouteLocationNormalized, useRoute, useRouter } from "vue-router";
import './tags.less'
export default defineComponent({
    setup() {
        const route = useRoute();
        const router = useRouter();
        const isActive = (path: string) => {
            return path === route.fullPath;
        };

        const store = useStore();
        // const tagsList = computed(() => store.state.affixMenusList);
        const tagsList = computed(() => store.getters.getAffixMenusList);
        const showTags = computed(() => tagsList.value.length > 0);

        // // 关闭单个标签
        const closeTags = (index: number) => {
            console.log(index, 12345678);
            const delItem = tagsList.value[index];
            store.commit("delAffixMenusList", { index });
            const item = tagsList.value[index]
                ? tagsList.value[index]
                : tagsList.value[index - 1];
            if (item) {
                delItem.path === route.fullPath && router.push(item.path);
            }
            // else {
            //     router.push("/");
            // }
        };

        // 设置标签
        const setTags = (route: RouteLocationNormalized) => {
            const isExist = tagsList.value.some((item: { path: string; }) => {
                return item.path === route.fullPath;
            });
            if (!isExist) {
                if (tagsList.value.length >= 8) {
                    store.commit("delAffixMenusList", { index: 0 });
                }
                setTimeout(() => {
                    store.commit("setAffixMenusList", {
                        name: route.name,
                        title: route.meta.title,
                        path: route.fullPath,
                    });
                }, 100);
            }
        };
        setTags(route);
        onBeforeRouteUpdate((to) => {
            setTags(to);
        });

        // // 关闭全部标签
        // const closeAll = () => {
        //     store.commit("clearTags");
        //     router.push("/");
        // };
        // // 关闭其他标签
        // const closeOther = () => {
        //     const curItem = tagsList.value.filter((item) => {
        //         return item.path === route.fullPath;
        //     });
        //     store.commit("closeTagsOther", curItem);
        // };
        // const handleTags = (command) => {
        //     command === "other" ? closeOther() : closeAll();
        // };

        // // 关闭当前页面的标签页
        // store.commit("closeCurrentTag", {
        //     $router: router,
        //     $route: route
        // });


        return () => (
            <div class="tags" >
                <ul>
                    {
                        tagsList.value.map((item: { path: any; title: any; }, index: any) => {
                            return <li class={isActive(item.path) ? 'active tags-li' : 'tags-li'
                            }>
                                <router-link to={item.path}>{item.title}</router-link>
                                {!isActive(item.path) && <span class="tags-li-close" onClick={() => closeTags(index)}>
                                    <i class="el-icon-close"></i>
                                </span>}
                            </li>
                        })
                    }
                </ul>
            </div >
        )
    }
})