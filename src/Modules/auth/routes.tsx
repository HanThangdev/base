import { Switch, Route } from 'react-router-dom';

import { PublicRoute } from '@components';

import LoginScreen from '@modules/auth/login';
import NotFoundScreen from '@modules/other/404';

import AuthLayout from '@layouts/auth';

export const navigator = {
	LOGIN: '/auth',
};

export const ROUTES = [
	{
		path: navigator.LOGIN,
		component: LoginScreen,
		layout: AuthLayout,
		exact: true,
	},
];

export default function AuthRoutes() {
	return (
		<Switch>
			{ROUTES.map((routeConfig) => (
				<PublicRoute key={routeConfig.path} {...routeConfig} />
			))}
			<Route path="*" component={NotFoundScreen} />
		</Switch>
	);
}
