/*
 * @Author: 鲁遥
 * @Date: 2021-09-15 11:12:41
 * @LastEditTime: 2021-09-15 12:11:31
 * @LastEditors: your name
 * @Description:
 * @FilePath: /m-dmm/src/components/loading/index.tsx
 */

import { defineComponent } from "vue";
import { Loading } from 'vant'
import './index.less'

export default defineComponent({
    name: 'LoadingComp',
    setup() {
        return () => (
            <>
                <Loading class='loading' color="#ffff" size="48px" vertical >加载中...</Loading>
            </>
        )
    }
})