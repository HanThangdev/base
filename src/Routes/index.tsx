import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { CustomRoute } from '@components';
import { Loading } from '@components/common';
import { useAuth, useRoot } from '@hooks';
import { useWeb3Auth } from '@hooks/useWeb3auth';
import { getLocalStorage } from '@utils/storage';
import { logoutAllTabsEventListener } from '@config/broadcastChannel';
import NotFoundScreen from '@modules/other/404';
import { LOCAL_WEB3AUTH_LOGINED, StatusLogin } from '@constants';
import { ROUTES } from './navigation';

const AuthRoutes = lazy(() => import('@modules/auth/routes'));
const CourseRoutes = lazy(() => import('@modules/course/routes'));

export default function AppRoutes() {
	const { paramsToLogin } = useWeb3Auth();
	const { toggleSessionAccountAction } = useRoot();
	const { loginAction } = useAuth();
	const isLogined = getLocalStorage(LOCAL_WEB3AUTH_LOGINED);

	useEffect(() => {
		switch (isLogined) {
			case StatusLogin.LOGINED:
				if (paramsToLogin.app_pub_key && paramsToLogin.id_token) {
					loginAction(paramsToLogin);
				}
				break;
			case StatusLogin.EXPIRED:
				toggleSessionAccountAction();
				break;
			default:
				break;
		}
	}, [isLogined]);

	useEffect(() => {
		logoutAllTabsEventListener();
	}, []);

	return (
		<Suspense fallback={<Loading />}>
			<Switch>
				{ROUTES.map((routeConfig) => (
					<CustomRoute key={routeConfig.path} {...routeConfig} />
				))}
				<Route path="/auth" component={AuthRoutes} />
				<Route path="/course" component={CourseRoutes} />
				<Route path="*" component={NotFoundScreen} />
			</Switch>
		</Suspense>
	);
}
