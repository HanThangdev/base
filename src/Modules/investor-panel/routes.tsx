import { Switch, Route } from 'react-router-dom';

import { CustomRoute } from '@components';
import NotFoundScreen from '@modules/other/404';

import InvestorPanelLayout from '@layouts/investor-panel';
import Wallet from '@modules/investor-panel/wallet';
import Subscription from '@modules/investor-panel/subscription';
import Portfolio from '@modules/investor-panel/portfolio';
import AccountSecurity from '@modules/investor-panel/account-security';
import Referral from '@modules/investor-panel/referral';
import Setting from '@modules/investor-panel/setting';

export const navigator = {
	MAIN: '/investor_panel',
	WALLET: '/investor_panel/wallet',
	SUBSCRIPTION: '/investor_panel/subscription',
	PORTFOLIO: '/investor_panel/portfolio',
	ACCOUNT_SECURITY: '/investor_panel/account_security',
	REFERRAL: '/investor_panel/referral',
	SETTING: '/investor_panel/setting',
};

export const ROUTES = [
	{
		path: navigator.WALLET,
		component: Wallet,
		layout: InvestorPanelLayout,
		exact: true,
	},
	{
		path: navigator.SUBSCRIPTION,
		component: Subscription,
		layout: InvestorPanelLayout,
		exact: true,
	},
	{
		path: navigator.PORTFOLIO,
		component: Portfolio,
		layout: InvestorPanelLayout,
		exact: true,
	},
	{
		path: navigator.ACCOUNT_SECURITY,
		component: AccountSecurity,
		layout: InvestorPanelLayout,
		exact: true,
	},
	{
		path: navigator.REFERRAL,
		component: Referral,
		layout: InvestorPanelLayout,
		exact: true,
	},
	{
		path: navigator.SETTING,
		component: Setting,
		layout: InvestorPanelLayout,
		exact: true,
	},
];

export default function InvestorPanelRoutes() {
	return (
		<Switch>
			{ROUTES.map((routeConfig) => (
				<CustomRoute key={routeConfig.path} {...routeConfig} />
			))}
			<Route path="*" component={NotFoundScreen} />
		</Switch>
	);
}
