<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="6">
        <v-img src="images/acuity-logo.svg" alt="Acuity logo" contain height="200" id="acuity-animation"></v-img>
      </v-col>
    </v-row>
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
        'Regenesis.'
      ]
    }),

    computed: {
    },
  })
</script>

<style>

#acuity-animation {
    transition-property: transform;
    transition-duration: 1s;
    animation-name: rotate;
    animation-duration: 40s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes rotate {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}

</style>
