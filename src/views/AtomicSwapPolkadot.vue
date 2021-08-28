<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10">
        <div class="text-h5 mb-1">Sell ACU for ETH</div>
        <div class="body-2 mb-4">Acuity accounts are managed by the <a target="_blank" href="https://polkadot.js.org/extension/">Polkadot</a> browser extension.</div>
        <div class="body-2 mb-4">Ethereum accounts are managed by the <a target="_blank" href="https://metamask.io/">Metamask</a> browser extension.</div>
        <v-form v-model="valid">
          <!--
          <v-select v-model="sell_blockchain" :items="sell_blockchains" label="Sell Blockchain"></v-select>
          <v-select v-model="sell_asset" :items="sell_assets" label="Sell Asset"></v-select>
          -->
          <v-select v-model="sell_address" :items="sell_addresses" label="Sell Account" hint='The ACU account you wish to sell from.' persistent-hint class="mb-4"></v-select>
          <v-text-field v-model="sell_value" label="Sell Value" suffix="ACU" hint='How much ACU you wish to sell at this price.' persistent-hint class="mb-4"></v-text-field>
          <!--
          <v-select v-model="buy_blockchain" :items="buy_blockchains" label="Buy Blockchain"></v-select>
          <v-select v-model="buy_asset" :items="buy_assets" label="Buy Asset"></v-select>
          -->
          <v-select v-model="buy_address" :items="buy_addresses" label="Buy Account" hint='The ETH account to receive payment.' persistent-hint class="mb-4"></v-select>
          <v-text-field v-model="price" label="Price" suffix="ETH" hint='Amount of ETH to receive per 1 ACU.' persistent-hint class="mb-4"></v-text-field>
          <v-btn @click="addSellOrder" class="mt-4">Create Sell Order</v-btn>
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
    name: 'AtomicSwapPolkadot',

    data () {
      return {
        sell_blockchains: ['Acuity'],
        sell_blockchain: 'Acuity',
        sell_assets: ['ACU'],
        sell_asset: 'ACU',
        sell_addresses: [] as {}[],
        sell_address: '',
        sell_value: '',
        buy_blockchains: ['Ethereum'],
        buy_blockchain: 'Ethereum',
        buy_assets: ['ETH'],
        buy_asset: 'ETH',
        buy_addresses: [] as {}[],
        buy_address: '',
        price: '',
      }
    },

    async created() {
      const allInjected = await web3Enable('Acuity Browser');
      const allAccounts = await web3Accounts();
      for (let account of allAccounts) {
          this.sell_addresses.push({text: account.meta.name, value: account.address});
      }

      await this.$ethClient.web3.eth.requestAccounts()
      const ethAccounts = await this.$ethClient.web3.eth.getAccounts()
      for (let account of ethAccounts) {
          this.buy_addresses.push({text: account, value: account});
      }
    },

    methods: {
      async addSellOrder(event: any) {
        let buy_address = this.$ethClient.web3.utils.padLeft(this.buy_address, 64);
        let value = this.$ethClient.web3.utils.toWei(this.sell_value);
        let price = this.$ethClient.web3.utils.toWei(this.price);
        const injector = await web3FromAddress(this.sell_address);
        this.$acuityClient.api.tx.atomicSwap
          .addToOrder('0x88888888888888888888888888888888', price, buy_address, value)
          .signAndSend(this.sell_address, { signer: injector.signer }, (status: any) => {
            console.log(status)
          });
      }
    }
  })

</script>
