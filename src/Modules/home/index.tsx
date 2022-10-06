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
	WavesWhite,
} from '@assets/template/img';
import { Wrapper } from './styled';

function HomeScreen() {
	return (
		<Wrapper>
			<section className="pt-7 pb-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-sm-6 mb-4 hover-effect">
							<div className="card shadow-md mt-md-0 mt-5 funds-card">
								<div className="card-header fund-2">
									<div className="row">
										<div className="col-lg-12 text-end">
											<span className="badge bg-gradient-warning">
												Featured
											</span>
										</div>
										<img className="fund_logo" src={FundLogo2} />
									</div>
								</div>
								<div className="card-body mt-0 pt-2">
									<div className="row">
										<div className="col-lg-12 text-end mb-0">
											<button
												type="button"
												className="btn btn-twitter btn-simple text-secondary px-2"
											>
												<i className="fab fa-twitter text-lg" />
											</button>
											<button
												type="button"
												className="btn btn-linkedin btn-simple text-secondary px-2"
											>
												<i className="fab fa-linkedin text-lg" />
											</button>
											<button
												type="button"
												className="btn btn-dribbble btn-simple text-secondary px-2"
											>
												<i className="fab fa-dribbble text-lg" />
											</button>
											<button
												type="button"
												className="btn btn-follow btn-outline-secondary mt-2 ms-2"
											>
												<span>Following</span>
												<span className="badge badge-danger border-white">
													9,598
												</span>
											</button>
										</div>
										<div className="col-lg-12 mt-2">
											<h2>GOEMON Web3 Fund</h2>
											<span className="fs-8 font-weight-bold">
												<i className="ni ni-calendar-grid-58 fs-7 me-1" />
												Started December, 2022
											</span>
										</div>
										<div className="col-lg-12 fs-7 description">
											Trucks is the leading transportation investor in the
											world, with $7B in exits including Joby Aviation,
											NuTonomy, Bear Flag Robotics, AEye and Roadster. This is
											our secret opportunity fund, which invests...
										</div>
										<div className="col-lg-12 d-flex justify-content-center">
											<a
												href="./fund_detail.html"
												className="btn bg-gradient-primary w-100 my-3 active"
												role="button"
												aria-pressed="true"
											>
												Invest Now
												<span className="badge badge-primary ms-2">
													Only Whitelist
												</span>
											</a>
										</div>
									</div>
									<div className="row">
										<hr className="horizontal dark" />
										<div className="col-6">
											<span className="fs-8">Min Quarterly Investment</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												$1,000
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Min Subscription Period</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												4 Quarters
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Investors</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												356 (1,424 NFTs)
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Fund Size</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												$1.2M per quarter
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Carry</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												20-25%
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Fee</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												Mgmt 2% (+ 0.15%)
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-sm-6 mb-4 hover-effect">
							<div className="card shadow-md mt-md-0 mt-5 funds-card">
								<div className="card-header fund-3">
									<div className="row">
										<div className="col-lg-12 text-end">
											<span className="badge bg-gradient-warning">
												Featured
											</span>
											<span className="badge bg-gradient-info ms-1">NEW</span>
										</div>
										<img className="fund_logo" src={FundLogo3} />
									</div>
								</div>
								<div className="card-body mt-0 pt-2">
									<div className="row">
										<div className="col-lg-12 text-end mb-0">
											<button
												type="button"
												className="btn btn-twitter btn-simple text-secondary px-2"
											>
												<i className="fab fa-twitter text-lg" />
											</button>
											<button
												type="button"
												className="btn btn-linkedin btn-simple text-secondary px-2"
											>
												<i className="fab fa-linkedin text-lg" />
											</button>
											<button
												type="button"
												className="btn btn-dribbble btn-simple text-secondary px-2"
											>
												<i className="fab fa-dribbble text-lg" />
											</button>
											<button
												type="button"
												className="btn btn-follow btn-outline-secondary mt-2 ms-2"
											>
												<span>Following</span>
												<span className="badge badge-danger border-white">
													9,598
												</span>
											</button>
										</div>
										<div className="col-lg-12 mt-2">
											<h2>Dubai Real Estate Investment Fund</h2>
											<span className="fs-8 font-weight-bold">
												<i className="ni ni-calendar-grid-58 fs-7 me-1" />
												Started January, 2023
											</span>
										</div>
										<div className="col-lg-12 fs-7 description">
											Start investing in prime Dubai rental properties from as
											low as AED 500 with MENA's first and largest real estate
											crowdfunding platform.
										</div>
										<div className="col-lg-12 d-flex justify-content-center">
											<a
												href="./fund_detail.html"
												className="btn bg-gradient-primary w-100 my-3 active"
												role="button"
												aria-pressed="true"
											>
												Invest Now
												<span className="badge badge-primary ms-2">
													Only Whitelist
												</span>
											</a>
										</div>
									</div>
									<div className="row">
										<hr className="horizontal dark" />
										<div className="col-6">
											<span className="fs-8">Min Quarterly Investment</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												$1,000
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Min Subscription Period</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												4 Quarters
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Investors</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												356 (1,424 NFTs)
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Fund Size</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												$1.2M per quarter
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Carry</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												20-25%
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Fee</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												Mgmt 2% (+ 0.15%)
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-sm-6 mb-4 hover-effect">
							<div className="card shadow-md mt-md-0 mt-5 funds-card">
								<div className="card-header fund-1">
									<div className="row">
										<div className="col-lg-12 text-end">
											<span className="badge bg-gradient-info">NEW</span>
										</div>
										<img className="fund_logo" src={FundLogo5} />
									</div>
								</div>
								<div className="card-body mt-0 pt-2">
									<div className="row">
										<div className="col-lg-12 text-end mb-0">
											<button
												type="button"
												className="btn btn-twitter btn-simple text-secondary px-2"
											>
												<i className="fab fa-twitter text-lg" />
											</button>
											<button
												type="button"
												className="btn btn-linkedin btn-simple text-secondary px-2"
											>
												<i className="fab fa-linkedin text-lg" />
											</button>
											<button
												type="button"
												className="btn btn-dribbble btn-simple text-secondary px-2"
											>
												<i className="fab fa-dribbble text-lg" />
											</button>
											<button
												type="button"
												className="btn btn-follow bg-gradient-primary mt-2 ms-2"
											>
												<span>+ Follow</span>
												<span className="badge badge-danger border-white">
													9,598
												</span>
											</button>
										</div>
										<div className="col-lg-12 mt-2">
											<h2>Web3.0 Venture Fund⚡️</h2>
											<span className="fs-8 font-weight-bold">
												<i className="ni ni-calendar-grid-58 fs-7 me-1" />
												Started February, 2023
											</span>
										</div>
										<div className="col-lg-12 fs-7 description">
											Trucks is the leading transportation investor in the
											world, with $7B in exits including Joby Aviation,
											NuTonomy, Bear Flag Robotics, AEye and Roadster. This is
											our secret opportunity fund, which invests...
										</div>
										<div className="col-lg-12 d-flex justify-content-center">
											<a
												href="./fund_detail.html"
												className="btn bg-gradient-primary w-100 my-3 active"
												role="button"
												aria-pressed="true"
											>
												Invest Now
											</a>
										</div>
									</div>
									<div className="row">
										<hr className="horizontal dark" />
										<div className="col-6">
											<span className="fs-8">Min Quarterly Investment</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												$1,000
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Min Subscription Period</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												4 Quarters
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Investors</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												356 (1,424 NFTs)
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Fund Size</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												$1.2M per quarter
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Carry</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												20-25%
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Fee</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												Mgmt 2% (+ 0.15%)
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-sm-6 mb-4 hover-effect">
							<div className="card shadow-md mt-md-0 mt-5 funds-card">
								<div className="card-header fund-4">
									<div className="row">
										<div className="col-lg-12 text-end">
											<span className="badge bg-gradient-warning" />
										</div>
										<img className="fund_logo" src={FundLogo4} />
									</div>
								</div>
								<div className="card-body mt-0 pt-2">
									<div className="row">
										<div className="col-lg-12 text-end mb-0">
											<button
												type="button"
												className="btn btn-twitter btn-simple text-secondary px-2"
											>
												<i className="fab fa-twitter text-lg" />
											</button>
											<button
												type="button"
												className="btn btn-linkedin btn-simple text-secondary px-2"
											>
												<i className="fab fa-linkedin text-lg" />
											</button>
											<button
												type="button"
												className="btn btn-dribbble btn-simple text-secondary px-2"
											>
												<i className="fab fa-dribbble text-lg" />
											</button>
											<button
												type="button"
												className="btn btn-follow bg-gradient-primary mt-2 ms-2"
											>
												<span>+ Follow</span>
												<span className="badge badge-danger border-white">
													9,598
												</span>
											</button>
										</div>
										<div className="col-lg-12 mt-2">
											<h2>NFT Fund⚡️</h2>
											<span className="fs-8 font-weight-bold">
												<i className="ni ni-calendar-grid-58 fs-7 me-1" />
												Started February, 2023
											</span>
										</div>
										<div className="col-lg-12 fs-7 description">
											Trucks is the leading transportation investor in the
											world, with $7B in exits including Joby Aviation,
											NuTonomy, Bear Flag Robotics, AEye and Roadster. This is
											our secret opportunity fund, which invests...
										</div>
										<div className="col-lg-12 d-flex justify-content-center">
											<a
												href="./fund_detail.html"
												className="btn bg-gradient-primary w-100 my-3 active"
												role="button"
												aria-pressed="true"
											>
												Invest Now
											</a>
										</div>
									</div>
									<div className="row">
										<hr className="horizontal dark" />
										<div className="col-6">
											<span className="fs-8">Min Quarterly Investment</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												$1,000
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Min Subscription Period</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												4 Quarters
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Investors</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												356 (1,424 NFTs)
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Fund Size</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												$1.2M per quarter
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Carry</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												20-25%
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Fee</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												Mgmt 2% (+ 0.15%)
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-sm-6 mb-4 hover-effect">
							<div className="card shadow-md mt-md-0 mt-5 funds-card">
								<div className="card-header fund-5">
									<div className="row">
										<div className="col-lg-12 text-end">
											<span className="badge bg-gradient-warning" />
										</div>
										<img className="fund_logo" src={FundLogo1} />
									</div>
								</div>
								<div className="card-body mt-0 pt-2">
									<div className="row">
										<div className="col-lg-12 text-end mb-0">
											<button
												type="button"
												className="btn btn-twitter btn-simple text-secondary px-2"
											>
												<i className="fab fa-twitter text-lg" />
											</button>
											<button
												type="button"
												className="btn btn-linkedin btn-simple text-secondary px-2"
											>
												<i className="fab fa-linkedin text-lg" />
											</button>
											<button
												type="button"
												className="btn btn-dribbble btn-simple text-secondary px-2"
											>
												<i className="fab fa-dribbble text-lg" />
											</button>
											<button
												type="button"
												className="btn btn-follow bg-gradient-primary mt-2 ms-2"
											>
												<span>+ Follow</span>
												<span className="badge badge-danger border-white">
													9,598
												</span>
											</button>
										</div>
										<div className="col-lg-12 mt-2">
											<h2>Bitocin Venture Fund⚡️</h2>
											<span className="fs-8 font-weight-bold">
												<i className="ni ni-calendar-grid-58 fs-7 me-1" />
												Started February, 2023
											</span>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12 fs-7 description">
											Trucks is the leading transportation investor in the
											world, with $7B in exits including Joby Aviation,
											NuTonomy, Bear Flag Robotics, AEye and Roadster. This is
											our secret opportunity fund, which invests...
										</div>
										<div className="col-lg-12 d-flex justify-content-center">
											<a
												href="./fund_detail.html"
												className="btn bg-gradient-primary w-100 my-3 active"
												role="button"
												aria-pressed="true"
											>
												Invest Now
												<span className="badge badge-primary ms-2">
													Only Whitelist
												</span>
											</a>
										</div>
									</div>
									<div className="row">
										<hr className="horizontal dark" />
										<div className="col-6">
											<span className="fs-8">Min Quarterly Investment</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												$1,000
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Min Subscription Period</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												4 Quarters
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Investors</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												356 (1,424 NFTs)
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Fund Size</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												$1.2M per quarter
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Carry</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												20-25%
											</p>
										</div>
										<div className="col-6">
											<span className="fs-8">Fee</span>
											<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
												Mgmt 2% (+ 0.15%)
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

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

			<section className="pt-9 pb-8 my-10 bg-gradient-primary position-relative overflow-hidden">
				<img
					src={WavesWhite}
					alt="pattern-lines"
					className="position-absolute start-0 top-0 h-100 z-index-1 opacity-6"
				/>

				<div className="container position-relative z-index-1">
					<div className="row">
						<div className="col-lg-6 col-md-12 d-flex justify-content-top flex-column">
							<h2 className="text-white fadeIn2 fadeInBottom">
								Rolling Funds Fees & Distributions Breakdown
							</h2>
							<p className="lead pe-5 text-white pacity-9 z-index-1 fadeIn2 fadeInBottom">
								Use our Rolling Funds Fees & Distribution Calculator to explore
								different investment scenarios and understand the associated
								fees and returns.
							</p>
							<p className="mt-4 text-white opacity-8 z-index-1 fadeIn2 fadeInBottom">
								This cariculate is used to provide approximate estimates of
								performance. Actual performance may vary significantly depending
								on the specific terms of the Rolling Fund. Smaller funds may
								incur higher fees. Please check each fund's associated fees.
							</p>
						</div>
						<div className="col-lg-6">
							<div className="card mt-5 mt-lg-0 pt-3">
								<form id="contact-form" method="post" autoComplete="off">
									<div className="card-body">
										<div className="row">
											<div className="col-md-6">
												<label>Investment per Quarter</label>
												<div className="input-group mb-4">
													<span className="input-group-text">$</span>
													<input
														type="text"
														className="form-control"
														inputMode="numeric"
														placeholder=""
														value="5,000"
														// onFocus="focused(this)" onfocusout="defocused(this)"
													/>
												</div>
											</div>
											<div className="col-md-6">
												<label>How long do you invest?</label>
												<div className="input-group mb-4">
													<input
														type="text"
														className="form-control"
														inputMode="numeric"
														placeholder=""
														value="4"
														// onFocus="focused(this)"
														// onfocusout="defocused(this)"
													/>
													<span className="input-group-text input-right-text">
														Quarter
													</span>
												</div>
											</div>
											<div className="col-md-4">
												<label>Management Fee</label>
												<div className="input-group mb-4">
													<input
														type="text"
														className="form-control"
														inputMode="numeric"
														placeholder=""
														value="2"
														// onFocus="focused(this)" onfocusout="defocused(this)"
													/>
													<span className="input-group-text input-right-text">
														%
													</span>
												</div>
											</div>
											<div className="col-md-4">
												<label>Carry</label>
												<div className="input-group mb-4">
													<input
														type="text"
														className="form-control"
														inputMode="numeric"
														placeholder=""
														value="20"
														// onFocus="focused(this)" onfocusout="defocused(this)"
													/>
													<span className="input-group-text input-right-text">
														%
													</span>
												</div>
											</div>
											<div className="col-md-4">
												<label>Expected return multiple</label>
												<div className="input-group mb-4">
													<input
														type="text"
														className="form-control"
														inputMode="numeric"
														placeholder=""
														value="3"
														// onFocus="focused(this)" onfocusout="defocused(this)"
													/>
													<span className="input-group-text input-right-text">
														X
													</span>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-md-12">
												<button
													type="button"
													className="btn bg-gradient-dark w-100"
												>
													Calculate Now
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Wrapper>
	);
}

export default HomeScreen;
