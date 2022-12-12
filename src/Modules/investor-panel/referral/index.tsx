/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
// import Button from '@components/common/button';
import Input from '@components/common/input';
// import Collapse from '@components/common/collapse';

import { WavesWhite } from '@assets/template/img';
import { Wrapper } from './styled';

function Referral() {
	const Image =
		'https://www.bybit.com/referral/images/intro/intro1.png?w=1920&q=100';
	return (
		<Wrapper className="pb-7">
			<section className="pt-7 pb-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-sm-8 mb-8 col-12">
							<div className="description">
								<h1 className="">Invite Friends and Earn Commissions</h1>
								<p className="">
									Earn up to 30% commission from every trade completed by your
									referees (you can also earn commissions from referees of
									previous program. Please read up on program rules.)
								</p>
								<a
									href="#terms-conditions"
									className="btn bg-gradient-primary btn-lg"
								>
									View Rules
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-sm-4 mb-4 col-12">
							<div className="card shadow-md px-4 py-3">
								<h4 className="mt-2">Generate Invite Code and Link</h4>
								<div className="d-flex justify-content-between align-items-center w-100">
									<label>My Commission</label>
									<span className="font-weight-bold h3">20%</span>
								</div>
								<Input type="text" label="Referral Code" placeholder="" />
								<Input type="text" label="Referral Link" placeholder="" />
								{/* <Button className="btn bg-gradient-primary btn-lg w-100">
									Invite Friends
								</Button> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="steps py-5">
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div className="d-flex justify-content-center align-items-center">
								<img className="rounded-circle" src={Image} alt="" />
							</div>
							<h4 className="text-center">Invite Friends</h4>
							<p className="text-center">
								Share referral code/link with your friends to sign up on Goemon
							</p>
						</div>
						<div className="col-lg-4">
							<div className="d-flex justify-content-center align-items-center">
								<img className="rounded-circle" src={Image} alt="" />
							</div>
							<h4 className="text-center">Referee Deposit & Trade</h4>
							<p className="text-center">
								Get your referees to deposit and trade after registering for a
								Goemon account.
							</p>
						</div>
						<div className="col-lg-4">
							<div className="d-flex justify-content-center align-items-center">
								<img className="rounded-circle" src={Image} alt="" />
							</div>
							<h4 className="text-center">Earn Commission</h4>
							<p className="text-center">
								Earn up to 30% commission from each trade completed by your
								referees.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="pt-6 pb-8 bg-gradient-primary position-relative overflow-hidden commission-tiers">
				<img
					src={WavesWhite}
					alt="pattern-lines"
					className="position-absolute start-0 top-0 h-100 opacity-6"
				/>
				<div className="container">
					<div className="row">
						<h3 className="mb-4 title">Commission Tiers</h3>
						<div className="col-lg-4 position-relative">
							<div className="card-border" />
							<div className="card px-4 pt-5 pb-4">
								<div className="card-commission-tier">
									<span className="amount">20</span>
									<span className="percent">%</span>
								</div>
								<p className="description">Base Commission</p>
							</div>
						</div>
						<div className="col-lg-4 position-relative">
							<div className="card-border" />
							<div className="card px-4 pt-5 pb-4">
								<div className="card-commission-tier">
									<span className="amount">25</span>
									<span className="percent">%</span>
								</div>
								<p className="description">
									Invite 5 or more qualified referees
								</p>
							</div>
						</div>
						<div className="col-lg-4 position-relative">
							<div className="card-border" />
							<div className="card px-4 pt-5 pb-4">
								<div className="card-commission-tier">
									<span className="amount">30</span>
									<span className="percent">%</span>
								</div>
								<p className="description">
									Invite 100 or more qualified referees, or achieve at least $15
									million in Derivatives trading volume through your referees in
									a quarter.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="pt-6 pb-6">
				<div className="container">
					<div className="row">
						<h3 className="mb-4 title">FAQ(s)</h3>
						<div className="col-12">content</div>
					</div>
				</div>
			</section>
			<section className="pt-6 pb-6 terms-conditions" id="terms-conditions">
				<div className="container">
					<div className="row">
						<h3 className="mb-4 title">TERMS & CONDITIONS</h3>
						<div className="col-12">
							<ul className="list-terms-conditions">
								<li>
									<div className="item">
										<span className="number">1</span>
										<span className="content">
											<span>
												Referrers will start earning commissions when a referee
												signs up with Goemon and whenever their referees
												complete a trade on the Goemon platform. Upon the
												registration of a referee, referrers will be able to
												receive commissions on the trades of their referees for
												365 days.
											</span>
										</span>
									</div>
								</li>
								<li>
									<div className="item">
										<span className="number">2</span>
										<span className="content">
											<span>
												Referral commissions will be distributed at 12AM UTC
												daily. Referral commissions are derived from the
												referee's Net Trading Fee ( Net Trading Fee = Trading
												fee - bonus - coupons - other fee discounts). Net
												Trading Fees will be calculated in USDT.
											</span>
										</span>
									</div>
								</li>
								<li>
									<div className="item">
										<span className="number">3</span>
										<span className="content">
											<span>
												Eligible deposits includes deposits of
												cryptocurrencies/tokens, fiat deposits, deposits via P2P
												Trading and deposits via credit card payments.{' '}
											</span>
										</span>
									</div>
								</li>
								<li>
									<div className="item">
										<span className="number">4</span>
										<span className="content">
											<span>
												The deposit amount and trading volume during the event
												period will be calculated based on the real-time
												exchange rate (in USD).
											</span>
										</span>
									</div>
								</li>
								<li>
									<div className="item">
										<span className="number">5</span>
										<span className="content">
											<span>
												Paid online or offline advertisements with the use of
												Goemon’s logo are strictly prohibited.
											</span>
										</span>
									</div>
								</li>
								<li>
									<div className="item">
										<span className="number">6</span>
										<span className="content">
											<span>
												Goemon reserves the right to disqualify a participant if
												he/she engages in any inappropriate, dishonest or
												abusive activities (such as wash trading, volume faking,
												participating using multiple accounts, market
												manipulation, etc.) during the event.
											</span>
										</span>
									</div>
								</li>
								<li>
									<div className="item">
										<span className="number">7</span>
										<span className="content">
											<span>
												Participants who violate these terms will not be
												eligible for referral incentives; any fraudulent or
												abusive behaviors will result in the immediate
												termination of all associated accounts.
											</span>
										</span>
									</div>
								</li>
								<li>
									<div className="item">
										<span className="number">8</span>
										<span className="content">
											<span>
												The Referral Program cannot be used in conjunction with
												the Affiliate Program. For more information about the
												Affiliate Program, please visit
												https://www.Goemon.com/affiliates, email IB@Goemon.com,
												or contact our customer support.
											</span>
										</span>
									</div>
								</li>
								<li>
									<div className="item">
										<span className="number">9</span>
										<span className="content">
											<span>
												Goemon reserves the right to amend the Terms and
												Conditions of the referral program at any time without
												prior notice.
											</span>
										</span>
									</div>
								</li>
								<li>
									<div className="item">
										<span className="number">10</span>
										<span className="content">
											<span>
												Please note that the first commission payout will be
												distributed after Dec. 5, 2022, at 12AM UTC. You can
												only withdraw your commissions after the aforementioned
												date and time. For more details about your commissions,
												please head to your Referral History.
											</span>
										</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</Wrapper>
	);
}

export default Referral;
