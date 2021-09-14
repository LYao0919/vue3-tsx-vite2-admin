/*
 * @Author: your name
 * @Date: 2021-08-05 14:58:51
 * @LastEditTime: 2021-08-31 12:03:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /odm-m/src/utils/comm.ts
 */
import { useRouter } from "vue-router";
const router = useRouter();

export const goBack = ()=>{
  router.go(-1)
}
/**
 * 延时函数
 * @param {时间 ： 毫秒秒} time
 * @param {要执行的函数 } fn
 */
export const sleepFun = (time: number, fn: any) => {
  return new Promise<void>((resolve): any => {
    setTimeout(() => {
      fn && fn();
      return resolve();
    }, time);
  });
};
// 补位
const padding = (text: string, len: number) => {
  // 这里注意一下，如果传入的字符串比较长，会被截断，例如padding('123456',3)将得到456
  return (new Array(len).join('0') + text).slice(-len);
}
/**
 * 时间格式化成字符串
 * @param date {Date} 可选，当patten存在时必填
 * @param patten {String} 格式化字符串，支持yyyy,MM,dd,HH,mm,ss,w,yy,M,d,H,m,s,W(其中w表示星期的阿拉伯数字，W表示星期的中文数，英文月份和星期自己加)
 * @returns {string}
 * @example
 * ```javascript
 * var dateUtils = require('date.js');
 * dateUtils.format() //2017-01-01 00:00:00
 * dateUtils.format(new Date(),'HH:mm:ss') // 12:00:00
 * dateUtils.format(new Date(),'今天是yyyy年M月dd日 H时mm分s秒 星期W') //今天是2017年1月01日 2时46分8秒 星期三
 * ```
 */
export const formatDate = (date: Date | string, patten: string): string => {
  if (!date) return ''
  const oDate = typeof date === 'string' ? new Date(date) : date
  patten = patten || 'yyyy-MM-dd HH:mm:ss';
  return patten.replace(/yyyy|MM|dd|yy|M|d|HH|mm|ss|H|m|s|w|W/gi, function (str) {
    let text: any = '';
    switch (str) {
      case 'yyyy':
      case 'yy':
        text = oDate.getFullYear();
        break;
      case 'MM':
        if (oDate.getMonth() + 1 < 10) {
          text = '0' + (oDate.getMonth() + 1);
        } else {
          text = oDate.getMonth() + 1;
        }
        break;
      case 'M':
        text = oDate.getMonth() + 1;
        break;
      case 'dd':
        if (oDate.getDate() < 10) {
          text = '0' + oDate.getDate();
        } else {
          text = oDate.getDate();
        }
        break;
      case 'd':
        text = oDate.getDate();
        break;
      case 'HH':
        if (oDate.getHours() < 10) {
          text = '0' + oDate.getHours();
        } else {
          text = oDate.getHours();
        }
        break;
      case 'H':
        text = oDate.getHours();
        break;
      case 'mm':
        if (oDate.getMinutes() < 10) {
          text = '0' + oDate.getMinutes();
        } else {
          text = oDate.getMinutes();
        }
        break;
      case 'm':
        text = oDate.getMinutes();
        break;
      case 'ss':
        if (oDate.getSeconds() < 10) {
          text = '0' + oDate.getSeconds();
        } else {
          text = oDate.getSeconds();
        }
        break;
      case 's':
        text = oDate.getSeconds();
        if (text == '0') {
          text = '00'
        }
        break;
      case 'W':
        text = ['一', '二', '三', '四', '五', '六', '日'][oDate.getDay()];
        break;
      case 'w':
        text = oDate.getDay();
        break;
    }

    if (text && str.length != String(text).length) {
      text = padding(text, str.length);
    }

    return text;
  });
};
// 重置表单
export const reactForm = (data: any) =>{
  Object.keys(data).forEach((item) => {
    data[item] = null;
  });
}

