<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10">
        <div class="body-2">
          Older blog posts can be found on <a target="_blank" href="https://medium.com/mix-blockchain">Medium</a>.
        </div>
      </v-col>
      <v-col cols="12" md="10">
        <v-card elevation="10" outlined>
          <v-card-text>
            <div class="text-h5 mb-1">Acuity Parachain Strategy</div>
            <div class="subtitle-2 mb-4">19th March 2021 by Jonathan Brown</div>
            <div class="body-2 mb-4">
                <p>The <a href="https://polkadot.network/">Polkadot</a> ecosystem is evolving rapidly. <a href="https://kusama.network/">Kusama</a> will soon have <a href="https://wiki.polkadot.network/docs/en/learn-parachains">parachains</a> and Polkadot itself will follow. Parachains are a means of connecting together different blockchains in a hierarchy for shared security and asynchronous communication. Acuity will be a hierarchy within this hierarchy.</p>
                <p>This is one of the most important reasons for MIX migrating to the Polkadot ecosystem as Acuity.</p>
                <p>The long term vision is for Acuity to become a backbone for the fully decentralized web.</p>
                <p>Acuity will have many different decentralized social communities, such as decentralized equivalents of Wikipedia, Stack Overflow, CouchSurfing, GoFundMe, DeviantArt, Flickr, Instagram, YouTube, GitHub, Ancestry, Quora, Reddit, Maps, private communities, software packaging repositories, etc. Typically <a href="https://ipfs.io/">IPFS</a> hashes will be stored on-chain and other on-chain state will connect the content together in different ways depending on the use-case. <a href="https://www.parity.io/substrate-off-chain-workers-secure-and-efficient-computing-intensive-tasks/">Off-chain</a> indexing can be used for node software to optionally have other derived state that is not consensus-critical.</p>
                <p>The on-chain logic of Acuity communities will be totally robust and reliable, unlike just about any other social media platform. This will create huge confidence in the system. This is vital for system extensibility.</p>
                <p>Ultimately, each Acuity social community will exist on its own parachain that connects to the Acuity relay chain. Additionally, each social community can shard further by acting as a relay chain with many parachains, each being a different content language such as English, French, etc. This further increases scalability.</p>
                <p>The Acuity relay chain can connect to either the Polkadot or Kusama relay chains, either as a parachain or a parathread. This enables asynchronous communication with the rest of the Polkadot ecosystem. It will be much cheaper for Acuity social communities to connect to the Acuity relay chain, rather than Polkadot or Kusama directly.</p>
                <p>However, the timescale for hierarchical parachains on Polkadot is <a href="https://www.youtube.com/watch?v=Yomudj2BCEo&t=1882s">2 to 3 years</a>.</p>
                <p>This means in the short term we have a choice, either enable Acuity to connect to Polkadot / Kusama, or enable a single layer of parachain social communities to exist under the Acuity parachain.</p>
                <p>The way forward is clear, Acuity needs to be able to become a parachain / parathread on Kusama / Polkadot at the earliest opportunity to be able to participate in the early network effects that MIX missed out on on Ethereum (being an independent Ethereum blockchain at the time).</p>
                <p>The first Acuity community will be based on the original Solidity smart contracts <a href="https://github.com/acuity-social/acuity-contracts">developed</a> when Acuity was called MIX. The <a href="https://github.com/hyperledger-labs/solang">Solang</a> compiler is now mature enough to compile these to <a href="https://en.wikipedia.org/wiki/WebAssembly">Wasm</a> and can therefore be deployed on the <a href="https://www.substrate.io/kb/smart-contracts/contracts-pallet">Contracts</a> pallet on the Acuity blockchain.</p>
                <p>Eventually, once Acuity can have its own parachains, social communities will be developed as native <a href="https://www.substrate.io/">Substrate</a> pallets on their own blockchains. Developers wishing to extend the on-chain functionality of such a community without going through the governance mechanism will be able to do so with smart contracts.</p>
                <p>Currently the Acuity node software is based on Kusama. This does not provide what we need. In order for Acuity to be able to be a parachain, the node software needs to be rebuilt based on <a href="https://github.com/substrate-developer-hub/substrate-node-template">substrate-node-template</a>. This is not especially difficult and hopefully can be achieved without performing another <a href="https://wiki.polkadot.network/docs/ru/glossary#hard-spoon">hard-spoon</a>.</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="10">
        <v-card elevation="10" outlined>
          <v-card-text>
            <div class="text-h5 mb-1">ACU / ETH atomic swap exchange under development</div>
            <div class="subtitle-2 mb-4">3rd December 2020 by Jonathan Brown</div>
            <div class="body-2 mb-4">
              <p>I'm currently working on a very simple <a target="_blank" href="https://en.bitcoin.it/wiki/Atomic_swap">atomic swap</a> exchange for Acuity. This will be implemented as a Solidity smart contract and deployed on both the Ethereum and Acuity blockchains so ACU can be traded with ETH in a fully decentralized manner and without any counterparty risk.</p>
              <p>Those wishing to sell ACU will lock it up in the smart contract along with the ETH price they want to sell it for and a <a target="_blank" href="https://en.wikipedia.org/wiki/Cryptographic_hash_function">hash</a> of a random number. A buyer can deposit the ETH required into the smart contract on the Ethereum chain (along with the same hashed random number). At this point the seller can retrieve the ETH, but in doing so they reveal the random number. The buyer can then use this number to receive the ACU.</p>
              <p>The offers will be stored on-chain in a linked list, ordered by the quantity that is for sale. Various timeouts exist so that if either party does not fulfil their side of the arrangement the other party can retrieve their funds. The process can happen very quickly if both parties are online, or over space space of several hours. The procedure can also operative in reverse where someone can lock up their ETH to sell it for a specific ACU price.</p>
              <p>The frontend will be implemented directly in the Acuity web app you are using right now. It will require the simultaneous use of both the <a target="_blank" href="https://polkadot.js.org/extension/">Polkadot</a> and <a target="_blank" href="https://metamask.io/">Metamask</a> browser plugins.</p>
              <p>I think this can come together very quickly and be online within a couple of weeks.</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="10">
        <v-card elevation="10" outlined>
          <v-card-text>
            <div class="text-h5 mb-1">Acuity hard spooned!</div>
            <div class="subtitle-2 mb-4">26th November 2020 by Jonathan Brown</div>
            <div class="body-2 mb-4">
              <p>Due to the cessation of block production of the proof-of-authority nodes (see previous blog post), it was necessary for Acuity to <a target="_blank" href="https://wiki.polkadot.network/docs/ru/glossary#hard-spoon">hard spoon</a>. A snapshot of blockchain state was taken at block 1049095 (the last finalized block) and a new genesis block was created.</p>
              <p>Two modifications to the state were made:
                <ul>
                  <li>runtime upgrade - Built with the latest version of <a target="_blank" href="https://github.com/acuity-social/acuity-substrate">acuity-substrate</a>, this may fix the problem of new validators being unable to join the network  (and prevent cessation of block production from re-occuring).</li>
                  <li>sudo pallet - I have given myself admin access to the blockchain. This means I can fix any problems immediately and perform network upgrades without going through the governance mechanism. This feature will be removed once Acuity is more mature.</li>
                </ul>
              </p>
              <p>The blockchain has restarted from a fresh block 0. Let me know if anything is not as expected. The emphasis now is to ensure ACU can be traded freely. This will involve integrating with centralized exchanges, integrating with atomic swap decentralized exchanges (or building our own), and creating Wrapped ACU as an Ethereum ERC20 token.</p>
              <p>Really sorry for this extended outage - let's march forward with creating the most fully decentralized social media platform in existence!</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="10">
        <v-card elevation="10" outlined>
          <v-card-text>
            <div class="text-h5 mb-1">Acuity Social November 2020 Project Update</div>
            <div class="subtitle-2 mb-4">19th November 2020 by Jonathan Brown</div>
            <div class="body-2 mb-4">
              <p>Sorry for the radio-silence and delay in posting this update. We've had several typhoons hit us in the past few weeks and our corgi died from the distemper virus.</p>
              <p>There are a number of major Acuity announcements:</p>
            </div>

            <div class="text-h6 mb-1">Temporary cessation of block production</div>
            <div class="body-2 mb-4">
              <p>While Acuity has migrated from PoA to NPoS, we still only have the four original PoA nodes (see below). It is not yet possible for other nodes to become validators. On 15th November the server that is hosting the PoA nodes ran out of disk space, preventing further blocks from being produced. One invariant of Polkadot Consensus is that you have to have at least one block produced every epoch (1 hour on Acuity). Therefore, although there is now enough disk space, no further blocks are being produced at present.</p>
              <p>This is a <a target="_blank" href="https://github.com/paritytech/substrate/issues/4464">well-known problem</a>. There are two possible ways to resolve this: hard spoon (take a snapshot of the blockchain and restart it from block 0), or gradually increase block production timestamps until they are correct. I will investigate this further until we have a solution.</p>
            </div>

            <div class="text-h6 mb-1">Migration from PoA to NPoS</div>
            <div class="body-2 mb-4">
              <p>The referendum to transition Acuity from Proof-of-authority to Nominated Proof-of-stake passed and was automatically enacted on 17th October.</p>
              <p>It is now possible become a nominator and stake your ACU by choosing which validators you think will perform well. Unfortunately it is still not possible to become a validator. The transaction to set validator session keys does not succeed. The four original PoA validators remain as the only validators. Enabling anyone to become a validator will require further investigation.</p>
            </div>

            <div class="text-h6 mb-1">PoA validator profit automatically donated to treasury</div>
            <div class="body-2 mb-4">
              <p>A side-effect of migrating to NPoS is that all the revenue generated by the four PoA validators was and continues to be donated automatically to the Acuity Treasury. The treasury balance currently stands at around 750k ACU.</p>
              <p>Anyone can make a proposal for Treasury spending. Each proposal must be approved by the Acuity Council before it can be enacted.</p>
            </div>

            <div class="text-h6 mb-1">Parachain social communities</div>
            <div class="body-2 mb-4">
              <p>Polkadot has a hierarchical blockchain sharding model. Each blockchain built with Substrate can become a parachain for a parent relay chain. In fact, each parachain can become a relay chain for child parachains.</p>
              <p>The Acuity blockchain is currently not a parachain, nor a relay chain. It has the potential to become a parachain for the Kusama or Polkadot relay chains.</p>
              <p>What we are announcing today is that the Acuity blockchain will be able to be a relay chain for child Acuity parachains. Each Acuity parachain can be its own social community.</p>
              <p>Examples of communities on their own parachain would be decentralized versions of Wikipedia, Stack Overflow, CouchSurfing, GoFundMe, DeviantArt, Flickr, Instagram, YouTube, GitHub, Ancestry, Quora, Reddit, Maps, private communities, software packaging repositories, etc.</p>
              <p>This has a number of advantages:
                <ul>
                  <li>transaction throughput - while Polkadot NPoS does offer a much increased transaction throughput over the original Ethereum-based MIX blockchain, there is still a limit that at some point will become an issue. With one parachain per community, each community has full access to the total transaction capacity</li>
                  <li>reduced storage requirements - a full node will need to store the full state of the blockchain. With each community in its own parachain, node operators only need to store a subset of the total Acuity state.</li>
                  <li>local governance - while Polkadot Governance is excellent, each community being able to govern itself is even better!</li>
                  <li>native token - each social community can optionally have its own base currency to be used for governance or funding.</li>
                </ul>
              </p>
              <p>Certain state that could use useful across parachains, for example trust networks, actually needs to be stored on each parachain. Trust networks need to be able to be queried synchronously. <a target="_blank" href="https://wiki.polkadot.network/docs/en/learn-crosschain">XCMP</a> queries are asynchronous. While trust networks could be synchronized between parachains, this essentially means that each parachain community is largely siloed and independent.</p>
              <p>Protocols running over XCMP will be developed for standardized communication between Acuity parachains, for example to connect together accounts in different communities.</p>
            </div>

            <div class="text-h6 mb-1">Deployment of MIX smart contracts</div>
            <div class="body-2 mb-4">
              <p>The on-chain functionality of Acuity (MIX) is being re-implemented from scratch as a Substrate pallet. However, as we are now deploying multiple social communities in the Acuity parachain ecosystem it actually makes sense to deploy the original <a target="_blank" href="https://github.com/acuity-social/acuity-contracts">MIX smart contracts</a> as the first community on Acuity and then gradually develop the FRAME-based implementation that can be deployed on each parachain.</p>
              <p>This means that in a short period of time we can have all the functionality that was already implemented from the five years of development of MIX.</p>
              <p>The MIX contracts will either be deployed into the EVM pallet (most likely) or compiled with Solang into WASM for deployment into the Contracts pallet.</p>
            </div>

            <div class="text-h6 mb-1">Elected trusted accounts</div>
            <div class="body-2 mb-4">
              <p>The Acuity Browser will be available both as a progressive web app at acuity.social, and as a desktop app for Windows, Mac and Linux. While the web app is broadly the same as the desktop app and is built from the same source code, users have very different expectations for an app running on a domain name, versus a desktop app.</p>
              <p>In a desktop web browser like Chrome it is possible to view any content from anyone. The web app will essentially be a browser running in a browser, but when users see certain types of content being delivered by a web app running on a domain name they will consider the maintainers of the domain to be responsible for it.</p>
              <p>The desktop version of the Acuity Browser will have no restrictions just like a desktop web browser. This will not be the case when browsing content with the web app version. Acuity already has a system of trusted accounts. Content can be filtered so that in order for an item to be visible it must be published by someone you trust directly, or by someone who is trusted by someone you trust. This will be taken a step further for the web app. A large group of super-trusted accounts will be elected by the Polkadot Governance system in the same way that the council is elected. Only content in the trust network of one of super-trusted accounts will be displayed in the web app.</p>
              <p>A similar system will be used to determine which feeds are on the front page.</p>
            </div>

            <div class="text-h6 mb-1">STEX</div>
            <div class="body-2 mb-4">
              <p>It is now possible to trade ACU against ETH on <a target="_blank" href="https://app.stex.com/en/trade/pair/ETH/ACU">STEX</a>.</p>
            </div>

            <div class="text-h6 mb-1">ACU / ETH Atomic Swap Exchange</div>
            <div class="body-2 mb-4">
              <p>We are developing an Atomic Swap exchange that will be available on this website. Substrate already has an Atomic Swap pallet available. This will enable fully permissionless trading of ACU enabling its free market value to be determined. It will function through simultaneous use of both the Polkadot and Metamask browser plugins. This exchange will be fully open source and available for other Polkadot chains to utilize.</p>
            </div>

            <div class="text-h6 mb-1">Wrapped ACU (WACU)</div>
            <div class="body-2 mb-4">
              <p>Eventually <a target="_blank" href="https://wiki.polkadot.network/docs/en/learn-collator">Polkadot Collators</a> will be able to monitor blockchains that are not Polkadot parachains, for example Ethereum. Once this functionality is complete it will be possible to have a WACU ERC20 token on the Ethereum blockchain. Polkadot have an excellent <a target="_blank" href="https://www.youtube.com/watch?v=rvoFUiOR3cM">video</a> about this.</p>
            </div>

          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="10">
        <v-card elevation="10" outlined>
          <v-card-text>
            <div class="text-h5 mb-1">Let's enable staking on the new Acuity Polkadot blockchain</div>
            <div class="subtitle-2 mb-4">25th September 2020 by Jonathan Brown</div>
            <div class="body-2 mb-4">
              <p>The Acuity blockchain uses standard Polkadot <a target="_blank" href="https://wiki.polkadot.network/docs/en/learn-consensus">consensus</a> and <a target="_blank" href="https://wiki.polkadot.network/docs/en/learn-governance">governance</a>.</p>

              <p>Just like Polkadot and Kusama, Acuity launched in proof-of-authority mode. We now need to switch to proof-of-stake. Polkadot and Kusama both launched with the Sudo pallet (god-mode) enabled and used this to call <a target="_blank" href="https://polkadot.js.org/api/substrate/extrinsics.html#forcenewera">staking.forceNewEra</a> to initiate this transition.</p>

              <p>However, as Acuity does not have the Sudo pallet enabled, it is necessary to make the staking.forceNewEra call via the proper governance mechanism. To this end I have created an Acuity Council <a target="_blank" href="https://polkadot.acuity.social/#/council/motions">motion</a>. This needs to be voted on by council members so that it can go to a general referendum. Please join the council and vote for this motion.</p>

              <p>There is currently another referendum in progress. Under normal circumstances only one referendum can be running at a time and each referendum takes 1 week. This means that the referendum to start staking cannot finish until 9th October. Then there is an enactment delay of 8 days. So staking will probably begin on 17th October. This will give us time for many validators to get ready.</p>

              <p>Once PoS has begun, any ACU that the current PoA accounts have accrued will be donated to the treasury.</p>

              <p>If you need any assistance with this process, please drop into the Staking channel on <a target="_blank" href="https://discordapp.com/invite/GxD7adN">Discord</a>.</p>

              <p>This is what I am currently considering including in the subsequent council proposal:
                <ul>
                  <li>Enable fast-track legislation: Polkadot governance has a fast-track mechanism that allows a proposal to be brought to referendum immediately, with a far shorter voting period than normal (3 days) and a near zero enactment period. This would enable me to propose system upgrades that could be enacted much more quickly.</li>
                  <li>Vest the project revenue: on MIX the project revenue was gradually <a target="_blank" href="https://docs.mix-blockchain.org/en/latest/issuance.html">released</a> at a ever-decreasing rate, ending October 18th 2022. The unreleased revenue was brought across to the new ACU blockchain, but it needs to be vested to match the original schedule.</li>
                  <li>Enable <router-link to="/trade">ACU</router-link> pallet: expose ACU to DeFi on Ethereum.</li>
                </ul>
              </p>
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
    name: 'Blog',

    data: () => ({
    }),
  })
</script>
