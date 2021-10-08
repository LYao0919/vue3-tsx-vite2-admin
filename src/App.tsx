import { computed, defineComponent, provide, ref } from "vue-demi";

/*
 * @Author: 鲁遥
 * @Date: 2021-09-13 23:29:51
 * @LastEditTime: 2021-10-03 17:40:50
 * @LastEditors: luyao
 * @Description: 
 * @FilePath: /m-dmm的副本/src/App.tsx
 */
import './App.less'
import { API } from "@/api/index";
import eventBus from '@/utils/eventBus'

import { useStore } from "vuex";
export default defineComponent({
    name: 'App',
    setup() {
        provide("$API", API);
        provide("$eventBus", eventBus);
        const store = useStore();
        let loadingBol = ref(computed(() => store.getters.getLoading))
        const locale = ref({
            name: 'zh-cn',
        })

        return () => (
            <div class='container'
                v-loading={loadingBol.value}
                element-loading-text="Loading..."
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.8)">
                <el-config-provider locale={locale}>
                    <router-view />
                </el-config-provider>
            </div>
        )
    },
});
