/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/naming-convention */
import type { LOGIN_PROVIDER_TYPE } from '@toruslabs/openlogin';
import {
	ADAPTER_EVENTS,
	SafeEventEmitterProvider,
	WALLET_ADAPTERS,
	WALLET_ADAPTER_TYPE,
} from '@web3auth/base';
import { CHAIN_CONFIG, CHAIN_CONFIG_TYPE } from '@config/chainConfig';
import { Web3AuthCore } from '@web3auth/core';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';
import { WalletConnectV1Adapter } from '@web3auth/wallet-connect-v1-adapter';
import { NetworkSwitch } from '@web3auth/ui';
import { getWalletProvider, IWalletProvider } from '@config/network/provider';
import { setLocalStorage } from '@utils/storage';
import { getAppPubKey } from '@config/web3auth/appPubKey';
import {
	createContext,
	FunctionComponent,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';
import { LOCAL_WEB3AUTH_LOGINED, StatusLogin, Web3authNetWorkType } from '@constants';
import QRCodeModal from '@walletconnect/qrcode-modal';

export interface IParamLoginState {
	id_token: any;
	app_pub_key: string;
}

export interface IWeb3AuthContext {
	web3Auth: Web3AuthCore | null;
	provider: IWalletProvider | null;
	isLoading: boolean;
	user: unknown;
	paramsToLogin: IParamLoginState;
	login: (
		adapter: WALLET_ADAPTER_TYPE,
		provider: LOGIN_PROVIDER_TYPE,
		login_hint?: string
	) => Promise<void>;
	loginWithWalletConnect: () => Promise<void>;
	logout: () => Promise<void>;
	getUserInfo: () => Promise<any>;
	signMessage: () => Promise<any>;
	signV4Message: () => Promise<any>;
	getAccounts: () => Promise<any>;
	getBalance: () => Promise<any>;
	getPrivateKey: () => Promise<any>;
}

export const Web3AuthContext = createContext<IWeb3AuthContext>({
	web3Auth: null,
	provider: null,
	isLoading: false,
	user: null,
	paramsToLogin: {
		id_token: '',
		app_pub_key: '',
	},
	login: async (
		adapter: WALLET_ADAPTER_TYPE,
		provider?: LOGIN_PROVIDER_TYPE,
		login_hint?: string
	) => {},
	loginWithWalletConnect: async () => {},
	logout: async () => {},
	getUserInfo: async () => {},
	signMessage: async () => {},
	signV4Message: async () => {},
	getAccounts: async () => {},
	getBalance: async () => {},
	getPrivateKey: async () => {},
});

export function useWeb3Auth() {
	return useContext(Web3AuthContext);
}

interface IWeb3AuthState {
	web3AuthNetwork: Web3authNetWorkType;
	chain: CHAIN_CONFIG_TYPE;
	children?: React.ReactNode;
}
interface IWeb3AuthProps {
	children?: ReactNode;
	web3AuthNetwork: Web3authNetWorkType;
	chain: CHAIN_CONFIG_TYPE;
}

export const Web3AuthProvider: FunctionComponent<IWeb3AuthState> = ({
	children,
	web3AuthNetwork,
	chain,
}: IWeb3AuthProps) => {
	const [web3Auth, setWeb3Auth] = useState<Web3AuthCore | null>(null);
	const [provider, setProvider] = useState<IWalletProvider | null>(null);
	const [user, setUser] = useState<unknown | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [paramsToLogin, setParamsToLogin] = useState<IParamLoginState>({
		app_pub_key: '',
		id_token: '',
	});

	const setWalletProvider = useCallback(
		(web3authProvider: SafeEventEmitterProvider) => {
			const walletProvider = getWalletProvider(chain, web3authProvider);
			setProvider(walletProvider);
		},
		[chain]
	);
	useEffect(() => {
		const subscribeAuthEvents = (web3auth: Web3AuthCore) => {
			// Can subscribe to all ADAPTER_EVENTS and LOGIN_MODAL_EVENTS
			web3auth.on(ADAPTER_EVENTS.CONNECTED, (data: unknown) => {
				console.log('Yeah!, you are successfully logged in', data);
				setUser(data);
				setWalletProvider(web3auth.provider!);
			});

			web3auth.on(ADAPTER_EVENTS.CONNECTING, () => {
				console.log('connecting');
			});

			web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
				console.log('disconnected');
				setUser(null);
			});

			web3auth.on(ADAPTER_EVENTS.ERRORED, (error: unknown) => {
				console.error('some error or user has cancelled login request', error);
			});
		};

		const currentChainConfig = CHAIN_CONFIG[chain];

		async function init() {
			try {
				setIsLoading(true);
				const clientId =
					'BD8pvWp8a7mYvc8V2adDX4BrnEb72psCq4CcIkvFUyuj44c6e0InroHoMWqk1Wz6IKw1dJ8Jbbye0X8sSGi9IJU';
				const web3AuthInstance = new Web3AuthCore({
					chainConfig: currentChainConfig,
					enableLogging: true,
					clientId,
				});
				subscribeAuthEvents(web3AuthInstance);
				const networkUi = new NetworkSwitch();
				const adapter = new OpenloginAdapter({
					adapterSettings: { network: 'mainnet', clientId, uxMode: 'redirect' },
				});
				const wcAdapter = new WalletConnectV1Adapter({
					adapterSettings: {
						qrcodeModal: QRCodeModal,
						networkSwitchModal: networkUi,
					},
					chainConfig: currentChainConfig,
				});

				web3AuthInstance.configureAdapter(adapter);
				web3AuthInstance.configureAdapter(wcAdapter);

				await web3AuthInstance.init();
				setWeb3Auth(web3AuthInstance);
				const pubKey = await getAppPubKey(web3AuthInstance, chain);
				const idToken = await web3AuthInstance.getUserInfo();
				const id_token = idToken.idToken;
				setParamsToLogin({ id_token, app_pub_key: pubKey });
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		}
		init();
	}, [chain, web3AuthNetwork, setWalletProvider]);

	const login = async (
		adapter: WALLET_ADAPTER_TYPE,
		loginProvider: LOGIN_PROVIDER_TYPE,
		login_hint?: string
	) => {
		try {
			setIsLoading(true);
			if (!web3Auth) {
				console.log('web3auth not initialized yet');
				return;
			}
			const localProvider = await web3Auth.connectTo(adapter, {
				loginProvider,
				login_hint,
			});

			setWalletProvider(localProvider!);
			setLocalStorage(LOCAL_WEB3AUTH_LOGINED, StatusLogin.PROCESSING)
		} catch (error) {
			console.log('error', error);
		} finally {
			setIsLoading(false);
		}
	};

	const loginWithWalletConnect = async () => {
		try {
			setIsLoading(true);
			if (!web3Auth) {
				console.log('web3auth not initialized yet');
				return;
			}
			const localProvider = await web3Auth.connectTo(
				WALLET_ADAPTERS.WALLET_CONNECT_V1,
				{}
			);
			setWalletProvider(localProvider!);
		} catch (error) {
			console.log('error', error);
		} finally {
			setIsLoading(false);
		}
	};

	const logout = async () => {
		if (!web3Auth) {
			console.log('web3auth not initialized yet');
			return;
		}
		await web3Auth.logout();
		setProvider(null);
	};

	const getUserInfo = async () => {
		try {
			if (!web3Auth) {
				console.log('web3auth not initialized yet');
				return;
			}
			await web3Auth.getUserInfo();
		} catch (error) {
			console.error('Error', error);
		}
	};

	const getAccounts = async () => {
		try {
			if (!provider) {
				console.log('web3auth not initialized yet');
				return;
			}
			await provider.getAccounts();
		} catch (error) {
			console.error('Error', error);
		}
	};

	const getBalance = async () => {
		try {
			if (!provider) {
				console.log('web3auth not initialized yet');
				return;
			}
			await provider.getBalance();
		} catch (error) {
			console.error('Error', error);
		}
	};

	const signMessage = async () => {
		if (!provider) {
			console.log('provider not initialized yet');
			return;
		}
		provider.signMessage();
	};
	const signV4Message = async () => {
		if (!provider) {
			console.log('provider not initialized yet');
			return;
		}
		provider.signV4Message();
	};

	const getPrivateKey = async () => {
		if (!provider) {
			console.log('provider not initialized yet');
			return;
		}
		provider.getPrivateKey();
	};

	const contextProvider = {
		web3Auth,
		provider,
		user,
		isLoading,
		paramsToLogin,
		login,
		loginWithWalletConnect,
		logout,
		getUserInfo,
		getAccounts,
		getBalance,
		signMessage,
		signV4Message,
		getPrivateKey,
	};

	return (
		<Web3AuthContext.Provider value={contextProvider}>
			{children}
		</Web3AuthContext.Provider>
	);
};
