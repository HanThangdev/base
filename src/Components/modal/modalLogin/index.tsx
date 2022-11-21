/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import { GOEMON_LOGO } from '@assets/template/img';
import { FormInput } from '@components/form';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useWeb3Auth } from '@hooks/useWeb3auth';
import { LOGIN_PROVIDER, LOGIN_VIA_EMAIL, TypeLoginProvider } from '@constants';
import * as Message from '@components/message';
import { yupResolver } from '@hookform/resolvers/yup';
import { WALLET_ADAPTERS, ADAPTER_EVENTS } from '@web3auth/base';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { validationSchema } from './schema';

interface IProps {
	visible: boolean;
	setVisible: any;
}

function ModalLogin({ visible, setVisible }: IProps) {
	const { t } = useTranslation(['error_message']);

	const form = useForm({
		resolver: yupResolver(validationSchema),
	});
	const { handleSubmit } = form;
	const { login, web3Auth } = useWeb3Auth();

	const loginSocial = async (type: TypeLoginProvider) => {
		await login(WALLET_ADAPTERS.OPENLOGIN, type);
	};

	const loginViaEmail = async (data: any) => {
		const { email } = data;

		if (web3Auth?.status !== ADAPTER_EVENTS.READY) {
			Message.error(t('error_message:CONNECTION_IS_INTERRUPTED'));
		} else {
			await login(WALLET_ADAPTERS.OPENLOGIN, LOGIN_VIA_EMAIL, email);
		}
	};

	const toggle = () => setVisible(!visible);

	return (
		<Modal
			isOpen={visible}
			toggle={toggle}
			className="modal-400 modal-dialog-centered"
		>
			<ModalHeader className="border-0 pb-0">
				<img src={GOEMON_LOGO} alt="" width={150} />
				<button
					type="button"
					className="btn-close text-dark"
					data-bs-dismiss="modal"
					aria-label="Close"
					onClick={toggle}
				>
					<i className="fas fa-times" aria-hidden="true" />
				</button>
				<div className="text-center mt-2">
					<h5 className="text-sm text-gradient text-primary">
						LOGIN / SIGN UP
					</h5>
				</div>
			</ModalHeader>
			<ModalBody>
				<div className="px-4">
					<p className="text-sm my-1">Continue with</p>
					<div className="d-flex justify-content-around">
						{Object.entries(LOGIN_PROVIDER).map(([k, v]) => (
							<button
								key={k}
								type="button"
								className="btn btn-outline-light px-3"
								onClick={() => {
									if (web3Auth?.status !== ADAPTER_EVENTS.READY) {
										Message.error(t('error_message:CONNECTION_IS_INTERRUPTED'));
									} else {
										v?.function(loginSocial);
									}
								}}
							>
								<img src={v?.logo} alt="" width={26} />
							</button>
						))}
					</div>
					<div className="my-3 position-relative text-center">
						<p className="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
							or
						</p>
					</div>
					<p className="text-sm my-1">Email</p>
					<FormProvider {...form}>
						<form className="mx-2" onSubmit={handleSubmit(loginViaEmail)}>
							<div className="mb-3">
								<FormInput
									name="email"
									className="form-control"
									placeholder="hello@exsample.com"
									aria-label="Email"
								/>
							</div>
							<div className="text-center">
								<button type="submit" className="btn bg-gradient-primary w-100">
									Continue with Email
								</button>
							</div>
						</form>
					</FormProvider>
				</div>
			</ModalBody>
			<ModalFooter className="mx-4 mb-3">
				<p className="fs-8">
					GOEMON is partnered with Web3Auth to provide you with the highest
					level of security for your GOEMON account.
				</p>
			</ModalFooter>
		</Modal>
	);
}

export default ModalLogin;
