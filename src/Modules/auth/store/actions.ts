import { REQUEST } from '@utils/redux';
import { Payload } from '@type/Store';
import { LOGIN, LOAD_PROFILE, LOGOUT, URL_FORM_KYC_ACCOUNT } from './constants';

export function login(payload: Payload) {
	return {
		type: REQUEST(LOGIN),
		payload,
	};
}

export function logout(payload: Payload) {
	return {
		type: REQUEST(LOGOUT),
		payload,
	};
}

export function loadProfile(payload: Payload) {
	return {
		type: REQUEST(LOAD_PROFILE),
		payload,
	};
}

export function urlFormKycAccount(payload: Payload) {
	return {
		type: REQUEST(URL_FORM_KYC_ACCOUNT),
		payload,
	};
}
