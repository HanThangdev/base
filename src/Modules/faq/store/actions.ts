import { TOGGLE_TAB_FAQ } from './constants';

export function toggleTabFaq(payload: boolean) {
	return {
		type: TOGGLE_TAB_FAQ,
		payload,
	};
}
