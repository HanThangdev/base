/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';
import { Navbar, Footer, Header, } from '@components';

const Wrapper: any = styled.div``;

function HomeLayout({ children }: any) {

	return (
		<Wrapper className="fundlist">
			<Navbar />
			<Header />
			{children}
			<Footer />
		</Wrapper>
	);
}

export default HomeLayout;
