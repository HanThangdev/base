/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */

/**
 * The global state selectors
 */

import { Store } from '@type/Store';
import { FundListState } from '@type/Store/fund';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectFundlist = (store: Store) => store.home || initialState;

const makeSelectFundList = () =>
	createSelector(selectFundlist, (state: FundListState) => state);

export { selectFundlist, makeSelectFundList };
