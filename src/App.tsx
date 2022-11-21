/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAuth } from '@hooks';
import { Web3authNetWorkType } from '@constants';
import { CHAIN_CONFIG_TYPE } from '@config/chainConfig';
import { Web3AuthProvider } from '@hooks/useWeb3auth';
import { Loading } from '@components/common';
import { useEffect, useState } from 'react';
import Approutes from './Routes';

function App() {
	const [web3AuthNetwork, setWeb3AuthNetwork] =
		useState<Web3authNetWorkType>('testnet');
	const [chain, setChain] = useState<CHAIN_CONFIG_TYPE>('ETH_testnet');

	return (
		<Web3AuthProvider chain={chain} web3AuthNetwork={web3AuthNetwork}>
			<Approutes />
		</Web3AuthProvider>
	);
}

export default App;
