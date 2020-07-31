<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-text>
            <div class="text-h5 mb-1">How can I support Acuity financially?</div>
            <div class="body-2 mb-4">Development of Acuity is funded by a revenue smart contract that releases <a href="https://www.mix-blockchain.org/">MIX</a> over a 2000 day period at an ever-decreasing rate. On 1st September 2020 the Acuity <router-link to="/regenesis">Regenesis</router-link> occurs with all MIX being replaced 1:1 with ACUITY on the new Substrate-based blockchain.</div>
            <div class="body-2 mb-4">After this, the revenue process will continue, except that ACUITY will be released instead of MIX. This funding mechanism comes to an end on 18th October 2022.</div>
            <div class="body-2 mb-4">Check out the MIX <a href="https://docs.mix-blockchain.org/en/latest/issuance.html">issuance documentation</a>.</div>
            <div class="body-2 mb-4">MIX can be stored in the following wallets:
            <ul>
              <li><a href="https://www.coinomi.com/">Coinomi</a></li>
              <li><a href="https://mycrypto.com/account?network=MIX">MyCrypto</a></li>
              <li><a href="https://support.ledger.com/hc/en-us/articles/360011558494-MIX-Blockchain-MIX-">Ledger</a></li>
            </ul></div>
            <div class="body-2 mb-4">Obtaining MIX is currently the best way to support Acuity financially. There are two main ways to do this:</div>
            <div class="ml-4">
              <div class="text-h6 mb-1">Buy MIX on an exchange</div>
              <div class="body-2 mb-4">MIX is currently trading on two exchanges:
                <ul>
                  <li><a href="https://app.stex.com/en/trade/pair/ETH/MIX">STEX</a></li>
                  <li><a href="https://www.citex.io/#/trade/MIX_ETH">CITEX</a></li>
                </ul>
              </div>
              <div class="text-h6 mb-1">Mine MIX</div>
              <div class="body-2 mb-4">MIX can either be mined using your own full node: <a href="https://docs.mix-blockchain.org/en/latest/mine.html">instructions</a>, or you can use a mining pool:
                <ul>
                  <li><a href="https://comining.io/">Comining</a></li>
                  <li><a href="https://wattpool.net/ui/mix/stats">Wattpool</a></li>
                  <li><a href="https://solo-mix.shpool.net/">SHPool</a></li>
                </ul>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" style="backgound-color: white;">
        <iframe width="100%" height="800" src="https://acuity-social.github.io/mix-revenue/" frameBorder="0" style="backgound-color: white;"></iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Support',

    data: () => ({
    }),

    computed: {
    },
  })
</script>
