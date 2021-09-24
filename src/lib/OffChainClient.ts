
export default class OffChainClient {
  vue: any;
  ws: any;

	async init(vue: any) {
    this.vue = vue;
    this.ws = new WebSocket("ws://127.0.0.1:8080");
    this.ws.onmessage = (event: any) => {
    };
    this.ws.onopen = function(event: any) {
      console.log("Connected to off-chain indexer.");
    };
  }
}
