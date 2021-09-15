import { Loading } from 'vant';
/*
 * @Author: your name
 * @Date: 2021-08-03 15:42:45
 * @LastEditTime: 2021-09-15 12:30:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /m-dmm/src/store/index.ts
 */
import { createStore } from 'vuex'

// 新建store实例
export default createStore({
  state: {
    loading: false
  },
  getters: {
    getLoading(state) {
      return state.loading;
    }
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload
    }
  },
  actions: {
  },

})