import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderBookAcu: [],
    ordersAcu: {},
  },
  mutations: {
    orderBookAcuSet(state: any, orders: []) {
      state.orderBookAcu = orders;
    },
    orderAcuSet(state: any, order: any) {
      Vue.set(state.ordersAcu, order.order_id, order);
    },
  },
  actions: {
  },
  modules: {
  },
});
