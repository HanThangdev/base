import { useHistory } from 'react-router-dom';

export default function useNavigate() {
	const history = useHistory();
	return history.push;
}
