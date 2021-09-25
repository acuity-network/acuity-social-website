<template>
  <v-container>
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
        priceWei: BigInt(0),
        price: '',
        maxValue: '',
        seller: '',
        value: '',
        foreignAddress: '',
      }
    },

    async created() {
      await this.$ethClient.web3.eth.requestAccounts()
      const ethAccounts = await this.$ethClient.web3.eth.getAccounts()
      for (let account of ethAccounts) {
          this.buy_addresses.push({text: account, value: account});
      }

      let ws = new WebSocket("ws://127.0.0.1:8080");
      ws.onmessage = (event) => {
        let order = JSONbig.parse(event.data);
        console.log(order);
        this.priceWei = order.order_static.price;
        this.price = this.$ethClient.web3.utils.fromWei(order.order_static.price.toString());
        this.maxValue = this.$ethClient.web3.utils.fromWei(order.value.toString());
        this.seller = order.order_static.seller.toString();
        this.foreignAddress = this.$ethClient.web3.utils.bytesToHex(order.order_static.foreign_address.slice(12,32));
      }
      ws.onopen = event => {

        var msg = {
          op: "getOrder",
          order_id: this.orderId,
        };

        ws.send(JSON.stringify(msg));
      };
    },

    methods: {
      async buy() {
        let value = this.$ethClient.web3.utils.fromWei((BigInt(this.$ethClient.web3.utils.toWei(this.value)) * BigInt(this.priceWei)).toString());
        let hashedSecret = this.$ethClient.web3.utils.randomHex(32);
        let assetIdOrderId = "0x88888888888888888888888888888888" + this.orderId;
        let timeout = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 3;

        this.$ethClient.atomicSwapBuy.methods.lockBuy(
          hashedSecret, assetIdOrderId, this.foreignAddress, timeout
        ).send({from: this.buy_address, value: value});

      },
    }
  })

</script>
