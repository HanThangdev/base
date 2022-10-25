import styled from 'styled-components';
import { Navbar, Footer, HeaderFaq } from '@components';

const Wrapper: any = styled.div``;

function FaqLayout({ children }: any) {
	return (
		<Wrapper className="faq">
			<Navbar />
			<HeaderFaq/>
			{children}
			<Footer />
		</Wrapper>
	);
}

export default FaqLayout;