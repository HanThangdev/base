import { http } from '@config';
import { END_POINT } from '@constants';

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

export { login, logout, getProfile };
