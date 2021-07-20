<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10">
        <div class="text-h5 mb-1">Create Ethereum sell order</div>
        <v-select v-model="sell_asset" :items="sell_assets" label="Sell Asset"></v-select>
        <v-select v-model="sell_address" :items="sell_addresses" label="Sell Account"></v-select>
        <v-text-field v-model="sell_value" label="Sell Value"></v-text-field>
        <v-select v-model="buy_blockchain" :items="buy_blockchains" label="Buy Blockchain"></v-select>
        <v-select v-model="buy_asset" :items="buy_assets" label="Buy Asset"></v-select>
        <v-select v-model="buy_address" :items="buy_addresses" label="Buy Account"></v-select>
        <v-text-field v-model="price" label="Price"></v-text-field>
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
      const allInjected = await web3Enable('Acuity Browser');
      const buyAccounts = await web3Accounts();
      for (let account of buyAccounts) {
          this.buy_addresses.push({text: account.meta.name, value: account.address});
      }
    },

    methods: {
      async addSellOrder(event: any) {
/*        const SENDER = this.$activeAccount.get();
        const injector = await web3FromAddress(SENDER);
        this.$acuityClient.api.tx.atomicSwap
          .addToOrder('0x', this.price, this.foreign_address, this.value)
          .signAndSend(SENDER, { signer: injector.signer }, (status: any) => {
            console.log(status)
          });
*/
      }
    }
  })
</script>
