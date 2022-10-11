/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import { Wrapper } from './styled';

function FaqPage() {
	return (
		<Wrapper className="fund_detail">
			{/* Frequently Asked Questions */}
			<section className="pt-3 pt-md-5 pb-md-5 pt-lg-7">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 mb-lg-0 mb-3">
							<ul className="nav flex-column bg-white border-radius-lg p-3 position-sticky top-100px">
								<h4 className="ps-3">Investors FAQ</h4>
								<li className="nav-item">
									<a className="nav-link text-dark" data-scroll href="#about">
										<i className="fa-solid fa-angle-right me-2" />
										About
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link text-dark"
										data-scroll
										href="#subscription"
									>
										<i className="fa-solid fa-angle-right me-2" />
										Subscription
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link text-dark"
										data-scroll
										href="#earningreturn"
									>
										<i className="fa-solid fa-angle-right me-2" />
										Earning A Return
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link text-dark"
										data-scroll
										href="#investment"
									>
										<i className="fa-solid fa-angle-right me-2" />
										Investment
									</a>
								</li>
							</ul>
						</div>
						<div className="col-lg-9">
							<h4 className="pt-7 ps-3" id="about">
								About
							</h4>
							<div className="accordion" id="Faq_investor">
								<div className="accordion-item mb-3">
									<h6 className="accordion-header" id="faqcat1-1">
										<button
											className="accordion-button border-bottom font-weight-bold text-start"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapse1-1"
											aria-expanded="false"
											aria-controls="collapse1-1"
										>
											About GOEMON?
											<i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" />
											<i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" />
										</button>
									</h6>
									<div
										id="collapse1-1"
										className="accordion-collapse collapse"
										aria-labelledby="faqcat1-1"
										data-bs-parent="#Faq_investor"
									>
										<div className="accordion-body text-m opacity-8">
											We’re not always in the position that we want to be at.
											We’re constantly growing. We’re constantly making
											mistakes. We’re constantly trying to express ourselves and
											actualize our dreams. If you have the opportunity to play
											this game of life you need to appreciate every moment. A
											lot of people don’t appreciate the moment until it’s
											passed.
										</div>
									</div>
								</div>
								<div className="accordion-item mb-3">
									<h6 className="accordion-header" id="faqcat1-2">
										<button
											className="accordion-button border-bottom font-weight-bold text-start"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapse1-2"
											aria-expanded="false"
											aria-controls="collapse1-2"
										>
											How can i make the payment?
											<i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" />
											<i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" />
										</button>
									</h6>
									<div
										id="collapse1-2"
										className="accordion-collapse collapse"
										aria-labelledby="faqcat1-2"
										data-bs-parent="#Faq_investor"
									>
										<div className="accordion-body text-m opacity-8">
											It really matters and then like it really doesn’t matter.
											What matters is the people who are sparked by it. And the
											people who are like offended by it, it doesn’t matter.
											Because it's about motivating the doers. Because I’m here
											to follow my dreams and inspire other people to follow
											their dreams, too.
										</div>
									</div>
								</div>
								<h4 className="pt-7 mb-4 ps-3" id="subscription">
									Subscription
								</h4>
								<div className="accordion-item mb-3">
									<h6 className="accordion-header" id="faqcat2-1">
										<button
											className="accordion-button border-bottom font-weight-bold text-start"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapse2-1"
											aria-expanded="false"
											aria-controls="collapse2-1"
										>
											How do I change my password?
											<i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" />
											<i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" />
										</button>
									</h6>
									<div
										id="collapse2-1"
										className="accordion-collapse collapse"
										aria-labelledby="faqcat2-1"
										data-bs-parent="#Faq_investor"
									>
										<div className="accordion-body text-m opacity-8">
											Society has put up so many boundaries, so many limitations
											on what’s right and wrong that it’s almost impossible to
											get a pure thought out. It’s like a little kid, a little
											boy, looking at colors, and no one told him what colors
											are good, before somebody tells you you shouldn’t like
											pink because that’s for girls, or you’d instantly become a
											gay two-year-old.
										</div>
									</div>
								</div>
								<div className="accordion-item mb-3">
									<h6 className="accordion-header" id="faqcat2-2">
										<button
											className="accordion-button border-bottom font-weight-bold text-start"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapse2-2"
											aria-expanded="false"
											aria-controls="collapse2-2"
										>
											How do I change my password?
											<i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" />
											<i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" />
										</button>
									</h6>
									<div
										id="collapse2-2"
										className="accordion-collapse collapse"
										aria-labelledby="faqcat2-2"
										data-bs-parent="#Faq_investor"
									>
										<div className="accordion-body text-m opacity-8">
											Society has put up so many boundaries, so many limitations
											on what’s right and wrong that it’s almost impossible to
											get a pure thought out. It’s like a little kid, a little
											boy, looking at colors, and no one told him what colors
											are good, before somebody tells you you shouldn’t like
											pink because that’s for girls, or you’d instantly become a
											gay two-year-old.
										</div>
									</div>
								</div>
								<h4 className="pt-7 mb-4 ps-3" id="earningreturn">
									Earning a Return
								</h4>
								<div className="accordion-item mb-3">
									<h6 className="accordion-header" id="faqcat3-1">
										<button
											className="accordion-button border-bottom font-weight-bold text-start"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapse3-1"
											aria-expanded="false"
											aria-controls="collapse3-1"
										>
											How do I change my password?
											<i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" />
											<i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" />
										</button>
									</h6>
									<div
										id="collapse3-1"
										className="accordion-collapse collapse"
										aria-labelledby="faqcat3-1"
										data-bs-parent="#Faq_investor"
									>
										<div className="accordion-body text-m opacity-8">
											Society has put up so many boundaries, so many limitations
											on what’s right and wrong that it’s almost impossible to
											get a pure thought out. It’s like a little kid, a little
											boy, looking at colors, and no one told him what colors
											are good, before somebody tells you you shouldn’t like
											pink because that’s for girls, or you’d instantly become a
											gay two-year-old.
										</div>
									</div>
								</div>
								<div className="accordion-item mb-3">
									<h6 className="accordion-header" id="faqcat3-2">
										<button
											className="accordion-button border-bottom font-weight-bold text-start"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapse3-2"
											aria-expanded="false"
											aria-controls="collapse3-2"
										>
											How do I change my password?
											<i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" />
											<i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" />
										</button>
									</h6>
									<div
										id="collapse3-2"
										className="accordion-collapse collapse"
										aria-labelledby="faqcat3-2"
										data-bs-parent="#Faq_investor"
									>
										<div className="accordion-body text-m opacity-8">
											Society has put up so many boundaries, so many limitations
											on what’s right and wrong that it’s almost impossible to
											get a pure thought out. It’s like a little kid, a little
											boy, looking at colors, and no one told him what colors
											are good, before somebody tells you you shouldn’t like
											pink because that’s for girls, or you’d instantly become a
											gay two-year-old.
										</div>
									</div>
								</div>
								<h4 className="pt-7 mb-4 ps-3" id="investment">
									Investment
								</h4>
								<div className="accordion-item mb-3">
									<h6 className="accordion-header" id="faqcat4-1">
										<button
											className="accordion-button border-bottom font-weight-bold text-start"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapse4-1"
											aria-expanded="false"
											aria-controls="collapse4-1"
										>
											How do I change my password?
											<i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" />
											<i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" />
										</button>
									</h6>
									<div
										id="collapse4-1"
										className="accordion-collapse collapse"
										aria-labelledby="faqcat4-1"
										data-bs-parent="#Faq_investor"
									>
										<div className="accordion-body text-m opacity-8">
											Society has put up so many boundaries, so many limitations
											on what’s right and wrong that it’s almost impossible to
											get a pure thought out. It’s like a little kid, a little
											boy, looking at colors, and no one told him what colors
											are good, before somebody tells you you shouldn’t like
											pink because that’s for girls, or you’d instantly become a
											gay two-year-old.
										</div>
									</div>
								</div>
								<div className="accordion-item mb-3">
									<h6 className="accordion-header" id="faqcat4-2">
										<button
											className="accordion-button border-bottom font-weight-bold text-start"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapse4-2"
											aria-expanded="false"
											aria-controls="collapse4-2"
										>
											How do I change my password?
											<i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" />
											<i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" />
										</button>
									</h6>
									<div
										id="collapse4-2"
										className="accordion-collapse collapse"
										aria-labelledby="faqcat4-2"
										data-bs-parent="#Faq_investor"
									>
										<div className="accordion-body text-m opacity-8">
											Society has put up so many boundaries, so many limitations
											on what’s right and wrong that it’s almost impossible to
											get a pure thought out. It’s like a little kid, a little
											boy, looking at colors, and no one told him what colors
											are good, before somebody tells you you shouldn’t like
											pink because that’s for girls, or you’d instantly become a
											gay two-year-old.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Inauery Form */}
			<section className="py-sm-7 ">
				<div className="container">
					<div className="row align-items-center">
						<hr className="horizontal dark" />
						<div className="col-lg-6 mx-auto text-center">
							<div className="ms-3 mb-md-5">
								<h3>We are here for you</h3>
								<p>Can't find what you're looking for?</p>
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
			</section>
		</Wrapper>
	);
}

export default FaqPage;
