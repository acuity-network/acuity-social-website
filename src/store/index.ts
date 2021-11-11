import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderBookAcu: [],
    ordersAcu: {},
    accountsAcu: [],
    addressesAcu: [],
    accountsEth: [],
    addressesEth: [],
  },
  mutations: {
    orderBookAcuSet(state: any, orders: []) {
      state.orderBookAcu = orders;
    },
    orderAcuSet(state: any, order: any) {
      Vue.set(state.ordersAcu, order.order.orderId, order);
    },
    accountsAcuSet(state: any, accounts: any[]) {
      state.accountsAcu = [];
      state.addressesAcu = [];

      for (let account of accounts) {
          state.accountsAcu.push({text: account.meta.name, value: account.address});
          state.addressesAcu.push(account.address);
      }
    }
  },
  actions: {
  },
  modules: {
  },
});
