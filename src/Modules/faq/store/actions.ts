import { Payload } from '@type/Store';
import { REQUEST } from '@utils/redux';
import { SEND_CONTACT, TOGGLE_TAB_FAQ } from './constants';

export function toggleTabFaq(payload: Payload) {
	return {
		type: TOGGLE_TAB_FAQ,
		payload,
	};
}

export function sendContact(payload: Payload) {
	return {
		type: REQUEST(SEND_CONTACT),
		payload,
	};
}