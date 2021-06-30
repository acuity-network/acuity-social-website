<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="10">
        <v-text-field v-model="price" label="Price"></v-text-field>
        <v-text-field v-model="value" label="Value"></v-text-field>
        <v-text-field v-model="foreign_address" label="Foreign address"></v-text-field>
        <v-btn @click="addSellOrder">Add Sell Order</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {
    web3Accounts,
    web3Enable,
    web3FromAddress,
    web3ListRpcProviders,
    web3UseRpcProvider
  } from '@polkadot/extension-dapp';

  export default Vue.extend({
    name: 'AtomicSwapTest',

    data () {
      return {
        price: '',
        value: '',
        foreign_address: '',
      }
    },

    methods: {
      async addSellOrder(event: any) {
        console.log(this.$activeAccount.get());
        const allInjected = await web3Enable('Acuity Browser');
        const allAccounts = await web3Accounts();
        const SENDER = this.$activeAccount.get();
        const injector = await web3FromAddress(SENDER);
        this.$acuityClient.api.tx.atomicSwap
          .addToOrder('0x', this.price, this.foreign_address, this.value)
          .signAndSend(SENDER, { signer: injector.signer }, (status: any) => {
            console.log(status)
          });
      }
    }
  })
</script>
