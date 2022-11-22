export type AuthState = {
	isLoading: boolean;
	error: any;
	authenticated: boolean | null;
	profile: any;
	isSubmitting: boolean;
	message: string;
	urlFormKyc: string;
};

export interface Message {
	logoutMessage?: string;
}
