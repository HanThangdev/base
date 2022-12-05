/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React from 'react';
import { Modal } from 'reactstrap';
import styled from 'styled-components';

const ModalWrapper = styled(Modal)`
	
`;

function ModalComponent({
	visible,
	children,
	toggle
}: any) {
	

	return (
		<ModalWrapper
			isOpen={visible}
			toggle={toggle}
			size="xl"
		>
			{children}
		</ModalWrapper>
	);
}

export default ModalComponent;
