<template>
  <v-container>
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
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  let JSONbig = require('json-bigint')({ useNativeBigInt: true })

  export default Vue.extend({
    name: 'AtomicSwapOrderBook',

    data () {
      return {
        orders: [] as {}[],
      }
    },

    async created() {
      let ws = new WebSocket("ws://127.0.0.1:8080");
      ws.onmessage = (event) => {
        for (let order of JSONbig.parse(event.data)) {
          this.orders.push({
            orderId: order.order_id,
            price: this.$ethClient.web3.utils.fromWei(order.order_static.price.toString()),
            value: this.$ethClient.web3.utils.fromWei(order.value.toString()),
            seller: order.order_static.seller,
          })
        }
      }
      ws.onopen = function(event) {

        var msg = {
          op: "getOrderBook",
        };

        ws.send(JSON.stringify(msg));
      };
    },

    methods: {
    }
  })

</script>
