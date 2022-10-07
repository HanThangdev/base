/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
/* eslint-disable max-lines */
import WalletConnectProvider from '@walletconnect/web3-provider';
import WalletConnectQRCodeModal from '@walletconnect/qrcode-modal';
import Web3 from 'web3';

import Misc from '@utils/misc';
import web3Json from '@web3/web3.json';
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
import { roundDown } from '@utils/number';
import { COIN_SYMBOL } from '@constants';

const web3Info: any = web3Json.METAMASK;
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

	static getWeb3Instance = () => {
		if (
			(Misc.isMobile && !(window as any).ethereum) ||
			!(window as any).ethereum
		) {
			if (!web3Instance) {
				try {
					const listLink = !(window as any).ethereum
						? []
						: ['metamask', 'trust'];
					const walletConnectProvider: any = new WalletConnectProvider({
						infuraId: web3Info.INFURA_ID,
						qrcode: true,
						pollingInterval: 15000,
						qrcodeModal: {
							open: (uri: any) => {
								const opts = {
									mobileLinks: listLink,
								};
								// clear web3 session when walleconnect modal click close button,
								// if have other case, please use removeWeb3Instance()
								const handleCloseModal = () => {
									if (Misc.isMobile || !(window as any).ethereum) {
										this.removeWeb3Instance();
									}
								};
								WalletConnectQRCodeModal.open(uri, handleCloseModal, opts);
							},
							// clear web3 session when walleconnect auto close,
							// if have other case, please use removeWeb3Instance()
							close: () => {
								setTimeout(() => {
									if (
										(Misc.isMobile || !(window as any).ethereum) &&
										!web3Instance?.currentProvider?.connected
									) {
										this.removeWeb3Instance();
									}
									WalletConnectQRCodeModal.close();
								}, 1000);
							},
						},
					});
					web3Instance = new Web3(walletConnectProvider);
				} catch (error: any) {
					console.log('wallet-error', error.code);
				}
			}
		} else if (!web3Instance && (window as any).ethereum) {
			try {
				web3Instance = new Web3((window as any).ethereum);
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

	static checkValidNetwork = async (id: string) => {
		const { web3 } = await Web3Class.getWeb3Instance();
		const chainId = await web3?.eth.getChainId();
		return `${chainId}` === id;
	};

	static getChainIdNetwork = async () => {
		const { web3 } = await Web3Class.getWeb3Instance();
		const chainId = await web3?.eth.getChainId();
		return `${chainId}`;
	};

	static changeNetwork = async (chainId: any) => {
		const isNetwork = await Web3Class.checkValidNetwork(chainId);
		if (!isNetwork) {
			const { web3 } = await Web3Class.getWeb3Instance();
			try {
				await web3?.currentProvider?.request({
					method: 'wallet_switchEthereumChain',
					params: [{ chainId: web3?.utils.toHex(chainId) }],
				});
			} catch (error: any) {
				if (error?.code === 4001) {
					console.log('wallet-error', 'not_allow_change_network');
				} else if (
					error.code === 4902 ||
					Misc.isMobile ||
					!(window as any).ethereum
				) {
					// This error code indicates that the chain has not been added to MetaMask
					let dataNetwork = null;
					if (chainId === web3Info.ETH_NETWORK.chainId) {
						dataNetwork = web3Info.ETH_NETWORK;
						dataNetwork.chainId = web3?.utils.toHex(dataNetwork.chainId);
					}
					if (chainId === web3Info.SPEC_NETWORK.chainId) {
						dataNetwork = web3Info.SPEC_NETWORK;
						dataNetwork.chainId = web3?.utils.toHex(dataNetwork.chainId);
					}
					if (chainId === web3Info.BNB_NETWORK.chainId) {
						dataNetwork = web3Info.BNB_NETWORK;
						dataNetwork.chainId = web3?.utils.toHex(dataNetwork.chainId);
					}
					web3?.currentProvider?.request({
						method: 'wallet_addEthereumChain',
						params: [dataNetwork],
					});
				} else {
					console.log('wallet-error', error.code);
				}
			}
		}
	};

	// add custom token for user's wallet
	static addTokenWallet = async (
		chainId: any,
		tokenAddress: any,
		tokenSymbol: any,
		tokenDecimals: any,
		tokenImage: any
	) => {
		await Web3Class.changeNetwork(chainId);
		const { web3 } = await Web3Class.getWeb3Instance();
		try {
			await web3?.currentProvider?.request({
				method: 'wallet_watchAsset',
				params: {
					type: 'ERC20',
					options: {
						address: tokenAddress,
						symbol: tokenSymbol,
						decimals: tokenDecimals,
						image: tokenImage,
					},
				},
			});
		} catch (error: any) {
			if (error.code === 4001) {
				console.log('wallet-error', 'not_allow_add_token');
			}
		}
	};

	static sign = async (message: any, publicAddress: any) => {
		const { web3 } = await Web3Class.getWeb3Instance();
		const signature = await web3?.eth.personal.sign(message, publicAddress, '');

		return signature;
	};

	static getBalance = async (publicAddress: string) => {
		const web3: any = new Web3(web3Info.ETH_RPC);
		const usdt = new web3.eth.Contract(erc20Abi, usdtContractAddress);
		const type = web3Info.USDT_DECIMALS === 18 ? 'ether' : 'mwei';

		try {
			const ethBalance = await web3?.eth.getBalance(publicAddress);
			const usdtBalance = await usdt.methods.balanceOf(publicAddress).call();
			return {
				eth:
					roundDown(+(+(web3?.utils.fromWei(ethBalance, 'ether') || 0)), 3) ||
					0,
				usdt:
					roundDown(+(+(web3?.utils.fromWei(usdtBalance, type) || 0)), 3) || 0,
			};
		} catch (e) {
			// TODO
		}
		return {};
	};

	static getBalanceBUSD = async (publicAddress: any) => {
		const web3: any = new Web3(web3Info.BNB_RPC);
		const busd = new web3.eth.Contract(busdAbi, busdContractAddress);
		try {
			const busdBalance = await busd.methods.balanceOf(publicAddress).call();
			return {
				busd:
					roundDown(+(+(web3?.utils.fromWei(busdBalance, 'ether') || 0)), 3) ||
					0,
			};
		} catch (e) {
			// TODO
		}
		return {};
	};

	static getBalanceSPC = async (publicAddress: string) => {
		const web3 = new Web3(web3Info.SPC_RPC);
		const spcBalance = await web3?.eth.getBalance(publicAddress);
		return {
			spc:
				roundDown(+(+(web3?.utils.fromWei(spcBalance, 'ether') || 0)), 3) || 0,
		};
	};

	static approveEth = async (publicAddress: any) => {
		const instance = await Web3Class.getWeb3Instance();
		const type = web3Info.USDT_DECIMALS === 18 ? 'ether' : 'mwei';
		const approveHash = await new Promise((resolve, reject) => {
			instance.usdtContract.methods
				.approve(
					web3Info.ETH_ADDRESS,
					instance.web3?.utils.toWei(web3Info.MAX_TOKEN_APPROVE, type)
				)
				.send({
					from: publicAddress,
				})
				.once('transactionHash', (txId: unknown) => resolve(txId))
				.on('error', (error: any) => reject(error));
		});

		return approveHash;
	};

	static depositToken = async (publicAddress: any, amount: any) => {
		const instance = await Web3Class.getWeb3Instance();
		const ethHash = instance.ethContract.methods
			.depositToken(
				web3Info.USDT_ADDRESS,
				instance.web3?.utils.toWei(`${amount}`, 'ether')
			)
			.send({
				from: publicAddress,
			});

		return ethHash;
	};

	static depositEth = async (publicAddress: any, amount: any) => {
		const instance = await Web3Class.getWeb3Instance();
		const ethHash = instance.ethContract.methods.depositETH().send({
			from: publicAddress,
			value: instance.web3?.utils.toWei(`${amount}`, 'ether'),
		});

		return ethHash;
	};

	static getSPCReturnsByToken = async (publicAddress: any, amount: any) => {
		const web3: any = new Web3(web3Info.ETH_RPC);
		const eth = new web3.eth.Contract(ethAbi, ethContractAddress);
		const spc = await eth.methods
			.getSPCReturnsByToken(
				web3Info.USDT_ADDRESS,
				web3?.utils.toWei(`${amount}`, 'ether')
			)
			.call({
				from: publicAddress,
			});

		return +(+(web3?.utils.fromWei(spc, 'ether') || 0));
	};

	static getTokenReturnsBySPC = async (publicAddress: any, amount: any) => {
		const web3: any = new Web3(web3Info.SPC_RPC);
		const spc = new web3.eth.Contract(spcAbi, spcContractAddress);
		const token = await spc.methods
			.getTokenReturnsBySPC(
				web3Info.USDT_ADDRESS,
				web3?.utils.toWei(`${amount}`, 'ether')
			)
			.call({
				from: publicAddress,
			});

		return +(+(web3?.utils.fromWei(token, 'ether') || 0));
	};

	static getSPCReturns = async (publicAddress: any, amount: any) => {
		const web3: any = new Web3(web3Info.ETH_RPC);
		const eth = new web3.eth.Contract(ethAbi, ethContractAddress);
		const spc = await eth.methods
			.getSPCReturns(web3?.utils.toWei(`${amount}`, 'ether'))
			.call({
				from: publicAddress,
			});

		return +(+(web3?.utils.fromWei(spc, 'ether') || 0));
	};

	static spcToETH = async (publicAddress: any, amount: any) => {
		const instance = await Web3Class.getWeb3Instance();
		const eth = instance.spcContract.methods.SPCToOther().send({
			from: publicAddress,
			value: instance.web3?.utils.toWei(`${amount}`, 'ether'),
		});

		return eth;
	};

	static spcToToken = async (publicAddress: any, amount: any) => {
		const instance = await Web3Class.getWeb3Instance();
		const token = instance.spcContract.methods
			.SPCToToken(web3Info.USDT_ADDRESS)
			.send({
				from: publicAddress,
				value: instance.web3?.utils.toWei(`${amount}`, 'ether'),
			});

		return token;
	};

	static depositBNB = async (publicAddress: any, amount: any) => {
		const instance = await Web3Class.getWeb3Instance();
		const bnbHash = instance.bscContract.methods.depositBNB().send({
			from: publicAddress,
			value: instance.web3?.utils.toWei(`${amount}`, 'ether'),
		});

		return bnbHash;
	};

	static spcToBNB = async (publicAddress: any, amount: any) => {
		const instance = await Web3Class.getWeb3Instance();
		const eth = instance.spcbscContract.methods.SPCToOther().send({
			from: publicAddress,
			value: instance.web3?.utils.toWei(`${amount}`, 'ether'),
		});

		return eth;
	};

	static spcToBUSD = async (publicAddress: any, amount: any) => {
		const instance = await Web3Class.getWeb3Instance();
		const eth = instance.spcbscContract.methods
			.SPCToToken(web3Info.BUSD_ADDRESS)
			.send({
				from: publicAddress,
				value: instance.web3?.utils.toWei(`${amount}`, 'ether'),
			});

		return eth;
	};

	static getProviderFee = async (publicAddress: any) => {
		const web3: any = new Web3(web3Info.ETH_RPC);
		const eth = new web3.eth.Contract(ethAbi, ethContractAddress);
		const fee = await eth.methods.getMetadata().call({
			from: publicAddress,
		});
		return fee;
	};

	// Tokenizing
	static getTokenPrice = async (tokenAddress: any) => {
		const web3: any = new Web3(web3Info.SPC_RPC);
		tokenizeContract = new web3.eth.Contract(
			tokenizeAbi,
			tokenizeContractAddress
		);
		const tokenPrice = await tokenizeContract.methods
			.getTokenPrice(tokenAddress)
			.call();
		return tokenPrice;
	};

	static getSPCPrice = async () => {
		const web3: any = new Web3(web3Info.SPC_RPC);
		tokenizeContract = new web3.eth.Contract(
			tokenizeAbi,
			tokenizeContractAddress
		);
		const spcPrice = await tokenizeContract.methods.getSPCPrice().call();

		return spcPrice;
	};

	// HTC/PRZ/CCT to SPC
	static approveTokenHTC = async (publicAddress: any, amount: any) => {
		const instance = await Web3Class.getWeb3Instance();
		const approveHash = await new Promise((resolve, reject) => {
			instance.htcContract.methods
				.approve(
					web3Info.TOKENIZE_ADDRESS,
					instance.web3?.utils.toWei(`${amount}`, 'ether')
				)
				.send({
					from: publicAddress,
				})
				.once('transactionHash', (txId: unknown) => resolve(txId))
				.on('error', (error: any) => reject(error));
		});

		return approveHash;
	};

	static approveTokenPRZ = async (
		publicAddress: string,
		amount: number,
		address = web3Info.TOKENIZE_ADDRESS
	) => {
		const instance = await Web3Class.getWeb3Instance();
		const approveHash = await new Promise((resolve, reject) => {
			instance.przContract.methods
				.approve(address, instance.web3?.utils.toWei(`${amount}`, 'ether'))
				.send({
					from: publicAddress,
				})
				.once('transactionHash', (txId: unknown) => resolve(txId))
				.on('error', (error: any) => reject(error));
		});

		return approveHash;
	};

	static approveTokenCCT = async (publicAddress: any, amount: any) => {
		const instance = await Web3Class.getWeb3Instance();
		const approveHash = await new Promise((resolve, reject) => {
			instance.cctContract.methods
				.approve(
					web3Info.TOKENIZE_ADDRESS,
					instance.web3?.utils.toWei(`${amount}`, 'ether')
				)
				.send({
					from: publicAddress,
				})
				.once('transactionHash', (txId: unknown) => resolve(txId))
				.on('error', (error: any) => reject(error));
		});

		return approveHash;
	};

	static swapTokenToSPC = async (
		publicAddress: any,
		tokenAddress: any,
		amount: any,
		amountOutMin = 0
	) => {
		const instance = await Web3Class.getWeb3Instance();
		const htc = await new Promise((resolve, reject) => {
			instance.tokenizeContract.methods
				.swap(
					instance.web3?.utils.toWei(`${amount}`, 'ether'),
					instance.web3?.utils.toWei(`${amountOutMin}`, 'ether'),
					tokenAddress
				)
				.send(
					{
						from: publicAddress,
					},
					(error: any, result: unknown) => {
						if (error) {
							reject(error);
						} else {
							resolve(result);
						}
					}
				);
		});
		return htc;
	};

	static swapSPCtoHTC = async (
		publicAddress: any,
		amount: any,
		amountOutMin = 0
	) => {
		const instance = await Web3Class.getWeb3Instance();
		const htcHash = await new Promise((resolve, reject) => {
			instance.tokenizeContract.methods
				.swapSPCToToken(
					web3Info.HTC_ADDRESS,
					instance.web3?.utils.toWei(`${amountOutMin}`, 'ether')
				)
				.send(
					{
						from: publicAddress,
						value: instance.web3?.utils.toWei(`${amount}`, 'ether'),
					},
					(error: any, result: unknown) => {
						if (error) {
							reject(error);
						} else {
							resolve(result);
						}
					}
				);
		});

		return htcHash;
	};

	static swapPRZToCCT = async (
		publicAddress: any,
		amount: any,
		tokenIn: any,
		tokenOut: any,
		amountOutMin = 0
	) => {
		const instance = await Web3Class.getWeb3Instance();
		const cctHash = await new Promise((resolve, reject) => {
			instance.tokenizeContract.methods
				.swapPRZToCCT(
					instance.web3?.utils.toWei(`${amount}`, 'ether'),
					tokenIn,
					instance.web3?.utils.toWei(`${amountOutMin}`, 'ether'),
					tokenOut
				)
				.send(
					{
						from: publicAddress,
					},
					(error: any, result: unknown) => {
						if (error) {
							reject(error);
						} else {
							resolve(result);
						}
					}
				);
		});

		return cctHash;
	};

	// Send Transaction
	static sendTransaction = async (
		publicAddress: any,
		adminAddress: any,
		amount: any,
		type: string,
		gasPrice: any
	) => {
		let t = type;
		const instance = await Web3Class.getWeb3Instance();
		const contractExchangeAddress = adminAddress;
		const transactionHash = await new Promise((resolve, reject) => {
			if (t === COIN_SYMBOL.USDT) {
				t = web3Info.USDT_DECIMALS === 18 ? 'ether' : 'mwei';
				instance.usdtContract.methods
					.transfer(
						contractExchangeAddress,
						instance.web3?.utils.toWei(`${amount}`, type)
					)
					.send(
						{
							from: publicAddress,
							gasPrice,
						},
						(error: any, result: unknown) => {
							if (error) {
								reject(error);
							} else {
								resolve(result);
							}
						}
					);
			}
			if (t === COIN_SYMBOL.BUSD) {
				instance.busdContract.methods
					.transfer(
						contractExchangeAddress,
						instance.web3?.utils.toWei(`${amount}`, 'ether')
					)
					.send(
						{
							from: publicAddress,
							gasPrice,
						},
						(error: any, result: unknown) => {
							if (error) {
								reject(error);
							} else {
								resolve(result);
							}
						}
					);
			}
			if (t === COIN_SYMBOL.HTC) {
				instance.htcContract.methods
					.transfer(
						contractExchangeAddress,
						instance.web3?.utils.toWei(`${amount}`, 'ether')
					)
					.send(
						{
							from: publicAddress,
							gasPrice,
						},
						(error: any, result: unknown) => {
							if (error) {
								reject(error);
							} else {
								resolve(result);
							}
						}
					);
			}
			if (t === COIN_SYMBOL.PRZ) {
				instance.przContract.methods
					.transfer(
						contractExchangeAddress,
						instance.web3?.utils.toWei(`${amount}`, 'ether')
					)
					.send(
						{
							from: publicAddress,
							gasPrice,
						},
						(error: any, result: unknown) => {
							if (error) {
								reject(error);
							} else {
								resolve(result);
							}
						}
					);
			}
		});

		return transactionHash;
	};

	static sendTransactionClaimBonus = async (
		publicAddress: any,
		amount: any,
		nonce: any,
		signature: any
	) => {
		const instance = await Web3Class.getWeb3Instance();
		console.log('claim-transaction', {
			code: 'claim_processing',
		});
		const transactionHash = instance.claimContract.methods
			.claimBonus(amount, nonce, signature)
			.send({
				from: publicAddress,
			});

		return transactionHash;
	};

	// sleep to wait for the transaction complete
	static sleep = (milliseconds: number | undefined) =>
		// eslint-disable-next-line no-promise-executor-return
		new Promise((resolve) => setTimeout(resolve, milliseconds));

	// Get transaction hash info
	static getTransactionReceipt = async (hashID: string, symbol: string) => {
		let rpc = null;
		if (symbol === COIN_SYMBOL.USDT || symbol === COIN_SYMBOL.ETH) {
			rpc = web3Info.ETH_RPC;
		} else if (symbol === COIN_SYMBOL.BNB || symbol === COIN_SYMBOL.BUSD) {
			rpc = web3Info.BNB_RPC;
		} else {
			rpc = web3Info.SPC_RPC;
		}
		const web3 = new Web3(rpc);
		let transactionReceipt = null;
		transactionReceipt = await web3?.eth.getTransactionReceipt(hashID);
		while (transactionReceipt == null) {
			// Waiting expectedBlockTime until the transaction is mined
			transactionReceipt = await web3?.eth.getTransactionReceipt(hashID);
			await Web3Class.sleep(1000);
		}
		return transactionReceipt;
	};

	// Get Fee
	static getFee = async () => {
		const web3: any = new Web3(web3Info.SPC_RPC);
		tokenizeContract = new web3.eth.Contract(
			tokenizeAbi,
			tokenizeContractAddress
		);
		const fee = await tokenizeContract.methods.getFee().call();

		return fee;
	};

	// getBalance of Tokenizing
	static getBalanceOfToken = async (publicAddress: string) => {
		const web3: any = new Web3(web3Info.SPC_RPC);
		htcContract = new web3.eth.Contract(htcAbi, htcContractAddress);
		przContract = new web3.eth.Contract(przAbi, przContractAddress);
		cctContract = new web3.eth.Contract(cctAbi, cctContractAddress);
		const spcBalance = await web3?.eth.getBalance(publicAddress);
		const htcBalance = await htcContract.methods
			.balanceOf(publicAddress)
			.call();
		const przBalance = await przContract.methods
			.balanceOf(publicAddress)
			.call();
		const cctBalance = await cctContract.methods
			.balanceOf(publicAddress)
			.call();
		return {
			spc: roundDown(+(+web3.utils.fromWei(spcBalance, 'ether')), 3) || 0,
			htc: roundDown(+(+web3.utils.fromWei(htcBalance, 'ether')), 3) || 0,
			prz: roundDown(+(+web3.utils.fromWei(przBalance, 'ether')), 3) || 0,
			cct: roundDown(+(+web3.utils.fromWei(cctBalance, 'ether')), 3) || 0,
		};
	};

	// getAddressOfOwner
	static getAddressOfOwner = async (publicAddress: any) => {
		const instance = await Web3Class.getWeb3Instance();
		const address = await instance.tokenizeContract.methods
			.owner()
			.call({ from: publicAddress });

		return address;
	};

	// getRate Exchange
	// usdt-spc
	static getSPCPriceByTokenRate = async (publicAddress: any) => {
		const web3: any = new Web3(web3Info.ETH_RPC);
		const eth = new web3.eth.Contract(ethAbi, ethContractAddress);
		const rate = await eth.methods
			.getSPCPriceByToken(web3Info.USDT_ADDRESS)
			.call({
				from: publicAddress,
			});

		return +rate;
	};

	// spc-eth
	static getNativePriceRate = async (publicAddress: any) => {
		const web3: any = new Web3(web3Info.SPC_RPC);
		const eth = new web3.eth.Contract(spcAbi, spcContractAddress);
		const rate = await eth.methods.getNativePrice().call({
			from: publicAddress,
		});

		return +rate;
	};

	// spc-usdt
	static getTokenPriceRate = async (publicAddress: any) => {
		const web3: any = new Web3(web3Info.SPC_RPC);
		const eth = new web3.eth.Contract(spcAbi, spcContractAddress);
		const rate = await eth.methods.getTokenPrice(web3Info.USDT_ADDRESS).call({
			from: publicAddress,
		});

		return +rate;
	};

	static formatAddress = (address: any) => {
		const { web3 } = Web3Class.getWeb3Instance();
		return web3?.utils.toChecksumAddress(address);
	};

	static checkValidAddress = (address: string | string[]) => {
		const { web3 } = Web3Class.getWeb3Instance();
		return address?.length === 42 && address?.indexOf('0x') === 0
			? web3?.utils.isAddress(this.formatAddress(address))
			: false;
	};

	// Staking pool
	static getMetaDataStakingPoolByUser = async (publicAddress: any) => {
		const web3: any = new Web3(web3Info.SPC_RPC);
		const receiptStakingPool = new web3.eth.Contract(
			receiveStakingPoolAbi,
			receiveStakingPoolAddress
		);
		const metaData = await receiptStakingPool.methods
			.getMetaDataStakingPoolByUser()
			.call({
				from: publicAddress,
			});
		return metaData;
	};

	static sendStaking = async (
		publicAddress: any,
		amount: any,
		nonce: any,
		signature: any
	) => {
		const instance = await Web3Class.getWeb3Instance();
		const transactionHash = await new Promise((resolve, reject) => {
			instance.receiveStakingContract.methods
				.sendStaking(amount, nonce, signature)
				.send({
					from: publicAddress,
				})
				.once('transactionHash', (hash: unknown) => {
					resolve(hash);
				})
				.once('error', (e: any) => reject(e));
		});
		return transactionHash;
	};

	static claimPRZStaking = async (publicAddress: any, amount: any) => {
		const instance = await Web3Class.getWeb3Instance();
		const transactionHash = await new Promise((resolve, reject) => {
			instance.nativeStakingContract.methods
				.claimReward(instance.web3?.utils.toWei(`${amount}`, 'ether'))
				.send({
					from: publicAddress,
				})
				.once('transactionHash', (hash: unknown) => {
					resolve(hash);
				})
				.once('error', (e: any) => reject(e));
		});
		return transactionHash;
	};

	static claimSPCStaking = async (publicAddress: any, amount: any) => {
		const instance = await Web3Class.getWeb3Instance();
		const transactionHash = await new Promise((resolve, reject) => {
			instance.nativeStakingContract.methods
				.claimReward(instance.web3?.utils.toWei(`${amount}`, 'ether'))
				.send({
					from: publicAddress,
				})
				.once('transactionHash', (hash: unknown) => {
					resolve(hash);
				})
				.on('error', (e: any) => reject(e));
		});
		return transactionHash;
	};

	// usdt -> htc
	static transferTransaction = async (
		publicAddress: any,
		adminAddress: any,
		amount: any
	) => {
		const instance = await Web3Class.getWeb3Instance();
		const contractExchangeAddress = adminAddress;
		const transactionHash = await new Promise((resolve, reject) => {
			const type = web3Info.USDT_DECIMALS === 18 ? 'ether' : 'mwei';
			instance.usdtContract.methods
				.transfer(
					contractExchangeAddress,
					instance.web3?.utils.toWei(`${amount}`, type)
				)
				.send(
					{
						from: publicAddress,
					},
					(error: any, result: unknown) => {
						if (error) {
							reject(error);
						} else {
							resolve(result);
						}
					}
				);
		});

		return transactionHash;
	};

	// ICO
	static approveICO = async (publicAddress: any, amount: any) => {
		const instance = await Web3Class.getWeb3Instance();
		const approveHash = await new Promise((resolve, reject) => {
			instance.usdtContract.methods
				.approve(web3Info.ICO_RECEIVE_ADDRESS, amount)
				.send({
					from: publicAddress,
				})
				.once('transactionHash', (txId: unknown) => resolve(txId))
				.on('error', (error: any) => reject(error));
		});

		return approveHash;
	};

	static sendTransactionInvest = async (
		publicAddress: any,
		icoPackageId: any,
		numberOfPurchase: any,
		amount: any,
		nonce: any,
		signature: any,
		gasPrice: any
	) => {
		const instance = await Web3Class.getWeb3Instance();
		const transactionHash = instance.icoReceiveContract.methods
			.buyPackage(icoPackageId, numberOfPurchase, amount, nonce, signature)
			.send({
				from: publicAddress,
				gasPrice,
			});

		return transactionHash;
	};

	static harvestICO = async (publicAddress: any, buyId: any) => {
		const instance = await Web3Class.getWeb3Instance();
		const transactionHash = instance.icoLockContract.methods
			.harvest(buyId)
			.send({
				from: publicAddress,
			});

		return transactionHash;
	};
}

export default Web3Class;
