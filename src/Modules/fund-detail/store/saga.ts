import { put, takeLatest } from 'redux-saga/effects';

import { REQUEST, SUCCESS, FAILURE } from '@utils/redux';
import { fundDetail } from '@apis';
import { Action } from '@type/Store';
import { FUNDS_DETAIL } from './constants';

export function* loadFundDetailSaga({ payload }: Action) {
	try {
		const { data } = yield fundDetail(payload);
		yield put({
			type: SUCCESS(FUNDS_DETAIL),
			payload: data,
		});
	} catch (error) {
		yield put({
			type: FAILURE(FUNDS_DETAIL),
			error,
		});
	}
}

export default function* FundDetailSaga() {
	yield takeLatest(REQUEST(FUNDS_DETAIL), loadFundDetailSaga);
}
