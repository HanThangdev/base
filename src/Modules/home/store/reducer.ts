/* eslint-disable @typescript-eslint/naming-convention */
import {
	createReducer,
	updateObject,
	REQUEST,
	SUCCESS,
	FAILURE,
} from '@utils/redux';
import { Action } from '@type/Store';
import { FundListState } from '@type/Store/fund';
import { FUNDS_LIST } from './constants';

export const initialState: FundListState = {
	isLoading: false,
	error: null,
	message: '',
	listFund: [],
	paginationFund: null,
};

function loadFundsList(state: FundListState) {
	return updateObject(state, {
		isLoading: true,
	});
}

function loadFundsListSuccess(state: FundListState, { payload }: Action) {
	const { data } = payload;
	return updateObject(state, {
		isLoading: false,
		listFund: data.records,
		paginationFund: data.meta,
	});
}

function loadFundsListFailure(state: FundListState, { error }: Action) {
	return updateObject(state, {
		error,
		isLoading: false,
	});
}

// Slice reducer
export default createReducer(initialState, {
	[REQUEST(FUNDS_LIST)]: loadFundsList,
	[SUCCESS(FUNDS_LIST)]: loadFundsListSuccess,
	[FAILURE(FUNDS_LIST)]: loadFundsListFailure,
});
