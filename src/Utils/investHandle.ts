/* eslint-disable no-await-in-loop */
/* eslint-disable no-promise-executor-return */
import * as Message from '@components/message';
import Web3Class from '@utils/web3';

export const transactionRequestHandle = async(params: any) => {
  try {
    const { web3 } = await Web3Class.getWeb3Instance();
    const txhash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [params],
    });
    if (!txhash?.code && !txhash?.message) {
      // setLoading(true)
      let tx
      while (!tx || !tx.blockHash) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        tx = await web3.eth.getTransactionReceipt(txhash);
      }
      if (
        !tx.status 
      ) {
        // setLoading(false)
        Message.error("lỗi");
      }else{
        // setLoading(false)
        Message.success("oke");
      }
    }
  } catch (error) {
    console.log(error);
  }
}