/*
 * @Author: your name
 * @Date: 2021-08-08 16:29:28
 * @LastEditTime: 2021-09-14 13:19:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /m-dmm/src/api/API_URL.ts
 */


const API = `${import.meta.env.VITE_APP_API}/goods-center-service`;

import service from '../utils/service';
export const apiUrl = {
    // 根据selectionSpuId查询该商品图片及skc图片
    getProductImage(param: any) {
        return service({
            url: `${API}/v2/bar/selection-images/imageForSelectionSpuId`,
            method: "POST",
            data: param,
        });
    },
}