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
                  Buy Lock (ETH)
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
                  Sell Lock (ACU)
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
                  <v-btn v-if="(addressEth == foreignAddress) && (lock.sellLockState == 'Unlocked') && (lock.buyLockState == 'Locked')" small @click="unlockBuyLock(lock)"><v-icon small>mdi-lock-open-variant</v-icon></v-btn>
                </td>
                <td style="background-color: rgb(14, 15, 15);"></td>
                <td>{{ lock.valueAcu }}</td>
                <td>{{ lock.sellLockState }}</td>
                <td>{{ lock.sellLockTimeout }}</td>
                <td>
                  <v-btn v-if="sellerAvailable && (lock.sellLockState == 'NotLocked')" small @click="createSellLock(lock)"><v-icon small>mdi-lock</v-icon></v-btn>
                  <v-btn v-if="addressesAcu.includes(lock.buyerAddress) && (lock.sellLockState == 'Locked')" small @click="unlockSellLock(lock)"><v-icon small>mdi-lock-open-variant</v-icon></v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
    <v-row>
      <v-col cols="12" md="10">
        <div class="text-h5 mb-1">Buy ACU</div>
        <v-form v-model="valid">
          <v-text-field v-model="price" label="Price" suffix="ETH" hint='Amount of ETH to pay per 1 ACU.' persistent-hint class="mb-4" disabled></v-text-field>
          <v-text-field v-model="maxValue" label="Maximum Value" suffix="ACU" hint='How much ACU is for sale in this order.' persistent-hint class="mb-4" disabled></v-text-field>
          <v-text-field v-model="seller" label="Seller" hint='Who is selling the ACU.' persistent-hint class="mb-4" disabled></v-text-field>
          <v-text-field v-model="addressEth" label="ETH Buy Account" hint='The ETH account to pay from.' persistent-hint class="mb-4" disabled></v-text-field>
          <v-select v-model="acu_buy_address" :items="accountsAcu" label="ACU Buy Account" hint='The account to receive the ACU.' persistent-hint class="mb-4"></v-select>
          <v-text-field v-model="value" label="Buy Value" suffix="ACU" hint='How much ACU you wish to buy.' persistent-hint class="mb-4"></v-text-field>
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
        valid: true,
        acu_buy_address: '',
        value: '',
      }
    },

    computed: {
      locks(): {}[] {
        if (this.orderId in this.$store.state.ordersAcu) {

          let locks = [];

          for (let lock of this.$store.state.ordersAcu[this.orderId].locks) {
            locks.push({
              hashedSecret: lock.hashedSecret,
              buyer: lock.buyer.substr(0, 8),
              buyLockValue: this.$ethClient.web3.utils.fromWei(lock.buyLockValue.toString()),
              valueWei: lock.buyLockValue,
              buyLockState: lock.buyLockState,
              buyLockTimeout: new Date(lock.buyLockTimeout * 1000).toLocaleString(),
              valueAcu: this.$ethClient.web3.utils.fromWei((BigInt(this.$ethClient.web3.utils.toWei(lock.buyLockValue.toString())) / BigInt(this.priceWei)).toString()),
//              valueAcu: parseFloat(lock.buyLockValue.toString()) / parseFloat(this.priceWei),
              sellLockState: lock.sellLockState,
              sellLockTimeout: (lock.sellLockTimeout == 0) ? "" : new Date(lock.sellLockTimeout).toLocaleString(),
              buyerAddress: encodeAddress('0x' + lock.buyLockForeignAddress),
              raw: lock,
            })
          }

          return locks;
        }
        else {
          return [];
        }
      },
      priceWei(): string {
        if (this.orderId in this.$store.state.ordersAcu) {
          return this.$store.state.ordersAcu[this.orderId].order.orderStatic.price;
        }
        else {
          return '';
        }
      },
      price(): string {
        if (this.orderId in this.$store.state.ordersAcu) {
          return this.$ethClient.web3.utils.fromWei(this.$store.state.ordersAcu[this.orderId].order.orderStatic.price.toString());
        }
        else {
          return '';
        }
      },
      maxValue(): string {
        if (this.orderId in this.$store.state.ordersAcu) {
          return this.$ethClient.web3.utils.fromWei(this.$store.state.ordersAcu[this.orderId].order.value.toString());
        }
        else {
          return '';
        }
      },
      seller(): string {
        if (this.orderId in this.$store.state.ordersAcu) {
          return this.$store.state.ordersAcu[this.orderId].order.orderStatic.seller.toString();
        }
        else {
          return '';
        }
      },
      foreignAddress(): string {
        if (this.orderId in this.$store.state.ordersAcu) {
          return this.$ethClient.web3.utils.bytesToHex(this.$store.state.ordersAcu[this.orderId].order.orderStatic.foreign_address.slice(12,32));
        }
        else {
          return '';
        }
      },
      sellerAvailable(): boolean {
        return this.$store.state.addressesAcu.includes(this.seller);
      },
      addressEth(): string {
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
      this.$offChainClient.getOrder(this.orderId);
    },

    methods: {
      async createBuyLock() {
        let value = this.$ethClient.web3.utils.fromWei((BigInt(this.$ethClient.web3.utils.toWei(this.value)) * BigInt(this.priceWei)).toString()).split('.')[0];
        let secret = this.$ethClient.web3.utils.randomHex(32);
        let hashedSecret = this.$ethClient.web3.utils.keccak256(secret);
        localStorage.setItem(hashedSecret, secret);
        let assetIdOrderId = "0x88888888888888888888888888888888" + this.orderId;
        let timeout = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 3;
        let foreign_address = this.$ethClient.web3.utils.bytesToHex(decodeAddress(this.acu_buy_address));

        this.$ethClient.atomicSwapBuy.methods.lockBuy(
          this.foreignAddress, hashedSecret, timeout, assetIdOrderId, foreign_address
        ).send({from: this.addressEth, value: value});
      },
      async createSellLock(lock: any) {
        let foreignAddress = this.$ethClient.web3.utils.bytesToHex(this.$store.state.ordersAcu[this.orderId].order.orderStatic.foreign_address);
        let valueAcu = (BigInt(this.$ethClient.web3.utils.toWei(lock.raw.buyLockValue.toString())) / BigInt(this.priceWei)).toString();
        let timeout = Date.now() + 60 * 60 * 24 * 2 * 1000;
        const injector = await web3FromAddress(this.seller);
        this.$acuityClient.api.tx.atomicSwap
          .lockSell('0x' + lock.raw.hashedSecret, 76, 0, '0x0000000000000000', this.priceWei, foreignAddress, lock.buyerAddress, valueAcu, timeout)
          .signAndSend(this.seller, { signer: injector.signer }, (status: any) => {
            console.log(status)
          });
      },
      async unlockSellLock(lock: any) {
        let secret = localStorage.getItem('0x' + lock.hashedSecret);
        const injector = await web3FromAddress(this.seller);
        this.$acuityClient.api.tx.atomicSwap
          .unlockSell('0x' + this.orderId, secret)
          .signAndSend(lock.buyerAddress, { signer: injector.signer }, (status: any) => {
            console.log(status)
          });
      },
      async unlockBuyLock(lock: any) {
        this.$ethClient.atomicSwapBuy.methods.unlockBuy(
          '0x' + lock.raw.buyer.slice(24), '0x' + lock.raw.secret, lock.raw.buyLockTimeout
        ).send({from: this.addressEth});
      },
    }
  })

</script>
