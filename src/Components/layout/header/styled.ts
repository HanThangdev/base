import styled from 'styled-components';

interface Props {
	image: string;
}

export const Wrapper = styled.header`
	.nav-item {
		cursor: pointer;
	}
`;

export const Link = styled.a`
	color: #344767 !important;
`;

export const BackgroundFund = styled.div<Props>`
	background-image: url(${(p) => p.image}) !important;
`;
