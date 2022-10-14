/* eslint-disable no-restricted-globals */
import { useDispatch, useSelector } from 'react-redux';

import { makeSelectFaq } from '@modules/faq/store/selectors';
import { toggleTabFaq } from '@modules/faq/store/actions';
import { useInjectReducer } from '@config/store';
import reducer from '@modules/faq/store/reducer';


export const useFaq = () => {
	useInjectReducer({ key: 'faq', reducer });
	const dispatch = useDispatch();

	const { typeTab }: any = useSelector(makeSelectFaq());

	const toggleTabFaqAction = (isInvestorFaqTab: boolean) => {
		dispatch(toggleTabFaq(isInvestorFaqTab));
	};

	return {
		typeTab,
		toggleTabFaqAction,
	};
};
