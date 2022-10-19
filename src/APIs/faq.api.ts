import { http } from '@config';
import { END_POINT } from '@constants';

function sendContact(data: any) {
	return http.post(END_POINT.SEND_CONTACT, data).then((res) => res);
}

export { sendContact };
