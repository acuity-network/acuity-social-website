<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card.title"
        cols="12" md="6" xl="4"
      >
        <v-card>
          <v-img height="200" :src="card.image" style="background-color: white;"></v-img>
          <v-card-title v-text="card.title"></v-card-title>
          <v-card-text v-html="card.text"></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Timeline',

    data: () => ({
      cards: [
        {
          image: '/polkadot.png',
          title: 'Polkadot',
          text: 'Acuity has migrated from the MIX blockchain to the <a href="https://polkadot.network/">Polkadot</a> ecosystem. This presents a massive opportunity for the project to thrive. Polkadot is a federated blockchain alternative to Ethereum 2.0 - created by Ethereum co-founder Gavin Wood.',
        },
        {
          image: '/substrate.png',
          title: 'Substrate',
          text: 'Acuity is migrating from an Ethereum-based proof-of-work blockchain called MIX. The new platform is being built with a blockchain construction kit called <a href="https://www.substrate.io/">Substrate</a>. This has many advantages:<ul> \
          <li>Improved economic security - no 51% attacks</li>\
          <li>Increased transaction throughput</li>\
          <li>Cheaper transactions</li>\
          <li>Incredible flexibility - Substrate has many <a href="https://substrate.dev/docs/en/knowledgebase/runtime/frame">pallets</a> that can be plugged together to create a custom blockchain.</li>\
          <li>Autonomous upgradabilty - built in governance mechanisms so blockchains can decide to hardfork without the drama.</li>\
          <li>Inter-blockchain communication - Substrate blockchains can pass messages, exchange tokens and share economic security. See Kusama and Polkadot below.</li>\
          </ul>'
        },
        {
          image: '/solidity.jpg',
          title: 'Solidity',
          text: 'All the core functionality of the Acuity social media platform has been <a href="https://docs.mix-blockchain.org/en/latest/smart_contracts.html">implemented in smart contracts</a> written in <a href="https://solidity.readthedocs.io/en/latest/">Solidity</a>. These contracts were orginally deployed on MIX blockchain. Because Substrate has the <a href="https://substrate.dev/docs/en/knowledgebase/smart-contracts/evm-pallet">EVM</a> pallet, these contracts originally intended to be used on an Ethereum blockchain can be used on the new Acuity blockchain.',
        },
        {
          image: '/ipfs.png',
          title: 'IPFS',
          text: 'Each item of content published on Acuity is shared to other devices on the network using the <a href="https://ipfs.io/">IPFS</a> decentralized filesystem. Because it is fully decentralized, it can never have scalabilty issues. There is no central point of failure so content can always be served from somewhere.',
        },
        {
          image: '/vue.png',
          title: 'Vue.js',
          text: 'The Acuity Browser is a desktop app, a web app, and an Android app. All built from the same <a href="https://vuejs.org/">Vue.js</a> codebase. Vue is an incredibly powerful platform that enables complex applications to be built with ease. Because it is based in JavaScript it has access to a massive community of open source components, including <a href="https://polkadot.js.org/">Polkadot.js</a> and the Polkadot browser plugins.',
        },
        {
          image: '/kusama.png',
          title: 'Kusama',
          text: 'Substrate-based blockchains will be able to connect together with Polkadot, but this is not ready yet. In the mean time an experimental version of Polkadot called <a href="https://kusama.network/">Kusama</a> has gone live. Connecting Acuity to Kusama will be an incredible way for Acuity to interact with other chains, including decentralized token exchange and publishing from other blockchains.',
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
