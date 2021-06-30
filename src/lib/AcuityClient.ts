import { ApiPromise, WsProvider } from '@polkadot/api'

export default class MixClient {
	api: any

	async init(vue: any) {

    let acuityEndpoint = (process.env.NODE_ENV == 'development') ? 'ws://127.0.0.1:9946' : 'wss://acuity.social:9961';
    let wsProvider = new WsProvider(acuityEndpoint);
    await ApiPromise.create({ provider: wsProvider }).then(async api => {
      this.api = api;
      await this.api.isReady
    });
  }
}
