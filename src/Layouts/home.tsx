/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import { Navbar, Footer, } from '@components';
import { HeaderHome } from '@components/layout/header';

const Wrapper: any = styled.div``;

function HomeLayout({ children }: any) {

	return (
		<Wrapper className="fund_list">
			<Navbar />
			<HeaderHome />
			{children}
			<Footer />
		</Wrapper>
	);
}

export default HomeLayout;
