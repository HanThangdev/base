/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 * @param  {state} faq state
 * @param  {action} faq action
 */
import { createReducer, FAILURE, REQUEST, SUCCESS, updateObject } from '@utils/redux';
import { FaqState } from '@type/Store/faq';
import { Action } from '@type/Store';
import { SEND_CONTACT, TOGGLE_TAB_FAQ } from './constants';

export const initialState: FaqState = {
	typeTab: true,
	isLoading: true,
	error: true,
};

function toggleTabFaq(state: FaqState, { payload }: Action) {
	return updateObject(state, {
		typeTab: payload,
	});
}

function sendContact(state: FaqState) {
	return updateObject(state, {
		error: null,
		isLoading: true,
	});
}

function sendContactSuccess(state: FaqState) {
	return updateObject(state,  {
		error: null,
		isLoading: false,
	});
}

function sendContactError(state: FaqState, { error }: Action) {
	return updateObject(state, { error, isLoading: false,});
}

// Slice reducer
export default createReducer(initialState, {
	[TOGGLE_TAB_FAQ]: toggleTabFaq,
	
	[REQUEST(SEND_CONTACT)]: sendContact,
	[SUCCESS(SEND_CONTACT)]: sendContactSuccess,
	[FAILURE(SEND_CONTACT)]: sendContactError,
});
