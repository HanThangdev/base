/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';
import {
	DEFAULT_AVATAR,
	LOGO_ETH,
	LOGO_PAYMENT,
	LOGO_USDC,
	LOGO_USDT,
} from '@assets';
import { useAuth } from '@hooks';
import { useWeb3Auth } from '@hooks/useWeb3auth';
import { shortAddress } from '@utils/string';
import { NavbarIcon, ToggleNav } from './styled';

interface IProps {
	visible: boolean;
	setVisible: Dispatch<SetStateAction<boolean>>;
}

function SiderBar({ visible, setVisible }: IProps) {
	const history = useHistory();

	const { profile, logoutAction, urlFormKyc } = useAuth();
	const { logout } = useWeb3Auth();

	const onLogout = () => {
		logout();
		logoutAction();
		setVisible(false);
	};

	const onOpenFormKyc = () => {
		window.open(urlFormKyc, '_blank');
	};

	return (
		<div className="fixed-plugin w-100 h-100">
			<ToggleNav visible={visible} className="card shadow-lg">
				<div className="card-header pb-0 pt-2 mt-3">
					<div className="w-100 float-start d-flex align-items-center">
						<div className="me-3">
							<img
								alt=""
								src={profile?.profileImage || DEFAULT_AVATAR}
								className="avatar_img"
							/>
						</div>
						<div className="w-100">
							<span className="fs-6 font-weight-bolder">
								{shortAddress(profile?.walletAddress) || ''}
							</span>
							<p className="fs-8 text-secondary mt-minus1 mb-1">
								{shortAddress(profile?.walletAddress) || ''}
							</p>
						</div>
						<div className="flex-grow-1 icon_link" onClick={onLogout}>
							<NavbarIcon>
								<i className="far fa-sign-out-alt" />
							</NavbarIcon>
						</div>
						<div className="icon_link ms-2" onClick={() => setVisible(false)}>
							<label className="btn btn-link m-0" htmlFor="expand-toggle">
								<i className="fa fa-close fs-6 text-secondary" />
							</label>
						</div>
					</div>
				</div>
				<div className="card-body pt-sm-3 pt-0">
					<hr className="horizontal dark mt-1 mb-2" />
					{/* Quickk menu */}
					<div className="row sidenav-menu">
						<div className="col-6 pe-0">
							<NavbarIcon>
								<i className="far fa-briefcase" />
								<span>Portfolio</span>
							</NavbarIcon>
						</div>
						<div className="col-6 ps-0">
							<span
								onClick={() => history.push('/investor_panel/account_security')}
							>
								<i className="fa-light fa-id-card" />
								<span>Account</span>
							</span>
						</div>
						<div className="col-6 pe-0">
							<span onClick={onOpenFormKyc}>
								<i className="fa-light fa-id-card" />
								<span>KYC Account</span>
							</span>
						</div>
						<div className="col-6 ps-0">
							<a href="/">
								<i className="fa-light fa-chart-pie-simple" />
								<span>Share NFTs</span>
							</a>
						</div>
						<div className="col-6 pe-0">
							<a href="/">
								<i className="fa-regular fa-shield-check" />
								<span>Security</span>
							</a>
						</div>
						<div className="col-6 ps-0">
							<span onClick={() => history.push('/investor_panel/referral')}>
								<i className="far fa-users" />
								<span>Referral</span>
							</span>
						</div>
						<div className="col-6 pe-0">
							<a href="/">
								<i className="fa-regular fa-sliders-up" />
								<span>Setting</span>
							</a>
						</div>
						<div className="col-6 ps-0">
							<a href="/">
								<i className="far fa-star" />
								<span>Add Review</span>
							</a>
						</div>
						<div className="col-6 pe-0">
							<a href="./faq.html">
								<i className="far fa-question-circle" />
								<span>FAQ</span>
							</a>
						</div>
					</div>
					{/* Subscription */}
					<div className="card-wrapper mt-3 shadow-sm">
						<div className="d-flex justify-content-between">
							<div className="fs-7 font-weight-bolder">
								<i className="fa-light fa-rotate fs-5 me-2 font-weight-bold" />
								Subscription
							</div>
							<div>
								<button
									type="button"
									className="btn bg-gradient-primary btn-sm mb-0"
								>
									Manage
								</button>
							</div>
						</div>
						<hr className="horizontal dark my-3 d-xl-block d-none" />
						<div className="d-flex align-items-center my-2">
							<div className="me-3">
								<img alt="" src={LOGO_USDC} style={{ width: '32px' }} />
							</div>
							<div className="flex-grow-1">
								<span className="fs-7 font-weight-bolder">USDC</span>
								<p className="fs-8 text-secondary mt-minus1 mb-1">USDC Coin</p>
							</div>
							<div className="text-end">
								<span className="fs-7 font-weight-bolder">500.00</span>
								<p className="fs-8 text-secondary mt-minus1 mb-1">$503.25</p>
							</div>
						</div>
						<div className="text-end">
							<span className="fs-7 font-weight-bolder text-gradient text-primary">
								January 30th, 2020, 22:00UTC
							</span>
						</div>
					</div>
					{/* Wallet */}
					<div className="card-wrapper mt-4 shadow-sm">
						<div className="d-flex justify-content-between">
							<div className="fs-7 font-weight-bolder">
								<i className="fa-regular fa-wallet fs-5 me-2 font-weight-600" />
								Wallet
							</div>
							<div>
								<a className="text-gray-600 hover_primary" href="/">
									<span className="fs-6 font-weight-bolder">$ 4250.25</span>
									<i className="fas fa-external-link-alt ms-2 fs-8" />
								</a>
							</div>
						</div>
						<hr className="horizontal dark my-3 d-xl-block d-none" />
						<div className="d-flex align-items-center">
							<div className="me-3">
								<img alt="" src={LOGO_USDT} style={{ width: '32px' }} />
							</div>
							<div className="flex-grow-1">
								<span className="fs-7 font-weight-bolder">USDT</span>
								<p className="fs-8 text-secondary mt-minus1 mb-1">Tether</p>
							</div>
							<div className="text-end">
								<span className="fs-7 font-weight-bolder">1,000000.00</span>
								<p className="fs-8 text-secondary mt-minus1 mb-1">$1,003.25</p>
							</div>
						</div>
						<div className="d-flex align-items-center my-2">
							<div className="me-3">
								<img alt="" src={LOGO_USDC} style={{ width: '32px' }} />
							</div>
							<div className="flex-grow-1">
								<span className="fs-7 font-weight-bolder">USDC</span>
								<p className="fs-8 text-secondary mt-minus1 mb-1">USDC Coin</p>
							</div>
							<div className="text-end">
								<span className="fs-7 font-weight-bolder">1,000.00</span>
								<p className="fs-8 text-secondary mt-minus1 mb-1">$1,003.25</p>
							</div>
						</div>
						<div className="d-flex align-items-center my-2">
							<div className="me-3">
								<img alt="" src={LOGO_ETH} style={{ width: '32px' }} />
							</div>
							<div className="flex-grow-1">
								<span className="fs-7 font-weight-bolder">ETH</span>
								<p className="fs-8 text-secondary mt-minus1 mb-1">Ethereum</p>
							</div>
							<div className="text-end">
								<span className="fs-7 font-weight-bolder">2.41</span>
								<p className="fs-8 text-secondary mt-minus1 mb-1">$2,203.25</p>
							</div>
						</div>
						<a className="btn bg-gradient-info w-100 mb-2 mt-3" href="/">
							Add Funds
						</a>
						<div className="mt-2 px-2">
							<img
								alt=""
								className="w-100"
								src={LOGO_PAYMENT}
								style={{ width: '32px' }}
							/>
						</div>
					</div>
				</div>
			</ToggleNav>
		</div>
	);
}

export default SiderBar;
