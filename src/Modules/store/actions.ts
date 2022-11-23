import { Payload } from '@type/Store';
import { TOGGLE_SIDEBAR, HOVER_SIDEBAR, SESSION_ACCOUNT } from './constants';

export function toggleSidebar(payload: Payload) {
	return {
		type: TOGGLE_SIDEBAR,
		payload,
	};
}

export function toggleSessionAccount() {
	return {
		type: SESSION_ACCOUNT,
	};
}

export function hoverSidebar(payload: Payload) {
	return {
		type: HOVER_SIDEBAR,
		payload,
	};
}
