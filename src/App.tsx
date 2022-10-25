/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAuth } from '@hooks';
import { Loading } from '@components/common';
import { useEffect, useState } from 'react';
import { Web3AuthProvider } from '@services/web3auth';
import { WEB3AUTH_NETWORK_TYPE } from '@config/web3AuthNetwork';
import { CHAIN_CONFIG_TYPE } from '@config/chainConfig';
import Approutes from './Routes';

function App() {
	const { isLoading, loadProfileAction } = useAuth();
	const [web3AuthNetwork, setWeb3AuthNetwork] = useState<WEB3AUTH_NETWORK_TYPE>("mainnet");
  const [chain, setChain] = useState<CHAIN_CONFIG_TYPE>("mainnet");

	useEffect(() => {
		loadProfileAction();
	}, []);

	return isLoading ? <Loading /> : <Web3AuthProvider chain={chain} web3AuthNetwork={web3AuthNetwork}><Approutes /></Web3AuthProvider>;
}

export default App;
