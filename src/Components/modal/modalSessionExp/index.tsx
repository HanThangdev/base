/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import { GOEMON_LOGO } from '@assets/template/img';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { useAuth, useRoot } from '@hooks';
import { useWeb3Auth } from '@hooks/useWeb3auth';
import { logoutChannel } from '@config/broadcastChannel';
import { LOGOUT_MESSAGE } from '@modules/auth/store/constants';
import { removeLocalStorage, STORAGE } from '@utils/storage';
import { Dispatch, SetStateAction, useEffect } from 'react';


interface IProps {
	setVisible: Dispatch<SetStateAction<boolean>>;
}

function ModalSessionExp({setVisible} : IProps) {
	const { t } = useTranslation(['error_message']);
	const { sessionAccount, toggleSessionAccountAction } = useRoot();
	const { loadProfileAction } = useAuth();
	const { logout } = useWeb3Auth();

	const onAcceptLogout = () => {
		toggleSessionAccountAction();
		logoutChannel.postMessage({ logoutMessage: LOGOUT_MESSAGE })
		removeLocalStorage(STORAGE.USER_TOKEN);
		setVisible(true)
	};

	useEffect(() => {
		if (sessionAccount) {
			logout();
			loadProfileAction({});
		}
	}, [sessionAccount]);

	return (
		<Modal isOpen={sessionAccount} className="modal-400 modal-dialog-centered">
			<ModalHeader className="border-0 pb-0">
				<img src={GOEMON_LOGO} alt="" width={150} />
			</ModalHeader>
			<ModalBody>
				<div className="px-4">
					<p className="text-sm my-1">{t('error_message:SESSION_TIME_OUT')}</p>
				</div>
			</ModalBody>
			<ModalFooter className="mx-4 mb-3">
				<button
					type="submit"
					className="btn bg-gradient-primary w-100"
					onClick={onAcceptLogout}
				>
					{t('common:login')}
				</button>
			</ModalFooter>
		</Modal>
	);
}

export default ModalSessionExp;
