import { defineComponent, provide } from "vue";

/*
 * @Author: 鲁遥
 * @Date: 2021-09-13 23:29:51
 * @LastEditTime: 2021-09-14 14:21:51
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /m-dmm/src/App.tsx
 */
import './App.less'
import { API } from "@/api/index";

export default defineComponent({
    name: 'App',
    setup() {
        provide("$API", API);


        return () => (
            <div class='container'>
                <router-view />
            </div>
        )
    },
});
