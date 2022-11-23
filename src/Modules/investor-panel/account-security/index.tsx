/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
import { Wrapper } from './styled';

function AccountSecurity() {
	return (
		<Wrapper className="pb-7">
			<div className="tab-content" id="faqtab">
				<div
					className="tab-pane fade show active"
					id="account-tab"
					role="tabpanel"
					aria-labelledby="account-tab"
				>
					<section className="pt-3 pt-md-5 pb-md-5 pt-lg-7">
						<div className="container">
							<div className="row">
								<div className="col-lg-3 mb-lg-0 mb-3">
									<ul className="nav flex-column bg-white border-radius-lg p-3 position-sticky top-100px">
										<h4 className="ps-3">Account &amp; Security</h4>
										<li className="nav-item">
											<a
												className="nav-link text-dark icon-move-right"
												data-scroll
												href="#profile"
											>
												<i className="fa-solid fa-angle-right me-2" />
												Profile
											</a>
										</li>
									</ul>
								</div>
								<div className="col-lg-9">
									<div className="anchor_adjust mb-5" id="profile">
										<div className="card card-wrapper shadow-sm mb-10">
											<div className="card-header">
												<h5 className="mb-0">Profile</h5>
											</div>
											<div className="card-body pt-0">
												<div className="row">
													<div className="col-6 d-flex align-items-center">
														<div className="profile-pic-wrapper">
															<div className="pic-holder">
																{/* uploaded pic shown here */}
																<img
																	id="profilePic"
																	className="pic"
																	src="./assets/img/goemon/avatar_1.png"
																/>
																<input
																	className="uploadProfileInput"
																	type="file"
																	name="profile_pic"
																	id="newProfilePhoto"
																	accept="image/*"
																	style={{ opacity: 0 }}
																/>
																<label
																	htmlFor="newProfilePhoto"
																	className="upload-file-block"
																>
																	<div className="text-center">
																		<div className="mb-1">
																			<i className="fa fa-camera fa-2x" />
																		</div>
																		<div className="text-uppercase">
																			Update
																			<br />
																			Photo
																		</div>
																	</div>
																</label>
															</div>
														</div>
														<div className="ms-2">
															<label className="fs-7">
																<i className="fa-regular fa-cloud-arrow-up fs-6 me-1" />
																Set Profile Avatar{' '}
															</label>
														</div>
													</div>
													<div className="col-6">
														<label className="form-label">User Name</label>
														<div className="input-group">
															<input
																id="lastName"
																name="lastName"
																className="form-control"
																type="text"
																placeholder="0x3c82…604c"
															/>
														</div>
													</div>
												</div>
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

export default AccountSecurity;
