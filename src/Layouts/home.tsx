import styled from 'styled-components';
import { Header, Navbar, Footer } from '@components';

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
