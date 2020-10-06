<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10">
        <v-card>
          <v-card-text>
            <div class="body-2 mb-4">Acuity uses standard <a href="https://wiki.polkadot.network/docs/en/learn-consensus" target="_blank">Polkadot Consensus</a>. Assuming the <a href="https://polkadot.acuity.social/#/democracy" target="_blank">current referendum</a> passes, at block 619,200 on Saturday 17th October the Acuity network will automatically migrate from Proof-of-Authority to <a href="https://wiki.polkadot.network/docs/en/learn-staking" target="_blank">Nominated Proof-of-Stake</a>.</div>
            <div class="text-h5 mb-1">Nominators</div>
            <div class="body-2 mb-4"><a href="https://wiki.polkadot.network/docs/en/learn-nominator" target="_blank">Nominators</a> vote for which potential validators get to produce blocks. This is a much less involved process than running a validator. A nominator that does a good job of choosing validators will be rewarded. A nominator that does a bad job will be slashed.</div>
            <div class="text-h5 mb-1">Validators</div>
            <div class="body-2 mb-4"><a href="https://wiki.polkadot.network/docs/en/learn-validator" target="_blank">Validators</a> maintain node infrastructure to produce blocks. A validator operating correctly will generate revenue. If a validator makes a mistake it will be slashed and funds will be lost. Acuity is currently configured to have a maximum of 50 validators. In order to secure the network we need to have validators assembled before NPoS activates.</div>
            <div class="text-h4 mb-1">Getting started</div>
            <div class="body-2 mb-4">In the <a href="https://polkadot.acuity.social/#/staking/actions" target="_blank">Staking Actions</a> section of the Acuity Polkadot Portal you can bond ACU to both set up a validator and start nominating validators.</div>
            <div class="body-2 mb-4">There are many guides for staking with Polkadot and Kusama that are applicable to Acuity:
              <ul>
                <li><a href="https://wiki.polkadot.network/docs/en/maintain-guides-how-to-nominate-polkadot" target="_blank">How to Nominate on Polkadot</a></li>
                <li><a href="https://wiki.polkadot.network/docs/en/maintain-guides-how-to-validate-polkadot" target="_blank">Run a Validator (Polkadot)</a></li>
                <li><a href="https://www.youtube.com/watch?v=ZMzhM1m4I-k" target="_blank">Picking Validators to Nominate (Stake) in Polkadot</a> (video)</li>
                <li><a href="https://www.youtube.com/watch?v=NYs9oWAbzbE" target="_blank">Nominating/Staking on Polkadot and Kusama with Bill Laboon</a> (video)</li>
                <li><a href="https://www.youtube.com/watch?v=riVg_Up_fCg" target="_blank">Roles and Responsibilities of a Validator</a> (video)</li>
                <li><a href="https://www.youtube.com/watch?v=QqlUYCrhKWw" target="_blank">Staking on Polkadot UI, Everything you need to know!</a> (video)</li>
              </ul>
            </div>
            <div class="body-2 mb-4">In order to run a validator you will need to built the Acuity binary from the <a href="https://github.com/acuity-social/acuity-substrate-old" target="_blank">acuity-substrate-old</a> repo. This will soon be replaced by the acuity-substrate repo.</div>
            <div class="body-2 mb-4">Please join the Staking channel on <a href="https://discordapp.com/invite/GxD7adN" target="_blank">Acuity Discord</a> to discuss!</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Staking',

    data: () => ({
    }),
  })
</script>
