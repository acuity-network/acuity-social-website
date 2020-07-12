<template>
  <v-container fluid>
    <ul v-for="message in messages">
      <li>{{ message }}</li>
    </ul>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Home',

    data: () => ({
      messages: [
        'The world we need.',
        'Neutrality without coersion.',
        'Hardfork humanity.',
        'Knowledge discovery.',
        'Unstoppable publication.',
        'Collaborative investigation.',
        'The medium is the message.',
        'Federated blockchains.',
        'Your own space.',
        'Level playing field.',
        'Eradicate corruption?',
        'Discover our history.',
        'Ungameable metrics.',
        'Re-genesis.'
      ]
    }),

    computed: {
    },
  })
</script>
