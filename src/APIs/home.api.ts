import { http } from '@config';
import { END_POINT } from '@constants';
import { FundDetailPayload } from '@type/Store/fund';

function fundList(data: any) {
	return http.get(END_POINT.FUND_LIST,"", data).then((res) => res);
}

function fundDetail(fundId: FundDetailPayload) {
	const {id} = fundId;
	return http.get(END_POINT.FUND_DETAIL, id).then((res) => res);
}

export { fundList, fundDetail };
