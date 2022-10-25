import styled from 'styled-components';
import { Navbar, Footer, HeaderFundDetail } from '@components';

const Wrapper: any = styled.div``;

function FundDetailLayout({ children }: any) {
	return (
		<Wrapper className="fund_detail">
			<Navbar />
			<HeaderFundDetail />
			{children}
			<Footer />
		</Wrapper>
	);
}

export default FundDetailLayout;