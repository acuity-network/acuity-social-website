import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sellOrdersAcu: [],
  },
  mutations: {
    sellOrdersAcuSet(state: any, orders: []) {
      state.sellOrdersAcu = orders;
    },
  },
  actions: {
  },
  modules: {
  }
})
