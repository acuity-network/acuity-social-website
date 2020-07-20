<template>
  <v-container>
    <v-row align="center" style="margin: 40px 0;">
      <v-col>
        <v-img src="images/acuity-logo.svg" alt="Acuity logo" contain height="200" id="acuity-animation"></v-img>
      </v-col>
    </v-row>
    <v-row style="margin: 40px 0;">
      <v-col>
        <div style="color: #3cc3db; font-family: Raleway; text-align: center; font-size: 24px;">
          <router-link to="/regenesis">Regenesis</router-link> in: {{ days }} {{ $tc('days', days) }}, {{ hours }} {{ $tc('hours', hours) }}, {{ minutes }} {{ $tc('minutes', minutes) }}, {{ seconds }} {{ $tc('seconds', seconds) }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<i18n>
{
  "en": {
    "days": "day | days",
    "hours": "hour | hours",
    "minutes": "minute | minutes",
    "seconds": "second | seconds"
  }
}
</i18n>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Home',

    components: {
    },

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
        'Regenesis.',
        '1) They came for the journalists. 2) ?',
        'Combat logical fallacies.'
      ],
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }),

    created() {
      setInterval(this.updateTimeLeft, 1000)
      this.updateTimeLeft()
    },

    methods: {
      updateTimeLeft() {
        let msLeft = 1598918400000 - Date.now()
        this.days = Math.floor(msLeft / 86400000)
        msLeft %= 86400000
        this.hours = Math.floor(msLeft / 3600000)
        msLeft %= 3600000
        this.minutes = Math.floor(msLeft / 60000)
        msLeft %= 60000
        this.seconds = Math.floor(msLeft / 1000)
      },
    },

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
