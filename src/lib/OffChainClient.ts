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
        case 'orderBook':
          let orders = [];

          for (let order of message.order_book) {
            orders.push({
              orderId: order.orderId,
              price: this.vue.$ethClient.web3.utils.fromWei(order.orderStatic.price.toString()),
              value: this.vue.$ethClient.web3.utils.fromWei(order.value.toString()),
              seller: order.orderStatic.seller,
              raw: order,
            })
          }

          this.vue.$store.commit('orderBookAcuSet', orders);
          break;

        case 'order':
          this.vue.$store.commit('orderAcuSet', message);
          break;
      }
    }
  }

  getOrderBook() {
    var msg = {
      type: "GetOrderBook",
      sell_chain_id: 76,
      sell_asset_id: "0000000000000000",
      buy_chain_id: 60,
      buy_asset_id: "0000000000000000",
    };

    this.ws.send(JSON.stringify(msg));
  }

  getOrder(order_id: String) {
    var msg = {
      type: "GetOrder",
      sell_chain_id: 76,
      sell_adapter_id: 0,
      order_id: order_id,
    };

    this.ws.send(JSON.stringify(msg));
  }
}
