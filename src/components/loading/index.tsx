/*
 * @Author: 鲁遥
 * @Date: 2021-09-15 11:12:41
 * @LastEditTime: 2021-10-02 19:43:42
 * @LastEditors: luyao
 * @Description:
 * @FilePath: /m-dmm的副本/src/components/loading/index.tsx
 */

import { defineComponent } from "vue-demi";
// import { Loading } from 'vant'
import './index.less'

export default defineComponent({
    name: 'LoadingComp',
    setup() {
        return () => (
            <>
                loading{/* <Loading class='loading' color="#ffff" size="48px" vertical >加载中...</Loading> */}
            </>
        )
    }
})