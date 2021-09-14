/*
 * @Author: your name
 * @Date: 2021-08-03 15:42:45
 * @LastEditTime: 2021-09-14 11:03:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /m-dmm/src/store/index.ts
 */
import { createStore } from 'vuex'

// 新建store实例
export default createStore({
  state: {
    count: 0,
    tabMenus: [
      { name: 'StockList', scrollHeight: 0 }
    ],
    stockListItem: {},
    checkedIndx: 0,
    supplierId: 0,
  },
  getters: {

  },
  mutations: {
    // 设置tab item 的scrollHeight值
    setScrollHeight(state, payload: { name: string; height: number }) {
      const tabMenus = state.tabMenus;
      for (let i = 0; i < tabMenus.length; i++) {
        if (tabMenus[i].name === payload.name) {
          tabMenus[i].scrollHeight = payload.height;
          break;
        }
      }
    },
    setStockListItem(state, payload) {
      state.stockListItem = { ...payload }
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

})