<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card.title"
        cols="12" md="6" xl="4"
      >
        <v-card>
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
          title: 'Dependable Publishing',
          text: '<p>With existing centralized social media platforms you can never quite be sure that what is supposed to happen is what will happen. For most people </p>',
        },
        {
          title: 'Fully Transparent',
          text: '<p></p>',
        },
        {
          title: 'Trusted Accounts',
          text: '<p>A common problem on platforms like Twitter is that it is difficult to control whose content you can see. Anyone can mention you unless you specifically block them. This is very unnatural - in the physical world only those physically near us can communicate with us. Controlling who is around us enables us to control who can communicate with us.</p>\
          <p>Acuity has a very simple system for who gets to see what: Trusted Accounts. Each account maintains a public list of other accounts that they trust. When potentially viewing any piece of content it will be filtered through Trusted Accounts. For a piece of content to be downloaded to your device and displayed on your screen it must have been published either from someone you trust directly, or someone you trust trusts that account.</p>\
          <p>This means that everyone is curating a public list of accounts they trust. If you are a poor curator of accounts then others will not add you to their list of trusted accounts.</p>',
        },
        {
          title: 'Video',
          text: '',
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
