import styled from 'styled-components';

interface Props {
	image: string;
}

export const Wrapper = styled.div``;

export const HeaderCard = styled.div<Props>`
	background-image: url(${(p) => p.image});
`;
