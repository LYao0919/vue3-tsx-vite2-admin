import { defineComponent, Fragment } from "vue";

/*
 * @Author: 鲁遥
 * @Date: 2021-09-13 23:29:51
 * @LastEditTime: 2021-09-14 10:35:12
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /m-dmm/src/App.tsx
 */
import './App.less'
export default defineComponent({
    name: 'App',
    setup() {
        return () => (
            <div class='container'>
                12345678  666
                <van-button icon="plus" type="primary">按钮</van-button>
                <router-view />
            </div>
        )
    },
});
