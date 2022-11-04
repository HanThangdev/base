import { FundDetailPayload } from '@type/Store/fund';
import { REQUEST } from '@utils/redux';
import { FUNDS_DETAIL } from './constants';

export function loadFundDetail(payload: FundDetailPayload) {
	return {
		type: REQUEST(FUNDS_DETAIL),
		payload,
	};
}
