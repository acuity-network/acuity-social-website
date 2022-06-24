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
          logo: 'coin_logos/arbitrum.svg',
          name: 'Arbitrum',
          link: 'https://arbitrum.io/',
          coins: 'ETH and ERC20 tokens',
          connector: 'Smart contracts (Solidity) => EVM',
        },
        {
          logo: 'coin_logos/arbitrum.svg',
          name: 'Arbitrum on xDai',
          link: 'https://arbitrum.io/',
          coins: 'ETH and ERC20 tokens',
          connector: 'Smart contracts (Solidity) => EVM',
        },
        {
          logo: 'coin_logos/astar.png',
          name: 'Astar & Shiden',
          link: 'https://astar.network/',
          coins: 'ASTR and SDN',
          connector: '',
        },
        {
          logo: 'coin_logos/aurora.svg',
          name: 'Aurora',
          link: 'https://aurora.dev/',
          coins: '',
          connector: '',
        },
        {
          logo: 'coin_logos/AVAX_Token_Red.png',
          name: 'Avalanche',
          link: 'https://www.avax.network/',
          coins: 'AVAX and tokens',
          connector: 'Smart contracts (Solidity) => EVM',
        },
        {
          logo: '',
          name: 'Binance Smart Chain',
          link: 'https://www.bnbchain.org/en/smartChain',
          coins: '',
          connector: '',
        },
        {
          logo: 'coin_logos/boba.jpg',
          name: 'Boba',
          link: 'https://boba.network/',
          coins: '',
          connector: '',
        },
        {
          logo: '',
          name: 'Callisto',
          link: 'https://callisto.network/',
          coins: '',
          connector: '',
        },
        {
          logo: 'coin_logos/celo.svg',
          name: 'Celo',
          link: 'https://celo.org/',
          coins: '',
          connector: '',
        },
        {
          logo: 'coin_logos/coinex.png',
          name: 'CoinEx Smart Chain',
          link: 'https://www.coinex.org/',
          coins: '',
          connector: '',
        },
        {
          logo: 'coin_logos/cronos.ico',
          name: 'Cronos',
          link: 'https://cronos.org/',
          coins: '',
          connector: '',
        },
        {
          logo: 'coin_logos/elastos.webp',
          name: 'Elastos',
          link: 'https://www.elastos.org/',
          coins: '',
          connector: '',
        },
        {
          logo: 'coin_logos/oasis.png',
          name: 'Emerald ParaTime (Oasis)',
          link: 'https://oasisprotocol.org/',
          coins: '',
          connector: '',
        },
        {
          logo: '',
          name: 'EOS',
          link: 'https://eoscommunity.org/',
          coins: '',
          connector: '',
        },
        {
          logo: 'coin_logos/eth-diamond-purple.png',
          name: 'Ethereum',
          link: 'https://ethereum.org/',
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
          logo: 'coin_logos/expanse.png',
          name: 'Expanse',
          link: 'https://expanse.tech/',
          coins: '',
          connector: '',
        },
        {
          logo: '',
          name: 'Fantom',
          link: 'https://fantom.foundation/',
          coins: '',
          connector: '',
        },
        {
          logo: '',
          name: 'Fuse',
          link: 'https://fuse.io/',
          coins: '',
          connector: '',
        },
        {
          logo: '',
          name: 'Fusion',
          link: 'https://www.fusion.org/',
          coins: '',
          connector: '',
        },
        {
          logo: '',
          name: 'Gnosis Chain (formerly xDai)',
          link: 'https://www.gnosischain.com/',
          coins: '',
          connector: '',
        },
        {
          logo: '',
          name: 'Harmony',
          link: 'https://www.harmony.one/',
          coins: '',
          connector: '',
        },
        {
          logo: '',
          name: 'HECO Chain',
          link: 'https://www.hecochain.com/',
          coins: '',
          connector: '',
        },
        {
          logo: 'coin_logos/hoo.png',
          name: 'Hoo Smart Chain',
          link: 'https://www.hoosmartchain.com/',
          coins: '',
          connector: '',
        },
        {
          logo: 'coin_logos/iotex.svg',
          name: 'IoTeX',
          link: 'https://iotex.io/',
          coins: '',
          connector: '',
        },
        {
          logo: 'coin_logos/klaytn.png',
          name: 'Klaytn',
          link: 'https://klaytn.foundation/',
          coins: '',
          connector: '',
        },
        {
          logo: '',
          name: 'Kucoin Community Chain',
          link: 'https://www.kcc.io/',
          coins: '',
          connector: '',
        },
        {
          logo: 'coin_logos/kulupu.svg',
          name: 'Kulupu',
          coins: 'KLP and tokens',
          link: 'https://kulupu.network/',
          connector: 'Smart contracts (Solidity / Ink!) => Contracts pallet',
        },
        {
          logo: '',
          name: 'Metis',
          link: 'https://www.metis.io/',
          coins: '',
          connector: '',
        },
        {
          logo: 'coin_logos/moonbeam.png',
          name: 'Moonbeam',
          coins: 'GLMR, MOVR and tokens',
          link: 'https://moonbeam.network/',
          connector: 'Smart contracts (Solidity) => EVM pallet',
        },
        {
          logo: 'coin_logos/nahmii.png',
          name: 'Nahmii 2.0',
          link: 'https://www.nahmii.io/',
          coins: '',
          connector: '',
        },
        {
          logo: 'coin_logos/neatcoin.svg',
          name: 'Neatcoin',
          coins: 'NEAT and tokens',
          link: 'https://neatcoin.org/',
          connector: 'Smart contracts (Solidity / Ink!) => Contracts pallet',
        },
        {
          logo: 'coin_logos/okc.png',
          name: 'OKC (OKX)',
          link: 'https://www.okx.com/okc',
          coins: '',
          connector: '',
        },
        {
          logo: 'coin_logos/optimism.svg',
          name: 'Optimism',
          link: 'https://optimism.io/',
          coins: 'WETH and ERC20 tokens',
          connector: 'Smart contracts (Solidity) => OVM',
        },
        {
          logo: 'coin_logos/polygon.png',
          name: 'Polygon',
          link: 'https://polygon.technology/solutions/polygon-pos/',
          coins: '',
          connector: '',
        },
        {
          logo: '',
          name: 'RSK',
          link: 'https://www.rsk.co/',
          coins: '',
          connector: '',
        },
        {
          logo: 'coin_logos/bitcoin-cash-circle.svg',
          name: 'SmartBCH',
          link: 'https://build.cash/smartbchstart/',
          coins: 'BCH and tokens',
          connector: 'Smart contracts (Solidity) => EVM',
        },
        {
          logo: 'coin_logos/solana.svg',
          name: 'Solana',
          link: 'https://solana.com/',
          coins: 'SOL and tokens',
          connector: 'Rust on-chain program',
        },
        {
          logo: '',
          name: 'Flare',
          link: 'https://flare.xyz/',
          coins: '',
          connector: '',
        },
        {
          logo: '',
          name: 'Syscoin',
          link: 'https://syscoin.org/',
          coins: '',
          connector: '',
        },
        {
          logo: '',
          name: 'Telos',
          link: 'https://www.telos.net/',
          coins: '',
          connector: '',
        },
        {
          logo: '',
          name: 'Theta',
          link: 'https://www.thetatoken.org/',
          coins: 'TFUEL',
          connector: '',
        },
        {
          logo: '',
          name: 'ThunderCore',
          link: 'https://www.thundercore.com/',
          coins: '',
          connector: '',
        },
        {
          logo: '',
          name: 'Wanchain',
          link: 'https://www.wanchain.org/',
          coins: '',
          connector: '',
        },
        {
          logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDMiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCA0MyAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi42NTM5IDEyLjQ5MTVMMzAuODM3OCAwLjcxNjc0M1Y5LjM0TDE5LjEwNTUgMTcuOTczOUwzMC44Mzc4IDE3Ljk4MlYyNC4yNjYyTDQyLjY1MzkgMTIuNDkxNVoiIGZpbGw9IiM0RTUyOUEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjk5ODA0NyAxMi40ODcyTDEyLjgxNDEgMjQuMjYxOVYxNS43MDhMMjQuNTQ2NSA3LjAwNDdMMTIuODE0MSA2Ljk5NjY0VjAuNzEyNDYzTDAuOTk4MDQ3IDEyLjQ4NzJaIiBmaWxsPSIjOEM4REZDIi8+Cjwvc3ZnPgo=',
          name: 'zSync',
          link: 'https://zksync.io/',
          coins: '',
          connector: '',
        },
      ],
      items: [
        {
          title: 'Design system',
          text: 'Perform detailed research and analysis to determine how ACU can trade <a target="_blank" href="https://en.bitcoin.it/wiki/Atomic_swap">autonomously</a> with Ethereum blockchains.',
          completed: true,
        },
        {
          title: 'Write Atomic Swap Solidity smart contracts',
          text: '<a target="_blank" href="https://github.com/acuity-social/acuity-atomic-swap-solidity">Two solidity smart contracts</a> have been written: one for selling and one for buying. Both contracts will be deployed on each participating blockchain.',
          completed: true,
        },
        {
          title: 'Write Atomic Swap Substrate pallet',
          text: 'A <a target="_blank" href="https://github.com/acuity-social/acuity-atomic-swap-pallet">Substrate pallet</a> has been written for interfacing with the exchange. All Substrate chains can use this instead of the smart contracts.',
          completed: true,
        },
        {
          title: 'Write Trusted Accounts Substrate pallet',
          text: '<a target="_blank" href="https://github.com/acuity-social/acuity-trusted-accounts-pallet">This pallet</a> enables users to publish their order book on Acuity.',
          completed: true,
        },
        {
          title: 'Write Order Book Substrate pallet',
          text: '<a target="_blank" href="https://github.com/acuity-social/acuity-orderbook-pallet">This pallet</a> enables Substrate based chains, such as ACU to maintain a network of trusted accounts.',
          completed: true,
        },
        {
          title: 'Improve smart contracts and pallets',
          text: 'Further work needs to be done to ensure all the smart contracts and pallets are mature and unit tested.',
          completed: false,
        },
        {
          title: 'Create basic frontend',
          text: 'A simple user interface will be created using <a target="_blank" href="https://vuetifyjs.com/">Vuetify</a>.',
          completed: false,
        },
        {
          title: 'Upgrade the Acuity runtime.',
          text: 'Once the exchange is ready to go live, the Acuity blockchain will need to be upgraded.',
          completed: false,
        },
        {
          title: 'Deploy contracts on Arbitrum',
          text: 'We will start with trading Arbitrum ETH against ACU.',
          completed: false,
        },
        {
          title: 'Launch exchange',
          text: 'A rudimentary version of the exchange will be launched.',
          completed: false,
        },
        {
          title: 'Add more blockchains',
          text: 'All of the blockchains in the table above will be added to the platform.',
          completed: false,
        },
        {
          title: 'Add support for ERC20 tokens on all chains',
          text: 'The solidity smart contracts will be improved to support atomic swap of ERC20 tokens.',
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
