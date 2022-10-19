/**
 * The faq state selectors
 */

import { Store } from '@type/Store';
import { FaqState } from '@type/Store/faq';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectFaq = (store: Store) => store.faq || initialState;

const makeSelectFaq = () =>
	createSelector(selectFaq, (state: FaqState) => state);

export { selectFaq, makeSelectFaq };
