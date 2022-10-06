import { USER_ROLE } from '@modules/auth/constant';
import HomeLayout from '@layouts/home';

import HomeScreen from '@modules/home';
import { navigator as courseNavigator } from '@modules/course/routes';
import { navigator as authNavigator } from '@modules/auth/routes';

const navigator = {
	HOME: '/',

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
];

export default navigator;
