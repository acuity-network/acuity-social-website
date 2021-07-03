import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3'

export default class MixClient {
	web3: any
  formatWei: any

	async init(vue: any) {
    // This function detects most providers injected at window.ethereum
    const provider = await detectEthereumProvider();

    if (provider) {
      this.web3 = new Web3(provider);
  		console.log(await this.web3.eth.getProtocolVersion());
  		this.web3.eth.defaultBlock = 'pending';
  		this.web3.eth.transactionConfirmationBlocks = 1;
      this.formatWei = (wei: string) => Number(this.web3.utils.fromWei(this.web3.utils.toBN(wei))).toLocaleString();
    } else {
      console.log('Please install MetaMask!');
    }
  }
}
