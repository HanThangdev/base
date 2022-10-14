/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 * @param  {state} login state
 * @param  {action} login action
 */
import { createReducer, updateObject } from '@utils/redux';
import { FaqState } from '@type/Store/faq';
import { Action } from '@type/Store';
import { TOGGLE_TAB_FAQ } from './constants';

export const initialState: FaqState = {
	typeTab: true,
};

function toggleTabFaq(state: FaqState, { payload }: Action) {
	return updateObject(state, {
		typeTab: payload,
	});
}

// Slice reducer
export default createReducer(initialState, {
	[TOGGLE_TAB_FAQ]: toggleTabFaq,
});
