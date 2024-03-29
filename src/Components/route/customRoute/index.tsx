/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';

import HomeLayout from '@layouts/home';

function CustomRoute({
	component: Component,
	layout: Layout = HomeLayout,
	...rest
}: any) {
	return (
		<Route
			{...rest}
			render={(props: any) => (
				<Layout>
					<Component {...props} />
				</Layout>
			)}
		/>
	);
}

export default CustomRoute;
