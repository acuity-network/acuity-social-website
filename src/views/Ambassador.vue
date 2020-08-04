<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10">
        <v-card>
          <v-card-text>
            <div class="text-h5 mb-1">Acuity Ambassador Program</div>
            <div class="body-2 mb-4">As we approach the Acuity <router-link to="/regenesis">Regenesis</router-link> and launch the most autonomous, transparent, feature rich and extensible social media platform in existence, we need to tell the world about how decentralized social media will transform society. A lot of information needs to be conveyed to a lot of people.</div>
            <div class="body-2 mb-4">MIX holders need reassurance and guidance to ensure they receive their ACUITY on the new blockchain. We need to find stakers to take over from the MIX miners to secure the network.</div>
            <div class="body-2 mb-4">As the social media functionality gets ported from the old MIX blockchain we need to onboard new users to bootstrap this crazy new world. Decentralization is not something that most people have considered. They are accustomed to social media being provided as a service from a corporation.</div>
            <div class="text-h6 mb-1">Why become an Ambassador?</div>
            <div class="body-2 mb-4">This technology is really exciting - but that is not enough to get traction. We need to spread the word so we can find others who are excited about publishing and innovating on an uncontrolled platform.</div>
            <div class="body-2 mb-4">Acuity is going to be huge - this is a massive opportunity to join the community on the ground floor.</div>
            <div class="text-h6 mb-1">Who would make a good Ambassador?</div>
            <div class="body-2 mb-4">A range of skills are important for an Ambassador, but the abilty to organise communities and communicate effectively is what really matters. You don't have to be a developer to help grow the ecosystem. If you are a meme-maker you will be treasured!</div>
            <div class="body-2 mb-4">We need a wide diversity of Ambassadors to be able to connect with anyone in any country.</div>
            <div class="text-h6 mb-1">What is an Ambassador provided with?</div>
            <div class="body-2 mb-4">As an offical Acuity Ambassador you will receive a number of benefits to help you on your mission:</div>
            <div class="body-2 mb-4">
              <ul>
                <li>Your profile will appear on this website so those you are talking to will know you are an authentic voice.</li>
                <li>Ambassador-only communication channels including a weekly call on <a href="https://jitsi.org/">Jitsi</a>.</li>
                <li>Direct access to core-team members.</li>
                <li>Swag - hosting an event? We will send you Acuity branded stuff to give out for free.</li>
              </ul>
            </div>
            <div class="text-h6 mb-1">How do I become an Ambassador?</div>
            <div class="body-2 mb-4">We're really excited that you want to join - please ask in the ambassador-program channel on <a href="https://discordapp.com/invite/GxD7adN">Discord</a> to get started with your application.</div>
            <div class="text-h6 mb-1">Migration to a DAO</div>
            <div class="body-2 mb-4">Once the new Substrate-based blockchain is live we can migrate the Ambassador Program to a <a href="https://en.wikipedia.org/wiki/Decentralized_autonomous_organization">decentralized autonomous organization</a>, using the <a href="https://substrate.dev/rustdocs/v2.0.0-rc5/pallet_society/index.html">Society</a> pallet.</div>
            <v-row align="center" class="fill-height">
              <v-col cols="6" sm="4" md="2">
                <v-avatar size="100%">
                  <v-img src="/vang.jpeg"></v-img>
                </v-avatar>
              </v-col>
              <v-col cols="12" sm="8" md="10">
                <div class="text-h6 mb-1">Vang Nguyen</div>
                <div class="body-2 mb-4">Vang is a software engineer, entrepreneur, and dirtbag. For the past decade, he’s split his time between working and chasing surf, sun, and powder. Just as he seeks freedom through his outdoor pursuits, Vang is interested in technologies that drive societal change and promote individual agency. He sees misinformation and fake news as one of the leading problems of our times and wants to find a solution which ensures the truthfulness and accuracy of the content we consume.</div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Ambassador',

    data: () => ({
    }),
  })
</script>
