/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { LOGO_USDC } from '@assets';
import { FundLogo3 } from '@assets/template/img';
import CardPayment from '@modules/invest/payment-card';
import CryptoPayment from '@modules/invest/payment-crypto';
// import BigNumber from "bignumber.js";
import { TabTile, Wrapper } from './styled';


declare global {
	interface Window {
		ethereum: any;
	}
}

const listTab = [
	{
		id: '#payment_card-tab',
		name: 'Credit Card',
	},
	{
		id: '#payment_crypto-tab',
		name: 'Crypto',
	},
];

function Invest() {
	const [tab, setTab] = useState<string>('#payment_card-tab');	

	return (
		<Wrapper className="pb-7">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 ps-50px mt-minus150px">
						<div className="card shadow-md mt-md-0 mt-5">
							<div className="card-body mt-4 pt-2">
								<div className="container mt-2">
									<h3 className="mb-5">Complete the Investment process</h3>
									<div className="font-weight-bold">Choose Payment method</div>
									<div className="justify-space-between py-2">
										<div className="nav-wrapper position-relative end-0">
											<ul className="nav nav-pills nav-fill p-1">
												{listTab.map((item) => {
													const { id, name } = item;
													return (
														<li
															className="nav-item moving-tab"
															key={id}
															onClick={() => setTab(id)}
														>
															<TabTile
																className={`nav-link mb-0 px-0 py-1 ${
																	tab.includes(id) ? 'active now' : ''
																}`}
																data-bs-toggle="tab"
																role="tab"
																aria-selected="true"
															>
																<i className="far fa-credit-card fs-6 me-2" />
																{name}
																</TabTile>
														</li>
													);
												})}
											</ul>
										</div>
									</div>
								</div>
								{/* Payment mesod Section */}
								<div className="tab-content" id="paymentmethod_tab">
									{tab.includes('#payment_card-tab') ? (
										// wiith Credit Card
										<CardPayment />
									) : (
										// with Crypto
										<CryptoPayment />
									)}
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 ps-50px mt-minus150px">
						<div className="card shadow-md mt-md-0 mt-5 position-sticky top-100px">
							<div className="card-body mt-4 pt-2">
								<div className="d-flex align-items-center position-relative">
									<div className="flex-shrink-0">
										<img
											className="fund_detail_logo"
											src={FundLogo3}
											alt="Dubai Real Estate Investment Fund"
										/>
									</div>
									<div className="flex-grow-1 ms-2">
										<div className="fs-6 text-dark font-weight-bolder lh-sm">
											Dubai Real Estate Investment Fund
										</div>
									</div>
								</div>
								<div className="mt-2">
									<p className="fs-8 mb-2 lh-sm">
										Using AI and neural networks to make video game and film
										NPCs more lifelike
									</p>
									<span className="fs-8 font-weight-bold">
										<i className="ni ni-calendar-grid-58 fs-7 me-1" />
										Started January, 2023
									</span>
								</div>
								<hr className="horizontal dark my-3 d-xl-block d-none" />
								<label className="mb-0">Subscription</label>
								<div className="d-flex align-items-center mb-2">
									<div className="me-3">
										<img alt="" src={LOGO_USDC} style={{ width: '32px' }} />
									</div>
									<div className="flex-grow-1">
										<span className="fs-7 font-weight-bolder">USDC</span>
										<p className="fs-8 text-secondary mt-minus1 mb-1">
											USDC Coin
										</p>
									</div>
									<div className="text-end">
										<span className="fs-7 font-weight-bolder">500.00</span>
										<p className="fs-8 text-secondary mt-minus1 mb-1">
											$503.25
										</p>
									</div>
								</div>
								<hr className="horizontal dark my-3 d-xl-block d-none" />
								<div className="d-flex align-items-center my-2">
									<div className="flex-grow-1">
										<label>Min Subscription Period</label>
									</div>
									<div className="text-end">
										<span className="fs-7 font-weight-bolder">4 Quarters</span>
									</div>
								</div>
								<div className="d-flex align-items-center my-2">
									<div className="flex-grow-1">
										<label>Min Investment per Quarter</label>
									</div>
									<div className="text-end">
										<span className="fs-7 font-weight-bolder">USD$ 500</span>
									</div>
								</div>
								<hr className="horizontal dark my-3 d-xl-block d-none" />
								<div className="d-flex align-items-center my-2">
									<div className="flex-grow-1">
										<label className="mb-1">Management Fee</label>
									</div>
									<div className="text-end">
										<p className="fs-7 mb-1">2.0% per year</p>
									</div>
								</div>
								<div className="d-flex align-items-center my-2">
									<div className="flex-grow-1">
										<label className="mb-1">Platform Fee</label>
									</div>
									<div className="text-end">
										<p className="fs-7 mb-1">0.15%</p>
									</div>
								</div>
								<div className="d-flex align-items-center my-2">
									<div className="flex-grow-1">
										<label className="mb-1">Carry</label>
									</div>
									<div className="text-end">
										<p className="fs-7 mb-1">30%</p>
									</div>
								</div>
								<hr className="horizontal dark my-3 d-xl-block d-none" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default Invest;
