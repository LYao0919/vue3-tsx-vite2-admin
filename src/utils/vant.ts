/*
 * @Author: your name
 * @Date: 2021-08-02 23:57:28
 * @LastEditTime: 2021-08-03 17:13:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-vite-ts-Vant/src/utils/vant.ts
 */
import {
  Button,
  Popup,
  Cell,
  CellGroup
 } from 'vant'
const ant = {
  install(Vue: {
    component: (arg0: string, arg1: any) => void;
  }) {
    Vue.component(Button.name, Button);
    Vue.component(Popup.name, Popup);
    Vue.component(Cell.name, Cell);
    Vue.component(CellGroup.name, CellGroup);
  }
};
export default ant;
