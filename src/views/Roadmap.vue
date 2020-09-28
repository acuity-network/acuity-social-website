<template>
  <v-timeline :dense="dense" style="margin: 0 20px;">
    <v-timeline-item v-for="(item, i) in items" :key="i" :color="item.completed ? '#E6007A' : primary">
      <template v-slot:opposite>
        {{ item.when }}
      </template>
      <v-card class="elevation-2">
        <v-card-title style="word-break: normal;">{{ item.title }}</v-card-title>
        <v-card-subtitle v-if="dense">{{ item.when }}</v-card-subtitle>
        <v-card-text v-html="item.text"></v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Timeline',

    data: () => ({
      items: [
        {
          when: '26th November 2015',
          title: 'Work started on BlobStore',
          text: 'The Ethereum mainnet had just been launched over the summer. This was the first technology that could be used to build a fully autonomous and permanent social media platform. The primary Acuity smart contract, ItemStore was originally called BlobStore and the first version was only <a href="https://github.com/acuity-social/mix-item-store/blob/6f0c4f3f87ba2571fd8f5e00c74f006194abe749/blobstore.sol">23 lines long</a>.',
          completed: true,
        },
        {
          when: '17th December 2016',
          title: 'LINK Blockchain announced',
          text: 'MIX Blockchain (the precursor to the Acuity Blockchain) was orginally called <a href="https://medium.com/mix-blockchain/introducing-link-blockchain-b447576ff438">LINK</a>.',
          completed: true,
        },
        {
          when: '27th April 2017',
          title: 'LINK Blockchain Genesis Block',
          text: 'The LINK blockchain is activated and mining begins.',
          completed: true,
        },
        {
          when: '3rd June 2017',
          title: 'Switch from log storage to IPFS',
          text: 'In the original design, published content (excluding attachments) was to be stored in Ethereum log storage. It was determined that IPFS would be a much better technology to store all content, with the hash of each content revision being stored in contract state. Here is the <a href="https://github.com/acuity-social/mix-item-store/commit/cf818ec28a236e6f1966a22f0dcd45eef267f6f2">commit</a>.',
          completed: true,
        },
        {
          when: 'July 2017',
          title: 'Kuala Lumpur LINK Presentation',
          text: 'Founder Jonathan Brown and developer James Drummond travelled to Kuala Lumpur to deliver a presentation about LINK. Here\'s the <a href="https://www.youtube.com/watch?v=ih1eUUm5duM">video</a>.',
          completed: true,
        },
        {
          when: '12th October 2017',
          title: 'LINK renamed to MIX - trading begins',
          text: 'Due to another high profile project commencing trading as LINK, the project and cryptocurrency was renamed to MIX.',
          completed: true,
        },
        {
          when: '15th - 18th February 2018',
          title: 'Anarchapulco Gold Sponsor',
          text: 'MIX was a gold sponsor of Anarchapulco 2018 in Acapulco, Mexico.',
          completed: true,
        },
        {
          when: '15th March 2018',
          title: 'MIX Party San Francisco',
          text: 'MIX threw a party in The Mission, San Francisco with a <a href="https://www.youtube.com/watch?v=obO0axRvxLo">project update</a> by Founder Jonathan Brown and a live swing band.',
          completed: true,
        },
        {
          when: '27th October 2018',
          title: 'MIX hardfork at block 3,000,000',
          text: 'The Ethereum difficulty bomb was beginning to slow down block production, so MIX needed a hard fork to disable this. At the same time the EVM was upgraded to Byzantium.',
          completed: true,
        },
        {
          when: '4th February 2019',
          title: 'Chiang Mai Presentation',
          text: 'Jonathan Brown gave a <a href="https://www.youtube.com/watch?v=lF5PZDWgmEs">project update</a> in Chiang Mai.',
          completed: true,
        },
        {
          when: '5th August 2019',
          title: 'MIX Acuity Browser released',
          text: 'The MIX Acuity desktop browser for Windows, Mac and Linux was released. It is fully autonomous, doesn\'t connect to any servers and has rich functionaity such as profile creation, image publishing, feeds, topics and trust network - all implemented as <a href="https://docs.mix-blockchain.org/en/latest/smart_contracts.html">smart contracts</a>. It also has in-app mining.',
          completed: true,
        },
        {
          when: 'November 2019',
          title: 'MIX Acuity web app',
          text: 'The MIX Acuity browser was very powerful, but it had a problem - installing it was a huge barrier to entry. Having it available as a web app meant content could be linked to directly from other web sites. Because the desktop app had been built with Electron and web technologies, creating a web app build was fairly easy.',
          completed: true,
        },
        {
          when: '20th January 2020',
          title: 'Video publishing functionality',
          text: 'The desktop app could transcoded the video to multiple resolutions and video could be streamed from IPFS in both the web app and the desktop app. Additionally a command line utility could synchronize video from YouTube to Acuity. Here\'s the <a href="https://www.youtube.com/watch?v=K_NSdHzQFdk">video</a>.',
          completed: true,
        },
        {
          when: '8th June 2020',
          title: 'Migration to Substrate / Polkadot announced',
          text: 'An independent Ethereum PoW blockchain had been an excellent technology to develop the platform on. Now MIX is moving to the Polkadot eco-system as a Substrate PoS blockchain. This has many advantages: increased economic security, cheaper transactions, greater capacity, autonomous communication with other blockchains, standardized tooling, extensibile functionality, autonomous upgrades. Additionally the MIX name is being droped entirely in favour of ACUITY. Here\'s the <a href="https://www.youtube.com/watch?v=IQqgqCEQW9o">video announcement</a>.',
          completed: true,
        },
        {
          when: '31st July 2020',
          title: 'Acuity Ambassador Program Launched',
          text: 'As we migrate Acuity to Polkadot we need to bootstrap the social media platform. The purpose of the <a href="/ambassador">Ambassador Program</a> is to foster growth in a diversity of communities.',
          completed: true,
        },
        {
          when: '1st September 2020',
          title: 'Substrate Regenesis',
          text: 'A snapshot of all MIX accounts and balances was recorded at block 7,396,472.',
          completed: true,
        },
        {
          when: '3rd September 2020',
          title: 'Acuity Blockchain Activated',
          text: 'The new Substrate-based Acuity blockchain was launched. MIX holders began claiming their ACU.',
          completed: true,
        },
        {
          when: '17th October 2020',
          title: 'Proof-of-stake Begins',
          text: 'If it passes, the <a href="https://polkadot.acuity.social/#/democracy">referendum</a> to switch from PoA to PoS will be enacted.',
        },
        {
          when: '31st October 2020',
          title: 'WACU Launches',
          text: 'If it passes, the referendum to upgrade the Acuity runtime will be enacted. This update will include the <a href="/wacu">WACU</a> pallet. A UI will provided at this time so ACU can be freely moved back and forth from Acuity to Ethereum.',
        },
        {
          when: '',
          title: 'Connect to Kusama',
          text: '<a href="https://kusama.network/">Kusama</a> is the experimental version of Polkadot. It will enable greater security, inter-blockchain communication and access to decentralized exchanges.',
        },
        {
          when: '',
          title: 'Creator Tokens Relaunch',
          text: 'Creator Tokens are a means for content creators to get paid without paywalls or advertising. Fans can conspicuously burn tokens issued by creators to prove they are real supporters. The Acuity project will also have a creator token, ACUITYFUND.',
        },
        {
          when: '',
          title: 'Decentralized search',
          text: 'Each device will index the content that it sees. When searching, the user\'s Trust Network will be queried recursively so search cannot be censored.',
        },
        {
          when: '',
          title: 'Connect to Polkadot',
          text: '<a href="https://polkadot.network/">Polkadot</a> is Kusama for grownups. Connecting to Polkadot will seal the status of Acuity as one of the most prominent blockchains in existence.',
        },
        {
          when: '18th October 2022',
          title: 'Revenue contract ends',
          text: 'The revenue smart contract will stop releasing ACUITY. Funding of the project will continue by the selling of the ACUITYFUND creator token for conspicuous burning.',
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
