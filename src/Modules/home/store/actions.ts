import { FundListPayload } from '@type/Store/fund';
import { REQUEST } from '@utils/redux';
import { FUNDS_LIST } from './constants';

export function loadFundsList(payload: FundListPayload) {
	return {
		type: REQUEST(FUNDS_LIST),
		payload,
	};
}
