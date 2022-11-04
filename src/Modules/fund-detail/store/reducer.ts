/* eslint-disable @typescript-eslint/naming-convention */
import {
	createReducer,
	updateObject,
	REQUEST,
	SUCCESS,
	FAILURE,
} from '@utils/redux';
import { Action } from '@type/Store';
import { FundDetailState } from '@type/Store/fund';
import { FUNDS_DETAIL } from './constants';

export const initialState: FundDetailState = {
	isLoading: false,
	error: null,
	message: '',
	fund: [],
};

function loadFundsDetail(state: FundDetailState) {
	return updateObject(state, {
		isLoading: true,
	});
}

function loadFundsDetailSuccess(state: FundDetailState, { payload }: Action) {
	const { data } = payload;
	return updateObject(state, {
		isLoading: false,
		fund: data,
	});
}

function loadFundsDetailFailure(state: FundDetailState, { error }: Action) {
	return updateObject(state, {
		error,
		isLoading: false,
	});
}

// Slice reducer
export default createReducer(initialState, {
	[REQUEST(FUNDS_DETAIL)]: loadFundsDetail,
	[SUCCESS(FUNDS_DETAIL)]: loadFundsDetailSuccess,
	[FAILURE(FUNDS_DETAIL)]: loadFundsDetailFailure,
});
