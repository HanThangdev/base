import { put, takeLatest } from 'redux-saga/effects';
import { REQUEST, SUCCESS, FAILURE } from '@utils/redux';
import { sendContact } from '@apis';
import { Action } from '@type/Store';
import { SEND_CONTACT } from './constants';

export function* sendContactSaga({ payload }: Action) {
	try {
    yield sendContact(payload);
		yield put({
			type: SUCCESS(SEND_CONTACT),
		});
	} catch (error) {
		yield put({
			type: FAILURE(SEND_CONTACT),
			error,
		});
	}
}


export default function* faqSaga() {
	yield takeLatest(REQUEST(SEND_CONTACT), sendContactSaga);
}
