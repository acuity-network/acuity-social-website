import Web3 from 'web3'

export default class MixClient {
	web3: any
  formatWei: any

	async init(vue: any) {
		this.web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
		console.log(await this.web3.eth.getProtocolVersion());

		this.web3.eth.defaultBlock = 'pending';
		this.web3.eth.transactionConfirmationBlocks = 1;

    this.formatWei = (wei: string) => Number(this.web3.utils.fromWei(this.web3.utils.toBN(wei))).toLocaleString();
  }
}
