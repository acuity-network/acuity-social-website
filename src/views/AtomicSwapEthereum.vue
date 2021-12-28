<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="10">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Price (ACU)
                </th>
                <th class="text-left">
                  Value (ETH)
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
                  <v-btn icon @click="$router.push({ name: 'atomic-swap-ethereum-buy', params: { orderId: order.orderId } })"><v-icon small>mdi-atom-variant</v-icon></v-btn>
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
        <div class="text-h5 mb-1">Sell ETH for ACU</div>
        <div class="body-2 mb-4">Acuity accounts are managed by the <a target="_blank" href="https://polkadot.js.org/extension/">Polkadot</a> browser extension.</div>
        <div class="body-2 mb-4">Ethereum accounts are managed by the <a target="_blank" href="https://metamask.io/">Metamask</a> browser extension.</div>
        <v-form v-model="valid">
        <!--
          <v-select v-model="sell_asset" :items="sell_assets" label="Sell Asset"></v-select>
        -->
          <v-text-field v-model="addressEth" label="Sell Account" hint='The ETH account you wish to sell from.' persistent-hint class="mb-4" disabled></v-text-field>

          <v-text-field v-model="sell_value" label="Sell Value" suffix="ETH" hint='How much ETH you wish to sell at this price.' persistent-hint class="mb-4"></v-text-field>

          <v-select v-model="buy_address" :items="accountsAcu" label="Buy Account" hint='The ACU account to receive payment.' persistent-hint class="mb-4"></v-select>

        <!--
          <v-select v-model="buy_blockchain" :items="buy_blockchains" label="Buy Blockchain"></v-select>
          <v-select v-model="buy_asset" :items="buy_assets" label="Buy Asset"></v-select>
        -->
          <v-text-field v-model="price" label="Price" suffix="ACU" hint='Amount of ACU to receive per 1 ETH.' persistent-hint class="mb-4"></v-text-field>
          <v-btn @click="addSellOrder" class="mt-4">Create Sell Order</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { decodeAddress } from '@polkadot/keyring';

  export default Vue.extend({
    name: 'AtomicSwapEthereum',

    data () {
      return {
        sell_assets: ['ETH'],
        sell_asset: 'ETH',
        sell_addresses: [] as {}[],
        sell_address: '',
        sell_value: '',
        buy_blockchains: ['Acuity'],
        buy_blockchain: 'Acuity',
        buy_assets: ['ACU'],
        buy_asset: 'ACU',
        buy_addresses: [] as {}[],
        buy_address: '',
        price: '',
      }
    },

    computed: {
      orders() {
        return this.$store.state.orderBookEth;
      },
      addressEth() {
        return this.$store.state.addressEth;
      },
      accountsAcu() {
        return this.$store.state.accountsAcu;
      },
    },

    async created() {
      this.$offChainClient.getOrderBook(60, "0000000000000000", 76, "0000000000000000");
    },


    methods: {
      async addSellOrder(event: any) {
        let chainId = this.$ethClient.web3.utils.padLeft((76).toString(16), 8);
        let adapterId = this.$ethClient.web3.utils.padLeft((0).toString(16), 8);
        let assetId = this.$ethClient.web3.utils.padLeft((0).toString(16), 16);
        let price = this.$ethClient.web3.utils.padLeft(BigInt(this.$ethClient.web3.utils.toWei(this.price)).toString(16), 32);
        let chainIdAdapterIdAssetIdPrice = '0x' + chainId + adapterId + assetId + price;
        let foreignAddress = this.$ethClient.web3.utils.bytesToHex(decodeAddress(this.buy_address));
        let value = this.$ethClient.web3.utils.toWei(this.sell_value);
        this.$ethClient.atomicSwapSell.methods.addToOrder(chainIdAdapterIdAssetIdPrice, foreignAddress).send({from: this.addressEth, value: value});
      },
    }
  })
</script>
