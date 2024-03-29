/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function CardPayment() {
	return (
		<div
			className="tab-pane fade show active"
			id="payment_card-tab"
			role="tabpanel"
			aria-labelledby="payment_card-tab"
		>
			<form className="pt-4 px-4">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<label>Investment per Quarter</label>
							<div className="input-group mb-4">
								<span className="input-group-text">USD $</span>
								<input
									type="text"
									className="form-control form-control-lg fs-6 font-weight-bolder digit"
									placeholder="Min Invest is $500"
									value={500}
								/>
							</div>
						</div>
						<div className="col-md-6">
							<label>Min Subscription Period</label>
							<div className="input-group mb-4">
								<input
									type="text"
									className="form-control form-control-lg fs-6 font-weight-bolder"
									inputMode="numeric"
									placeholder="Min Subscription Period is 4Q"
									value={4}
									maxLength={2}
								/>
								<span className="input-group-text input-right-text">
									Quarter
								</span>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<label>
								Card number (
								<span className="type text-uppercase">unknown</span>)
							</label>
							<div className="input-group mb-4">
								<span className="input-group-text">
									<i className="far fa-credit-card fs-6 me-2" />
								</span>
								<input
									type="text"
									className="form-control font-weight-bold cardno"
									inputMode="numeric"
									placeholder="1234 1234 1234 1234"
								/>
							</div>
						</div>
						<div className="col-md-3">
							<label>Expiration</label>
							<div className="input-group mb-4">
								<input
									type="text"
									className="form-control font-weight-bold expiration"
									inputMode="numeric"
									placeholder="mm/yy"
								/>
							</div>
						</div>
						<div className="col-md-3">
							<label>CVC</label>
							<div className="input-group mb-4">
								<input
									type="text"
									className="form-control font-weight-bold"
									inputMode="numeric"
									placeholder="CVC"
									maxLength={3}
								/>
								<span className="input-group-text input-right-text">
									<svg
										className="p-CardCvcIcons-svg"
										width={24}
										height={24}
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										fill="var(--colorIconCardCvc)"
										role="presentation"
									>
										<path
											opacity=".2"
											fillRule="evenodd"
											clipRule="evenodd"
											d="M15.337 4A5.493 5.493 0 0013 8.5c0 1.33.472 2.55 1.257 3.5H4a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1v-.6a5.526 5.526 0 002-1.737V18a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h12.337zm6.707.293c.239.202.46.424.662.663a2.01 2.01 0 00-.662-.663z"
										/>
										<path
											opacity=".4"
											fillRule="evenodd"
											clipRule="evenodd"
											d="M13.6 6a5.477 5.477 0 00-.578 3H1V6h12.6z"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M18.5 14a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm-2.184-7.779h-.621l-1.516.77v.786l1.202-.628v3.63h.943V6.22h-.008zm1.807.629c.448 0 .762.251.762.613 0 .393-.37.668-.904.668h-.235v.668h.283c.565 0 .95.282.95.691 0 .393-.377.66-.911.66-.393 0-.786-.126-1.194-.37v.786c.44.189.88.291 1.312.291 1.029 0 1.736-.526 1.736-1.288 0-.535-.33-.967-.88-1.14.472-.157.778-.573.778-1.045 0-.738-.652-1.241-1.595-1.241a3.143 3.143 0 00-1.234.267v.77c.378-.212.763-.33 1.132-.33zm3.394 1.713c.574 0 .974.338.974.778 0 .463-.4.785-.974.785-.346 0-.707-.11-1.076-.337v.809c.385.173.778.26 1.163.26.204 0 .392-.032.573-.08a4.313 4.313 0 00.644-2.262l-.015-.33a1.807 1.807 0 00-.967-.252 3 3 0 00-.448.032V6.944h1.132a4.423 4.423 0 00-.362-.723h-1.587v2.475a3.9 3.9 0 01.943-.133z"
										/>
									</svg>
								</span>
							</div>
						</div>
					</div>
					<hr className="horizontal dark my-3 d-xl-block d-none" />
					<div className="row mb-4">
						<div className="font-weight-bold my-3">Review Terms</div>
						<div className="form-check ps-5">
							<input
								className="form-check-input"
								type="checkbox"
								id="terms-1"
							/>
							<label className="form-check-label" htmlFor="terms-1">
								I acknowledge that GOEMON will not be responsible for any of my
								investment losses.
							</label>
						</div>
						<div className="form-check ps-5">
							<input
								className="form-check-input"
								type="checkbox"
								id="terms-2"
							/>
							<label className="form-check-label" htmlFor="terms-2">
								I am aware there will be penalties for non-payment or
								cancellation within the minimum subscription period.
							</label>
						</div>
						<div className="form-check ps-5">
							<input
								className="form-check-input"
								type="checkbox"
								id="terms-3"
							/>
							<label className="form-check-label" htmlFor="terms-3">
								I understand the risks associated with venture investing.
							</label>
						</div>
						<div className="form-check ps-5">
							<input
								className="form-check-input"
								type="checkbox"
								id="terms-4"
							/>
							<label className="form-check-label" htmlFor="terms-4">
								I have read the{' '}
								<a
									href="/"
									className="text-gradient text-primary text-decoration-underline"
									data-bs-toggle="modal"
									data-bs-target="#reviewterms_modal"
								>
									terms and provisions
								</a>{' '}
								and agree to e-sign the above documents.
							</label>
						</div>
					</div>
					<a
						href="./invest.html"
						className="btn bg-gradient-primary btn-lg w-100"
						data-bs-toggle="modal"
						data-bs-target="#payment_success_modal"
					>
						Confirm investment
					</a>
				</div>
			</form>
		</div>
	);
}

export default CardPayment;
