/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import {
	// FundLogo1,
	// FundLogo2,
	FundLogo3,
	FundLogo4,
	FundLogo5,
	FundLogo6,
	// Diccussion,
	// WavesWhite,
} from '@assets/template/img';
import { useNavigate } from '@hooks';
// import { useTranslation } from 'react-i18next';
import navigator from '@routes/navigation';
import CalculateFund from '@components/calculateFund';
import Card from '@components/card';
import Diccussion from '@components/diccussion';
import SideCard from '@components/sideCard';
import { Link, Wrapper } from './styled';
import { listNav } from './constant';

function FundDetail() {
	const navigate = useNavigate();
	// const { t } = useTranslation();
	const [itemActive, setItemActive] = useState(['pitch']);
	const LIST_CARD = [
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
	];
	return (
		<Wrapper>
			{/* Detail of Fund */}
			<section className="pb-7">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 ps-50px">
							<div className="col-lg-12 text-end mt-5">
								<span className="badge bg-gradient-warning">Featured</span>
								<span className="badge bg-gradient-info ms-1">NEW</span>
							</div>
							<div className="d-flex align-items-center position-relative">
								<div className="flex-shrink-0">
									<img
										className="fund_detail_logo"
										src={FundLogo5}
										alt="Dubai Real Estate Investment Fund"
									/>
								</div>
								<div className="flex-grow-1 ms-2">
									<h2 className="fs-3 text-dark fund_detail_title">
										Dubai Real Estate Investment Fund
									</h2>
									<p className="mb-0 text-dark">
										Using AI and neural networks to make video game and film
										NPCs more lifelike
									</p>
									<span className="fs-8 font-weight-bold">
										<i className="ni ni-calendar-grid-58 fs-7 me-1" />
										Started January, 2023
									</span>
								</div>
							</div>
							<div className="col-lg-12 text-end">
								<span className="badge badge-secondary text-dark font-weight-normal">
									Web3
								</span>
								<span className="badge badge-secondary text-dark font-weight-normal">
									Seed
								</span>
								<span className="badge badge-secondary text-dark font-weight-normal">
									NFT
								</span>
								<span className="badge badge-info text-dark font-weight-normal">
									VETERAN FOUNDERS
								</span>
							</div>
							<div className="col-lg-12 my-5">
								<img
									className="w-100"
									src={FundLogo6}
									alt="Dubai Real Estate Investment Fund"
								/>
							</div>
							<section className="position-sticky top-100px z-index-999 tab-menu">
								<div className="container px-0">
									<div className="row">
										<div className="col-12 mx-auto mb-5">
											<div className="nav-wrapper position-relative end-0">
												<ul
													className="nav nav-pills nav-fill p-1 "
													role="tablist"
												>
													{listNav.map((item) => {
														const { title, key, ref, totalNoti } = item;
														return (
															<li
																className="nav-item moving-tab"
																key={key}
																onClick={() => setItemActive([key])}
															>
																<Link
																	className={`nav-link fs-7 mb-0 px-0 py-2 ${
																		itemActive.includes(key) ? 'active now' : ''
																	}`}
																	href={ref}
																>
																	{title}
																	{!!totalNoti && (
																		<span className="badge bg-gradient-secondary font-weight-normal ms-2">
																			{totalNoti}
																		</span>
																	)}
																</Link>
															</li>
														);
													})}
												</ul>
											</div>
										</div>
									</div>
								</div>
							</section>
							<section>
								<div id="pitch" className="pt-6 mb-6">
									<h3>Highlights</h3>
									<hr className="horizontal dark-left" />
									<ul className="highlights ms-3">
										<li>
											All-in-one platform that guides{' '}
											<span className="text-gradient text-primary">
												first time home buyers through
											</span>{' '}
											the process
										</li>
										<li>
											Focused exclusively on{' '}
											<span className="text-gradient text-primary">
												single-family beach vacation rentals in NC
											</span>
										</li>
										<li>
											NC home values have appreciated by{' '}
											<span className="text-gradient text-primary">
												22.7% in the past year
											</span>{' '}
											(Zillow)
										</li>
										<li>
											Professional team with years of experience investing in
											the NC market
										</li>
										<li>
											<span className="text-gradient text-primary">
												Gain exposure to an asset class
											</span>{' '}
											that's difficult to participate in
										</li>
									</ul>
									<h3 className="pt-6 mb-6">Opportunity</h3>
									<hr className="horizontal dark-left" />
									<p>
										Start investing in prime Dubai rental properties from as low
										as AED 500 with MENA's first and largest real estate
										crowdfunding platform. Knowledge base, project management,
										note taking and more. Notion helps your teams to centralize
										their work, collaborate easily, ensure the appropriate
										follow-up on projects and enhance overall productivity and
										efficiency.
									</p>
									<h3 className="pt-6 mb-6">Team</h3>
									<hr className="horizontal dark-left" />
									<p>
										Start investing in prime Dubai rental properties from as low
										as AED 500 with MENA's first and largest real estate
										crowdfunding platform. Knowledge base, project management,
										note taking and more. Notion helps your teams to centralize
										their work, collaborate easily, ensure the appropriate
										follow-up on projects and enhance overall productivity and
										efficiency.
									</p>
									<h3 className="pt-6 mb-6">About us</h3>
									<hr className="horizontal dark-left" />
									<p>
										Start investing in prime Dubai rental properties from as low
										as AED 500 with MENA's first and largest real estate
										crowdfunding platform. Knowledge base, project management,
										note taking and more. Notion helps your teams to centralize
										their work, collaborate easily, ensure the appropriate
										follow-up on projects and enhance overall productivity and
										efficiency.
									</p>
								</div>
								<div id="details" className="pt-6 mb-6">
									<h3>Fund Detail</h3>
									<hr className="horizontal dark-left" />
									<div className="row">
										<div className="col-6">
											<span className="fs-7">Subscription Start Date</span>
											<p className="fs-5 font-weight-bolder mt-minus1 mb-3">
												Q4 ) October 1, 2022
											</p>
										</div>
										<div className="col-6">
											<span className="fs-7">Fund Size</span>
											<p className="fs-5 font-weight-bolder mt-minus1 mb-3">
												$1.2M per quarter
											</p>
										</div>
										<div className="col-6">
											<span className="fs-7">Min Quarterly Investment</span>
											<p className="fs-5 font-weight-bolder mt-minus1 mb-3">
												$1,000
											</p>
										</div>
										<div className="col-6">
											<span className="fs-7">Min Subscription Period</span>
											<p className="fs-5 font-weight-bolder mt-minus1 mb-3">
												4 Quarters
											</p>
										</div>
										<div className="col-6">
											<span className="fs-7">Carry</span>
											<p className="fs-5 font-weight-bolder mt-minus1 mb-3">
												20 to 25%
											</p>
										</div>
										<div className="col-6">
											<span className="fs-7">Redemption period</span>
											<p className="fs-5 font-weight-bolder mt-minus1 mb-3">
												5 years
											</p>
										</div>
										<div className="col-6">
											<span className="fs-7">Management Fee</span>
											<p className="fs-5 font-weight-bolder mt-minus1 mb-3">
												2% per year
											</p>
										</div>
										<div className="col-6">
											<span className="fs-7">Platform Fee</span>
											<p className="fs-5 font-weight-bolder mt-minus1 mb-3">
												0.15% of contributed capital
											</p>
										</div>
									</div>
								</div>
								<div id="diccussion" className="pt-6 mb-6">
									<h3>Diccussion</h3>
									<hr className="horizontal dark-left" />
									<p className="fs-6 font-weight-bolder">
										We have prepared an FAQ.{' '}
										<span
											onClick={() => navigate(navigator.FAQ)}
											className="font-weight-bolder text-primary icon-move-right"
										>
											Please use FAQ before asking the team
											<i
												className="fas fa-arrow-right text-sm ms-1"
												aria-hidden="true"
											/>
										</span>
									</p>
									<p className="fs-6">
										Ask questions and share feedback with the{' '}
										<span className="font-weight-bold">
											Dubai Real Estate Investment Fund
										</span>{' '}
										below.
									</p>
									<div className="img-fluid">
										<Diccussion idFund="id1" />
									</div>
								</div>
								<div id="updates" className="pt-6 mb-6">
									<h3>Updates</h3>
									<hr className="horizontal dark-left" />
									<a href="/" className="icon-move-right">
										<div className="card shadow-md justify-content-center mb-4 ps-4">
											<div className="card-body p-3">
												<h6 className="mb-0">May 2022 Revenue Update</h6>
												<img
													src={FundLogo5}
													alt="Dubai Real Estate Investment Fund"
												/>
												<span className="mb-0 text-body">Mar 08, 2022</span>
											</div>
											<div className="position-absolute end-0 me-5 ">
												<i
													className="fas fa-angle-right fs-5"
													aria-hidden="true"
												/>
											</div>
										</div>
									</a>
									<a href="/" className="icon-move-right">
										<div className="card shadow-md justify-content-center mb-4 ps-4">
											<div className="card-body p-3">
												<h6 className="mb-0">
													Over $1M Quarterly subscription💥
												</h6>
												<img
													src={FundLogo5}
													alt="Dubai Real Estate Investment Fund"
												/>
												<span className="mb-0 text-body">Mar 08, 2022</span>
											</div>
											<div className="position-absolute end-0 me-5 ">
												<i
													className="fas fa-angle-right fs-5"
													aria-hidden="true"
												/>
											</div>
										</div>
									</a>
									<a href="/" className="icon-move-right">
										<div className="card shadow-md justify-content-center mb-4 ps-4">
											<div className="card-body p-3">
												<h6 className="mb-0">Launched🚀</h6>
												<img
													src={FundLogo5}
													alt="Dubai Real Estate Investment Fund"
												/>
												<span className="mb-0 text-body">Mar 08, 2022</span>
											</div>
											<div className="position-absolute end-0 me-5 ">
												<i
													className="fas fa-angle-right fs-5"
													aria-hidden="true"
												/>
											</div>
										</div>
									</a>
								</div>
								<div id="review" className="pt-6 mb-6">
									<h3>Review</h3>
									<hr className="horizontal dark-left" />
									<h5>
										Hear from some of the 611 people reserved or invested in
										Dubai Real Estate Investment Fund
									</h5>
									<blockquote className="blockquote ps-3 mb-6">
										<p className="mt-4">
											Wealth creation is an evolutionarily recent positive-sum
											game. Status is an old zero-sum game. Those attacking
											wealth creation are often just seeking status.
										</p>
										<div className="author align-items-center">
											<div className="avatar">
												<img src={FundLogo4} alt=""/>
											</div>
											<div className="name ps-2">
												<span>Ivana Gerge</span>
												<div className="mt-0 mt-0">
													<span className="fs-8 me-2">30 days ago</span>
													<span className="badge badge-secondary text-dark font-weight-normal fs-8">
														Investor
													</span>
												</div>
											</div>
										</div>
									</blockquote>
									<blockquote className="blockquote ps-3 mb-6">
										<p className="mt-4">
											Wealth creation is an evolutionarily recent positive-sum
											game. Status is an old zero-sum game. Those attacking
											wealth creation are often just seeking status.
										</p>
										<div className="author align-items-center">
											<div className="avatar">
												<img src={FundLogo4} alt=""/>
											</div>
											<div className="name ps-2">
												<span>Ivana Gerge</span>
												<div className="mt-0 mt-0">
													<span className="fs-8 me-2">30 days ago</span>
													<span className="badge badge-secondary text-dark font-weight-normal fs-8">
														Investor
													</span>
												</div>
											</div>
										</div>
									</blockquote>
									<blockquote className="blockquote ps-3 mb-6">
										<p className="mt-4">
											Wealth creation is an evolutionarily recent positive-sum
											game. Status is an old zero-sum game. Those attacking
											wealth creation are often just seeking status.
										</p>
										<div className="author align-items-center">
											<div className="avatar">
												<img src={FundLogo4} alt=""/>
											</div>
											<div className="name ps-2">
												<span>Ivana Gerge</span>
												<div className="mt-0 mt-0">
													<span className="fs-8 me-2">30 days ago</span>
												</div>
											</div>
										</div>
									</blockquote>
								</div>
							</section>
						</div>
						<div className="col-lg-4 ps-50px mt-minus50px">
							<SideCard />
						</div>
					</div>
				</div>
			</section>

			{/* List of Crypto Rolling Funds */}
			<section className="pt-7 pb-0 mb-7">
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
					</div>
				</div>
			</section>
			<CalculateFund />
		</Wrapper>
	);
}

export default FundDetail;
