/* eslint-disable @typescript-eslint/naming-convention */
import {
	createReducer,
	updateObject,
	REQUEST,
	SUCCESS,
	FAILURE,
} from '@utils/redux';
import { Action } from '@type/Store';
import { AuthState, Message } from '@type/Store/auth';
import { removeLocalStorage, setLocalStorage, STORAGE } from '@utils/storage';
import BroadcastChannel from 'broadcast-channel';
import {
	LOAD_PROFILE,
	LOGIN,
	LOGOUT,
	LOGOUT_MESSAGE,
	URL_FORM_KYC_ACCOUNT,
} from './constants';

const logoutChannel: BroadcastChannel<Message> = new BroadcastChannel('logout');

export const initialState: AuthState = {
	isLoading: false,
	error: null,
	authenticated: null,
	profile: {},
	isSubmitting: false,
	message: '',
	urlFormKyc: '',
};

function login(state: AuthState) {
	return updateObject(state, {
		isLoading: true,
	});
}

function loginSuccess(state: AuthState, { payload }: Action) {
	setLocalStorage(STORAGE.USER_TOKEN, JSON.stringify(payload));
	return updateObject(state, {
		isLoading: false,
	});
}

function loginFailure(state: AuthState, { error }: Action) {
	return updateObject(state, {
		error,
		isLoading: false,
	});
}

function logout(state: AuthState) {
	return updateObject(state, {
		isLoading: true,
	});
}

function logoutSuccess(state: AuthState, { payload }: Action) {
	removeLocalStorage(STORAGE.USER_TOKEN);
	logoutChannel.postMessage({ logoutMessage: LOGOUT_MESSAGE });
	const { message } = payload;
	return updateObject(state, {
		isLoading: false,
		message,
		profile: {},
	});
}

function logoutFailure(state: AuthState, { error }: Action) {
	return updateObject(state, {
		error,
		isLoading: false,
	});
}

function loadProfile(state: AuthState, { payload }: Action) {
	return updateObject(state, {
		authenticated: true,
		profile: payload,
	});
}

// function profileLoaded(state: AuthState, { payload }: Action) {
// 	const { profile } = payload;
// 	console.log(payload)
// 	return updateObject(state, {
// 		isLoading: false,
// 		authenticated: true,
// 		profile,
// 	});
// }

// function profileLoadingError(state: AuthState, { error }: Action) {
// 	return updateObject(state, {
// 		error,
// 		isLoading: false,
// 		authenticated: false,
// 	});
// }

// urlFormKycAccount
function urlFormKycAccount(state: AuthState) {
	return updateObject(state, {
		isLoading: true,
	});
}

function urlFormKycAccountSuccess(state: AuthState, { payload }: Action) {
	setLocalStorage(STORAGE.USER_TOKEN, JSON.stringify(payload));
	return updateObject(state, {
		isLoading: false,
		urlFormKyc: payload,
	});
}

function urlFormKycAccountFailure(state: AuthState, { error }: Action) {
	return updateObject(state, {
		error,
		isLoading: false,
	});
}

// Slice reducer
export default createReducer(initialState, {
	[REQUEST(LOGIN)]: login,
	[SUCCESS(LOGIN)]: loginSuccess,
	[FAILURE(LOGIN)]: loginFailure,

	[REQUEST(LOGOUT)]: logout,
	[SUCCESS(LOGOUT)]: logoutSuccess,
	[FAILURE(LOGOUT)]: logoutFailure,

	[REQUEST(LOAD_PROFILE)]: loadProfile,
	// [SUCCESS(LOAD_PROFILE)]: profileLoaded,
	// [FAILURE(LOAD_PROFILE)]: profileLoadingError,

	[REQUEST(URL_FORM_KYC_ACCOUNT)]: urlFormKycAccount,
	[SUCCESS(URL_FORM_KYC_ACCOUNT)]: urlFormKycAccountSuccess,
	[FAILURE(URL_FORM_KYC_ACCOUNT)]: urlFormKycAccountFailure,
});
