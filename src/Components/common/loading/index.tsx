import styled from 'styled-components';
import { Spin } from 'antd';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

function Loading() {
	return (
		<Wrapper>
			<Spin size="large" />
		</Wrapper>
	);
}

export default Loading;
