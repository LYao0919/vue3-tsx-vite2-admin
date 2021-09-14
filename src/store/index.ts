/*
 * @Author: your name
 * @Date: 2021-08-03 15:42:45
 * @LastEditTime: 2021-08-31 14:27:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /odm-m/src/store/index.ts
 */
import { createStore } from 'vuex'

const defaultState: any = {
  count: 0,
  tabMenus: [
    {name: 'StockList', scrollHeight: 0}
  ],
  stockListItem: {},
  checkedIndx: 0,
  supplierId: 0,
}
// 新建store实例
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++
    },
     // 设置tab item 的scrollHeight值
    setScrollHeight(state, payload: {name: string; height: number}) {
      const tabMenus = state.tabMenus;
      for (let i = 0; i < tabMenus.length; i++) {
        if (tabMenus[i].name === payload.name) {
          tabMenus[i].scrollHeight = payload.height;
          break;
        }
      }
    },
    setStockListItem(state, payload) {
      state.stockListItem = {...payload}
    },
    setCheckedIndx(state, payload) {
      state.checkedIndx = payload
    },
    setSupplierId(state, payload) {
      state.supplierId = payload
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }

  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})