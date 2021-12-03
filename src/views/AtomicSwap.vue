<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10">
        <v-alert type="info">The Acuity DEX is currently under development.</v-alert>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="10" class="pb-0">
        <v-card>
          <v-card-text>
            <div class="body-2 mb-4">Acuity DEX is an <a target="_blank" href="https://www.youtube.com/watch?v=WkXUz3UFn6Y">Atomic Swap</a> exchange that enables direct, fully decentralized trade between blockchains. The ACU blockchain is used to facilitate trading by providing account trust networks, reputation, and public reviews of past trades.</div>
            <div class="text-h5 mb-1">Which cryptocurrencies will the Acuity DEX support?</div>
            <div class="body-2 mb-4">Initially the exchange will just support the ACU / ETH pair.</div>
            <div class="body-2 mb-4">In order for a platform to participate in the DEX it will need to have either smart contract functionality, or be built with Substrate and install the Acuity Atomic Swap Pallet. Initially the DEX will only support blockchains that have browser plugins, e.g. Metamask (Ethereum), Polkadot (all Substrate chains), Avalanche.</div>
            <div class="body-2 mb-4">More Substrate chains will be able to be added if they enable the Contracts, EVM, or Acuity Atomic Swap pallets. This is the current list of chains that will be able to connect to the exchange:</div>
            <template>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                      </th>
                      <th class="text-left">
                        Blockchain
                      </th>
                      <th class="text-left">
                        Coins
                      </th>
                      <th class="text-left" v-if="!dense">
                        Connector
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in cryptos"
                      :key="item.name"
                    >
                      <td><v-img max-height="50" width="20" :src="item.logo"></v-img></td>
                      <td><a target="_blank" :href="item.link">{{ item.name }}</a></td>
                      <td>{{ item.coins }}</td>
                      <td v-if="!dense">{{ item.connector }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <!--
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
    -->
      <v-col cols="12" md="10" class="pt-0">
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
      cryptos: [
        {
          logo: 'images/acuity-logo.svg',
          name: 'Acuity',
          link: 'https://acuity.social/',
          coins: 'ACR, ACU, ACF, ACT, and tokens',
          connector: 'Acuity Atomic Swap pallet',
        },
        {
          logo: 'coin_logos/eth-diamond-purple.png',
          name: 'Ethereum',
          link: 'https://ethereum.org/',
          coins: 'ETH and ERC20 tokens',
          connector: 'Smart contracts (Solidity) => EVM',
        },
        {
          logo: 'coin_logos/optimism.svg',
          name: 'Optimism',
          link: 'https://optimism.io/',
          coins: 'WETH and ERC20 tokens',
          connector: 'Smart contracts (Solidity) => OVM',
        },
        {
          logo: 'coin_logos/arbitrum.svg',
          name: 'Arbitrum',
          link: 'https://arbitrum.io/',
          coins: 'ETH and ERC20 tokens',
          connector: 'Smart contracts (Solidity) => EVM',
        },
        {
          logo: 'coin_logos/etc_logo_green.png',
          name: 'Ethereum Classic',
          link: 'https://ethereumclassic.org/',
          coins: 'ETC and ERC20 tokens',
          connector: 'Smart contracts (Solidity) => EVM',
        },
        {
          logo: 'coin_logos/moonbeam.png',
          name: 'Moonbeam',
          coins: 'GLMR, MOVR and tokens',
          link: 'https://moonbeam.network/',
          connector: 'Smart contracts (Solidity) => EVM pallet',
        },
        {
          logo: 'coin_logos/kulupu.svg',
          name: 'Kulupu',
          coins: 'KLP and tokens',
          link: 'https://kulupu.network/',
          connector: 'Smart contracts (Solidity / Ink!) => Contracts pallet',
        },
        {
          logo: 'coin_logos/neatcoin.svg',
          name: 'Neatcoin',
          coins: 'NEAT and tokens',
          link: 'https://neatcoin.org/',
          connector: 'Smart contracts (Solidity / Ink!) => Contracts pallet',
        },
        {
          logo: 'coin_logos/AVAX_Token_Red.png',
          name: 'Avalanche',
          link: 'https://www.avax.network/',
          coins: 'AVAX and tokens',
          connector: 'Smart contracts (Solidity) => EVM',
        },
        {
          logo: 'coin_logos/solana.svg',
          name: 'Solana',
          link: 'https://solana.com/',
          coins: 'SOL and tokens',
          connector: 'Rust on-chain program',
        },
      ],
      items: [
        {
          title: 'Design system',
          text: 'Perform detailed research and analysis to determine how ACU can utilize <a target="_blank" href="https://en.bitcoin.it/wiki/Atomic_swap"atomic swaps</a> to trade with Ethereum blockchains.',
          completed: true,
        },
        {
          title: 'Write Solidity smart contracts',
          text: '<a target="_blank" href="https://github.com/acuity-social/acuity-atomic-swap-solidity">Two solidity smart contracts</a> have been written: one for selling and one for buying. Both contracts will be deployed on each participating blockchain.',
          completed: true,
        },
        {
          title: 'Unit tests',
          text: 'Write unit tests for the smart contracts using the <a target="_blank" href="https://dapp.tools/dapp/">Dapp</a> framework.',
          completed: true,
        },
        {
          title: 'Write Substrate pallet',
          text: 'A <a target="_blank" href="https://github.com/acuity-social/acuity-atomic-swap-pallet">Substrate pallet</a> has been written for interfacing with the exchange. All Substrate chains can use this instead of the smart contracts.',
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
          title: 'Upgrade the Acuity runtime with the atomic swap pallet.',
          text: 'Once the exchange is ready to go live, the Acuity blockchain will need to be upgraded.',
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
          title: 'Add more coins',
          text: 'All of the coins in the table above will be added to the platform.',
          completed: false,
        },
        {
          title: 'Improve frontend',
          text: 'There will be endless scope to improve the user interface, for example by adding graphs.',
          completed: false,
        },
      ],
    }),
    computed: {
      dense () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return true
          case 'sm': return true
          case 'md': return false
          case 'lg': return false
          case 'xl': return false
        }
      },
    },
  })
</script>
