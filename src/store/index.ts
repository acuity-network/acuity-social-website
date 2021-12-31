import Vue from 'vue'
import Vuex from 'vuex'
import { encodeAddress } from '@polkadot/keyring';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderBookAcu: [],
    orderBookEth: [],
    ordersAcu: {},
    ordersEth: {},
    accountsAcu: [],
    addressesAcu: [],
    addressEth: "",
  },
  mutations: {
    orderBookAcuSet(state: any, orders: []) {
      state.orderBookAcu = orders;
    },
    orderBookEthSet(state: any, orders: []) {
      state.orderBookEth = orders;
    },
    orderAcuSet(state: any, order: any) {
      order.order.seller = encodeAddress('0x' + order.order.seller);
      Vue.set(state.ordersAcu, order.order.orderId, order);
    },
    orderEthSet(state: any, order: any) {
      Vue.set(state.ordersEth, order.order.orderId, order);
    },
    accountsAcuSet(state: any, accounts: any[]) {
      state.accountsAcu = [];
      state.addressesAcu = [];

      for (let account of accounts) {
          state.accountsAcu.push({text: account.meta.name, value: account.address});
          state.addressesAcu.push(account.address);
      }
    },
    addressEthSet(state: any, address: string) {
      state.addressEth = address;
    },
  },
  actions: {
  },
  modules: {
  },
});
