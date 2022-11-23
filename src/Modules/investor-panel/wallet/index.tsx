/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Wrapper } from './styled';

function Wallet() {
	return (
		<Wrapper className="pb-7">
			<div className="tab-content" id="faqtab">
				<div
					className="tab-pane fade show active"
					id="wallet-tab"
					role="tabpanel"
					aria-labelledby="wallet-tab"
				>
					<section className="pt-3 pt-md-5 pb-md-5 pt-lg-7">
						<div className="container">
							<div className="row">
								<div className="col-lg-3 mb-lg-0 mb-3">
									<ul className="nav flex-column bg-white border-radius-lg p-3 position-sticky top-100px">
										<h4 className="ps-3">Wallet</h4>
										<li className="nav-item">
											<a
												className="nav-link text-dark icon-move-right"
												data-scroll
												href="#wallet_overview"
											>
												<i className="fa-solid fa-angle-right me-2" />
												Wallet Overview
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link text-dark icon-move-right"
												data-scroll
												href="#transaction_history"
											>
												<i className="fa-solid fa-angle-right me-2" />
												Transaction History
											</a>
										</li>
									</ul>
								</div>
								<div className="col-lg-9">
									<div className="anchor_adjust mb-5" id="wallet_overview">
										<div
											className="card card-wrapper shadow-sm"
											id="wallet_overview"
										>
											<div className="card-header">
												<h5 className="mb-0">Wallet overview</h5>
												<p className="text-sm mb-0">
													Only the coins listed below are shown. Please note
													that it is not displayed for other assets.
												</p>
											</div>
											<div className="table-responsive">
												<table className="table align-items-center mb-0">
													<thead>
														<tr>
															<th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7">
																Coin
															</th>
															<th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 text-end">
																Available
															</th>
															<th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 text-end">
																Locked
															</th>
															<th className="text-uppercase text-secondary text-xs font-weight-bolder opacity-7 text-end">
																Action
															</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<div className="d-flex align-items-center px-2 py-1">
																	<div>
																		<img
																			src="./assets/img/goemon/logo_usdt_100x100.png"
																			className="me-2"
																			style={{ width: '32px' }}
																		/>
																	</div>
																	<div className="d-flex flex-column justify-content-center">
																		<span className="fs-7 font-weight-bolder mb-0">
																			USDT
																		</span>
																		<p className="fs-8 text-secondary mt-minus1 mb-1">
																			Tether
																		</p>
																	</div>
																</div>
															</td>
															<td className="text-end pe-4">
																<p className="fs-7 font-weight-bolder mb-0">
																	1,000.00
																</p>
																<p className="fs-8 text-secondary mt-minus1 mb-1">
																	$1,000.67
																</p>
															</td>
															<td className="text-end pe-4">
																<p className="fs-7 font-weight-bolder mb-0">
																	0
																</p>
																<p className="fs-8 text-secondary mt-minus1 mb-1">
																	$0
																</p>
															</td>
															<td className="text-end">
																<a
																	className="btn bg-gradient-info btn-sm mb-0 letter-spacing-0"
																	data-bs-toggle="modal"
																	data-bs-target="#payment_success_modal"
																>
																	Deposit
																</a>{' '}
																<a
																	className="btn bg-gradient-dark btn-sm mb-0 letter-spacing-0"
																	data-bs-toggle="modal"
																	data-bs-target="#payment_success_modal"
																>
																	Withdraw
																</a>
															</td>
														</tr>
														<tr>
															<td>
																<div className="d-flex align-items-center px-2 py-1">
																	<div>
																		<img
																			src="./assets/img/goemon/logo_usdc_100x100.png"
																			className="me-2"
																			style={{ width: '32px' }}
																		/>
																	</div>
																	<div className="d-flex flex-column justify-content-center">
																		<span className="fs-7 font-weight-bolder mb-0">
																			USDC
																		</span>
																		<p className="fs-8 text-secondary mt-minus1 mb-1">
																			USDC Coin
																		</p>
																	</div>
																</div>
															</td>
															<td className="text-end pe-4">
																<p className="fs-7 font-weight-bolder mb-0">
																	500.00
																</p>
																<p className="fs-8 text-secondary mt-minus1 mb-1">
																	$500.32
																</p>
															</td>
															<td className="text-end pe-4">
																<p className="fs-7 font-weight-bolder mb-0">
																	500.00
																</p>
																<p className="fs-8 text-secondary mt-minus1 mb-1">
																	$500.32
																</p>
															</td>
															<td className="text-end">
																<a
																	className="btn bg-gradient-info btn-sm mb-0 letter-spacing-0"
																	data-bs-toggle="modal"
																	data-bs-target="#payment_success_modal"
																>
																	Deposit
																</a>{' '}
																<a
																	className="btn bg-gradient-dark btn-sm mb-0 letter-spacing-0"
																	data-bs-toggle="modal"
																	data-bs-target="#payment_success_modal"
																>
																	Withdraw
																</a>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
									<div className="anchor_adjust mb-5" id="transaction_history">
										<div className="card card-wrapper shadow-sm mb-10">
											<div className="card-header">
												<h5 className="mb-0">Transaction History</h5>
											</div>
											<div className="table-responsive">
												<table
													className="table table-flush"
													id="datatable-history"
												>
													<thead className="thead-light">
														<tr>
															<th>Time</th>
															<th>Type</th>
															<th>Asset</th>
															<th>Amount</th>
															<th>TxID</th>
															<th>Status</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td className="text-xs font-weight-bold">
																2022-11-09 11:43
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-dot me-4">
																	<i className="bg-danger" />
																	<span className="text-dark text-xs">
																		Withdraw
																	</span>
																</span>
															</td>
															<td className="text-xs font-weight-bold">USDC</td>
															<td className="text-xs font-weight-bold">
																125.00
															</td>
															<td className="text-xs font-weight-bold">
																24fde0...385322
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm badge-secondary">
																	Pending
																</span>
															</td>
														</tr>
														<tr>
															<td className="text-xs font-weight-bold">
																2022-10-30 15:35
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-dot me-4">
																	<i className="bg-info" />
																	<span className="text-dark text-xs">
																		Deposit
																	</span>
																</span>
															</td>
															<td className="text-xs font-weight-bold">USDC</td>
															<td className="text-xs font-weight-bold">
																500.00
															</td>
															<td className="text-xs font-weight-bold">
																24fde0...385322
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm badge-success">
																	Completed
																</span>
															</td>
														</tr>
														<tr>
															<td className="text-xs font-weight-bold">
																2022-10-29 02:58
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-dot me-4">
																	<i className="bg-info" />
																	<span className="text-dark text-xs">
																		Deposit
																	</span>
																</span>
															</td>
															<td className="text-xs font-weight-bold">USDT</td>
															<td className="text-xs font-weight-bold">
																125.00
															</td>
															<td className="text-xs font-weight-bold">
																24fde0...385322
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm badge-success">
																	Completed
																</span>
															</td>
														</tr>
														<tr>
															<td className="text-xs font-weight-bold">
																2022-07-30 11:43
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-dot me-4">
																	<i className="bg-info" />
																	<span className="text-dark text-xs">
																		Deposit
																	</span>
																</span>
															</td>
															<td className="text-xs font-weight-bold">USDC</td>
															<td className="text-xs font-weight-bold">
																125.00
															</td>
															<td className="text-xs font-weight-bold">
																24fde0...385322
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm badge-success">
																	Completed
																</span>
															</td>
														</tr>
														<tr>
															<td className="text-xs font-weight-bold">
																2022-06-29 10:50
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-dot me-4">
																	<i className="bg-info" />
																	<span className="text-dark text-xs">
																		Deposit
																	</span>
																</span>
															</td>
															<td className="text-xs font-weight-bold">USDT</td>
															<td className="text-xs font-weight-bold">
																100.00
															</td>
															<td className="text-xs font-weight-bold">
																24fde0...385322
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm badge-success">
																	Completed
																</span>
															</td>
														</tr>
														<tr>
															<td className="text-xs font-weight-bold">
																2022-11-09 11:43
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-dot me-4">
																	<i className="bg-danger" />
																	<span className="text-dark text-xs">
																		Withdraw
																	</span>
																</span>
															</td>
															<td className="text-xs font-weight-bold">USDC</td>
															<td className="text-xs font-weight-bold">
																125.00
															</td>
															<td className="text-xs font-weight-bold">
																24fde0...385322
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm badge-secondary">
																	Pending
																</span>
															</td>
														</tr>
														<tr>
															<td className="text-xs font-weight-bold">
																2022-10-30 15:35
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-dot me-4">
																	<i className="bg-info" />
																	<span className="text-dark text-xs">
																		Deposit
																	</span>
																</span>
															</td>
															<td className="text-xs font-weight-bold">USDC</td>
															<td className="text-xs font-weight-bold">
																500.00
															</td>
															<td className="text-xs font-weight-bold">
																24fde0...385322
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm badge-success">
																	Completed
																</span>
															</td>
														</tr>
														<tr>
															<td className="text-xs font-weight-bold">
																2022-10-29 02:58
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-dot me-4">
																	<i className="bg-info" />
																	<span className="text-dark text-xs">
																		Deposit
																	</span>
																</span>
															</td>
															<td className="text-xs font-weight-bold">USDT</td>
															<td className="text-xs font-weight-bold">
																125.00
															</td>
															<td className="text-xs font-weight-bold">
																24fde0...385322
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm badge-success">
																	Completed
																</span>
															</td>
														</tr>
														<tr>
															<td className="text-xs font-weight-bold">
																2022-07-30 11:43
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-dot me-4">
																	<i className="bg-info" />
																	<span className="text-dark text-xs">
																		Deposit
																	</span>
																</span>
															</td>
															<td className="text-xs font-weight-bold">USDC</td>
															<td className="text-xs font-weight-bold">
																125.00
															</td>
															<td className="text-xs font-weight-bold">
																24fde0...385322
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm badge-success">
																	Completed
																</span>
															</td>
														</tr>
														<tr>
															<td className="text-xs font-weight-bold">
																2022-06-29 10:50
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-dot me-4">
																	<i className="bg-info" />
																	<span className="text-dark text-xs">
																		Deposit
																	</span>
																</span>
															</td>
															<td className="text-xs font-weight-bold">USDT</td>
															<td className="text-xs font-weight-bold">
																100.00
															</td>
															<td className="text-xs font-weight-bold">
																24fde0...385322
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm badge-success">
																	Completed
																</span>
															</td>
														</tr>
														<tr>
															<td className="text-xs font-weight-bold">
																2022-11-09 11:43
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-dot me-4">
																	<i className="bg-danger" />
																	<span className="text-dark text-xs">
																		Withdraw
																	</span>
																</span>
															</td>
															<td className="text-xs font-weight-bold">USDC</td>
															<td className="text-xs font-weight-bold">
																125.00
															</td>
															<td className="text-xs font-weight-bold">
																24fde0...385322
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm badge-secondary">
																	Pending
																</span>
															</td>
														</tr>
														<tr>
															<td className="text-xs font-weight-bold">
																2022-10-30 15:35
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-dot me-4">
																	<i className="bg-info" />
																	<span className="text-dark text-xs">
																		Deposit
																	</span>
																</span>
															</td>
															<td className="text-xs font-weight-bold">USDC</td>
															<td className="text-xs font-weight-bold">
																500.00
															</td>
															<td className="text-xs font-weight-bold">
																24fde0...385322
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm badge-success">
																	Completed
																</span>
															</td>
														</tr>
														<tr>
															<td className="text-xs font-weight-bold">
																2022-10-29 02:58
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-dot me-4">
																	<i className="bg-info" />
																	<span className="text-dark text-xs">
																		Deposit
																	</span>
																</span>
															</td>
															<td className="text-xs font-weight-bold">USDT</td>
															<td className="text-xs font-weight-bold">
																125.00
															</td>
															<td className="text-xs font-weight-bold">
																24fde0...385322
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm badge-success">
																	Completed
																</span>
															</td>
														</tr>
														<tr>
															<td className="text-xs font-weight-bold">
																2022-07-30 11:43
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-dot me-4">
																	<i className="bg-info" />
																	<span className="text-dark text-xs">
																		Deposit
																	</span>
																</span>
															</td>
															<td className="text-xs font-weight-bold">USDC</td>
															<td className="text-xs font-weight-bold">
																125.00
															</td>
															<td className="text-xs font-weight-bold">
																24fde0...385322
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm badge-success">
																	Completed
																</span>
															</td>
														</tr>
														<tr>
															<td className="text-xs font-weight-bold">
																2022-06-29 10:50
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-dot me-4">
																	<i className="bg-info" />
																	<span className="text-dark text-xs">
																		Deposit
																	</span>
																</span>
															</td>
															<td className="text-xs font-weight-bold">USDT</td>
															<td className="text-xs font-weight-bold">
																100.00
															</td>
															<td className="text-xs font-weight-bold">
																24fde0...385322
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm badge-success">
																	Completed
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</Wrapper>
	);
}

export default Wallet;
