<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-alert type="info">All of these features have already been implemented in the Acuity Browser running on MIX Blockchain and will be ported in full to the new Acuity Substrate-based blockchain.</v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card.title"
        cols="12" md="6" xl="4"
      >
        <v-card>
          <v-card-title v-text="card.title" style="word-break: normal;"></v-card-title>
          <v-card-text v-html="card.text"></v-card-text>
          <v-card-actions>
            <v-btn v-if="card.video" :href="card.video" text color="#E6007A">Video</v-btn>
            <v-btn v-if="card.contract" :href="card.contract" text color="#E6007A">Smart Contract</v-btn>
      </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Features',

    data: () => ({
      cards: [
        {
          title: 'Permanent',
          text: '<p>Exiting centralized social media platforms are highly unreliable as an historical record. Blockchain based social media platforms solve this problem. Everytime a content item is published or updated on Acuity it is timestamped and the IPFS hash is stored in contract state. This is an extremely powerful property of the system. In hundreds of years time people will be able to examine the blockchain and know who said what when and to whom.</p>',
          contract: 'https://github.com/acuity-social/acuity-contracts/blob/master/src/mix-item-store/MixItemStoreIpfsSha256.sol',
        },
/*        {
          title: 'Dependable Publishing',
          text: '<p>With existing centralized social media platforms you can never quite be sure that what is supposed to happen is what will happen. For most people </p>',
        },
  */
        {
          title: 'Content Revisioning',
          text: '<p>When an item of content is published on Acuity the actual content is stored on IPFS and the IPFS hash is written into the blockchain. If the content author wishes to create a new revison the new version will be published on IPFS and receive a new IPFS hash. This hash is then also stored on the blockchain. This means full history of content edits is preserved on the blockchian.</p>\
          <p>More sophisticated content systems, like a wiki, might not use this facility and store each revision as an Acuity individual content item.</p>',
          contract: 'https://github.com/acuity-social/acuity-contracts/blob/master/src/mix-item-store/MixItemStoreIpfsSha256.sol',
        },
        {
          title: 'Comments',
          text: '<p>Any content item can be a reply to another item and the comment hierarchy is maintained in contract state. Of course which comments a users can be entirely controlled by the filter bubble they choose to use. See Trust Accounts below.</p>',
          contract: 'https://github.com/acuity-social/acuity-contracts/blob/master/src/mix-item-dag/MixItemDagOneParent.sol',
          video: 'https://www.youtube.com/watch?v=WdkBjd2bPBY',
        },
        {
          title: 'Feeds',
          text: '<p>One of the big problems with Twitter is that each account can only publish to one feed. This means that an account might have a broad range of accounts that are following it for different reasons. When you want to publish something you might be aware of the broadness of your audience and only publish what you think will be received well or understood by the majority audience and tailor your message to the lowest common denominator. This reduces the abiltiy of the platform to facilitate effective discussion.</p>\
          <p>The solution is very simple: allow accounts to have more than one feed. Feeds can be subscribed to individually and Content can be published to multiple feeds simultaneously if necessary.</p>',
          contract: 'https://github.com/acuity-social/acuity-contracts/blob/master/src/mix-item-dag/MixItemDagOnlyOwner.sol',
        },
/*        {
          title: 'Fully Transparent',
          text: '',
        },
*/
        {
          title: 'Trusted Accounts',
          text: '<p>A common problem on platforms like Twitter is that it is difficult to control whose content you can see. Anyone can mention you unless you specifically block them. This is very unnatural - in the physical world only those physically near us can communicate with us. Controlling who is around us enables us to control who can communicate with us.</p>\
          <p>Acuity has a very simple system for who gets to see what: Trusted Accounts. Each account maintains a public list of other accounts that they trust. When potentially viewing any piece of content it will be filtered through Trusted Accounts. For a piece of content to be downloaded to your device and displayed on your screen it must have been published either from someone you trust directly, or someone you trust trusts that account.</p>\
          <p>This means that everyone is curating a public list of accounts they trust. If you are a poor curator of accounts then others will not add you to their list of trusted accounts.</p>',
          video: 'https://www.youtube.com/watch?v=j8WfGYxBERo',
          contract: 'https://github.com/acuity-social/acuity-contracts/blob/master/src/mix-trusted-accounts/MixTrustedAccounts.sol',
        },
        {
          title: 'Video',
          text: '<p>Videos published on Acuity are transcoded from the source video into multiple resolutions of H.264 video. This codec is high quality, very fast to encode and highly compatible. Transcoding can occur locally on the device or on your server using <a href="https://www.ffmpeg.org/">FFmpeg</a>, or with a SaaS solution such as Encoding.com.</p>\
          <p>Each encoding of the video, and optionally the source video, is then stored in IPFS. Subscribers to your content will then "pin" the files to pull them to their devices. Additionally <a href="https://filecoin.io/">Filecoin</a> can be used to pay to make sure your videos are available. Centralized services such as <a href="https://pinata.cloud/">Pinata</a> can also be used.</p>\
          <p>Videos published on other services can be synchronized to Acuity using the extremely powerful <a href="http://ytdl-org.github.io/youtube-dl/about.html">youtube-dl</a>.</p>\
          <p>Because a video is just another Acuity content item it supports revisioning. This means videos can be updated.</p>',
          video: 'https://www.youtube.com/watch?v=K_NSdHzQFdk',
        },
        {
          title: 'Anonymous Browsing',
          text: '<p>When browsing a regular website, the operators of the website can track everything you see. For example, YouTube have a permanent record of everything you have watched.</p>\
          <p>Acuity is different. It reads data from the Acuity blockchain (as a light client), and from IPFS. Both these technologies are decentralized and do not have a controlling entity that could spy on your browsing.</p>',
        },
        {
          title: 'Programmatic Access',
          text: '<p>To read from or write to Acuity it is necessary to communicate with both the Acuity Blockchain and IPFS, typically via the Acuity API JavaScript library. This is how the Acuity Browser works. Unlike the APIs of other centralized platforms, no single authority has the ability to change them or regulate access.</p>',
        },
        {
          title: 'Creator Funding / Ungameable Metrics',
          text: '<p>To create a sustainable ecosystem on Acuity it is essential that content creators can generate revenue. Ideally this would not involve paywalls or advertising. Additionally it is very important to determine how much each content item is appreciated by the community. Of course these are two sides of the same coin.</p>\
          <p>Here\'s how it works:\
            <ul>\
              <li>Content creators get paid in their own brand token.</li>\
              <li>Fans of the creator can burn the creator\'s token conspicuously to prove to their peers that they are real fans.</li>\
              <li>This creates demand for the token so the content creator can sell it. The the community likes their work, the more revenue the content creator will make.</li>\
              <li>Content creators can be ranked against each other based on the value of their token that is being burned.</li>\
              <li>Instead of burning a creator token generally, a fan can burn it in association with a specific content item. This will encourage the fan to burn more overall and also means that the appreciation metric can be specific to the content item.</li>\
            </ul>\
          </p>',
          video: 'https://www.youtube.com/watch?v=wY8pAahyIw4',
          contract: 'https://github.com/acuity-social/acuity-contracts/blob/master/src/mix-token/MixTokenBurn.sol',
        },
        {
          title: 'Low Latency Complex Blockchain Queries',
          text: '<p>Complex dapps such as Acuity Browser need to make many blockchain queries before content can be rendered. Often these queries cannot be parallelized. If an individual query takes 200ms and 20 queries need to be made in series then it will take 4 seconds before the screen can be updated. This is far to long. The solution is to implement complex query logic in stateless smart contracts.</p>',
          contract: 'https://github.com/acuity-social/acuity-contracts/blob/master/src/mix-stateless/MixStateless.sol',
        },
      ]
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
