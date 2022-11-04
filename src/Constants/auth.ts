import {
	LOGO_DISCORD,
	LOGO_FACEBOOK,
	LOGO_GOOGLE,
	LOGO_LINE,
	LOGO_TWITTER,
} from '@assets';

export enum TypeLoginProvider {
	GOOGLE = 'google',
	FACEBOOK = 'facebook',
	TWITTER = 'twitter',
	LINE = 'line',
	DISCORD = 'discord',
}

export enum TypeChain {
	ETH_mainnet = 'ETH_mainnet',
	ETH_testnet = 'ETH_testnet',
}

export enum MethodChain {
	ETH_CHAIN = 'eth_private_key',
}

export const LOGIN_VIA_EMAIL = 'email_passwordless';

export const LOGIN_PROVIDER: {
	[key in TypeLoginProvider]: {
		logo: string;
		function: (cb: (type: TypeLoginProvider) => Promise<void>) => void;
	};
} = {
	[TypeLoginProvider.GOOGLE]: {
		logo: LOGO_GOOGLE,
		function: (cb) => cb(TypeLoginProvider.GOOGLE),
	},
	[TypeLoginProvider.TWITTER]: {
		logo: LOGO_TWITTER,
		function: (cb) => cb(TypeLoginProvider.TWITTER),
	},
	[TypeLoginProvider.FACEBOOK]: {
		logo: LOGO_FACEBOOK,
		function: (cb) => cb(TypeLoginProvider.FACEBOOK),
	},
	[TypeLoginProvider.LINE]: {
		logo: LOGO_LINE,
		function: (cb) => cb(TypeLoginProvider.LINE),
	},
	
	[TypeLoginProvider.DISCORD]: {
		logo: LOGO_DISCORD,
		function: (cb) => cb(TypeLoginProvider.DISCORD),
	},
};

export const LOCAL_WEB3AUTH_LOGINED = 'Web3Auth-cachedAdapter';
