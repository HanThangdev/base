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
import CalculateFund from '@components/calculate-fund-detail';
import Card from '@components/card';
// import Card from '@components/card';
import { Wrapper } from './styled';

function HomeScreen() {
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
			
			<div
				className="position-relative overflow-hidden"
				style={{ height: 36, marginTop: -33 }}
			>
				<div
					className="w-full absolute bottom-0 start-0 end-0"
					style={{
						transform: 'scale(2)',
						transformOrigin: 'top center',
						color: '#fff',
					}}
				>
					<svg
						viewBox="0 0 2880 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
							fill="currentColor"
						/>
					</svg>
				</div>
			</div>
			<div className="container">
				<div className="row bg-white shadow-lg mt-n6 border-radius-md pb-4 p-3 mx-sm-0 mx-1 position-relative">
					<div className="col-lg-3 mt-lg-n2 mt-2">
						<label className="">Filter by: </label>
						<select
							className="form-control"
							name="choices-button"
							id="choices-button"
						>
							<option value="allfunds" selected>
								All Funds
							</option>
							<option value="featured">Featured</option>
							<option value="notwhitelist">Not Whitelist</option>
						</select>
					</div>
					<div className="col-lg-3 mt-lg-n2 mt-2">
						<label className="">Sort by: </label>
						<select
							className="form-control"
							name="choices-remove-button"
							id="choices-remove-button"
						>
							<option value="mostfollower" selected>
								Most Follower
							</option>
							<option value="hiestfundsize">Hiest Fund size</option>
							<option value="newest">Newest</option>
							<option value="oldest">Oldest</option>
							<option value="mininvest_low">Min Invest: Low to High</option>
							<option value="mininvest_high">Min Invest: high to Low</option>
						</select>
					</div>
					<div className="col-lg-3 mt-lg-n2 mt-2">
						<label className="">Search: </label>
						<div className="input-group">
							<span className="input-group-text">
								<i className="fas fa-search" aria-hidden="true" />
							</span>
							<input
								type="text"
								className="form-control"
								inputMode="text"
								placeholder="Fund name etc..."
								// onFocus="focused(this)"
								// onfocusout="defocused(this)"
							/>
						</div>
					</div>
					<div className="col-lg-3 mt-lg-n2 mt-2">
						<label className="">&nbsp;</label>
						<button type="button" className="btn bg-gradient-dark w-100 mb-0">
							Search
						</button>
					</div>
				</div>
			</div>
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
