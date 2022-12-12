/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import useNavigate from '@hooks/useNavigate';
import { initMovingTabEffect } from '@utils/func-dom';
import { Wrapper } from './styled';

const INVESTOR_PANEL_MENU_TYPE = {
	WALLET: 'WALLET',
	SUBSCRIPTION: 'SUBSCRIPTION',
	PORTFOLIO: 'PORTFOLIO',
	ACCOUNT_SECURITY: 'ACCOUNT_SECURITY',
	REFERRAL: 'REFERRAL',
	SETTING: 'SETTING',
};

const INVESTOR_PANEL_MENU = [
	{
		name: 'Wallet',
		icon: <i className="fa-regular fa-wallet me-2 fs-6" />,
		to: '/investor_panel/wallet',
		type: INVESTOR_PANEL_MENU_TYPE.WALLET,
	},
	{
		name: 'Subscription',
		icon: <i className="fa-light fa-rotate me-2 fs-6" />,
		to: '/investor_panel/subscription',
		type: INVESTOR_PANEL_MENU_TYPE.SUBSCRIPTION,
	},
	{
		name: 'Portfolio',
		icon: <i className="far fa-briefcase me-2 fs-6" />,
		to: '/investor_panel/portfolio',
		type: INVESTOR_PANEL_MENU_TYPE.PORTFOLIO,
	},
	{
		name: 'Account & Security',
		icon: <i className="fa-light fa-id-card me-2 fs-6" />,
		to: '/investor_panel/account_security',
		type: INVESTOR_PANEL_MENU_TYPE.ACCOUNT_SECURITY,
	},
	{
		name: 'Referral',
		icon: <i className="far fa-users me-2 fs-6" />,
		to: '/investor_panel/referral',
		type: INVESTOR_PANEL_MENU_TYPE.REFERRAL,
	},
	{
		name: 'Setting',
		icon: <i className="fa-regular fa-sliders-up me-2 fs-6" />,
		to: '/investor_panel/setting',
		type: INVESTOR_PANEL_MENU_TYPE.SETTING,
	},
];

function HeaderInvestorPanel() {
	const navigate = useNavigate();

	const [isActive, setActive] = useState(
		INVESTOR_PANEL_MENU.find((item) => item.to === window.location.pathname)
			?.type || INVESTOR_PANEL_MENU_TYPE.WALLET
	);

	useEffect(() => {
		initMovingTabEffect();
	}, []);

	const onNavigate = (item: any) => {
		setActive(item.type);
		navigate(item.to);
	};

	const listNavItem = INVESTOR_PANEL_MENU.map((item) => (
		<li className="nav-item" key={item.name} onClick={() => onNavigate(item)}>
			<span
				className={classNames('nav-link fs-7 mb-0 px-0 py-2', {
					active: isActive === item.type,
				})}
				data-bs-toggle="tab"
				role="tab"
				aria-selected="true"
			>
				{item.icon}
				<span>{item.name}</span>
			</span>
		</li>
	));

	return (
		<Wrapper>
			<header>
				<div className="page-header min-vh-40 border-radius-lg">
					<div className="container-fluid">
						<div className="row">
							<div className="col-8 d-flex justify-content-center flex-column text-center position-absolute top-0 h-100">
								<div className="mx-auto text-start">
									<h1 className="text-white">Investor Panel</h1>
									<p className="text-white">
										People in this world shun people for being nice.{' '}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row bg-white shadow-blur opacity-10 mt-n6 border-radius-md pb-4 p-3 mx-sm-0 mx-1 position-relative z-index-3">
						<div className="container px-0">
							<div className="row">
								<div className="col-12 mx-auto">
									<div className="nav-wrapper position-relative end-0">
										<ul
											className="nav nav-pills nav-fill p-1 text-uppercase font-weight-bold overflow-hidden"
											role="tablist"
										>
											{listNavItem}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</Wrapper>
	);
}

export default HeaderInvestorPanel;
