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
                  Buy Lock
                </th>
                <th class="text-left">
                  Value (ETH)
                </th>
                <th class="text-left">
                  Sell Lock
                </th>
                <th class="text-left">
                  Value (ACU)
                </th>
                <th class="text-left">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="buyLock in buyLocks" :key="buyLock.hashed_secret">
                <td>{{ buyLock.buyer }}</td>
                <td>{{ buyLock.timeout }}</td>
                <td>{{ buyLock.value }}</td>
                <td></td>
                <td>{{ buyLock.valueAcu }}</td>
                <td><v-btn icon @click="createSellLock(buyLock)"><v-icon small>mdi-atom-variant</v-icon></v-btn></td>
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
          <v-select v-model="buy_address" :items="buy_addresses" label="Buy Account"></v-select>
          <v-text-field v-model="value" label="Buy Value" suffix="ACU" hint='How much ACU you wish to buy.' persistent-hint class="mb-4"></v-text-field>
          <v-btn @click="buy" class="mt-4">Buy</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  let JSONbig = require('json-bigint')({ useNativeBigInt: true })
  import { web3FromAddress } from '@polkadot/extension-dapp';

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
        buy_addresses: [] as {}[],
        buy_address: '',
        value: '',
      }
    },

    computed: {
      buyLocks(): {}[] {
        if (this.orderId in this.$store.state.ordersAcu) {

          let buy_locks = [];

          for (let buy_lock of this.$store.state.ordersAcu[this.orderId].buy_locks) {
            buy_locks.push({
              hashedSecret: buy_lock.hashed_secret,
              buyer: buy_lock.buyer,
              timeout: new Date(buy_lock.timeout * 1000).toLocaleString(),
              value: this.$ethClient.web3.utils.fromWei(buy_lock.value.toString()),
              valueAcu: this.$ethClient.web3.utils.fromWei((BigInt(this.$ethClient.web3.utils.toWei(buy_lock.value.toString())) / BigInt(this.priceWei)).toString()),
//              valueAcu: parseFloat(buy_lock.value.toString()) / parseFloat(this.priceWei),
            })
          }

          return buy_locks;
        }
        else {
          return [];
        }
      },
      priceWei(): string {
        if (this.orderId in this.$store.state.ordersAcu) {
          return this.$store.state.ordersAcu[this.orderId].order.order_static.price;
        }
        else {
          return '';
        }
      },
      price(): string {
        if (this.orderId in this.$store.state.ordersAcu) {
          return this.$ethClient.web3.utils.fromWei(this.$store.state.ordersAcu[this.orderId].order.order_static.price.toString());
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
          return this.$store.state.ordersAcu[this.orderId].order.order_static.seller.toString();
        }
        else {
          return '';
        }
      },
      foreignAddress(): string {
        if (this.orderId in this.$store.state.ordersAcu) {
          return this.$ethClient.web3.utils.bytesToHex(this.$store.state.ordersAcu[this.orderId].order.order_static.foreign_address.slice(12,32));
        }
        else {
          return '';
        }
      },
    },

    async created() {
      await this.$ethClient.web3.eth.requestAccounts()
      const ethAccounts = await this.$ethClient.web3.eth.getAccounts()
      for (let account of ethAccounts) {
          this.buy_addresses.push({text: account, value: account});
      }

      this.$offChainClient.getOrder(this.orderId);
    },

    methods: {
      async buy() {
        let value = this.$ethClient.web3.utils.fromWei((BigInt(this.$ethClient.web3.utils.toWei(this.value)) * BigInt(this.priceWei)).toString()).split('.')[0];
        let hashedSecret = this.$ethClient.web3.utils.randomHex(32);
        let assetIdOrderId = "0x88888888888888888888888888888888" + this.orderId;
        let timeout = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 3;

        this.$ethClient.atomicSwapBuy.methods.lockBuy(
          hashedSecret, assetIdOrderId, this.foreignAddress, timeout
        ).send({from: this.buy_address, value: value});
      },
      async createSellLock(buyLock: any) {
        let foreignAddress = '0x' + this.$ethClient.web3.utils.padLeft(buyLock.buyer, 64);
        let timeout = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 2;
        const injector = await web3FromAddress(this.seller);
        this.$acuityClient.api.tx.atomicSwap
          .lockSell(buyLock.hashedSecret, "0x88888888888888888888888888888888", this.priceWei, foreignAddress, buyLock.valueAcu, timeout)
          .signAndSend(this.seller, { signer: injector.signer }, (status: any) => {
            console.log(status)
          });
      },
    }
  })

</script>
