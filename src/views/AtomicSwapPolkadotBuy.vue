<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10">
        <div class="text-h5 mb-1">Buy ACU</div>
        <v-form v-model="valid">
          <v-btn @click="buy" class="mt-4">Buy</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  let JSONbig = require('json-bigint')({ useNativeBigInt: true })
  import {
    web3Accounts,
    web3Enable,
    web3FromAddress,
    web3ListRpcProviders,
    web3UseRpcProvider
  } from '@polkadot/extension-dapp';

  export default Vue.extend({
    name: 'AtomicSwapPolkadot',

    props: {
      orderId: {
        type: String,
        required: true,
      },
    },

    data () {
      return {
        valid: true,
        buy_addresses: [] as {}[],
      }
    },

    async created() {
      await this.$ethClient.web3.eth.requestAccounts()
      const ethAccounts = await this.$ethClient.web3.eth.getAccounts()
      for (let account of ethAccounts) {
          this.buy_addresses.push({text: account, value: account});
      }
    },

    methods: {
      async buy() {
      },
    }
  })

</script>
