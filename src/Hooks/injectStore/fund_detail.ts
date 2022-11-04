/* eslint-disable no-restricted-globals */
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from '@config/store';
import saga from '@modules/fund-detail/store/saga';
import reducer from '@modules/fund-detail/store/reducer';
import { FundDetailState, FundDetailPayload } from '@type/Store/fund';
import { makeSelectFundDetail } from '@modules/fund-detail/store/selectors';
import { loadFundDetail } from '@modules/fund-detail/store/actions';

export const useLoadFundDetail = () => {
	useInjectReducer({ key: 'fund_detail', reducer });
	useInjectSaga({ key: 'fund_detail', saga });
	const dispatch = useDispatch();

	const { fund }: FundDetailState = useSelector(makeSelectFundDetail());

	const getFundDetailAction = (payload: FundDetailPayload) =>
		dispatch(loadFundDetail(payload));

	return {
		fund,
		getFundDetailAction,
	};
};
