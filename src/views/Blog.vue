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
            <div class="text-h5 mb-1">Social Trading</div>
            <div class="subtitle-2 mb-4">17th April 2022 by Jonathan Brown</div>
            <div class="body-2 mb-4">
              <p>The Acuity Atomic Swap DEX is a spin-out project from the broader Acuity Decentralized Social Media project. On Acuity, each social community is a separate Substrate parachain. Anyone can design a new concept for how they want their community to operate, launch their own parachain, and connect it to the Acuity relay chain for shared security and cross-community communication. The ACU chain is an Acuity social parachain dedicated to the atomic swap DEX.</p>
              <p>The Acuity DEX will enable fully decentralized trading between all pair combinations of all coins and tokens in the Acuity ecosystem and all EVM / WASM compatible chains (Ethereum, Classic, Optimism, Arbitrum, Moonbeam, Kulupu, Neatcoin, Avalanche, Solana, SmartBCH).</p>
              <p>Acuity is a rebuild of the MIX social media platform from Ethereum to <a target="_blank" href="https://substrate.io/">Substrate</a>. One of the key technologies that is being brought across from MIX to Acuity is Trusted Accounts. Essentially this enables users to create an on-chain public list of other users that they trust. An extended trust network is defined as all the users a user trusts, plus all the users that are trusted by users they trust.</p>
              <p>If a user does a poor job of deciding who they should trust, they will be punished by not being trusted by others.</p>
              <p>Trusted Accounts have many important use-cases. Here is the original <a target="_blank" href="https://medium.com/mix-blockchain/how-illegal-and-immoral-content-will-be-handled-on-mix-blockchain-e32fc25bc42f">blog post</a> and <a target="_blank" href="https://www.youtube.com/watch?v=j8WfGYxBERo">video</a> from MIX. (Note, I haven't re-read the blog post because it is on medium.com and it is blocked from my location. You may need to use a VPN to access it.)</p>
              <p>On MIX, Trusted Accounts were <a target="_blank" href="https://github.com/acuity-social/acuity-contracts/tree/master/src/acuity-trusted-accounts">implemented</a> as a Solidity smart contract. Porting the functionality to a Substrate pallet is <a target="_blank" href="https://github.com/acuity-social/acuity-trusted-accounts-pallet">almost complete</a>. It is useful in a number of ways for the Acuity DEX:</p>
              <p>
                <ul>
                  <li>Seller discovery - as a buyer you can see all sell orders from everyone in your extended trusted network.</li>
                  <li>Obtaining reliable trading data - a major problem with exchanges is fake trades. This can affect both pricing and volume information. On a decentralized exchange such as Acuity, it is very easy for someone to trade with themselves at any price and volume. Because of this it is not possible to harvest data from all the trades on the platform. A better way is to limit trading data to only come from trades made my those within your extended trust network.</li>
                  <li>Reducing transaction fees - in earlier implementations of the Acuity DEX the smart contracts to be deployed to the trading chains had on-chain linked lists as a anti-spam and lock discovery measure. This increased transaction fees on the trading chains. With the Trusted Accounts network on the Acuity chain the complexity of the implementation deployed to the trading chains can be significantly reduced. Buyers will only see sell orders from their extended trust network. Sellers will be notified of buy locks by events on the buying chain.</li>
                  <li>Less transactions - the quantity of blockchain transactions required to facilitate trades on the Acuity DEX is reduced. Previously the seller had to lock up their funds against a specific asset to buy so they could be indexed in the linked list on-chain. Now buyers can simply examine the quantity of funds the seller has stored at their address to determine if they have the funds necessary to complete a trade.</li>
                  <li>More flexibility - sellers can create multiple sell orders for the same funds so they can attempt to sell it for many different assets simultaneously.</li>
                </ul>
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="10">
        <v-card elevation="10" outlined>
          <v-card-text>
            <div class="text-h5 mb-1">Architectural changes to Acuity Atomic Swap DEX</div>
            <div class="subtitle-2 mb-4">6th February 2022 by Jonathan Brown</div>
            <div class="body-2 mb-4">
              <p>The Acuity DEX has been making a huge amount of progress towards launching an MVP, as can be seen from recent <a target="_blank" href="https://www.youtube.com/channel/UCkvRVEWnTPWWYJQqPbYwyiw/videos">videos</a>.</p>
              <p>A major goal in the design of the exchange has been to make it as autonomous as possible with all of the critical functionality written in <a target="_blank" href="https://github.com/acuity-social/acuity-atomic-swap-solidity">smart contracts</a> and Substrate <a target="_blank" href="https://github.com/acuity-social/acuity-atomic-swap-pallet">pallets</a>. This has had to be balanced against other concerns such as transaction fees. To this end it was decided to have an <a target="_blank" href="https://github.com/acuity-social/acuity-atomic-swap-offchain">off-chain indexer</a> component written in Rust. It listens to relevent events on participating blockchains, indexes the data in a centralized database, and responds to WebSocket queries from the exchange app running in the browser.</p>
              <p>This works extremely well, although it did add a lot of complexity to the system. While the indexer is read-only and does not have any control over the exchange it is still a central point of failure.</p>
              <p>During testing it became apparent that the system could be simplified even further, removing the off-chain indexer, and reducing gas costs at the same time. This will make the Acuity DEX fully autonomous.</p>
              <p class="text-h6 mb-1">Autonomous Cross-chain Trading Protocol</p>
              <p>Here's how it works:</p>
              <p>
                <ul>
                  <li>The seller must link their ACU account to the account on the blockchain they are selling from. They do this by publishing the opposite address on both blockchains.</li>
                  <li>The seller locks up funds in the Acuity smart contract on the blockchain they are selling from. In the transaction they indicate which asset they wish to buy. The smart contract maintains a singly-linked list for each pair with the largest deposits at the top. This is an anti-spam measure. The seller can add / remove funds at any time or change the asset to be bought.</li>
                  <li>The seller then publishes their sell orders on the Acuity blockchain. Sell orders can be modified very cheaply because they are maintained in a dedicated pallet on the Acuity blockchain.</li>
                  <li>For any given pair, the front-end (hosted on IPFS) can query the selling blockchain directly and get the list of deposits. It will then query the Acuity blockchain for each of these deposits to get their sell orders. These are then sorted and presented to the user in the UI.</li>
                  <li>The buyer locks up funds to purchase from a specific sell order. The atomic swap proceeds in the same manner as the <a target="_blank" href="https://www.youtube.com/watch?v=XaHDJTpU7go">current implementation</a>.</li>
                  <li>Other than blockchain transaction fees, there is no fee to trade on Acuity DEX.</li>
                </ul>
              </p>
              <p>Advantages over previous implementation:</p>
              <p>
                <ul>
                  <li>No central point of failure. The whole system is fully autonomous. No one can stop you from trading.</li>
                  <li>Lower transaction fees - with the current implementation you have to pay for transactions on the selling blockchain even to change the price you wish to sell at. Now the order book is maintained in a native pallet on the Acuity blockchain.
                  <li>Publishing of sell orders on the Acuity blockchain will increase the monetary velocity of ACU.</li>
                  <li>We can launch sooner.</li>
                </ul>
              </p>
              <p>
                Just about any EVM-compatible blockchain will added to the exchange, including Ethereum, Optimism, Arbitrum, Ethereum Classic, Moonbeam, Avalanche and Solana. Initially only the base cryptocurrency of each blockchain will be supported. Later an improved version of the EVM smart contract will be deployed to all chains to enable cross-chain trading of all ERC20 tokens between all EVM blockchains.
              </p>
            </div>
            <div class="text-h6 mb-1">Staking &amp; Trading</div>
            <div class="body-2 mb-4">
              <p>
                <a target="_blank" href="https://polkadot.acuity.social/#/staking">Staking</a> has been re-enabled on the Acuity blockchain. Become a nominator or validator to secure the network and increase your ACU holdings.
              </p>
              <p>
                Until the DEX launches, ACU can be traded on <a target="_blank" href="https://app.stex.com/en/trading/pair/ETH/ACU/1D">STEX</a> or OTC on <a target="_blank" href="https://discord.com/invite/GxD7adN">Discord</a>.
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="10">
        <v-card elevation="10" outlined>
          <v-card-text>
            <div class="text-h5 mb-1">Hard Spoon Completed</div>
            <div class="subtitle-2 mb-4">14th December 2021 by Jonathan Brown</div>
            <div class="body-2 mb-4">
              <p>The <a target="_blank" href="https://wiki.polkadot.network/docs/glossary#hard-spoon">hard spoon</a> announced in the previous blog post has now occurred. At block #3276706 a snapshot was recorded of all ACU balances and unclaimed MIX => ACU.</p>
              <p>A new genesis block was created and the new blockchain started to facilitate the upcoming launch of the <router-link to="/atomic-swap">Acuity DEX</router-link>. This was the third (and hopefully final) hard spoon that has been performed on the Acuity blockchain.</p>
              <p>If you are running a full node, you will need to update to the <a target="_blank" href="https://github.com/acuity-social/acuity-substrate/releases">latest release</a> of the Acuity software and sync from scratch.</p>
              <p>The Polkadot <a target="_blank" href="https://polkadot.acuity.social/">web interface</a> for Acuity has been updated to the latest version and is now connected to the new blockchain. You might need to give it a hard refresh.</p>
              <p>All balances have been brought over to the new blockchain. Our exchange partner <a target="_blank" href="https://app.stex.com/en/trading/pair/ETH/ACU/1D">STEX</a> has already updated their platform.</p>
              <p>If you were staking, either as a nominator or a validator, you will need to <a target="_blank" href="https://www.youtube.com/watch?v=M8Cju6M06MQ">set this up</a> again.</p>
              <p>We can now move forward with launching the Acuity Atomic Swap Exchange that will enable fully decentralized trade between many different blockchains.</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="10">
        <v-card elevation="10" outlined>
          <v-card-text>
            <div class="text-h5 mb-1">Acuity Atomic Swap DEX - the future of interchain trading</div>
            <div class="subtitle-2 mb-4">4th December 2021 by Jonathan Brown</div>
            <div class="body-2 mb-4">
              <p>First a little back-story on the history of Acuity...</p>
              <p>Acuity (previously known as MIX) was started in 2015 with the goal of creating on-chain social communities. These have many useful properties that are not available on centralized platforms including:</p>
              <p>
                <ul>
                  <li>permissionless innovation: everyone is at liberty to improve the platform</li>
                  <li>separation of data and functionality: you can create an entirely new social platform and bring in all the existing users</li>
                  <li>censorship resistance: you can always publish - of course whether any one is listening is another matter</li>
                  <li><a target="_blank" href="https://en.wikipedia.org/wiki/Link_rot">link rot</a> prevention: each piece of content has a permanent id and anyone can ensure that the content remains hosted</li>
                </ul>
              </p>
              <p>MIX was built on a clone of Ethereum and achieved a minimum viable product as can be seen on the <a target="_blank" href="https://www.youtube.com/channel/UCkvRVEWnTPWWYJQqPbYwyiw/videos">Acuity YouTube channel</a>.</p>
              <p>At that time DeFi and scalable programmable blockchains were still only an idea. While we knew centralized exchanges were bad and DeFi was the way forward, it was decided to concentrate on the primary goal of the project (on-chain social communities). This meant that the coin for the project (MIX) was traded on centralized exchanges with the intention of migrating trading to DeFi once the technology was available.</p>
              <p>On the 3rd September 2020 MIX migrated from a clone of Ethereum to the Polkadot ecosystem. The new blockchain is known as Acuity. All MIX balances could and still can be converted to ACU.</p>
              <p>Polkadot is a much more suitable technology for on-chain social communities. It has a scalability model where there are many different high performance parachains with their own governance that can connect together via a "relay chain" for shared security and communication.</p>
              <p>When designing on-chain social communities there is unlimited potential for innovation. This is why the goal with Acuity on Polkadot is that each on-chain social community will have its own parachain. Each community can operate in its own way while still being able to communicate via the Acuity relay chain with other parachain communities.</p>
            </div>
            <div class="text-h6 mb-1">The problem...</div>
            <div class="body-2 mb-4">
              <p>However it became apparent that centralized exchanges are an obstacle for Acuity and the broader blockchain movement.</p>
              <p>The issue is that when a centralized exchange lists a coin, they are actually creating a totally new coin that is simply stored in a database that they control. The exchange operator uses public relations to ensure that in the mind of coin holders a real coin (the owner is in possession of the private key) is equivalent to a coin held on the exchange.</p>
              <p>However this couldn't be further from the truth. Cryptocurrencies are generally said to have certain important properties, such as having deterministic inflation rate and the fact that they are "sound money" that can't be counterfeited. While this may be true on the blockchain, this is most certainly not true on centralized exchanges.</p>
              <p>Because operators of CEXs are in control of the database of their cryptocurrency, they have the technical ability to create arbitrary amounts of it as they see fit and use this fake cryptocurrency to benefit themselves.</p>
              <p>For example, they can create arbitrary quantities of coin A and sell it for coin B on their own exchange, thereby lowering the value of coin A and raising the value of coin B. This means they know the future. There are many ways this can be used to generate large profits. For example, they can:</p>
              <p>
                <ul>
                  <li>obtain large quantities of coin B before raising its value, then sell it OTC</li>
                  <li>start positive feedback buying loop of coin B where many unsuspecting traders also participate, before selling at the top</li>
                  <li>short coin A against another coin</li>
                  <li>conspire with other CEXs to work in lockstep, thereby increasing profits</li>
                  <li>sell information about the future, e.g. paywalled mailing lists</li>
                  <li>do all of this over and over again</li>
                </ul>
              </p>
              <p>So CEXs have the potential to be parasites, sucking value out of crypto projects. They have the power to decide the winners and losers.</p>
              <p>On proof-of-stake blockchains and those that use stake for governance (like Polkadot) the situation is even worse. CEXs can use their power to accumulate vast real quantities of a specific cryptocurrency and then use it to interfere with the governance of the chain.</p>
              <p>CEXs can operate like banks, only keeping a fractional reserve of deposits. This is totally invisible unless they become completely insolvent, at which point the exchange will shut down.</p>
              <p>CEX operators may start out with the intention of being corrupt or they may become corrupt over time, either because the temptation is too great or because they make a technical error and loose funds that need to be recovered. Either way we are trusting CEXs to not be corrupt. This goes against the fundamental purpose of blockchain - having rules without having to trust anyone.</p>
              <p>Exchange rates on major centralized exchanges are generally quite similar to those on DeFi, showing that the community really believes that coins on a CEX are equivalent to those on a DEX. Price aggregation websites combine the exchange rates of centralized exchanges with those from DeFi, further propagating the myth.</p>
              <p>Of course the other issue with centralized exchanges is that you have no guarantee that you can convert your CEX coins into real coins. Many people have lost crypto over the years because they have been unable to withdraw it.</p>
              <p>ACU is currently trading on <a target="_blank" href="https://www.stex.com/">STEX</a>. They have treated us very well and they do not appear to be corrupt.</p>
            </div>
            <div class="text-h6 mb-1">The solution...</div>
            <div class="body-2 mb-4">
              <p>DeFi solves this problem. Trading on DeFi does not involve depositing crypto into a centralized system that credits you with tokens in a controlled database. Trading occurs via smart contracts that operate in a fully deterministic manner. There is no need to trust a third party.</p>
              <p>DeFi on a single blockchain, for example Uniswap, has been very successful. But what we really need to replace centralized exchanges is cross-chain DeFi.</p>
              <p>There are various ways this can be done, for example with <a target="_blank" href="https://wiki.polkadot.network/docs/learn-bridges">Polkadot Bridges</a>. This enables tokens to be "teleported" from one chain to another where they can be traded using regular on-chain DeFi.</p>
              <p>Another way that has been discussed since the early days of Bitcoin, but not fully realized, is <a target="_blank" href="https://www.youtube.com/watch?v=-9NDKbJo_A4">Atomic Swap</a>. This enables direct trading from wallet to wallet across blockchains. With atomic swap either both the buy and sell transfers occur or neither of them do.</p>
              <p>It was announced on 3rd December 2020 that development had started on the <router-link to="/atomic-swap">Acuity DEX</router-link>.</p>
              <p>Development of the DEX is now very mature. On testnets it is possible to create ACU sell orders and match them with ETH. <a target="_blank" href="https://www.youtube.com/watch?v=9-DvgMzOtis">Here's the video</a>.</p>
              <p>The next step is to implement the UI for sales in the other direction (creating ETH sell orders and matching them with ACU). We will then have the minimal viable product. After that we will be adding support for many more programmable blockchains (Optimism, Arbitrum, Polkadot chains, Avalanche, Solana, etc) and also all tokens within those blockchains.</p>
              <p>The UI will need to be improved a lot. This is an ongoing process.</p>
              <p>Atomic Swaps operate with a system of timeouts. If either party doesn't do what is required of them the other party simply has to wait for the timeout to expire. The timeout duration can be negotiated by both parties before the trade starts. For fast blockchains and bot or bot-assisted trading these timeouts can be just a few seconds long, resulting in high frequency trading.</p>
              <p>An important aspect of Atomic Swap trading is that you need to be able to view the reputation of potential trading partners. The Acuity DEX will have an on-chain review / rating system, storing IPFS hashes of comments. Essentially the first parachain social community on Acuity. In order to publish reviews of your trading partners it will be necessary to spend a small amount of ACU to pay for the transaction.</p>
              <p>For example a trade could happen between Avalanche and Solana, and the traders would pay a small amount of ACU to review it.</p>
            </div>
            <div class="text-h6 mb-1">Hard spoon</div>
            <div class="body-2 mb-4">
              <p>Before we can launch the exchange we need to perform a <a target="_blank" href="https://wiki.polkadot.network/docs/glossary#hard-spoon">hard spoon</a> to upgrade the blockchain. This will be the third (and hopefully final) hard spoon that we have performed on the Acuity blockchain. This will occur over the next few days. A snapshot of all ACU balances will be taken and a new genesis block will be created. You do not need to take any action before the hard spoon.</p>
              <p>Any ACU you have locked or staked will be credited to your account. Nominators and validators can be setup again after the hard spoon.</p>
            </div>
            <div class="text-h6 mb-1">Parachains</div>
            <div class="body-2 mb-4">
              <p>As described above, Acuity will be a federated system with each <router-link to="/parachains">parachain</router-link> being its own on-chain community that has unique functionality (its own runtime). There will be an airdrop where holders of ACU will receive ACR, ACF and ACT. </p>
              <p>The airdrop had been previously scheduled for 1st December, but this could not occur before the atomic swap exchange is operational because the new assets will need to be tradable. It will not be appropriate to perform the airdrop until the exchange is running effectively and on blockchains that do not have high fees.</p>
              <p>Once it becomes possible and the community deems it the right time, the airdrop will occur.</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="10">
        <v-card elevation="10" outlined>
          <v-card-text>
            <div class="text-h5 mb-1">Acuity DEX Alpha Testing and Parachain Airdrop</div>
            <div class="subtitle-2 mb-4">23rd July 2021 by Jonathan Brown</div>
            <div class="text-h6 mb-1">Acuity atomic swap decentralized exchange gears up for alpha testing</div>
            <div class="body-2 mb-4">
              <p>The <router-link to="/atomic-swap">Acuity DEX</router-link> is approaching minimum viable product. To begin with it will have a simple pair ACU / ETH. It will be possible to trade ETH stored in <a target="_blank" href="https://metamask.io/">Metamask</a> for ACU stored in the <a target="_blank" href="https://polkadot.js.org/extension/">Polkadot browser extension</a>. The <a target="_blank" href="https://github.com/acuity-social/acuity-atomic-swap-solidity">Solidity smart contracts</a> and the <a target="_blank" href="https://github.com/acuity-social/acuity-atomic-swap-pallet">Substrate pallet</a> are both mature. Development of a Rust-based <a target="_blank" href="https://github.com/acuity-social/acuity-atomic-swap-offchain">off-chain worker</a> to index the order book continues. Basic UI is coming together.</p>
              <p>We will be adding many more pairs in future, including all ERC20 tokens, Avalanche, and Substrate chains that have enabled a supported pallet (Acuity, Contracts, or EVM).</p>
              <p>Support for trading with Ethereum via new layer 2 technologies like <a target="_blank" href="https://optimism.io/">Optimism</a> and <a target="_blank" href="https://arbitrum.io/">Abritrum</a> is a major priority to reduce transaction fees.</p>
            </div>
            <div class="text-h6 mb-1">Acuity parachains airdrop October 4th</div>
            <div class="body-2 mb-4">
              <p>In order to fully take advantage of the Substrate parachain system, the Acuity blockchain will be <router-link to="/parachains">federating</router-link> into 3 parachains and a relay chain. This will increase the scalability, security and flexibility of the whole system. The current ACU blockchain will become the Acuity DeFi parachain. The two new parachains will be:</p>
              <p><ul>
                <li>Acuity Feeds (ACF) - for feed based social content like Twitter and YouTube.</li>
                <li>Acuity Topics (ACT) - for topic based content like Reddit.</li>
              </ul></p>
              <p>A snapshot of all ACU balances will be taken on October 4th and the new blockchains will be started. Each ACU holder will receive a balance of ACR, ACF and ACT equal to their balance of ACU.</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="10">
        <v-card elevation="10" outlined>
          <v-card-text>
            <div class="text-h5 mb-1">Project Update</div>
            <div class="subtitle-2 mb-4">5th May 2021 by Jonathan Brown</div>
            <div class="text-h6 mb-1">New Substrate implementation</div>
            <div class="body-2 mb-4">
              <p>In line with the previous blog post and <a target="_blank" href="https://www.youtube.com/watch?v=ipg6KQNcZ-k">video</a>, a new Acuity <a target="_blank" href="https://www.substrate.io/">Substrate</a> node implementation has been <a target="_blank" href="https://github.com/acuity-social/acuity-substrate/releases">released</a>.</p>
              <p>The previous implementation was based on Kusama, which was causing a number of problems. The new implementation is based on <a target="_blank" href="https://github.com/substrate-developer-hub/substrate-node-template">substrate-node-template</a> and has the following advantages:</p>
              <p><ul>
                <li>It is now possible to become a validator on the Acuity network. This is an important step for Acuity to become fully decentralized. The process for setting up an Acuity validator node is very similar to <a target="_blank" href="https://wiki.polkadot.network/docs/en/maintain-guides-how-to-validate-polkadot">Polkadot</a>.</li>
                <li>The <a target="_blank" href="https://www.substrate.io/kb/smart-contracts/contracts-pallet">Contracts</a> pallet has been enabled. This is key to deploying the <router-link to="/features">Features</router-link> brought across from MIX and also the <router-link to="/atomic-swap">Atomic Swap</router-link> decentralized exchange functionality.
                <li>If there is a problem with using the Contracts pallet, the <a target="_blank" href="https://www.substrate.io/kb/smart-contracts/evm-pallet">EVM</a> pallet can be enabled and the contracts compiled with the standard Solidity to EVM compiler.</li>
                <li>The codebase can be easily <a target="_blank" href="https://github.com/substrate-developer-hub/substrate-parachain-template">updated</a> for Acuity to be able to become a parachain on Polkadot or Kusama.</li>
              </ul></p>
              <p>Unfortunately, because it was not possible to upgrade the Acuity blockchain directly to the new runtime a <a target="_blank" href="https://wiki.polkadot.network/docs/glossary#hard-spoon">hard spoon</a> had to be performed. This involved taking a snapshot of all the ACU balances and unclaimed MIX balances and creating a new genesis specification. This has the following disadvantages:</p>
              <p><ul>
                <li>2,000,000 blocks of history are no longer archived on the main chain.</li>
                <li>Account identity information has been lost. Registrars will need to enabled and on-chain identities re-established.</li>
                <li>The council has been reset and will need to be voted in again.</li>
                <li>Nominators will need to re-bond their stake and controller accounts.</li>
              </ul></p>
            </div>
            <div class="text-h6 mb-1">Community discussions moving to Matrix</div>
            <div class="body-2 mb-4">
              <p>Until now the Discord and Telegram platforms have been the main places for discussions about Acuity. Ultimately, the goal is for these discussions to move to Acuity itself. In the mean time another group chat platform will become the primary place to discuss Acuity: <a target="_blank" href="https://matrix.org/">Matrix</a>.</p>
              <p>Matrix has a lot in common with Acuity. It is open source, non-proprietary, and permissionlessly extensible. It is also quite different. It is more ephemeral and can be private, whereas Acuity is permanent and fully public. Acuity does not have the concept of a "home server", it is entirely serverless.</p>
              <p>The <a target="_blank" href="https://matrix.to/#/+acuity:matrix.org">Acuity Community</a> on Matrix has been created. All Acuity group messaging communities including Discord and Telegram will now be strictly moderated. Only constructive messages will be permitted and there will be no price discussion.</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="10">
        <v-card elevation="10" outlined>
          <v-card-text>
            <div class="text-h5 mb-1">Acuity Parachain Strategy</div>
            <div class="subtitle-2 mb-4">19th March 2021 by Jonathan Brown</div>
            <div class="body-2 mb-4">
                <p>The <a target="_blank" href="https://polkadot.network/">Polkadot</a> ecosystem is evolving rapidly. <a target="_blank" href="https://kusama.network/">Kusama</a> will soon have <a target="_blank" href="https://wiki.polkadot.network/docs/en/learn-parachains">parachains</a> and Polkadot itself will follow. Parachains are a means of connecting together different blockchains in a hierarchy for shared security and asynchronous communication. Acuity will be a hierarchy within this hierarchy.</p>
                <p>This is one of the most important reasons for MIX migrating to the Polkadot ecosystem as Acuity.</p>
                <p>The long term vision is for Acuity to become a backbone for the fully decentralized web.</p>
                <p>Acuity will have many different decentralized social communities, such as decentralized equivalents of Wikipedia, Stack Overflow, CouchSurfing, GoFundMe, DeviantArt, Flickr, Instagram, YouTube, GitHub, Ancestry, Quora, Reddit, Maps, private communities, software packaging repositories, etc. Typically <a target="_blank" href="https://ipfs.io/">IPFS</a> hashes will be stored on-chain and other on-chain state will connect the content together in different ways depending on the use-case. <a target="_blank" href="https://www.parity.io/substrate-off-chain-workers-secure-and-efficient-computing-intensive-tasks/">Off-chain</a> indexing can be used for node software to optionally have other derived state that is not consensus-critical.</p>
                <p>The on-chain logic of Acuity communities will be totally robust and reliable, unlike just about any other social media platform. This will create huge confidence in the system. This is vital for system extensibility.</p>
                <p>Ultimately, each Acuity social community will exist on its own parachain that connects to the Acuity relay chain. Additionally, each social community can shard further by acting as a relay chain with many parachains, each being a different content language such as English, French, etc. This further increases scalability.</p>
                <p>The Acuity relay chain can connect to either the Polkadot or Kusama relay chains, either as a parachain or a parathread. This enables asynchronous communication with the rest of the Polkadot ecosystem. It will be much cheaper for Acuity social communities to connect to the Acuity relay chain, rather than Polkadot or Kusama directly.</p>
                <p>However, the timescale for hierarchical parachains on Polkadot is <a target="_blank" href="https://www.youtube.com/watch?v=Yomudj2BCEo&t=1882s">2 to 3 years</a>.</p>
                <p>This means in the short term we have a choice, either enable Acuity to connect to Polkadot / Kusama, or enable a single layer of parachain social communities to exist under the Acuity parachain.</p>
                <p>The way forward is clear, Acuity needs to be able to become a parachain / parathread on Kusama / Polkadot at the earliest opportunity to be able to participate in the early network effects that MIX missed out on on Ethereum (being an independent Ethereum blockchain at the time).</p>
                <p>The first Acuity community will be based on the original Solidity smart contracts <a target="_blank" href="https://github.com/acuity-social/acuity-contracts">developed</a> when Acuity was called MIX. The <a target="_blank" href="https://github.com/hyperledger-labs/solang">Solang</a> compiler is now mature enough to compile these to <a target="_blank" href="https://en.wikipedia.org/wiki/WebAssembly">Wasm</a> and can therefore be deployed on the <a target="_blank" href="https://www.substrate.io/kb/smart-contracts/contracts-pallet">Contracts</a> pallet on the Acuity blockchain.</p>
                <p>Eventually, once Acuity can have its own parachains, social communities will be developed as native <a target="_blank" href="https://www.substrate.io/">Substrate</a> pallets on their own blockchains. Developers wishing to extend the on-chain functionality of such a community without going through the governance mechanism will be able to do so with smart contracts.</p>
                <p>Currently the Acuity node software is based on Kusama. This does not provide what we need. In order for Acuity to be able to be a parachain, the node software needs to be rebuilt based on <a target="_blank" href="https://github.com/substrate-developer-hub/substrate-node-template">substrate-node-template</a>. This is not especially difficult and hopefully can be achieved without performing another <a target="_blank" href="https://wiki.polkadot.network/docs/glossary#hard-spoon">hard-spoon</a>.</p>
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
              <p>Due to the cessation of block production of the proof-of-authority nodes (see previous blog post), it was necessary for Acuity to <a target="_blank" href="https://wiki.polkadot.network/docs/glossary#hard-spoon">hard spoon</a>. A snapshot of blockchain state was taken at block 1049095 (the last finalized block) and a new genesis block was created.</p>
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
              <p>It is now possible to trade ACU against ETH on <a target="_blank" href="https://app.stex.com/en/trading/pair/ETH/ACU/1D">STEX</a>.</p>
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
