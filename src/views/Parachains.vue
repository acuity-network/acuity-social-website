<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10">
        <v-card>
          <v-card-text>
            <div class="text-h5 mb-1">Why will Acuity utilize multiple parachains?</div>
            <div class="body-2 mb-4">The goal of Acuity is to become a better content web than the World Wide Web. All public content is stored on IPFS and the IPFS ids (hashes) are stored on-chain. Depending on the application, other on-chain logic will exist also.</div>
            <div class="body-2 mb-4">Because Acuity is being built with Polkadot, it can utilize Substrate's <a target="_blank" href="https://medium.com/polkadot-network/polkadot-the-parachain-3808040a769a">parachain</a> functionality. This means instead of there being a single Acuity blockchain, there can be many, each with specialized code for a specific use-case. All Acuity content parachains will share the basic Acuity content system (text, images, video, etc), but will extend it in different ways. Each parachain will have an app as a subdomain of acuity.social. It will be possible to communicate between parachains and to link from content on one parachain to content on another. Anyone can build a new app that integrates with an existing parachain in a new way.</div>
            <div class="body-2 mb-4">It will also be possible for any new Acuity blockchain to become a parachain by bidding for a slot on the Acuity relay chain.</div>
            <div class="text-h5 mb-1">Parachain Airdrop</div>
            <div class="body-2 mb-4">On Monday 1st November 2021, Acuity will become federated into a relay chain and multiple parachains. The initial distribution of the Acuity relay chain and all the other parachains will be airdropped from a snapshot of <router-link to="/acu">ACU</router-link> balances. For example, if you hold 10,000 ACU on 1st November 2021, you will receive 10,000 ACR, 10,000 ACF, and 10,000 ACT.</div>
            <div class="ml-4">
              <div class="text-h6 mb-1">Acuity Relay <span style="color: #3cc3db; font-family: Raleway; font-size: 14px;">ACR</span></div>
              <div class="body-2 mb-4">If you are familiar with the Polkadot or Kusama relay chain, you will know that they provide shared security for their respective parachains and enable message passing between parachains. Acuity Relay will be the relay chains for all the Acuity parachains (detailed below).</div>
              <div class="text-h6 mb-1">Acuity DeFi <span style="color: #3cc3db; font-family: Raleway; font-size: 14px;">ACU</span></div>
              <div class="body-2 mb-4">This is the current Acuity blockchain. It will serve as the DeFi hub for the Acuity ecosystem. Initially it will run the Acuity Atomic Swap DEX. It will also have private transfers similar to <a target="_blank" href="https://tornado.cash/">Tornado Cash</a>.</div>
              <div class="text-h6 mb-1">Acuity Feeds <span style="color: #3cc3db; font-family: Raleway; font-size: 14px;">ACF</span></div>
              <div class="body-2 mb-4">Many social networks are based around the concept of "feeds", e.g. Twitter, YouTube. This parachain will enable users to create multiple feeds and post content in them. Here is a video of the <a target="_blank" href="https://www.youtube.com/watch?v=KJs0dI0ep2w">content feed functionality</a> on the previous implementation.</div>
              <div class="text-h6 mb-1">Acuity Topics <span style="color: #3cc3db; font-family: Raleway; font-size: 14px;">ACT</span></div>
              <div class="body-2 mb-4">Another popular form of social network is discussions around certain topics, e.g. Reddit. This parachain will enable user to create topics for discussion that other users can participate in.</div>
            </div>
            <div class="text-h5 mb-1">Where should I store my ACU to ensure I receive the airdrop?</div>
            <div class="body-2 mb-4">Make sure you are holding your ACU in the <a target="_blank" href="https://polkadot.acuity.social/">Acuity Polkadot App</a>. If you are holding ACU in STEX, make sure you withdraw it.</div>
            <div class="text-h5 mb-1">Does it matter if my ACU is staked or locked during the airdrop?</div>
            <div class="body-2 mb-4">No, you will be awarded ACR, ACF and ACT each in equal quantity to the total ACU held including staked and locked.</div>
            <div class="text-h5 mb-1">Do I need to convert my MIX to ACU before the airdrop?</div>
            <div class="body-2 mb-4">No, if you haven't claimed your ACU before the airdrop you can claim your ACR, ACU, ACF and ACT separately afterwards.</div>
            <div class="text-h5 mb-1">Where will these new assets be tradable?</div>
            <div class="body-2 mb-4">Initially ACR, ACF and ACT will be traded alongside ACU on the <router-link to="/atomic-swap">Acuity DEX</router-link>.</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Regenesis',

    data: () => ({
    }),
  })
</script>
