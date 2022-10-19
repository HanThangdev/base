/* eslint-disable no-restricted-globals */
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectFaq } from '@modules/faq/store/selectors';
import { sendContact, toggleTabFaq } from '@modules/faq/store/actions';
import { useInjectReducer, useInjectSaga } from '@config/store';
import reducer from '@modules/faq/store/reducer';
import saga from '@modules/faq/store/saga';
import { Payload } from '@type/Store';
import { FaqState } from '@type/Store/faq';



export const useFaq = () => {
	useInjectReducer({ key: 'faq', reducer });
	useInjectSaga({ key: 'faq', saga });
	const dispatch = useDispatch();

	const { typeTab }: FaqState  = useSelector(makeSelectFaq());

	const toggleTabFaqAction = (payload: Payload) => {
		dispatch(toggleTabFaq(payload?.data));
	};

	const sendContactAction = (payload?: Payload) =>
		dispatch(sendContact(payload?.data));

	return {
		typeTab,
		toggleTabFaqAction,
		sendContactAction,
	};
};
