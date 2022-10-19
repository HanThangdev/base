export type FaqState = {
	typeTab?: boolean;
	error?: any;
	isLoading?: boolean
};

export type SendContactPayload = {
	full_name: string;
	email: string;
	content: string
};