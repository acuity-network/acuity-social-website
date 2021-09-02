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
            <td v-if="order.owned">
              <v-btn icon @click="add(order)"><v-icon small>mdi-plus</v-icon></v-btn>
              <v-btn icon @click="remove(order)"><v-icon small>mdi-minus</v-icon></v-btn>
              <v-btn icon @click="removeAll(order)"><v-icon small>mdi-delete</v-icon></v-btn>
              <v-btn icon @click="change(order)"><v-icon small>mdi-pencil</v-icon></v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  let JSONbig = require('json-bigint')({ useNativeBigInt: true })
  import {
    web3Accounts,
    web3Enable,
    web3FromAddress,
  } from '@polkadot/extension-dapp';

  export default Vue.extend({
    name: 'AtomicSwapOrderBook',

    data () {
      return {
        acu_addresses: [] as String[],
        orders: [] as {}[],
      }
    },

    async created() {
      const allInjected = await web3Enable('Acuity Browser');
      const allAccounts = await web3Accounts();
      for (let account of allAccounts) {
          this.acu_addresses.push(account.address);
      }

      let ws = new WebSocket("ws://127.0.0.1:8080");
      ws.onmessage = (event) => {
        for (let order of JSONbig.parse(event.data)) {
          this.orders.push({
            orderId: order.order_id,
            price: this.$ethClient.web3.utils.fromWei(order.order_static.price.toString()),
            value: this.$ethClient.web3.utils.fromWei(order.value.toString()),
            seller: order.order_static.seller,
            owned: this.acu_addresses.includes(order.order_static.seller) ? true : false,
            raw: order,
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
    }
  })

</script>
