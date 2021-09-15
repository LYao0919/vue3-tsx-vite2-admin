import { computed, defineComponent, onMounted, provide, ref } from "vue";

/*
 * @Author: 鲁遥
 * @Date: 2021-09-13 23:29:51
 * @LastEditTime: 2021-09-15 12:30:04
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /m-dmm/src/App.tsx
 */
import './App.less'
import { API } from "@/api/index";
import loadingComp from './components/loading'
import { useStore } from "vuex";
export default defineComponent({
    components: {
        loadingComp
    },
    name: 'App',
    setup() {
        provide("$API", API);
        const store = useStore();
        let loadingBol = ref(computed(() => store.getters.getLoading))
        return () => (
            <div class='container'>
                <router-view />
                {loadingBol.value && <loadingComp />}
            </div>
        )
    },
});
