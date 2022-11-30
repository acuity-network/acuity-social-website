<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10">
        <v-card>
          <v-card-title class="text-h5">
              Jonathan Brown - Acuity Founder
          </v-card-title>
          <v-avatar
            class="ma-3"
            size="200"
            style="float: right;"
          >
            <v-img src="/images/jonathan.jpg"></v-img>
          </v-avatar>
          <v-card-text>
            <div class="text-h6 mb-1">Bio</div>
            <div class="body-2 mb-4">
              Birth Year: 1981<br />
              Nationality: British &amp; Irish<br />
              Location: South East Asia
            </div>

            <div class="text-h6 mb-1">Social</div>
            <div class="body-2 mb-4">
              GitHub: @<a target="_blank" href="https://github.com/ethernomad">ethernomad</a><br />
              Twitter: @<a target="_blank" href="https://twitter.com/bluedroplet">bluedroplet</a><br />
              Telegram: @<a target="_blank" href="https://t.me/ethernomad">ethernomad</a><br />
            </div>

            <div class="text-h6 mb-1">Technology Experience</div>
            <div class="body-2 mb-4">
              <ul>
                <li>Polkadot / Substrate / Rust (since 2020)</li>
                <li>Vue (since 2017)</li>
                <li>Acuity / MIX (since 2015)</li>
                <li>Ethereum / Solidity (since 2014)</li>
                <li>Bitcoin (since 2013)</li>
                <li>Drupal / PHP / JavaScript (since 2005)</li>
                <li>Emergence (computer game - <a target="_blank" href="https://www.youtube.com/watch?v=bnNoSMebDWk">video</a>)</li>
                <li>Linux (since 1999)</li>
                <li>C / x86 Assembly (since 1997)</li>
              </ul>
            </div>

            <div class="text-h6 mb-1">Blogs</div>
            <div class="body-2 mb-4">
              <ul>
                <li><router-link to="/blog">Acuity</router-link></li>
                <li><a target="_blank" href="https://medium.com/mix-blockchain">MIX Blockchain</a> (medium.com)</li>
                <li><a target="_blank" href="https://web.archive.org/web/20181111083916/http://jonathanpatrick.me/">jonathanpatrick.me</a> (archive.org)</li>
              </ul>
            </div>

            <div class="text-h6 mb-1">Client List</div>

            <div class="body-2 mb-4">
              <ul>
                <li><a target="_blank" href="https://reality.eth.link/">Reality Keys</a></li>
                <li>FreeMyVunk</li>
                <li><a target="_blank" href="https://makerdao.com/">Maker</a></li>
                <li><a target="_blank" href="https://www.37coins.com/">37coins</a></li>
                <li><a target="_blank" href="https://deleonrealty.com/">DeLeon Realty</a></li>
                <li><a target="_blank" href="https://www.project6.com/">Project6 Design</a></li>
                <li>Da Vinci Media GmbH</li>
                <li><a target="_blank" href="https://www.iag.com.au/">Insurance Australia Group</a></li>
                <li><a target="_blank" href="https://www.flightcentre.com.au/">Flight Centre</a></li>
                <li><a target="_blank" href="https://www.technocrat.com.au/">Technocrat</a></li>
                <li><a target="_blank" href="https://tv2.dk/">TV2</a> (Denmark)</li>
                <li><a target="_blank" href="https://wunder.io/">Wunder</a> / Wunderkraut / NodeOne Denmark / Verk</li>
                <li>Precedent</li>
                <li><a target="_blank" href="https://www.skyscanner.net">Skyscanner</a></li>
                <li><a target="_blank" href="https://www.drupal.org/node/672802">SharkScopers</a></li>
                <li><a target="_blank" href="http://syn.org.au/">SYN</a></li>
                <li><a target="_blank" href="https://www.bluespark.com/">Bluespark</a></li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Jonathan',

    data: () => ({
    }),
  })
</script>
