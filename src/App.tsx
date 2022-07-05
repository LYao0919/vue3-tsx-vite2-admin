import { computed, defineComponent, provide, ref } from "vue-demi";

/*
 * @Author: 鲁遥
 * @Date: 2021-09-13 23:29:51
 * @LastEditTime: 2022-06-08 15:11:02
 * @LastEditors: luyao
 * @Description: 
 * @FilePath: /vue3-tsx-vite-admin/src/App.tsx
 */
import './App.less'
import { API } from "@/api/index";
import eventBus from '@/utils/eventBus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

import { useStore } from "vuex";
export default defineComponent({
    name: 'App',
    setup() {
        provide("$API", API);
        provide("$eventBus", eventBus);
        const store = useStore();
        let loadingBol = ref(computed(() => store.getters.getLoading))
       

        return () => (
            <div class='container'
                v-loading={loadingBol.value}
                element-loading-text="Loading..."
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.8)">
                <el-config-provider locale={zhCn}>
                    <router-view />
                </el-config-provider>
            </div>
        )
    },
});
