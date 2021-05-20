<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10">
        <v-data-table
          :headers="headers"
          :items="items"
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {
    web3Accounts,
    web3Enable,
    web3FromAddress,
    web3ListRpcProviders,
    web3UseRpcProvider
  } from '@polkadot/extension-dapp';

  export default Vue.extend({
    name: 'Accounts',

    data () {
      return {
        headers: [
          { text: 'Name', value: 'name' },
          { text: 'Address', value: 'address' },
        ],
        items: [],
      }
    },

    async created() {
      const allInjected = await web3Enable('Acuity Browser');
      const allAccounts = await web3Accounts();
      for (let account of allAccounts) {
        this.items.push({
          address: account.address,
          name: account.meta.name,
        });
      }
    },

  })
</script>
