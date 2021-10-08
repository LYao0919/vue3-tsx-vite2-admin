/*
 * @Author: your name
 * @Date: 2021-08-03 15:42:45
 * @LastEditTime: 2021-10-03 17:50:16
 * @LastEditors: luyao
 * @Description: In User Settings Edit
 * @FilePath: /m-dmm的副本/src/store/index.ts
 */
import { createStore } from 'vuex'

// 新建store实例
export default createStore({
  state: {
    loading: false,
    affixMenusList: <any>[], // tab导航
    isCollapse: false, // 菜单是否折叠

  },
  getters: {
    getLoading(state) {
      return state.loading;
    },
    getAffixMenusList(state) {
      return state.affixMenusList;
    },
    getCollapse(state) {
      return state.isCollapse;
    },
  },

  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    },
    // 设置头部菜单栏
    setAffixMenusList(state, payload) {
      state.affixMenusList.push(payload);
    },
    delAffixMenusList(state, payload) {
      state.affixMenusList.splice(payload.index, 1);
    },
    setCollapse(state, payload) {
      state.isCollapse = payload
    }
  },
  actions: {
  },

})