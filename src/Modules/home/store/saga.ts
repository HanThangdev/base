import { put, takeLatest } from 'redux-saga/effects';

import { REQUEST, SUCCESS, FAILURE } from '@utils/redux';
import { fundList } from '@apis';
import { Action } from '@type/Store';
import { FUNDS_LIST } from './constants';

export function* loadFundListSaga({ payload }: Action) {
	try {
		const { data } = yield fundList(payload);
		yield put({
			type: SUCCESS(FUNDS_LIST),
			payload: data,
		});
	} catch (error) {
		yield put({
			type: FAILURE(FUNDS_LIST),
			error,
		});
	}
}

export default function* homeSaga() {
	yield takeLatest(REQUEST(FUNDS_LIST), loadFundListSaga);
}
