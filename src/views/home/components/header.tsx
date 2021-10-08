import { computed, defineComponent, inject } from "vue-demi";
import './header.less'
import { Fold, Expand } from '@element-plus/icons'
import { useStore } from "vuex";

/*
 * @Author: luyao
 * @Date: 2021-10-02 22:39:51
 * @LastEditTime: 2021-10-03 22:13:06
 * @Description:
 * @LastEditors: luyao
 * @FilePath: /m-dmm的副本/src/views/home/components/header.tsx
 */

export default defineComponent({
    name: 'ContainerHeader',
    setup() {
        const store = useStore();
        let isCollapse = computed(() => store.getters.getCollapse)
        function shrink() {
            store.commit('setCollapse', !isCollapse.value)
        }

        return () => (
            <>
                <el-icon onClick={shrink} class='shrink' size={20} color='#ff9000'>
                    {isCollapse.value ? <Expand></Expand> : <Fold></Fold>}
                </el-icon>
                <span>XXX,欢迎您</span>
            </>
        )
    }
})