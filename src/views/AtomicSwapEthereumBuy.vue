<template>
  <v-container>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Buyer
              </th>
              <th class="text-left">
                Buy Lock (ACU)
              </th>
              <th class="text-left">
                State
              </th>
              <th class="text-left">
                Timeout
              </th>
              <th class="text-left"></th>
              <th style="background-color: rgb(14, 15, 15);"></ht>
              <th class="text-left">
                Sell Lock (ETH)
              </th>
              <th class="text-left">
                State
              </th>
              <th class="text-left">
                Timeout
              </th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="lock in locks" :key="lock.hashed_secret">
              <td>{{ lock.buyer }}</td>
              <td>{{ lock.buyLockValue }}</td>
              <td>{{ lock.buyLockState }}</td>
              <td>{{ lock.buyLockTimeout }}</td>
              <td>
                <v-btn v-if="buyerAvailable && (lock.buyLockState == 'Locked') && (lock.sellLockState == 'Unlocked')" small @click="unlockBuyLock(lock)"><v-icon small>mdi-lock-open-variant</v-icon></v-btn>
              </td>
              <td style="background-color: rgb(14, 15, 15);"></td>
              <td>{{ lock.valueEth }}</td>
              <td>{{ lock.sellLockState }}</td>
              <td>{{ lock.sellLockTimeout }}</td>
              <td>
                <v-btn v-if="(activeAddressEth == sellAddressEth) && (lock.sellLockState == 'NotLocked')" small @click="createSellLock(lock)"><v-icon small>mdi-lock</v-icon></v-btn>
                <v-btn v-if="(activeAddressEth == lock.buyerAddress) && (lock.sellLockState == 'Locked')" small @click="unlockSellLock(lock)"><v-icon small>mdi-lock-open-variant</v-icon></v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    <v-row>
      <v-col cols="12" md="10">
        <div class="text-h5 mb-1">Buy ETH with ACU</div>
        <v-form>
          <v-text-field v-model="price" label="Price" suffix="ACU" hint='Amount of ACU to pay per 1 ETH.' persistent-hint class="mb-4" disabled></v-text-field>
          <v-text-field v-model="maxValue" label="Maximum Value" suffix="ETH" hint='How much ETH is for sale in this order.' persistent-hint class="mb-4" disabled></v-text-field>
          <v-text-field v-model="seller" label="Seller" hint='Who is selling the ETH.' persistent-hint class="mb-4" disabled></v-text-field>
          <v-select v-model="sellAddressAcu" :items="accountsAcu" label="ACU Sell Account" hint='The ACU account to pay from.' persistent-hint class="mb-4"></v-select>
          <v-text-field v-model="activeAddressEth" label="ETH Buy Account" hint='The account to receive the ETH.' persistent-hint class="mb-4" disabled></v-text-field>
          <v-text-field v-model="value" label="Buy Value" suffix="ETH" hint='How much ETH you wish to buy.' persistent-hint class="mb-4"></v-text-field>
          <v-btn @click="createBuyLock" class="mt-4">Buy</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  let JSONbig = require('json-bigint')({ useNativeBigInt: true })
  import { web3FromAddress } from '@polkadot/extension-dapp';
  import { decodeAddress, encodeAddress } from '@polkadot/keyring';

  export default Vue.extend({
    name: 'AtomicSwapPolkadotBuy',

    props: {
      orderId: {
        type: String,
        required: true,
      },
    },

    data () {
      return {
        sellAddressAcu: '',
        value: '',
      }
    },

    computed: {
      locks(): {}[] {
        if (this.orderId in this.$store.state.ordersEth) {

          let locks = [];

          for (let lock of this.$store.state.ordersEth[this.orderId].locks) {
            locks.push({
              hashedSecret: lock.hashedSecret,
              buyer: encodeAddress('0x' + lock.buyer).substr(0, 8),
              buyLockValue: this.$ethClient.web3.utils.fromWei(lock.buyLockValue.toString()),
              valueWei: lock.buyLockValue,
              buyLockState: lock.buyLockState,
              buyLockTimeout: new Date(lock.buyLockTimeout * 1000).toLocaleString(),
              valueEth: this.$ethClient.web3.utils.fromWei((BigInt(this.$ethClient.web3.utils.toWei(lock.buyLockValue.toString())) / BigInt(this.priceWei)).toString()),
//              valueEth: parseFloat(lock.buyLockValue.toString()) / parseFloat(this.priceWei),
              sellLockState: lock.sellLockState,
              sellLockTimeout: (lock.sellLockTimeout == 0) ? "" : new Date(lock.sellLockTimeout).toLocaleString(),
              buyerAddress: '0x' + lock.buyLockForeignAddress.slice(24),
              raw: lock,
            })
          }

          return locks;
        }
        else {
          return [];
        }
      },
      priceWei(): bigint {
        if (this.orderId in this.$store.state.ordersEth) {
          return this.$store.state.ordersEth[this.orderId].order.price;
        }
        else {
          return 0n;
        }
      },
      price(): string {
        if (this.orderId in this.$store.state.ordersEth) {
          return this.$ethClient.web3.utils.fromWei(this.$store.state.ordersEth[this.orderId].order.price.toString());
        }
        else {
          return '';
        }
      },
      maxValue(): string {
        if (this.orderId in this.$store.state.ordersEth) {
          return this.$ethClient.web3.utils.fromWei(this.$store.state.ordersEth[this.orderId].order.value.toString());
        }
        else {
          return '';
        }
      },
      sellAddressEth(): string {
        if (this.orderId in this.$store.state.ordersEth) {
          return this.$store.state.ordersEth[this.orderId].order.seller;
        }
        else {
          return '';
        }
      },
      buyAddressAcu(): string {
        if (this.orderId in this.$store.state.ordersEth) {
          return this.$store.state.ordersEth[this.orderId].order.foreignAddress;
        }
        else {
          return '';
        }
      },
      seller(): string {
        if (this.orderId in this.$store.state.ordersEth) {
          return this.$store.state.ordersEth[this.orderId].order.seller.toString();
        }
        else {
          return '';
        }
      },
      foreignAddress(): string {
        if (this.orderId in this.$store.state.ordersEth) {
          return '0x' + this.$store.state.ordersEth[this.orderId].order.foreignAddress.slice(24);
        }
        else {
          return '';
        }
      },
      buyerAvailable(): boolean {
        return this.$store.state.addressesAcu.includes(encodeAddress('0x' + this.buyAddressAcu));
      },
      activeAddressEth(): string {
        return this.$store.state.addressEth;
      },
      accountsAcu(): [] {
        return this.$store.state.accountsAcu;
      },
      addressesAcu(): [] {
        return this.$store.state.addressesAcu;
      },
    },

    async created() {
      this.$offChainClient.getOrder(60, 0, this.orderId);
    },

    methods: {
      async createBuyLock() {
        let secret = this.$ethClient.web3.utils.randomHex(32);
        let hashedSecret = this.$ethClient.web3.utils.keccak256(secret);
        localStorage.setItem(hashedSecret, secret);
        let chainId = 60;
        let adapterId = 0;
        let orderId = '0x' + this.orderId;
        let seller = '0x' + this.buyAddressAcu;
        let timeout = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 3;
        let value = this.$ethClient.web3.utils.fromWei((BigInt(this.$ethClient.web3.utils.toWei(this.value)) * BigInt(this.priceWei)).toString()).split('.')[0];
        let foreignAddress = this.$ethClient.web3.utils.padLeft(this.activeAddressEth, 64);

        console.log(hashedSecret, chainId, adapterId, orderId, seller, timeout, value, foreignAddress);

        const injector = await web3FromAddress(this.sellAddressAcu);
        this.$acuityClient.api.tx.atomicSwap
          .lockBuy(hashedSecret, chainId, adapterId, orderId, seller, timeout, value, foreignAddress)
          .signAndSend(this.sellAddressAcu, { signer: injector.signer }, (status: any) => {
            console.log(status)
          });
      },
      async createSellLock(lock: any) {
        let chainId = this.$ethClient.web3.utils.padLeft((76).toString(16), 8);
        let adapterId = this.$ethClient.web3.utils.padLeft((0).toString(16), 8);
        let assetId = '0000000000000000';
        let price = this.$ethClient.web3.utils.padLeft(this.priceWei.toString(16), 32);
        let chainIdAdapterIdAssetIdPrice = '0x' + chainId + adapterId + assetId + price;
        let foreignAddress = '0x' + this.$store.state.ordersEth[this.orderId].order.foreignAddress;
        let hashedSecret = '0x' + lock.raw.hashedSecret;
        let buyer = lock.buyerAddress;
        let timeout = Date.now() + 60 * 60 * 24 * 2 * 1000;
        let value = (BigInt(this.$ethClient.web3.utils.toWei(lock.raw.buyLockValue.toString())) / BigInt(this.priceWei)).toString();

        console.log(chainIdAdapterIdAssetIdPrice, foreignAddress, hashedSecret, buyer, timeout, value);

        this.$ethClient.atomicSwapSell.methods
          .lockSell(chainIdAdapterIdAssetIdPrice, foreignAddress, hashedSecret, buyer, timeout, value)
          .send({from: this.activeAddressEth});
      },
      async unlockSellLock(lock: any) {
        let orderId = '0x' + this.orderId;
        let secret = localStorage.getItem('0x' + lock.hashedSecret);
        let buyer = '0x' + lock.raw.buyer.slice(24);
        let timeout = lock.raw.sellLockTimeout;

        console.log(orderId, secret, buyer, timeout);

        this.$ethClient.atomicSwapSell.methods
          .unlockSell(orderId, secret, buyer, timeout)
          .send({from: this.activeAddressEth});
      },
      async unlockBuyLock(lock: any) {
        let buyer = '0x' + lock.raw.buyer.slice(24);
        let secret = '0x' + lock.raw.secret;

        console.log(buyer, secret);

        const injector = await web3FromAddress(encodeAddress('0x' + this.buyAddressAcu));
        this.$acuityClient.api.tx.atomicSwap
          .unlockBuy(buyer, secret)
          .signAndSend(encodeAddress('0x' + this.buyAddressAcu), { signer: injector.signer }, (status: any) => {
            console.log(status)
          });
      },
    }
  })

</script>
