/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
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
import CalculateFund from '@components/calculate-fund-detail';
import Card from '@components/card';
// import Card from '@components/card';
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
						<div className="col-lg-12 d-flex justify-content-center">
							<ul className="pagination pagination-primary mt-4">
								<li className="page-item ms-auto">
									<a
										className="page-link"
										href="javascript:;"
										aria-label="Previous"
									>
										<span aria-hidden="true">
											<i
												className="fa fa-angle-double-left"
												aria-hidden="true"
											/>
										</span>
									</a>
								</li>
								<li className="page-item active">
									<a className="page-link" href="javascript:;">
										1
									</a>
								</li>
								<li className="page-item">
									<a className="page-link" href="javascript:;">
										2
									</a>
								</li>
								<li className="page-item">
									<a className="page-link" href="javascript:;">
										3
									</a>
								</li>
								<li className="page-item">
									<a className="page-link" href="javascript:;">
										4
									</a>
								</li>
								<li className="page-item">
									<a className="page-link" href="javascript:;">
										5
									</a>
								</li>
								<li className="page-item">
									<a
										className="page-link"
										href="javascript:;"
										aria-label="Next"
									>
										<span aria-hidden="true">
											<i
												className="fa fa-angle-double-right"
												aria-hidden="true"
											/>
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<CalculateFund />
		</Wrapper>
	);
}

export default HomeScreen;
