/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from '@hooks';
import { Loading } from '@components/common';
import { useEffect } from 'react';
import Approutes from './Routes';

function App() {
	const { isLoading, loadProfileAction } = useAuth();

	useEffect(() => {
		loadProfileAction();
	}, []);

	return isLoading ? <Loading /> : <Approutes />;
}

export default App;
