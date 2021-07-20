<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-alert type="info">The Acuity DEX is currently under development. It will enable ACU to be traded with ETH and ETC peer-to-peer.</v-alert>
      </v-col>
    </v-row>

    <v-row>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title><router-link to="/atomic-swap/polkadot">Create Polkadot Sell Order</router-link></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title><router-link to="/atomic-swap/ethereum">Create Ethereum Sell Order</router-link></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-col cols="12" md="10">
        <v-timeline :dense="true" style="margin: 0 20px;">
          <v-timeline-item v-for="(item, i) in items" :key="i"
            :color="item.completed ? '#E6007A' : primary"
            :icon="item.completed ? 'mdi-check' : ''"
            >
            <v-card class="elevation-2">
              <v-card-title style="word-break: normal;">{{ item.title }}</v-card-title>
              <v-card-text v-html="item.text"></v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'AtomicSwap',

    data: () => ({
      items: [
        {
          title: 'Design system',
          text: 'Perform detailed research and analysis to determine how ACU can utilize <a target="_blank" href="https://en.bitcoin.it/wiki/Atomic_swap"atomic swaps</a> to trade with Ethereum blockchains.',
          completed: true,
        },
        {
          title: 'Write smart contracts',
          text: '<a target="_blank" href="https://github.com/acuity-social/acuity-atomic-swap">Two solidity smart contracts</a> have been written: one for selling and one for buying. Both contracts will be deployed on each participating blockchain.',
          completed: true,
        },
        {
          title: 'Unit tests',
          text: 'Write unit tests for the smart contracts using the <a target="_blank" href="https://dapp.tools/dapp/">Dapp</a> framework.',
          completed: true,
        },
        {
          title: 'Enable Contracts pallet in Acuity runtime',
          text: 'The Acuity Substrate node implementation needs to be rebuilt to support the Contracts pallet.',
          completed: true,
        },
        {
          title: 'Off-chain worker to index order book',
          text: 'Only data required for consensus is stored in contract state. An <a target="_blank" href="https://substrate.dev/docs/en/knowledgebase/learn-substrate/off-chain-features#off-chain-workers">off-chain worker</a> needs to be written to index information such as the order book.',
          completed: false,
        },
        {
          title: 'Create basic frontend',
          text: 'A simple user interface will be created using <a target="_blank" href="https://vuetifyjs.com/">Vuetify</a>.',
          completed: false,
        },
        {
          title: 'Optimize smart contracts',
          text: 'The contracts will need to be optimized for minimum gas usage to make fees on Ethereum as low as possible.',
          completed: false,
        },
        {
          title: 'Deploy contracts on Acuity',
          text: 'On Acuity the smart contracts can either by compiled with <a target="_blank" href="https://solang.readthedocs.io/">Solang</a> and deployed on the <a target="_blank" href="https://substrate.dev/docs/en/knowledgebase/smart-contracts/contracts-pallet">Contracts</a> pallet, or compiled with <a target="_blank" href="https://soliditylang.org/">Solc</a> and deployed on the <a target="_blank" href="https://github.com/paritytech/frontier">EVM</a> pallet.',
          completed: false,
        },
        {
          title: 'Deploy contracts on Ethereum',
          text: 'While it is quite expensive to deploy contracts on Ethereum, this only has to be done once.',
          completed: false,
        },
        {
          title: 'Launch exchange',
          text: 'A rudimentary version of the exchange will be launched.',
          completed: false,
        },
        {
          title: 'Price and volume service',
          text: 'A service will be written to monitor the blockchains and maintain price and volume information. This will be able to be queried by external services such as Coin Gecko, etc',
          completed: false,
        },
        {
          title: 'Add Ethereum Classic support',
          text: 'Ethereum has very expensive transaction fees. A simple way to avoid this is to also enable trading with Ethereum Classic.',
          completed: false,
        },
        {
          title: 'Improve frontend',
          text: 'There will be endless scope to improve the user interface, for example by adding graphs.',
          completed: false,
        },
      ],
    }),
  })
</script>
