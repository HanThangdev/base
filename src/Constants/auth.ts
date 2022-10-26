import { LOGO_DISCORD, LOGO_FACEBOOK, LOGO_GOOGLE, LOGO_LINE, LOGO_TWITTER } from "@assets";

export enum TypeLoginProvider {
	GOOGLE = 'google',
	FACEBOOK = 'facebook',
	TWITTER = 'twitter',
	LINE = 'line',
	DISCORD = 'discord',
}

export const LOGIN_VIA_EMAIL = "email_passwordless"

export const LOGIN_PROVIDER: {
	[key in TypeLoginProvider]: {
		logo: string
		function: (cb: (type: TypeLoginProvider) => Promise<void>) => void
	}
} = {
	[TypeLoginProvider.GOOGLE]: {
		logo: LOGO_GOOGLE,
		function: (cb) => cb(TypeLoginProvider.GOOGLE) 
	},
	[TypeLoginProvider.DISCORD]: {
		logo: LOGO_DISCORD,
		function: (cb) => cb(TypeLoginProvider.DISCORD)
	},
	[TypeLoginProvider.FACEBOOK]: {
		logo: LOGO_FACEBOOK,
		function: (cb) => cb(TypeLoginProvider.FACEBOOK)
	},
	[TypeLoginProvider.LINE]: {
		logo: LOGO_LINE,
		function: (cb) => cb(TypeLoginProvider.LINE)
	},
	[TypeLoginProvider.TWITTER]: {
		logo: LOGO_TWITTER,
		function: (cb) => cb(TypeLoginProvider.TWITTER)
	}
}