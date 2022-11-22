import { put, takeLatest } from 'redux-saga/effects';

import { REQUEST, SUCCESS, FAILURE } from '@utils/redux';
import { login, logout, urlFormKycAccount } from '@apis';
import { Action } from '@type/Store';
import { LOGIN, LOGOUT, URL_FORM_KYC_ACCOUNT } from './constants';

export function* loginSaga({ payload }: Action) {
	try {
		const { data: message } = yield login(payload);
		yield put({
			type: SUCCESS(LOGIN),
			payload: message,
		});
	} catch (error) {
		yield put({
			type: FAILURE(LOGIN),
			error,
		});
	}
}

export function* logoutSaga({ payload }: Action) {
	try {
		const { data: message } = yield logout(payload);
		yield put({
			type: SUCCESS(LOGOUT),
			payload: message,
		});
	} catch (error) {
		yield put({
			type: FAILURE(LOGOUT),
			error,
		});
	}
}

export function* urlFormKycAccountSaga() {
	try {
		const { message } = yield urlFormKycAccount();
		yield put({
			type: SUCCESS(URL_FORM_KYC_ACCOUNT),
			payload: message,
		});
	} catch (error) {
		yield put({
			type: FAILURE(URL_FORM_KYC_ACCOUNT),
			error,
		});
	}
}

export default function* authSaga() {
	yield takeLatest(REQUEST(LOGIN), loginSaga);
	yield takeLatest(REQUEST(LOGOUT), logoutSaga);
	yield takeLatest(REQUEST(URL_FORM_KYC_ACCOUNT), urlFormKycAccountSaga);
}
