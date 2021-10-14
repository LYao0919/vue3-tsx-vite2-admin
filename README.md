<!--
 * @Author: luyao
 * @Date: 2021-08-03 15:22:07
 * @LastEditTime: 2021-10-14 21:22:29
 * @Description: 
 * @LastEditors: luyao
 * @FilePath: /vue3-tsx-vite-admin/README.md
-->


```
本项目使用vue3 + tsx + vite +elementPlus 构建的admin项目

项目支持通过gitlab ci/cd  打包配置

1、版本检测  --   线上版本发版后会自动检测提示版本通过

2、页签功能 -- 路由切换自动记录链接跳转记录

3、后续会添加全局主题功能、放大等等功能···


其中dbsTable为项目封装的table组件：

基于el-table、和el-pagination 通过json配置完成表格渲染

配置项分为 configFlag全局配置（包括是否需要显示分页组件、table序列号、序列号名称、table多选、border等功能， 扩展中···）


基于elementPlus封装的dbsForm已完成（elementplus库的时间、日期类组件的jsx版本会报错，已提bug，后续修复后补上）：

支持json配置渲染form-item;

支持form的搜索、验证、是否支持inline、form-item宽度设置、item中元素宽度设置等


```