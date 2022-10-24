/* eslint-disable jsx-a11y/label-has-associated-control */
import { useMemo } from 'react';
import styled from 'styled-components';
import { Navbar, Footer, Header, HeaderFundDetail, HeaderFaq } from '@components';
import { useLocation } from 'react-router-dom';
import { CLASS_FOR_PAGE, PATH_NAME } from './constant';

const Wrapper: any = styled.div``;

function HomeLayout({ children }: any) {
	const location = useLocation()

	const renderHeader = useMemo(() => {
		if(location.pathname === PATH_NAME.FUND_DETAIL){
			return(<HeaderFundDetail/>)
		}
		if(location.pathname === PATH_NAME.FAQ){
			return(<HeaderFaq/>)
		}
		return <Header />
	},[location.pathname])

	const classByPathName = useMemo(() => {
		if(location.pathname === PATH_NAME.FUND_DETAIL){
			return CLASS_FOR_PAGE.FUND_DETAIL
		}
		if(location.pathname === PATH_NAME.FAQ){
			return CLASS_FOR_PAGE.FAQ
		}
		return CLASS_FOR_PAGE.HOME
	},[location.pathname])


	return (
		<Wrapper className={classByPathName}>
			<Navbar />
			{renderHeader}
			{children}
			<Footer />
		</Wrapper>
	);
}

export default HomeLayout;
