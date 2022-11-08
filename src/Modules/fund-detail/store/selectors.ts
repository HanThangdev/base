/* eslint-disable arrow-parens */
/* eslint-disable implicit-arrow-linebreak */

/**
 * The global state selectors
 */

import { Store } from '@type/Store';
import { FundDetailState } from '@type/Store/fund';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectFundDetail = (store: Store) => store.fund_detail || initialState;

const makeSelectFundDetail = () =>
	createSelector(selectFundDetail, (state: FundDetailState) => state);

export { selectFundDetail, makeSelectFundDetail };
