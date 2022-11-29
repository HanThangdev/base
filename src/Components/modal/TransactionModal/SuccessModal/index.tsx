import React from 'react';
import { shortAddress } from '@utils/string';
import { Modal } from 'reactstrap';
import styled from 'styled-components';
// import { useTranslation } from 'react-i18next';

const ModalWrapper = styled(Modal)``;

function SuccessModal({ visible, setVisible, tx }: any) {
  const {transactionHash} = tx
	const toggle = () => setVisible({...visible,success: !visible.success});

	return (
		<ModalWrapper isOpen={visible.success} toggle={toggle} className="modal-400 modal-dialog-centered">
			<div className="modal-header border-0">
				<div className="text-center mt-3">
					<h4 className="text-success font-weight-bolder fs-3">Success</h4>
				</div>
			</div>
			<div className="modal-body text-center pb-5">
				<div className="d-flex justify-content-center">
					<i className="far fa-check-circle fs-1 text-success" />
				</div>
				<p className="text-center mt-3 fs-6 text-success font-weight-bolder">
					Payment Confirmed!!
				</p>
				<a
					href={`https://goerli.etherscan.io/tx/${transactionHash}`}
					className="btn btn-default btn-sm my-3 px-5"
				>
					{shortAddress(transactionHash) || ''}
					<i className="fas fa-external-link-alt ps-2" aria-hidden="true" />
				</a>
			</div>
			<div className="modal-footer mx-4 mb-3 d-flex justify-content-center">
				<button
					type="button"
					className="btn bg-gradient-success my-3 px-5"
					data-bs-dismiss="modal"
				>
					Portfolio
				</button>
			</div>
		</ModalWrapper>
	);
}

export default SuccessModal;
