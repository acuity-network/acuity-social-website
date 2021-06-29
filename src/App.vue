<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item
          v-for="menuItem in menu"
          :key="menuItem.icon"
          :to="menuItem.to"
        >
          <v-list-item-action>
            <v-icon>{{ menuItem.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-container>
        <v-btn block color="#35893e" href="/acuity.pdf" target="_blank" style="margin-bottom: 10px;">View Deck</v-btn>
        <v-btn block color="rgb(33, 150, 243)" href="https://app.stex.com/en/trade/pair/ETH/ACU" target="_blank" style="margin-bottom: 10px;">Trade ACU</v-btn>
        <v-btn block color="#E6007A" href="https://polkadot.acuity.social/" target="_blank" style="margin-bottom: 10px;">Access Blockchain</v-btn>
        <v-btn block href="https://telemetry.polkadot.io/#list/Acuity" target="_blank" style="margin-bottom: 10px;">View Telemetry</v-btn>
        <v-switch v-model="darkMode" label="Dark mode"></v-switch>
        <v-btn
          v-for="socialLink in socialLinks"
          :key="socialLink.icon"
          class="mx-4"
          :href="socialLink.url"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ socialLink.icon }}</v-icon>
        </v-btn>

        <v-list dense>
          <v-list-item href="https://github.com/acuity-social/acuity-logo" target="_blank">
            Brand Assets
          </v-list-item>
        </v-list>

        <div class="text-h4 mb-1" style="text-align: center;">#{{ blockNumber }}</div>

      </v-container>
    </v-navigation-drawer>

    <v-app-bar
      app
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title><router-link to="/" style="color: #3cc3db; font-family: Raleway; text-decoration: none;">ACUITY</router-link></v-toolbar-title>
      <v-breadcrumbs :items="breadcrumbs" large></v-breadcrumbs>
      <v-spacer></v-spacer><v-img src="images/acuity-logo.svg" alt="Acuity logo" height="30" max-width="30" contain></v-img>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
<!--
      <v-btn v-if="showFab" fixed dark fab bottom right color="#E6007A" to="/support">
        <v-icon>mdi-gift</v-icon>
      </v-btn>
-->
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { ApiPromise, WsProvider } from '@polkadot/api'

export default Vue.extend({
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: null,
    darkMode: false,
    menu: [
      {
        to: '/about',
        icon: 'mdi-information',
        title: 'About',
      },
      {
        to: '/features',
        icon: 'mdi-feature-search',
        title: 'Features',
      },
      {
        to: '/regenesis',
        icon: 'mdi-rocket-launch',
        title: 'Regenesis',
      },
      {
        to: '/acu',
        icon: 'mdi-cash-usd',
        title: 'ACU',
      },
      {
        to: '/atomic-swap',
        icon: 'mdi-atom-variant',
        title: 'Atomic Swap',
      },
      {
        to: '/roadmap',
        icon: 'mdi-timeline-text',
        title: 'Roadmap',
      },
      {
        to: '/tech-stack',
        icon: 'mdi-server-network',
        title: 'Tech Stack',
      },
      {
        to: '/blog',
        icon: 'mdi-format-quote-open',
        title: 'Blog',
      },
      {
        to: '/accounts',
        icon: 'mdi-account',
        title: 'Accounts',
      },
/*
      {
        to: '/comparison',
        icon: 'mdi-compare',
        title: 'Platform Comparison',
      },
      {
        to: '/support',
        icon: 'mdi-gift',
        title: 'Support Acuity',
      },
*/
    ],
    socialLinks: [
      {
        icon: 'mdi-alpha-m-box',
        url: 'https://matrix.to/#/+acuity:matrix.org',
      },
      {
        icon: 'mdi-twitter',
        url: 'https://twitter.com/acuity_social',
      },
      {
        icon: 'mdi-youtube',
        url: 'https://www.youtube.com/channel/UCkvRVEWnTPWWYJQqPbYwyiw',
      },
      {
        icon: 'mdi-github',
        url: 'https://github.com/acuity-social',
      },
      {
        icon: 'mdi-telegram',
        url: 'https://t.me/acuity_social',
      },
      {
        icon: 'mdi-discord',
        url: 'https://discordapp.com/invite/GxD7adN',
      },
      {
        icon: 'mdi-reddit',
        url: 'https://www.reddit.com/r/AcuitySocial/',
      },
    ],
    blockNumber: null,
  }),

  async created() {
    this.darkMode = this.$vuetify.theme.dark = true

    let wsProvider = new WsProvider('wss://acuity.social:9961')
    ApiPromise.create({ provider: wsProvider }).then(async api => {
      this.$api = api
      await this.$api.isReady
      this.$api.rpc.chain.subscribeNewHeads((lastHeader: any) => {
        this.blockNumber = lastHeader.number.toString()
      })
    })
  },

  computed: {
    showFab() {
      return this.$route.name != 'support'
    },
    breadcrumbs() {
      let vue: any = this;
      return [
        {
          text: vue.$route.meta.title,
          disabled: true,
        },
      ]
    },
  },

  watch: {
    darkMode() {
      this.$vuetify.theme.dark = this.darkMode
    },
  }

});
</script>
