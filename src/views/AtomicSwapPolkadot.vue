<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Price (ETH)
                </th>
                <th class="text-left">
                  Value (ACU)
                </th>
                <th class="text-left">
                  Seller
                </th>
                <th class="text-left">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="order in orders"
                :key="order.orderId"
              >
                <td>{{ order.price }}</td>
                <td>{{ order.value }}</td>
                <td>{{ order.seller }}</td>
                <td>
                  <v-btn icon @click="$router.push({ name: 'atomic-swap-polkadot-buy', params: { orderId: order.orderId } })"><v-icon small>mdi-atom-variant</v-icon></v-btn>
                  <span v-if="order.owned">
                    <v-btn icon @click="add(order)"><v-icon small>mdi-plus</v-icon></v-btn>
                    <v-btn icon @click="remove(order)"><v-icon small>mdi-minus</v-icon></v-btn>
                    <v-btn icon @click="removeAll(order)"><v-icon small>mdi-delete</v-icon></v-btn>
                    <v-btn icon @click="change(order)"><v-icon small>mdi-pencil</v-icon></v-btn>
                  </span>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="10">
        <div class="text-h5 mb-1">Sell ACU for ETH</div>
        <div class="body-2 mb-4">Acuity accounts are managed by the <a target="_blank" href="https://polkadot.js.org/extension/">Polkadot</a> browser extension.</div>
        <div class="body-2 mb-4">Ethereum accounts are managed by the <a target="_blank" href="https://metamask.io/">Metamask</a> browser extension.</div>
        <v-form v-model="valid">
          <!--
          <v-select v-model="sell_blockchain" :items="sell_blockchains" label="Sell Blockchain"></v-select>
          <v-select v-model="sell_asset" :items="sell_assets" label="Sell Asset"></v-select>
          -->
          <v-select v-model="sell_address" :items="accountsAcu" label="Sell Account" hint='The ACU account you wish to sell from.' persistent-hint class="mb-4"></v-select>
          <v-text-field v-model="sell_value" label="Sell Value" suffix="ACU" hint='How much ACU you wish to sell at this price.' persistent-hint class="mb-4"></v-text-field>
          <!--
          <v-select v-model="buy_blockchain" :items="buy_blockchains" label="Buy Blockchain"></v-select>
          <v-select v-model="buy_asset" :items="buy_assets" label="Buy Asset"></v-select>
          -->
          <v-text-field v-model="buy_address" label="Buy Account" hint='The ETH account to receive payment.' persistent-hint class="mb-4" disabled></v-text-field>
          <v-text-field v-model="price" label="Price" suffix="ETH" hint='Amount of ETH to receive per 1 ACU.' persistent-hint class="mb-4"></v-text-field>
          <v-btn @click="addSellOrder" class="mt-4">Create Sell Order</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  let JSONbig = require('json-bigint')({ useNativeBigInt: true })
  import { web3FromAddress } from '@polkadot/extension-dapp';
  declare let window: any;

  export default Vue.extend({
    name: 'AtomicSwapPolkadot',

    data () {
      return {
        sell_blockchains: ['Acuity'],
        sell_blockchain: 'Acuity',
        sell_assets: ['ACU'],
        sell_asset: 'ACU',
        sell_addresses: [] as {}[],
        sell_address: '',
        sell_value: '',
        buy_blockchains: ['Ethereum'],
        buy_blockchain: 'Ethereum',
        buy_assets: ['ETH'],
        buy_asset: 'ETH',
        buy_addresses: [] as {}[],
        buy_address: '',
        price: '',
      }
    },

    computed: {
      orders() {
        return this.$store.state.orderBookAcu;
      },
      accountsAcu() {
        return this.$store.state.accountsAcu;
      },
    },

    async created() {
      window.ethereum.on('accountsChanged', (accounts: any) => {
        this.buy_address = accounts[0];
      });
      this.buy_address = await this.$ethClient.getAddress();

      this.$offChainClient.getOrderBook();
    },

    methods: {
      async swap(order: any) {
      },
      async add(order: any) {
      },
      async remove(order: any) {
      },
      async removeAll(order: any) {
        const injector = await web3FromAddress(order.raw.order_static.seller);
        this.$acuityClient.api.tx.atomicSwap
          .removeFromOrderAll('0x88888888888888888888888888888888', order.raw.order_static.price, order.raw.order_static.foreign_address)
          .signAndSend(order.raw.order_static.seller, { signer: injector.signer }, (status: any) => {
            console.log(status)
          });
      },
      async change(orderId: String) {
      },
      async addSellOrder(event: any) {
        let buy_address = this.$ethClient.web3.utils.padLeft(this.buy_address, 64);
        let value = this.$ethClient.web3.utils.toWei(this.sell_value);
        let price = this.$ethClient.web3.utils.toWei(this.price);
        const injector = await web3FromAddress(this.sell_address);
        this.$acuityClient.api.tx.atomicSwap
          .addToOrder('0x88888888888888888888888888888888', price, buy_address, value)
          .signAndSend(this.sell_address, { signer: injector.signer }, (status: any) => {
            console.log(status)
          });
      }
    }
  })

</script>
