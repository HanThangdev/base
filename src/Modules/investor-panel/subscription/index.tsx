import { Wrapper } from './styled';

function Subscription() {
	return (
		<Wrapper className="pb-7">
			<div className="tab-content" id="faqtab">
				<div
					className="tab-pane fade show active"
					id="subscription-tab"
					role="tabpanel"
					aria-labelledby="subscription-tab"
				>
					<section className="pt-3 pt-md-5 pb-md-5 pt-lg-7">
						<div className="container">
							<div className="row">
								<div className="col-lg-3 mb-lg-0 mb-3">
									<ul className="nav flex-column bg-white border-radius-lg p-3 position-sticky top-100px">
										<h4 className="ps-3">Subscription</h4>
										<li className="nav-item">
											<a
												className="nav-link text-dark icon-move-right"
												data-scroll
												href="#subscription-list"
											>
												<i className="fa-solid fa-angle-right me-2" />
												Subscription
											</a>
										</li>
									</ul>
								</div>
								<div className="col-lg-9">
									<div className="anchor_adjust mb-5" id="subscription-list">
										<div className="card card-wrapper shadow-sm mb-10">
											<div className="card-header">
												<h5 className="mb-0">Subscription</h5>
											</div>
											<div className="table-responsive">
												<table
													className="table table-flush"
													id="datatable-subscription"
												>
													<thead className="thead-light">
														<tr>
															<th>Firm</th>
															<th>Status</th>
															<th>Invest Date</th>
															<th>Invested</th>
															<th>NetValue</th>
															<th>Multipe</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td className="text-xs font-weight-bold">
																Dubai Real Estate Investment Firm
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm badge-success">
																	Live
																</span>
															</td>
															<td className="text-xs font-weight-bold">
																2022-11-09
															</td>
															<td className="text-xs font-weight-bold">$500</td>
															<td className="text-xs font-weight-bold">
																$3,500
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm bg-gradient-primary">
																	7.5x
																</span>
															</td>
														</tr>
														<tr>
															<td className="text-xs font-weight-bold">
																Dubai Real Estate Investment Firm
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm badge-success">
																	Live
																</span>
															</td>
															<td className="text-xs font-weight-bold">
																2022-11-09
															</td>
															<td className="text-xs font-weight-bold">$500</td>
															<td className="text-xs font-weight-bold">
																$3,500
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm bg-gradient-primary">
																	7.5x
																</span>
															</td>
														</tr>
														<tr>
															<td className="text-xs font-weight-bold">
																Dubai Real Estate Investment Firm
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm badge-success">
																	Live
																</span>
															</td>
															<td className="text-xs font-weight-bold">
																2022-11-09
															</td>
															<td className="text-xs font-weight-bold">$500</td>
															<td className="text-xs font-weight-bold">
																$3,500
															</td>
															<td className="text-xs font-weight-bold">
																<span className="badge badge-sm bg-gradient-primary">
																	7.5x
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

export default Subscription;
