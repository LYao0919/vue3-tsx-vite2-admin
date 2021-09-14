/*
 * @Author: your name
 * @Date: 2021-08-19 16:18:30
 * @LastEditTime: 2021-08-19 16:20:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /odm-m/src/utils/cookie.ts
 */
export const setCookie = (name: any, value: any, timer=1)=>{
  let Days = timer; //默认将被保存 1 天
  let exp  = new Date();
  exp.setTime(exp.getTime() + Days*24*60*60*1000);
  document.cookie = name + "="+ escape(value) +";expires="+ exp.toString();
}

/**
 * @author xxxx
 * @description 获取cookie
 * @param {String} name 需要获取cookie的key
 */
export const getCookie = (name: any)=>{
  let arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
  if(arr != null){
    return unescape(arr[2])
  }else{
    return null
  }
}

/**
 * @author xxxx
 * @description 删除cookie
 * @param {String} name 需要删除cookie的key
 */
export const clearCookie = (name: any) => {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval=getCookie(name);
  if(cval!=null) document.cookie=name +"="+cval+";expires="+exp.toString();
}