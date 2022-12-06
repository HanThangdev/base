/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import { useLoadFund, useNavigate } from '@hooks';
// import { useTranslation } from 'react-i18next';
import CalculateFund from '@modules/home/calculateFund';
import Pagination from '@components/pagination';
import Card from '@components/card';
import { isEmpty } from 'lodash';
import { Wrapper } from './styled';

function HomeScreen() {
	const navigate = useNavigate();
	const { listFund, paginationFund } = useLoadFund();

	return (
		<Wrapper>
			<section className="pt-7 pb-0">
				<div className="container">
					{!isEmpty(listFund) && (
						<div className="row">
							{listFund.map((it: any) => (
								<Card dataCard={it} key={it.id} navigate={navigate} />
							))}
							<Pagination
								data={paginationFund}
								buttonConst={3}
								contentPerPage={5}
								siblingCount={1}
							/>
						</div>
					)}
				</div>
			</section>
			<CalculateFund/>
		</Wrapper>
	);
}

export default HomeScreen;
