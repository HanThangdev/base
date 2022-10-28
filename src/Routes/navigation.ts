import { USER_ROLE } from '@modules/auth/constant';
import HomeLayout from '@layouts/home';

import HomeScreen from '@modules/home';
import FundDetail from '@modules/fund-detail';
import Faq from '@modules/faq';
import Invest from '@modules/invest';
import { navigator as courseNavigator } from '@modules/course/routes';
import { navigator as authNavigator } from '@modules/auth/routes';
import { FaqLayout, FundDetailLayout, InvestLayout } from '@layouts';


const navigator = {
	HOME: '/',
	FUND_DETAIL: '/fund_detail',
	FAQ: '/faq',
	INVEST: '/invest',

	...courseNavigator,
	...authNavigator,
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
		path: navigator.FUND_DETAIL,
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
];

export default navigator;
