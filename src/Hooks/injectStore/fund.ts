/* eslint-disable no-restricted-globals */
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from '@config/store';
import saga from '@modules/home/store/saga';
import reducer from '@modules/home/store/reducer';
import { loadFundsList } from '@modules/home/store/actions';
import { FundListState, FundListPayload } from '@type/Store/fund';
import { makeSelectFundList } from '@modules/home/store/selectors';

export const useLoadFund = () => {
	useInjectReducer({ key: 'home', reducer });
	useInjectSaga({ key: 'home', saga });
	const dispatch = useDispatch();

	const { listFund, paginationFund }: FundListState = useSelector(
		makeSelectFundList()
	);

	const getFundListAction = (payload: FundListPayload) =>
		dispatch(loadFundsList(payload));

	return {
		listFund,
		paginationFund,
		getFundListAction,
	};
};
