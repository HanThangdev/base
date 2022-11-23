import styled from 'styled-components';
import { Navbar, Footer } from '@components';
import { HeaderInvestorPanel } from '@components/layout/header';

const Wrapper: any = styled.div`
	.page-header {
		background-image: url('/assets/img/bg_header_1920x700-6.png');
		background-position-y: 50%;
		margin: 0.5rem 1rem 1rem 1rem !important;
	}
`;

function InvestorPanelLayout({ children }: any) {
	return (
		<Wrapper className="investor_pane">
			<Navbar />
			<HeaderInvestorPanel />
			{children}
			<Footer />
		</Wrapper>
	);
}

export default InvestorPanelLayout;
