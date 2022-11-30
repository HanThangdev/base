/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
/* eslint-disable max-lines */
import Web3 from 'web3';
import {
	ethAbi,
	spcAbi,
	spcbscAbi,
	bscAbi,
	erc20Abi,
	busdAbi,
	htcAbi,
	przAbi,
	cctAbi,
	tokenizeAbi,
	vaultClaimAbi,
	receiveStakingPoolAbi,
	erc20StakingPoolAbi,
	nativeStakingPoolAbi,
	icoLockAbi,
	icoReceiveAbi,
} from '@web3/contract-abi';
import { web3Json } from '@web3/web3-config';
import { CLIENT_ID } from '@constants';
import { Web3AuthCore } from '@web3auth/core';
import { CHAIN_CONFIG } from '@config/chainConfig';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';

const web3Info: any = web3Json;
let web3Instance: any;
let usdtContract: any;
let busdContract: any;
let ethContract: any;
let bscContract: any;
let spcContract: any;
let spcbscContract: any;
let htcContract: any;
let przContract: any;
let cctContract: any;
let tokenizeContract: any;
let claimContract: any;
let receiveStakingContract: any;
let erc20StakingContract: any;
let nativeStakingContract: any;
let icoLockContract: any;
let icoReceiveContract: any;
const usdtContractAddress = web3Info.USDT_ADDRESS;
const busdContractAddress = web3Info.BUSD_ADDRESS;
const ethContractAddress = web3Info.ETH_ADDRESS;
const bscContractAddress = web3Info.BSC_ADDRESS;
const spcContractAddress = web3Info.SPC_ETH_ADDRESS;
const htcContractAddress = web3Info.HTC_ADDRESS;
const przContractAddress = web3Info.PRZ_ADDRESS;
const cctContractAddress = web3Info.CCT_ADDRESS;
const tokenizeContractAddress = web3Info.TOKENIZE_ADDRESS;
const spcbscContractAddress = web3Info.SPC_BSC_ADDRESS;
const vaultClaimAddress = web3Info.VAULT_CLAIM_ADDRESS;
const receiveStakingPoolAddress = web3Info.RECEIVE_STAKING_POOL_ADDRESS;
const erc20StakingPoolAddress = web3Info.ERC20_STAKING_POOL_ADDRESS;
const nativeStakingPoolAddress = web3Info.NATIVE_STAKING_POOL_ADDRESS;
const icoLockAddress = web3Info.ICO_LOCK_ADDRESS;
const icoReceiveAddress = web3Info.ICO_RECEIVE_ADDRESS;
const options = {
	gasPrice: web3Info.MAX_GAS_LIMIT,
	gas: web3Info.GAS,
	nonce: web3Info.NONCE,
};

class Web3Class {
	static removeWeb3Instance = () => {
		if (web3Instance && web3Instance.currentProvider?.disconnect) {
			web3Instance.currentProvider?.disconnect();
			web3Instance = null;
		}
	};

	static getWeb3Instance = async () => {
		// if (
		// 	(Misc.isMobile && !(window as any).ethereum) ||
		// 	!(window as any).ethereum
		// ) {
		// 	if (!web3Instance) {
		// 		try {
		// 			const currentChainConfig = CHAIN_CONFIG.ETH_testnet;
		// 			const clientId = CLIENT_ID;
		// 			const web3AuthInstance = new Web3AuthCore({
		// 				chainConfig: currentChainConfig,
		// 				enableLogging: true,
		// 				clientId,
		// 			});
		// 			const adapter = new OpenloginAdapter({ adapterSettings: { network: "testnet", clientId } });
		// 			web3AuthInstance.configureAdapter(adapter);
		// 			web3Instance = new Web3(web3AuthInstance.provider as any);
		// 		} catch (error: any) {
		// 			console.log('wallet-error', error.code);
		// 		}
		// 	}
		// } else if (!web3Instance && (window as any).ethereum) {
		// 	try {
		// 		web3Instance = new Web3((window as any).ethereum);
		// 	} catch (error: any) {
		// 		console.log('wallet-error', error.code);
		// 	}
		// }
		if (!web3Instance) {
			try {
				const currentChainConfig = CHAIN_CONFIG.ETH_testnet; // Cần config thêm với trường hợp mainnet
				const clientId = CLIENT_ID;
				const web3AuthInstance = new Web3AuthCore({
					chainConfig: currentChainConfig,
					enableLogging: true,
					clientId,
				});
				const adapter = new OpenloginAdapter({
					adapterSettings: {
						network: 'testnet', // Cần config thêm với trường hợp mainnet
						clientId,
					},
				});
				web3AuthInstance.configureAdapter(adapter);
				await web3AuthInstance.init();
				web3Instance = new Web3(web3AuthInstance.provider as any);
			} catch (error: any) {
				console.log('wallet-error', error.code);
			}
		}

		if (web3Instance) {
			usdtContract = new web3Instance.eth.Contract(
				erc20Abi,
				usdtContractAddress,
				options
			);
			busdContract = new web3Instance.eth.Contract(
				busdAbi,
				busdContractAddress
			);
			ethContract = new web3Instance.eth.Contract(
				ethAbi,
				ethContractAddress,
				options
			);
			bscContract = new web3Instance.eth.Contract(
				bscAbi,
				bscContractAddress,
				options
			);
			spcContract = new web3Instance.eth.Contract(
				spcAbi,
				spcContractAddress,
				options
			);
			spcbscContract = new web3Instance.eth.Contract(
				spcbscAbi,
				spcbscContractAddress,
				options
			);
			htcContract = new web3Instance.eth.Contract(htcAbi, htcContractAddress);
			przContract = new web3Instance.eth.Contract(przAbi, przContractAddress);
			cctContract = new web3Instance.eth.Contract(cctAbi, cctContractAddress);
			tokenizeContract = new web3Instance.eth.Contract(
				tokenizeAbi,
				tokenizeContractAddress,
				options
			);
			claimContract = new web3Instance.eth.Contract(
				vaultClaimAbi,
				vaultClaimAddress,
				options
			);
			receiveStakingContract = new web3Instance.eth.Contract(
				receiveStakingPoolAbi,
				receiveStakingPoolAddress,
				options
			);
			erc20StakingContract = new web3Instance.eth.Contract(
				erc20StakingPoolAbi,
				erc20StakingPoolAddress,
				options
			);
			nativeStakingContract = new web3Instance.eth.Contract(
				nativeStakingPoolAbi,
				nativeStakingPoolAddress,
				options
			);
			icoLockContract = new web3Instance.eth.Contract(
				icoLockAbi,
				icoLockAddress,
				options
			);
			icoReceiveContract = new web3Instance.eth.Contract(
				icoReceiveAbi,
				icoReceiveAddress,
				options
			);
		}

		return {
			web3: web3Instance,
			usdtContract,
			busdContract,
			ethContract,
			bscContract,
			spcContract,
			htcContract,
			przContract,
			cctContract,
			tokenizeContract,
			spcbscContract,
			claimContract,
			receiveStakingContract,
			erc20StakingContract,
			nativeStakingContract,
			icoLockContract,
			icoReceiveContract,
		};
	};
}

export default Web3Class;
