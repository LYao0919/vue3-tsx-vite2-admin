/*
 * @Author: your name
 * @Date: 2021-08-03 15:52:13
 * @LastEditTime: 2021-08-19 17:51:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /odm-m/src/utils/servers.ts
 */
import axios from 'axios'
import { isPlainObject } from "lodash";
import { Notify } from 'vant';

let lang = navigator.language;
// 显示错误
function errorHandle(info: any, time?: any, callback?: any) {
  let msg = info?.data?.message || info?.data?.msg;
  // 显示提示
  Notify({
    type: 'danger',
    message: msg,
    duration: time || 2000,
    onClose: () => {
      callback && callback();
    }
  });
}
const headerObj = {
  "Content-Type": "application/json;charset=UTF-8",
  // token: "7777777!",
  'system-source': 'WEB',
  'system': 'supplier',
  'currency': 'USD',
  'lang': lang,
  'app-id': '0'
};
// 创建
const service = axios.create({
  // baseURL: process.env.VUE_APP_API,
  timeout: 10000,
  withCredentials: true,
  headers: headerObj
});
// 请求拦截
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error.data, 'error.data');
    return Promise.reject(error.data);
  }
)
// 响应拦截
service.interceptors.response.use(
  response => {
    
    if (response.data.code == 1304 || response.data.code === 20007) {
      window.location.href = response.data.data;
    } else if (response.data.code === 401 || response.data.code === 10001) {
      errorHandle(response, 6000);
      window.location.href = window.location.origin;
      return Promise.reject(response.data.message);
    } else if (response.data.code === 204) {
      errorHandle(response.data.msg, 6000, () => (window.location.href = "/"));
      return Promise.reject(response);
    } else if (response.data.code !== 0) {
      errorHandle(response, 6000);
      return Promise.reject(response.data);
    } else {
      if (isPlainObject(response.data.data)) {
        return response.data.data;
      } else if (
        typeof response.data.data === "string" &&
        response.data.data != ""
      ) {
        let data = {};
        try {
          data = JSON.parse(response.data.data);
        } catch (e) {
          data = response.data.data
        }
        return data;
      }else if(response.data.code===0&&!response.data.data){
        return response.data;
      } else {
        return response.data.data;
      }
    }
  },
  error => {
    errorHandle(error.response, 6000);
    let msgCode = JSON.parse(error?.response?.data?.msg).code
    // if (error.response.status === 401 && msgCode == 1304) {
    if (error.response.status === 401) {
      window.location.href = window.location.origin+'/login';
    }
    return Promise.reject(error);
  }
)

export default service;