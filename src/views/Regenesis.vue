<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-text>
            <div class="text-h5 mb-1">Why is Acuity having a Regenesis?</div>
            <div class="body-2 mb-4">Acuity is a fully decentralized social media platform that has been in development for five years, but it began as an independent Ethereum blockchain called <a href="https://www.mix-blockchain.org/">MIX</a>. The project is now migrating to a new <a href="https://polkadot.network/">Polkadot</a> blockchain. This has a number of advantages:
            </div>
            <div class="ml-4">
              <div class="text-h6 mb-1">Blockchain Interoperability</div>
              <div class="body-2 mb-4">Acuity is being built with Polkadot's <a href="https://www.substrate.io/">Substrate</a> blockchain construction kit. Chains built with this technology can connect together for improved block finality, decentralized token exchange and message passing.</div>
              <div class="text-h6 mb-1">Cheaper Transactions</div>
              <div class="body-2 mb-4">Being an independent Ethereum blockchain, MIX has a lot of capacity and cheap transactions. However, as we have seen on the Ethereum mainnet, transactions can get expensive very easily once transaction throughput increases. Proof-of-stake blockchains built with Substrate have much greater capacity than a PoW Ethereum blockchain. This is very important for Acuity because it uses on-chain transactions extensively when publishing content.</div>
              <div class="text-h6 mb-1">Massively Extensible</div>
              <div class="body-2 mb-4">Substrate has a system called <a href="https://substrate.dev/docs/en/knowledgebase/runtime/frame">FRAME</a> that provides many pluggable pallets that can easily add functionality to the blockchain.</div>
              <div class="text-h6 mb-1">Forkless Upgrades</div>
              <div class="body-2 mb-4">Using the Democracy pallet the Acuity community can agree when to upgrade the blockchain and this will happen automatically without node software having to be manually upgraded.</div>
              <div class="text-h6 mb-1">Reduced Supply Inflation</div>
              <div class="body-2 mb-4">Currently 30k MIX is mined everyday, inflating the MIX supply about 14% per year. After regenesis the ACUITY supply will inflate due to staking rewards by 10% per year.</div>
              <div class="text-h6 mb-1">EVM Upgrade</div>
              <div class="body-2 mb-4">MIX currently uses the Byzantium EVM. The <a href="https://substrate.dev/docs/en/knowledgebase/smart-contracts/evm-pallet">EVM pallet</a> in Substrate runs the newer Istanbul EVM.</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-text>
            <div class="text-h5 mb-1">What is ACUITY for?</div>
            <div class="body-2 mb-4">The ACUITY cryptocurrency has the following utilization:
              <ul>
                <li>Pay for transactions</li>
                <li>Validate the network</li>
                <li>Nominate validators</li>
                <li>Vote on governance referenda</li>
                <li>Bond parachains or parathreads (eventually)</li>
              </ul>
            </div>
            <div class="text-h5 mb-1">How will the migration happen?</div>
            <div class="body-2 mb-4">On 1st September 2020 a snapshot of all balances on MIX blockchain will occur and the new Acuity blockchain will launch. All MIX holders will be allocated the same amount of ACUITY as they held in MIX at the time of the snapshot.</div>
            <div class="body-2 mb-4">ACUITY can be claimed by signing a message from a MIX address using MyCrypto, MyEtherWallet or Coinomi in a similar procedure</a> to how DOTs can be claimed. See the <a href="https://www.youtube.com/watch?v=rjhWfKXJTCg">video</a> from Polkadot.</div>
            <div class="text-h5 mb-1">Will any extra ACUITY be created during Regenesis?</div>
            <div class="body-2 mb-4">No. Only ACUITY that can be claimed 1:1 from MIX balances will come into existence during Regenesis.</div>
            <div class="text-h5 mb-1">Can I just leave my MIX on an exchange?</div>
            <div class="body-2 mb-4">No. in order to claim your ACUITY your MIX must be held by you directly on 1st September, i.e. in MyCrypto, MyEtherWallet, or Coinomi. MIX left on an exchange will not be able to be converted into ACUITY.</div>
            <div class="text-h5 mb-1">Will content published via MIX be available on the new Acuity blockchain?</div>
            <div class="body-2 mb-4">No. Only MIX balances will be transferred.</div>
            <div class="text-h5 mb-1">How can I acquire MIX prior to Regenesis?</div>
            <div class="body-2 mb-4">The <router-link to="/support">Support Acuity</router-link> section lists several ways to acquire MIX.</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Regenesis',

    data: () => ({
    }),
  })
</script>
