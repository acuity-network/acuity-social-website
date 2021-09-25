let JSONbig = require('json-bigint')({ useNativeBigInt: true })

export default class OffChainClient {
  vue: any;
  ws: any;

	async init(vue: any) {
    this.vue = vue;
    this.ws = new WebSocket("ws://127.0.0.1:8080");
    this.ws.onopen = function(event: any) {
      console.log("Connected to off-chain indexer.");
    };
    this.ws.onmessage = (event: any) => {

      let message = JSONbig.parse(event.data);
      console.log(message);

      switch (message.type) {
        case 'OrderBook': {
          let orders = [];

          for (let order of message.order_book) {
            orders.push({
              orderId: order.order_id,
              price: this.vue.$ethClient.web3.utils.fromWei(order.order_static.price.toString()),
              value: this.vue.$ethClient.web3.utils.fromWei(order.value.toString()),
              seller: order.order_static.seller,
              raw: order,
            })
          }

          this.vue.$store.commit('sellOrdersAcuSet', orders);
        }
      }
    }
  }

  getOrderBook() {
    var msg = {
      type: "GetOrderBook",
    };

    this.ws.send(JSON.stringify(msg));
  }
}
