/* eslint-disable no-restricted-globals */
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectFaq } from '@modules/faq/store/selectors';
import { sendContact, toggleTabFaq } from '@modules/faq/store/actions';
import { useInjectReducer, useInjectSaga } from '@config/store';
import reducer from '@modules/faq/store/reducer';
import saga from '@modules/faq/store/saga';



export const useFaq = () => {
	useInjectReducer({ key: 'faq', reducer });
	useInjectSaga({ key: 'faq', saga });
	const dispatch = useDispatch();

	const { typeTab }: any = useSelector(makeSelectFaq());

	const toggleTabFaqAction = (isInvestorFaqTab: boolean) => {
		dispatch(toggleTabFaq(isInvestorFaqTab));
	};

	const sendContactAction = (payload?: any) =>
		dispatch(sendContact(payload));

	return {
		typeTab,
		toggleTabFaqAction,
		sendContactAction,
	};
};
