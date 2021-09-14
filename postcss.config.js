/*
 * @Author: your name
 * @Date: 2021-08-03 16:46:19
 * @LastEditTime: 2021-08-04 10:41:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /odm-m/postcss.config.js
 */
module.exports = {
  "plugins": {
    "postcss-pxtorem": {
      rootValue: 37.5, // Vant 官方根字体大小是 37.5
      propList: ['*'],
      selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
    }
  }
}