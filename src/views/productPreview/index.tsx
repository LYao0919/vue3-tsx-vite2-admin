/*
 * @Author: 鲁遥
 * @Date: 2021-09-14 11:05:31
 * @LastEditTime: 2021-09-14 14:45:29
 * @LastEditors: your name
 * @Description:
 * @FilePath: /m-dmm/src/views/productPreview/index.tsx
 */

import { defineComponent, inject, reactive } from "vue";
import { Swipe, SwipeItem, Empty } from 'vant'
import './index.less'
import { useRoute } from "vue-router";

export default defineComponent({
    name: 'ProductPreview',
    setup() {
        const $API: any = inject("$API");
        const route = useRoute()
        const state = reactive({
            list: []
        })

        function getProductInfoList() {
            $API.getProductImage({
                selectionSpuId: route.query.id,
            }).then((res: any) => {
                state.list = res.result.spuImageUrls;
            });
        }
        getProductInfoList()

        let imgItem = (url: string | undefined) => {
            return <SwipeItem>
                <img src={url} alt={url} srcset="" />
            </SwipeItem>
        }

        return () => (
            <div>
                {state.list.length > 0 ?
                    <Swipe class="my-swipe" autoplay="3000" indicator-color="white">
                        {
                            state.list.map(item => {
                                return imgItem(item)
                            })
                        }
                    </Swipe> : <Empty description="空空如也" />
                }
            </div >
        )
    }
})
