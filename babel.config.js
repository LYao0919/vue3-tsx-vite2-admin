/*
 * @Author: your name
 * @Date: 2021-08-03 17:05:56
 * @LastEditTime: 2021-10-08 16:57:16
 * @LastEditors: luyao
 * @Description: In User Settings Edit
 * @FilePath: /vue3-tsx-vite-admin/babel.config.js
 */
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`
        }
      }
    ]
  ],
  presets: ['@vue/cli-plugin-babel/preset']

}