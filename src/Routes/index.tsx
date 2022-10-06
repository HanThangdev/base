import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { CustomRoute } from '@components';
import { Loading } from '@components/common';

import NotFoundScreen from '@modules/other/404';

import { ROUTES } from './navigation';

const AuthRoutes = lazy(() => import('@modules/auth/routes'));
const CourseRoutes = lazy(() => import('@modules/course/routes'));

export default function AppRoutes() {
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
