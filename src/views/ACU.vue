<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10">
        <v-card>
          <v-card-text>
            <div class="body-2 mb-4">ACU is the base cryptocurrency for the Acuity platform. It existed as MIX for 1225 days before the <router-link to="/regenesis">Regenesis</router-link> on 1st September 2020. ACU has a number of purposes.</div>
            <div class="text-h4 mb-1">Publishing Transactions</div>
            <div class="body-2 mb-4">A very small network fee to needs to be paid for each transaction. Publishing content on Acuity is a transaction like any other. This is why you can always publish - you are paying to write to a permissionless database.</div>
            <div class="text-h4 mb-1">Funding</div>
            <div class="body-2 mb-4">Revenue for the project is provided by a 2000 day slow release of the ACU cryptocurrency ending on October 18th 2022. This is a continuation of the <a href="https://docs.mix-blockchain.org/en/latest/issuance.html" target="_blank">issuance model</a> on MIX.</div>
            <div class="body-2 mb-4">Content creators will also be able to be crowdfunded through the issuance of a brand token that can be conspicuously burned by fans - <a href="https://www.youtube.com/watch?v=wY8pAahyIw4" target="_blank">see video</a>.</div>
            <div class="body-2 mb-4"></div>
            <div class="text-h4 mb-1">Trading</div>
            <div class="body-2 mb-4">Acuity has the currency code ACU and can be freely transferred and traded. There are currently two mains ways to trade ACU:
            <ul>
              <li>STEX have an <a href="https://app.stex.com/en/trading/pair/ETH/ACU/1D" target="_blank">ACU/ETH</a> pair.</li>
              <li>You can find someone to trade with OTC on <a target="_blank" href="https://matrix.to/#/!kfaMBmYfTFkOzPtvdH:matrix.org?via=matrix.org">Element</a>, <a href="https://discord.gg/ekuJCWQeGz" target="_blank">Discord</a>, or <a target="_blank" href="https://t.me/Acuity_Trading">Telegram</a>.</li>
            </ul>
            </div>
            <div class="text-h6 mb-1">Atomic Swap</div>
            <div class="body-2 mb-4">An important feature in the Acuity Roadmap is to have an <router-link to="/atomic-swap">atomic swap</router-link> exchange. It will be possible trade ACU against many other assets without a third party. This will involve the simultaneous use of both the Polkadot and Metamask browser plugins.</div>
            <div class="text-h4 mb-1">Governance</div>
            <div class="body-2 mb-4">ACU is the governance token for Acuity. It uses standard <a href="https://wiki.polkadot.network/docs/en/learn-governance" target="_blank">Polkadot Governance</a>. This is a hierarchical system of checks and balances that enables the community to collaboratively decide how to make automated changes to the blockchain including replacing the runtime, retrieving lost funds and spending treasury funds.</div>
            <div class="text-h4 mb-1">Cash</div>
            <div class="body-2 mb-4">Because Acuity is a social media platform, ACU is ideally placed to be a form of cash. Cash cannot exist without a social network.</div>
            <div class="text-h4 mb-1">Civil Guarantee</div>
            <div class="body-2 mb-4">Users will be able to individually or collectively lock up funds as a guarantee for future behaviour. Other users will have the opportuntity to sue to obtain some of the locked funds. An on-chain court system will make such judgements.</div>
            <div class="text-h4 mb-1">Staking</div>
            <div class="body-2 mb-4">Acuity uses standard <a href="https://wiki.polkadot.network/docs/en/learn-consensus" target="_blank">Polkadot Consensus</a>, AKA <a href="https://wiki.polkadot.network/docs/en/learn-staking" target="_blank">Nominated Proof-of-Stake</a>.</div>
            <div class="text-h6 mb-1">Nominators</div>
            <div class="body-2 mb-4"><a href="https://wiki.polkadot.network/docs/en/learn-nominator" target="_blank">Nominators</a> vote for which potential validators get to produce blocks. This is a much less involved process than running a validator. A nominator that does a good job of choosing validators will be rewarded with more ACU. A nominator that does a bad job will loose some of their stake.</div>
            <div class="text-h6 mb-1">Validators</div>
            <div class="body-2 mb-4"><a href="https://wiki.polkadot.network/docs/en/learn-validator" target="_blank">Validators</a> maintain node infrastructure to produce blocks. A validator operating correctly will be rewarded with more ACU. A validator that makes a mistake will loose some of their stake. Acuity currently has four authority validators. A future upgrade will enable anyone to become a validator.</div>
            <div class="text-h6 mb-1">Getting started</div>
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
            <div class="body-2 mb-4">In order to run a validator you will need to download the Acuity binary from the <a href="https://github.com/acuity-social/acuity-substrate" target="_blank">acuity-substrate</a> repo.</div>
            <div class="body-2 mb-4">Please join the <a target="_blank" href="https://matrix.to/#/!uvBQLOQZzBidUJYjWK:matrix.org?via=matrix.org">Staking</a> room on Acuity Matrix</a> to discuss.</div>
            <div class="text-h4 mb-1">Anything else...</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'ACU',

    data: () => ({
    }),
  })
</script>
