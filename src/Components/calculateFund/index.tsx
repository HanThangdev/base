/* eslint-disable jsx-a11y/label-has-associated-control */
import { WavesWhite } from '@assets/template/img';

function CalculateFund() {
	return (
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
							different investment scenarios and understand the associated fees
							and returns.
						</p>
						<p className="mt-4 text-white opacity-8 z-index-1 fadeIn2 fadeInBottom">
							This cariculate is used to provide approximate estimates of
							performance. Actual performance may vary significantly depending
							on the specific terms of the Rolling Fund. Smaller funds may incur
							higher fees. Please check each fund&apos;s associated fees.
						</p>
					</div>
					<div className="col-lg-6">
						<div className="card mt-5 mt-lg-0 pt-3">
							<form id="contact-form" method="post" autoComplete="off">
								<div className="card-body">
									<div className="row">
										<div className="col-md-6">
											<label className="">Investment per Quarter</label>
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
											<label className="">How long do you invest?</label>
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
											<label className="">Management Fee</label>
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
											<label className="">Carry</label>
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
											<label className="">Expected return multiple</label>
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
	);
}

export default CalculateFund;
