export type FundListState = {
	isLoading: boolean;
	error: any;
	message: string;
	listFund?: any;
	paginationFund?: any;
};

export type FundListPayload = {
	page?: number;
	limit?: number;
	name?: string;
	order?: string;
};

export type FundDetailState = {
	isLoading: boolean;
	error: any;
	message: string;
	fund?: any;
};

export type FundDetailPayload = {
	id: string;
};
