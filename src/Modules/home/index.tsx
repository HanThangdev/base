/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import {
	FundLogo1,
	FundLogo2,
	FundLogo3,
	FundLogo4,
	FundLogo5,
} from '@assets/template/img';
import { useNavigate } from '@hooks';
// import { useTranslation } from 'react-i18next';
import CalculateFund from '@components/calculateFund';
import Pagination from '@components/pagination';
import Card from '@components/card';
import { Wrapper } from './styled';

function HomeScreen() {
	const navigate = useNavigate();

	const LIST_CARD = [
		{
			avatar: FundLogo2,
			description: `Start investing in prime Dubai rental properties from as low as AED 500 with MENA&#39;s first and largest real estate crowdfunding platform.`,
			isWhiteList: true,
			followCount: 9598,
			backgroundImage: 'fund-1',
			key: 1,
		},
		{
			avatar: FundLogo5,
			description: `Trucks is the leading transportation investor in the world, with $7B in exits including Joby Aviation, NuTonomy, Bear Flag Robotics, AEye and Roadster. This is our secret opportunity fund, which invests...`,
			isWhiteList: false,
			followCount: 9598,
			backgroundImage: 'fund-2',
			key: 2,
		},
		{
			avatar: FundLogo4,
			description: `Trucks is the leading transportation investor in the world, with $7B in exits including Joby Aviation, NuTonomy, Bear Flag Robotics, AEye and Roadster. This is our secret opportunity fund, which invests...`,
			isWhiteList: false,
			followCount: 9598,
			backgroundImage: 'fund-3',
			key: 3,
		},
		{
			avatar: FundLogo3,
			description: `Trucks is the leading transportation investor in the world, with $7B in exits including Joby Aviation, NuTonomy, Bear Flag Robotics, AEye and Roadster. This is our secret opportunity fund, which invests...`,
			isWhiteList: false,
			followCount: 9598,
			backgroundImage: 'fund-4',
			key: 4,
		},
		{
			avatar: FundLogo1,
			description: `Trucks is the leading transportation investor in the world, with $7B in exits including Joby Aviation, NuTonomy, Bear Flag Robotics, AEye and Roadster. This is our secret opportunity fund, which invests...`,
			isWhiteList: false,
			followCount: 9598,
			backgroundImage: 'fund-5',
			key: 5,
		},
		{
			avatar: FundLogo1,
			description: `Trucks is the leading transportation investor in the world, with $7B in exits including Joby Aviation, NuTonomy, Bear Flag Robotics, AEye and Roadster. This is our secret opportunity fund, which invests...`,
			isWhiteList: false,
			followCount: 9598,
			backgroundImage: 'fund-5',
			key: 5,
		},
	];
	return (
		<Wrapper>
			<section className="pt-7 pb-0">
				<div className="container">
					<div className="row">
						{LIST_CARD.map((it) => (
							<Card
								avatar={it.avatar}
								description={it.description}
								isWhiteList={it.isWhiteList}
								followCount={it.followCount}
								backgroundImage={it.backgroundImage}
								key={it.key}
								navigate={navigate}
							/>
						))}
						<Pagination
							data={LIST_CARD}
							buttonConst={3}
							contentPerPage={5}
							siblingCount={1}
						/>
					</div>
				</div>
			</section>
			<CalculateFund />
		</Wrapper>
	);
}

export default HomeScreen;
