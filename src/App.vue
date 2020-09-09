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
        <v-btn block color="#E6007A" href="https://polkadot.acuity.social/" target="_blank">Access Blockchain</v-btn>
        <v-switch v-model="darkMode" label="Dark mode"></v-switch>
        <v-btn
          v-for="socialLink in socialLinks"
          :key="socialLink.icon"
          class="mx-4"
          :href="socialLink.url"
          icon
        >
          <v-icon size="24px">{{ socialLink.icon }}</v-icon>
        </v-btn>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar
      app
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="color: #3cc3db; font-family: Raleway;">ACUITY</v-toolbar-title>
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

export default Vue.extend({
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: null,
    darkMode: false,
    menu: [
      {
        to: '/',
        icon: 'mdi-home',
        title: 'Home',
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
        to: '/wacu',
        icon: 'mdi-swap-horizontal-bold',
        title: 'Wrapped ACU',
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
      {
        to: '/ambassador',
        icon: 'mdi-account-heart',
        title: 'Ambassador Program',
      },
    ],
    socialLinks: [
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
        icon: 'mdi-alpha-m-box',
        url: 'https://medium.com/mix-blockchain',
      },
      {
        icon: 'mdi-discord',
        url: 'https://discordapp.com/invite/GxD7adN',
      },
      {
        icon: 'mdi-email',
        url: 'mailto:contact@mix-blockchain.org',
      },
    ]
  }),

  created() {
    this.darkMode = this.$vuetify.theme.dark = true
  },

  computed: {
    showFab() {
      return this.$route.name != 'support'
    },
    breadcrumbs() {
      return [
        {
          text: this.$route.meta.title,
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
