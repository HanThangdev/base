/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { LOGO_BUSD, LOGO_ETH, LOGO_USDC, LOGO_USDT } from '@assets';
import { FundLogo1 } from '@assets/template/img';
import { useAuth } from '@hooks';
import { shortAddress } from '@utils/string';
import { NavbarIcon, ToggleNav } from './styled';

interface IProps {
	visible: boolean;
	setVisible: (params: boolean) => void;
	logout: any;
	profile: any;
}

function SiderBar({ visible, setVisible, logout, profile }: IProps) {
	const { logoutAction } = useAuth();

	const onLogout = () => {
		logout();
		logoutAction();
		setVisible(false);
	};

	return (
		<div className="fixed-plugin w-100 h-100">
			<ToggleNav visible={visible} className="card shadow-lg">
				<div className="card-header pb-0 pt-3 bg-transparent">
					<div className="float-start d-flex align-items-center">
						<div className="me-3">
							<img
								src={profile?.profileImage || FundLogo1}
								className="avatar_img"
								alt="avatar_img"
							/>
						</div>
						<div className="flex-grow-1">
							<span className="fs-6 font-weight-bolder">
								{shortAddress(profile?.walletAddress) || ''}
							</span>
							<p className="fs-8 text-secondary mt-minus1 mb-1">
								{shortAddress(profile?.walletAddress) || ''}
							</p>
						</div>
					</div>
					<div className="float-end mt-4" onClick={() => setVisible(false)}>
						<label
							className="btn btn-link text-dark p-0"
							htmlFor="expand-toggle"
						>
							<i className="fa fa-close fs-6" />
						</label>
					</div>
					{/* End Toggle Button */}
				</div>
				<hr className="horizontal dark my-1" />
				<div className="card-body pt-sm-3 pt-0">
					{/* Sidenav Type */}
					<div className="row sidenav-menu">
						<div className="col-6 pe-0">
							<NavbarIcon>
								<i className="far fa-briefcase" />
								<span>Portfolio</span>
							</NavbarIcon>
						</div>
						<div className="col-6 ps-0">
							<NavbarIcon>
								<i className="fa-light fa-chart-pie-simple" />
								<span>Share NFTs</span>
							</NavbarIcon>
						</div>
						<div className="col-6 pe-0">
							<NavbarIcon>
								<i className="fa-light fa-rotate" />
								<span>Subscription</span>
							</NavbarIcon>
						</div>
						<div className="col-6 ps-0">
							<NavbarIcon>
								<i className="fa-light fa-id-card" />
								<span>KYC</span>
							</NavbarIcon>
						</div>
						<div className="col-6 pe-0">
							<NavbarIcon>
								<i className="fa-regular fa-wallet" />
								<span>Wallet</span>
							</NavbarIcon>
						</div>
						<div className="col-6 ps-0">
							<NavbarIcon>
								<i className="fa-regular fa-sliders-up" />
								<span>Setting</span>
							</NavbarIcon>
						</div>
						<div className="col-6 pe-0">
							<NavbarIcon>
								<i className="far fa-comment-alt-dots" />
								<span>Message</span>
							</NavbarIcon>
						</div>
						<div className="col-6 ps-0" onClick={onLogout}>
							<NavbarIcon>
								<i className="far fa-sign-out-alt" />
								<span>Logout</span>
							</NavbarIcon>
						</div>
					</div>
					<hr className="horizontal dark my-3" />
					<div className="card-wrapper mt-4">
						<div className="d-flex justify-content-between">
							<div className="fs-7 font-weight-bolder">WALLET</div>
							<div>
								<span className="badge bg-gradient-secondary">Ethereum</span>
							</div>
						</div>
						<hr className="horizontal dark my-3 d-xl-block d-none" />
						<div className="d-flex align-items-center">
							<div className="me-3">
								<img
									src={LOGO_USDT}
									style={{ width: '32px' }}
									alt="avatar_img"
								/>
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
								<img
									src={LOGO_USDC}
									style={{ width: '32px' }}
									alt="avatar_img"
								/>
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
								<img
									src={LOGO_BUSD}
									style={{ width: '32px' }}
									alt="avatar_img"
								/>
							</div>
							<div className="flex-grow-1">
								<span className="fs-7 font-weight-bolder">BUSD</span>
								<p className="fs-8 text-secondary mt-minus1 mb-1">
									Binance USD
								</p>
							</div>
							<div className="text-end">
								<span className="fs-7 font-weight-bolder">0</span>
								<p className="fs-8 text-secondary mt-minus1 mb-1">$0</p>
							</div>
						</div>
						<div className="d-flex align-items-center my-2">
							<div className="me-3">
								<img
									src={LOGO_ETH}
									style={{ width: '32px' }}
									alt="avatar_img"
								/>
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
						<a className="btn bg-gradient-info w-100 mb-0 mt-3" href="/">
							Add Funds
						</a>
					</div>
				</div>
			</ToggleNav>
		</div>
	);
}

export default SiderBar;
