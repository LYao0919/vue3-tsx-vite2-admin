/*
 * @Author: your name
 * @Date: 2021-08-08 16:29:28
 * @LastEditTime: 2021-08-19 16:52:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /odm-m/src/api/FABEIC_URL.ts
 */


const API = `${import.meta.env.VITE_APP_API}/scm-fabric`;

import service from '../utils/service';
export const inventoryUrl = {
    // // 获取供应商登陆验证码
    // getLoginCaptcha() {
    //     return service({
    //         url: `${API}/login/captcha?type=SUPPLIER_LOGIN`,
    //         method: "GET",
    //         headers: { system: "supplier" }
    //     } as any);
    // },

    
    // 上报列表-h5
    quantitylist(param: any) {
        return service({
            url: `${API}/inventory/quantity/list`,
            method: "POST",
            data: param,
        });
    },
    // 获取厂库信息
    quantityShow(param: any) {
        return service({
            url: `${API}/inventory/quantity/show`,
            method: "POST",
            data: param,
        });
    },
    // 库存上报
    inventoryAdd(param: any) {
        return service({
            url: `${API}/inventory/add`,
            method: "POST",
            data: param,
        });
    },
}