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
        <v-form>
          <v-select v-model="sellAddressAcu" :items="accountsAcu" label="Sell Account" hint='The ACU account you wish to sell from.' persistent-hint class="mb-4"></v-select>
          <v-text-field v-model="sellValueAcu" label="Sell Value" suffix="ACU" hint='How much ACU you wish to sell at this price.' persistent-hint class="mb-4"></v-text-field>
          <v-text-field v-model="activeAddressEth" label="Buy Account" hint='The ETH account to receive payment.' persistent-hint class="mb-4" disabled></v-text-field>
          <v-text-field v-model="price" label="Price" suffix="ETH" hint='Amount of ETH to receive per 1 ACU.' persistent-hint class="mb-4"></v-text-field>
          <v-btn @click="addSellOrder" class="mt-4">Create Sell Order</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { web3FromAddress } from '@polkadot/extension-dapp';

  export default Vue.extend({
    name: 'AtomicSwapPolkadot',

    data () {
      return {
        sellAddressAcu: '',
        sellValueAcu: '',
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
      activeAddressEth() {
        return this.$store.state.addressEth;
      },
    },

    async created() {
      this.$offChainClient.getOrderBook(76, "0000000000000000", 60, "0000000000000000");
    },

    methods: {
      async addSellOrder(event: any) {
        let price = this.$ethClient.web3.utils.toWei(this.price);
        let foreignAddress = this.$ethClient.web3.utils.padLeft(this.activeAddressEth, 64);
        let value = this.$ethClient.web3.utils.toWei(this.sellValueAcu);
        const injector = await web3FromAddress(this.sellAddressAcu);
        this.$acuityClient.api.tx.atomicSwap
          .addToOrder(60, 0, '0x0000000000000000', price, foreignAddress, value)
          .signAndSend(this.sellAddressAcu, { signer: injector.signer }, (status: any) => {
            console.log(status)
          });
      }
    }
  })

</script>
