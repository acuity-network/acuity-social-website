<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10">
        <div class="text-h5 mb-1">Create Polkadot sell order</div>
        <v-select v-model="blockchain" :items="blockchains" label="Blockchain"></v-select>
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
    name: 'AtomicSwapPolkadot',

    data () {
      return {
        blockchains: ['Acuity'],
        blockchain: 'Acuity',
        assets: ['ACU'],
        asset: 'ACU',
        addresses: [] as {}[],
        address: '',
        price: '',
        value: '',
        foreign_address: '',
      }
    },

    async created() {
      const allInjected = await web3Enable('Acuity Browser');
      const allAccounts = await web3Accounts();

      console.log(allAccounts);

      for (let account of allAccounts) {
          this.addresses.push({text: account.meta.name, value: account.address});
      }

      console.log(this.addresses)
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
