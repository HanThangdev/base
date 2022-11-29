import { ERC20Test } from '@constants';
import { shortAddress } from '@utils/string';
import React from 'react';
import { Modal } from 'reactstrap';
import styled from 'styled-components';
// import { useTranslation } from 'react-i18next';

const ModalWrapper = styled(Modal)``;

function ConfirmingModal({ visible }: any) {

	return (
		<ModalWrapper isOpen={visible.confirming}  className="modal-400 modal-dialog-centered">
			<div className="modal-header border-0">
				<div className="text-center mt-3">
					<h4 className="text-gradient text-primary font-weight-bolder fs-3">
						Confirming
					</h4>
				</div>
			</div>
			<div className="modal-body text-center pb-5">
				<div className="d-flex justify-content-center">
					<i className="fa-solid fa-spinner fa-spin-pulse fs-1" />
				</div>
				<p className="text-center mt-3 fs-6">
					There is nothing else you need to do.
					<br />
					Please wait until Tx is completed.
				</p>
				<a
					href={`https://goerli.etherscan.io/tx/${ERC20Test}`}
					className="btn btn-default btn-sm my-3 px-5"
				>
					{shortAddress(ERC20Test) || ''}
					<i className="fas fa-external-link-alt ps-2" aria-hidden="true" />
				</a>
			</div>
		</ModalWrapper>
	);
}

export default ConfirmingModal;
