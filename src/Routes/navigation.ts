import { USER_ROLE } from '@modules/auth/constant';

import HomeScreen from '@modules/home';
import FundDetail from '@modules/fund-detail';
import Faq from '@modules/faq';
import Invest from '@modules/invest';
import InvestorPanel from '@modules/investor-panel';
import { navigator as courseNavigator } from '@modules/course/routes';
import { navigator as authNavigator } from '@modules/auth/routes';
import { navigator as investorPanelNavigator } from '@modules/investor-panel/routes';
import {
	HomeLayout,
	FaqLayout,
	FundDetailLayout,
	InvestLayout,
	InvestorPanelLayout,
} from '@layouts';

const navigator = {
	HOME: '/',
	FUND_DETAIL: '/fund_detail',
	FAQ: '/faq',
	INVEST: '/invest',
	INVESTOR_PANEL: '/investor_panel',

	...courseNavigator,
	...authNavigator,
	...investorPanelNavigator,
};

export const ROUTES = [
	{
		path: navigator.HOME,
		component: HomeScreen,
		layout: HomeLayout,
		rules: [USER_ROLE.ADMIN],
		exact: true,
	},
	{
		path: `${navigator.FUND_DETAIL}/:id`,
		component: FundDetail,
		layout: FundDetailLayout,
		rules: [USER_ROLE.ADMIN],
		exact: true,
	},
	{
		path: navigator.FAQ,
		component: Faq,
		layout: FaqLayout,
		rules: [USER_ROLE.ADMIN],
		exact: true,
	},
	{
		path: navigator.INVEST,
		component: Invest,
		layout: InvestLayout,
		rules: [USER_ROLE.ADMIN],
		exact: true,
	},
	{
		path: navigator.INVESTOR_PANEL,
		component: InvestorPanel,
		layout: InvestorPanelLayout,
		rules: [USER_ROLE.ADMIN],
		exact: true,
	},
];

export default navigator;
