/*
 * @Author: 鲁遥
 * @Date: 2021-09-14 11:05:31
 * @LastEditTime: 2021-09-14 22:39:41
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
            productInfo: {
                spuImageUrls: [],
                sampleClothesResponseVO: {
                    internalStylesCode: '',
                    supplierStylesCode: '',
                    buyerName: '',
                    size: '',
                    color: '',
                    supplierName: ''
                }
            }
        })

        function getProductInfoList() {
            $API.getProductImage({
                crawlerColorSizeId: route.query.id,
            }).then((res: any) => {
                state.productInfo = res.result;
            });
        }
        getProductInfoList()

        let imgItem = (url: string | undefined) => {
            return <SwipeItem>
                <img src={url} alt={url} srcset="" />
            </SwipeItem>
        }

        let productInfo = ({ internalStylesCode, supplierStylesCode, buyerName, size, color, supplierName }: any) => {
            return <ul class='product-info'>
                <li>内部款号：{internalStylesCode}</li>
                <li>供应商款号：{supplierStylesCode}</li>
                <li>买手：{buyerName}</li>
                <li>尺码：{size}</li>
                <li>颜色：{color}</li>
                <li>供应商：{supplierName}</li>
            </ul>
        }

        return () => (
            <div>
                {state.productInfo?.spuImageUrls.length > 0 ?
                    <Swipe class="my-swipe" indicator-color="white">
                        {
                            state.productInfo?.spuImageUrls.map(item => {
                                return imgItem(item)
                            })
                        }
                    </Swipe> : <Empty description="空空如也" />
                }
                {productInfo(state.productInfo.sampleClothesResponseVO)}

            </div>
        )
    }
})
