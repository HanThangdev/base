/* eslint-disable react/static-property-placement */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ReactReduxContext } from 'react-redux';

import getInjectors from './reducerInjectors';

/**
 * Dynamically injects a reducer
 *
 * @param {string} key A key of the reducer
 * @param {function} reducer A reducer that will be injected
 *
 */
export default ({ key, reducer }: any) =>
	(WrappedComponent: any) => {
		class ReducerInjector extends React.Component {
			static WrappedComponent = WrappedComponent;

			static contextType = ReactReduxContext;

			static displayName = `withReducer(${
				WrappedComponent.displayName || WrappedComponent.name || 'Component'
			})`;

			constructor(props: any, context: any) {
				super(props, context);

				getInjectors(context.store).injectReducer(key, reducer);
			}

			render() {
				return <WrappedComponent {...this.props} />;
			}
		}

		return hoistNonReactStatics(ReducerInjector, WrappedComponent);
	};

const useInjectReducer = ({ key, reducer }: any) => {
	const context = React.useContext(ReactReduxContext);
	React.useEffect(() => {
		getInjectors(context.store).injectReducer(key, reducer);
	}, [context.store, key, reducer]);
};

export { useInjectReducer };
