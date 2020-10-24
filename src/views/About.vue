<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10">
        <v-card>
          <v-card-text>
            <div class="body-2 mb-4">
              <p>Acuity is a blockchain-based content platform and an alternative to the World Wide Web, in development since 2015. It is  built with Substrate and IPFS. It is currently being migrated from its previous incarnation, <a target="_blank" href="https://medium.com/mix-blockchain">MIX</a> (an independent Ethereum blockchain).</p>

              <p>Videos of the Acuity Browser can be seen on the <a target="_blank" href="https://www.youtube.com/channel/UCkvRVEWnTPWWYJQqPbYwyiw">Acuity</a> YouTube channel.</p>

              <p>On June 8th of this year it was <a target="_blank" href="https://www.youtube.com/watch?v=IQqgqCEQW9o">announced</a> that Acuity would be migrating from MIX to a <a target="_blank" href="https://www.substrate.io/">Substrate</a>-based blockchain in the <a target="_blank" href="https://polkadot.network/">Polkadot</a> ecosystem.</p>

              <p>On 1st September the Acuity <router-link to="/regenesis">Regenesis</router-link> occurred and a snapshot of all MIX balances was recorded. A few days later the new blockchain was launched. The MIX cryptocurrency no longer exists.</p>

              <p>Holders of MIX at the time of the snapshot can claim ACU 1:1. This process is identical to how participants in the Polkadot sale can claim their DOT and KSM. MIX holders have so far claimed over 55m ACU.</p>
            </div>
            <div class="text-h4 mb-1">Why?</div>
            <div class="body-2 mb-4">Social media has to a large degree taken over from publishing content on websites. There are a lot of good reasons for this. Having everyone together instead of on separate websites enables rich interactions and social networks to emerge. In many ways this has been an incredible tool for humanity, but it hasn't quite realized its potential. Major platforms have many issues that they are not intending to resolve properly. There is no point in blaming these platforms. The real issue is that we need social media to be decentralized so we can reclaim the Web - protocols, not platforms.</div>
            <div class="text-h5 mb-1">No backend</div>
            <div class="body-2 mb-4">Because Acuity is entirely decentralized and there is no backend, there is no “service” being provided. It is peer-to-peer open source software with no warranty. Many other platforms that claim to be decentralized actually have quite extensive backends. Because Acuity is built with Substrate it can have a very rich and extensible feature set with very small fees. This means it cannot be a target for co-option.</div>
            <div class="text-h5 mb-1">Permissionless innovation</div>
            <div class="body-2 mb-4">The basic idea of how Acuity works is that all the core functionality is implemented on-chain. On MIX this was in the form of smart contracts written in Solidity. Now this functionality is being re-implemented as a Substrate pallet that can be extended permissionlessly with WASM smart contracts. This includes content revisioning, comments, feeds, tags, mentions, trusted accounts, emoji reactions, tokens. There is no backend whatsoever. When running your own website you have total freedom to innovate in whatever way you like. This is something that has been lost now that content is published more often on centralized social media platforms. Developers are incredibly frustrated becuase they are unable to deploy new ideas. With Acuity any developer can innovate in any way they like, either on-chain or off-chain.</div>
            <div class="text-h5 mb-1">Censorship-proof</div>
            <div class="body-2 mb-4">Unlike other so-called decentralized social media platforms, Acuity really is peer-to-peer. When publishing, the content is first made available from the device via IPFS. Once the blockchain transaction containing the IPFS hash has been confirmed, nodes that trust the publisher will "pin" the content so that it propagates around the system. While there is no guarantee that your content will be consumed, you can always publish.</div>
            <div class="text-h5 mb-1">Permanent content</div>
            <div class="body-2 mb-4">So much content is being lost, both on the web and on centralized social media platforms. This is because there is not an autonomous structure and there is no collaborative hosting. With Acuity anyone can host anyone elses content to ensure that it stays alive. Links will never break. Having an undeniable record of what has been published in the past is key to exposing corruption and achieving justice for all.</div>
            <div class="text-h5 mb-1">Custom content discovery</div>
            <div class="body-2 mb-4">Everyone has complete control over what content they receive. Every developer is a first class citizen and can innovate to create new means of searching and filtering content, both on-chain and off. For example they could create a filter bubble based on electing moderators or an off-chain search solution that uses AI.</div>
            <div class="text-h5 mb-1">Public content</div>
            <div class="body-2 mb-4">Everything that is published is publicly readable by anyone. There isn't much point using a public blockchain to publish private or semi-private content.</div>
            <div class="text-h5 mb-1">Private browsing</div>
            <div class="body-2 mb-4">Browsing history, who you follow, local settings are only stored on your own devices. There is no centralized backend so it is very hard for your browsing to be tracked (unless you want it to be).</div>
            <div class="text-h5 mb-1">Funding content creators / ungameable metrics</div>
            <div class="body-2 mb-4">Counts of followers, views and likes are all terrible ways to measure popularity. Acuity has a much better system: conspicuous burning of brand tokens. Because this is ungameable, it serves as a great free-market mechanism to fund content creators without relying on paywalls or advertising.</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'About',

    data: () => ({
    }),
  })
</script>
