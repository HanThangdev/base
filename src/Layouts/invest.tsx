import styled from 'styled-components';
import { Navbar, Footer } from '@components';
import { HeaderInvest } from '@components/layout/header';

const Wrapper: any = styled.div``;

function FundDetailLayout({ children }: any) {
	return (
		<Wrapper className="fund_invest">
			<Navbar />
			<HeaderInvest />
			{children}
			<Footer />
		</Wrapper>
	);
}

export default FundDetailLayout;