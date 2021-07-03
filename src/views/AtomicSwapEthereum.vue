<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10">
        <div class="text-h5 mb-1">Create Ethereum sell order</div>
        <v-select v-model="asset" :items="assets" label="Asset"></v-select>
        <v-select v-model="address" :items="addresses" label="Account"></v-select>
        <v-text-field v-model="price" label="Price"></v-text-field>
        <v-text-field v-model="value" label="Value"></v-text-field>
        <v-text-field v-model="foreign_address" label="Foreign address"></v-text-field>
        <v-btn @click="addSellOrder">Create Sell Order</v-btn>
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
    name: 'AtomicSwapEthereum',

    data () {
      return {
        assets: ['ETH'],
        asset: 'ETH',
        addresses: [] as {}[],
        address: '',
        price: '',
        value: '',
        foreign_address: '',
      }
    },

    async created() {
      await this.$ethClient.web3.eth.requestAccounts()
      const allAccounts = await this.$ethClient.web3.eth.getAccounts()
      for (let account of allAccounts) {
          this.addresses.push({text: account, value: account});
      }
    },

    methods: {
      async addSellOrder(event: any) {
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
