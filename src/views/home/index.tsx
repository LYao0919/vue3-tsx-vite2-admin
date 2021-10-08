/*
 * @Author: luyao
 * @Date: 2021-10-02 19:58:02
 * @LastEditTime: 2021-10-08 18:15:52
 * @Description:
 * @LastEditors: luyao
 * @FilePath: /vue3-tsx-vite-admin/src/views/home/index.tsx
 */

import './index.less'
import { defineComponent, KeepAlive, ref, watch, reactive } from "vue-demi";
import menuList from "./components/menuList";
import ContainerHeader from "./components/header";
import tags from "./components/tags";
import marquee from "@/components/marquee";
import { useRouter } from "vue-router";
import { getMenuTree, checkFull, versionUpdated } from "@/utils/index";

export default defineComponent({
    name: 'home',
    components: {
        menuList,
        ContainerHeader,
        tags,
        marquee
    },
    setup() {
        const router = useRouter();
        let meta = ref({});
        let verUpdate: any = ref(false);

        watch(() => [router.currentRoute.value, router.currentRoute.value.meta], (val) => {
            meta.value = val;
            hasVersionUpdated()
        })

        async function hasVersionUpdated() {
            // verUpdate.value = await versionUpdated();
        }
        return () => (
            <el-container class='el-container'>
                <menuList />
                <el-container>
                    <el-header>
                        <ContainerHeader />
                    </el-header>
                    <marquee class="ver-update" v-slots={{
                        content: () => `～～～～ 已检测到版本更新了 ，请刷新页面获取最新版本 ～～～～`
                    }} > </marquee>
                    <tags />
                    <el-main>
                        <router-view >
                            {
                                ({ Component }) => {
                                    return (meta.value as any).keepAlive ?
                                        <KeepAlive><Component /> </KeepAlive> : <Component />
                                }
                            }
                        </router-view>
                    </el-main>
                </el-container>
            </el-container >
        )
    }
})