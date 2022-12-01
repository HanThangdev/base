/* eslint-disable no-await-in-loop */
/* eslint-disable no-promise-executor-return */
import { TYPE_TRANSACTION } from '@constants';
import Web3Class from '@utils/web3';
import * as Message from '@components/message';

/*
 * @params transactionParams
 * @callback action/api after request transaction success/fail
 */

export const transactionRequestHandle = async (params: any, setModalHandlingType: React.Dispatch<React.SetStateAction<string>>, setValueTx: React.Dispatch<React.SetStateAction<string>>) => {
	try {
		const { web3 } = await Web3Class.getWeb3Instance();
		const txhash = await web3.eth.sendTransaction(params);
		if (!txhash?.code && !txhash?.message) {
			// setLoading(true)
			let tx;
			while (!tx || !tx.blockHash) {
				await new Promise((resolve) => setTimeout(resolve, 1000));
				tx = await web3.eth.getTransactionReceipt(txhash.transactionHash);
			}
			if (!tx.status) {
        setModalHandlingType(TYPE_TRANSACTION.FAILED);
			} else {
        setValueTx(tx)
        setModalHandlingType(TYPE_TRANSACTION.COMPLETED);
			}
		}
	} catch (error: any) {
    Message.error(error.message)
    /** Transaction rejected */
		// if (
    //   error.code === 4001 ||
    //   error.code === -32603 ||
    //   error.message === "User rejected the transaction"
    // ) {
    //   setModalHandlingType(TYPE_TRANSACTION.REJECTED)
    // }
    setModalHandlingType(TYPE_TRANSACTION.REJECTED)
	}
};
