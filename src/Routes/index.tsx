/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { lazy, Suspense, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { CustomRoute } from '@components';
import { Loading } from '@components/common';

import { Web3AuthProvider } from '@hooks/useWeb3auth';
import NotFoundScreen from '@modules/other/404';
import { WEB3AUTH_NETWORK_TYPE } from '@constants/web3auth';
import { CHAIN_CONFIG_TYPE } from '@config/chainConfig';
import { ROUTES } from './navigation';

const AuthRoutes = lazy(() => import('@modules/auth/routes'));
const CourseRoutes = lazy(() => import('@modules/course/routes'));

export default function AppRoutes() {

	const [web3AuthNetwork, setWeb3AuthNetwork] = useState<WEB3AUTH_NETWORK_TYPE>("mainnet");
  const [chain, setChain] = useState<CHAIN_CONFIG_TYPE>("mainnet");
	
	return (
		<Suspense fallback={<Loading />}>
			 <Web3AuthProvider chain={chain} web3AuthNetwork={web3AuthNetwork}>
				<Switch>
					{ROUTES.map((routeConfig) => (
						<CustomRoute key={routeConfig.path} {...routeConfig} />
					))}
					<Route path="/auth" component={AuthRoutes} />
					<Route path="/course" component={CourseRoutes} />
					<Route path="*" component={NotFoundScreen} />
				</Switch>
				</Web3AuthProvider>
		</Suspense>
	);
}
