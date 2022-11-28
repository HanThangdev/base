import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import styled from 'styled-components';
// import Web3Provider from '@utils/web3'

import { configureStore, history } from '@config/store';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import ThemeProvider, { ThemedGlobalStyle } from './Themes';
import './types.d';
import './style.css';
// import '@config/firebase'
// const { web3 } = Web3Provider.getWeb3Instance()
// web3.currentProvider.enable()

const VerticalBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: space-between;
`;

const initialState = {};
const store = configureStore(initialState, history);
const reactDOM = ReactDOMClient.createRoot(
	document.getElementById('root') as any
);
reactDOM.render(
	process.env.NODE_ENV !== 'production' ? (
		<React.StrictMode>
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<VerticalBox>
						<ThemeProvider>
							<ThemedGlobalStyle />
							<App />
						</ThemeProvider>
					</VerticalBox>
				</ConnectedRouter>
			</Provider>
		</React.StrictMode>
	) : (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<VerticalBox>
					<ThemeProvider>
						<ThemedGlobalStyle />
						<App />
					</ThemeProvider>
				</VerticalBox>
			</ConnectedRouter>
		</Provider>
	)
);
// If you want your app to work offline and load faster, you can change
// unregister() to register-individual() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
