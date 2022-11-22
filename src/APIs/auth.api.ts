import { http } from '@config';
import {
	END_POINT,
	// USER_URL
} from '@constants';

function login(data: any) {
	return http.post(END_POINT.LOGIN, data).then((res) => res);
}

function logout(data: any) {
	return http.post(END_POINT.LOGOUT, data).then((res) => res);
}

function getProfile({ userId }: any) {
	return http
		.get(`${END_POINT.PROFILE_USER}?userId=${userId}`)
		.then((res) => res);
}

function urlFormKycAccount() {
	// return http
	// 	.post(END_POINT.URL_FORM_KYC_ACCOUNT, { redirect_url: USER_URL })
	// 	.then((res) => res);
	return {
		message: 'https://forms.kycaid.com/e91aadf81fdfa1494029ad6217e21a2d8bb6',
	};
}

export { login, logout, getProfile, urlFormKycAccount };
