/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from 'styled-components';

const Wrapper = styled.section``;

function FormContact() {


	return (
		<Wrapper className="py-sm-7 ">
			<div className="container">
				<div className="row align-items-center">
					<hr className="horizontal dark" />
					<div className="col-lg-6 mx-auto text-center">
						<div className="ms-3 mb-md-5">
							<h3>We are here for you</h3>
							<p>Can&apos;t find what you&apos;re looking for?</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8 mx-auto">
						<div className="card card-plain">
							<form id="contact-form" method="post" autoComplete="off">
								<div className="card-body">
									<div className="row">
										<div className="col-md-6">
											<label>Full Name</label>
											<div className="input-group mb-4">
												<input
													className="form-control"
													placeholder="Full Name"
													aria-label="Full Name"
													type="text"
												/>
											</div>
										</div>
										<div className="col-md-6 ps-md-2">
											<label>Email</label>
											<div className="input-group">
												<input
													type="email"
													className="form-control"
													placeholder="hello@creative-tim.com"
												/>
											</div>
										</div>
									</div>
									<div className="form-group mb-4 mt-md-0 mt-4">
										<label>What can we help you?</label>
										<textarea
											name="message"
											className="form-control"
											id="message"
											rows={6}
											placeholder="Describe your problem in at least 250 characters"
											defaultValue=""
										/>
									</div>
									<div className="row">
										<div className="col-md-12 text-center">
											<button
												type="button"
												className="btn bg-gradient-dark mt-4"
											>
												Send Message
											</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default FormContact;
