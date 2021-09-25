<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10">
        <div class="text-h5 mb-1">Sell ETH for ACU</div>
        <div class="body-2 mb-4">Acuity accounts are managed by the <a target="_blank" href="https://polkadot.js.org/extension/">Polkadot</a> browser extension.</div>
        <div class="body-2 mb-4">Ethereum accounts are managed by the <a target="_blank" href="https://metamask.io/">Metamask</a> browser extension.</div>
        <v-form v-model="valid">
        <!--
          <v-select v-model="sell_asset" :items="sell_assets" label="Sell Asset"></v-select>
        -->
          <v-select v-model="sell_address" :items="sell_addresses" label="Sell Account"></v-select>
          <v-text-field v-model="sell_value" label="Sell Value"></v-text-field>
        <!--
          <v-select v-model="buy_blockchain" :items="buy_blockchains" label="Buy Blockchain"></v-select>
          <v-select v-model="buy_asset" :items="buy_assets" label="Buy Asset"></v-select>
        -->
          <v-select v-model="buy_address" :items="buy_addresses" label="Buy Account"></v-select>
          <v-text-field v-model="price" label="Price"></v-text-field>
          <v-btn @click="addSellOrder">Create Sell Order</v-btn>
        </v-form>
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
        sell_assets: ['ETH'],
        sell_asset: 'ETH',
        sell_addresses: [] as {}[],
        sell_address: '',
        sell_value: '',
        buy_blockchains: ['Acuity'],
        buy_blockchain: 'Acuity',
        buy_assets: ['ACU'],
        buy_asset: 'ACU',
        buy_addresses: [] as {}[],
        buy_address: '',
        price: '',
      }
    },

    async created() {
      await this.$ethClient.web3.eth.requestAccounts()
      const allAccounts = await this.$ethClient.web3.eth.getAccounts()
      for (let account of allAccounts) {
          this.sell_addresses.push({text: account, value: account});
      }
      for (let account of this.$acuityClient.accounts) {
          this.buy_addresses.push({text: account.meta.name, value: account.address});
      }
    },

    methods: {
      async addSellOrder(event: any) {
        let buy_address = this.$ethClient.web3.utils.padLeft(this.buy_address, 64);
        let value = this.$ethClient.web3.utils.toWei(this.sell_value);
        let price = this.$ethClient.web3.utils.toWei(this.price);
        this.$ethClient.atomicSwapSell.methods.addToOrder("0x8888888888888888888888888888888888888888888888888888888888888888", "0x8888888888888888888888888888888888888888888888888888888888888888").send({from: this.sell_address, value: value});
      }
    }
  })
</script>
