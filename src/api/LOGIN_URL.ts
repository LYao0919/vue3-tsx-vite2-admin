/*
 * @Author: 鲁遥
 * @Date: 2021-07-23 15:10:57
 * @LastEditTime: 2021-08-09 20:44:03
 * @LastEditors: Please set LastEditors
 * @Description:
 * @FilePath: /odm-pc/src/api/LOGIN_URL.ts
 */
const API = `${import.meta.env.VITE_APP_API}`;
import service from '../utils/service';
export const loginUrl = {
    // 获取供应商登陆验证码
    getLoginCaptcha() {
        return service({
            url: `${API}/janus-rest/login/captcha?type=SUPPLIER_LOGIN`,
            method: "GET",
            headers: { system: "supplier" }
        } as any);
    },
    // 供应商登陆
    supplierLogin(param: any) {
        return service({
            url: `${API}/janus-rest/login/supplierLogin`,
            method: "POST",
            data: param,
            headers: { system: "supplier" }
        });
    },
    // 获取供应商信息
    getByAccountId(param: any) {
        return service({
            url: `${API}/scm-supplier/surface/merchants_history/getByAccountId`,
            method: "POST",
            data: param,
        });
    },
}