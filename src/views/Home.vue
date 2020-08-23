<template>
  <v-container>
    <v-row style="margin: 40px 0;">
      <v-col>
        <v-img src="images/acuity-logo.svg" alt="Acuity logo" contain height="200" width="200" id="acuity-animation" style="margin-left: auto; margin-right: auto;"></v-img>
      </v-col>
    </v-row>
    <v-row style="margin: 40px 0;">
      <v-col>
        <div style="color: #3cc3db; font-family: Raleway; text-align: center; font-size: 24px;">
          {{ message }}<span class="blink-me">|</span><br /> <br />
          <router-link to="/regenesis">Regenesis</router-link> in: {{ days }} {{ $tc('days', days) }}, {{ hours }} {{ $tc('hours', hours) }}, {{ minutes }} {{ $tc('minutes', minutes) }}, {{ seconds }} {{ $tc('seconds', seconds) }}<br />
          MIX => ACUITY
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

  function shuffle(input: any[]) {
  	for (let i = input.length - 1; i >= 0; i--) {
  		let randomIndex = Math.floor(Math.random() * (i + 1))
  		let itemAtIndex = input[randomIndex]
  		input[randomIndex] = input[i]
  		input[i] = itemAtIndex
  	}

  	return input
  }

  export default Vue.extend({
    name: 'Home',

    components: {
    },

    data: () => ({
      message: '',
      messages: [
        'Keenness of perception. ',
        'The world we need. ',
        'Neutrality without coersion. ',
        'Hardfork humanity. ',
        'Knowledge discovery. ',
        'Unstoppable publication. ',
        'Collaborative investigation. ',
        'The medium is the message. ',
        'Federated blockchains. ',
        'Your own space. ',
        'Eradicate corruption? ',
        'Record our history. ',
        'Ungameable metrics. ',
        '1) They came for the journalists. 2) ? ',
        'Combat logical fallacies. ',
        'All wars are bankers\' wars. ',
        'Cui bono? ',
        'Follow the money. ',
        'Reclaim the Web. ',
        'Break the wheel. ',
        'Self-organise. ',
        'Kill the noise. Hear the signal. ',
        'War is a racket. ',
        'Embrace abundance. ',
        'Protocols instead of platforms. ',
        'Chaos is a ladder. ',
        'Voluntary interaction. ',
        'Facilitate productive discussion. ',
        'Information is power. ',
        'Will you join us? ',
        'Truth distillation. ',
        'Consent-based solutions. ',
        'Incandescent incredulity. ',
        'Have eyes to see. ',
        'Engage in debate. ',
        'I know that I know nothing. ',
        'Believe in the ripple effect. ',
        'Abandon political correctness. ',
        'A big tent. ',
        'True skepticism. ',
        'Be undeniable. ',
        'Do your own research. ',
        'Permissionless innovation. ',
        'A way out. ',
        'Governance governance. ',
        'Fund the commons. ',
        'Explore ancient civilizations. ',
        'Check your assumptions. ',
        'Emergent property rights. ',
        'Know thy enemy. ',
        'Those who tell the stories rule society. ',
        'Uncover conflict of interest. ',
        'Resistance is fertile. ',
      ],
      row: 0,
      column: 0,
      sleep: 20,
      delete: false,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }),

    created() {
      this.messages = shuffle(this.messages)
      setInterval(this.updateMessage, 100)
      setInterval(this.updateTimeLeft, 1000)
      this.updateTimeLeft()
    },

    methods: {
      updateMessage() {
        if (this.sleep > 0) {
          this.sleep--
          return
        }
        if (this.delete) {
          this.message = this.message.slice(0, -10)
          if (this.message.length == 0) {
            this.row++
            if (this.row == this.messages.length) {
              this.row = 0
            }
            this.column = 0
            this.delete = false
          }
        }
        else {
          this.message += this.messages[this.row][this.column]
          this.column++
          if (this.column == this.messages[this.row].length) {
            this.delete = true
            this.sleep = 40
          }
        }
      },
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

.blink-me {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

</style>
