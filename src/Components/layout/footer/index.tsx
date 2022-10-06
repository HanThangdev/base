/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Logo } from '@assets/template/img';
import { Wrapper } from './styled';

function Footer() {
	return (
		<Wrapper className="footer py-7 position-relative bg-gradient-dark overflow-hidden">
			<div className="position-absolute w-100 z-inde-1 top-0 mt-n3">
				<svg
					width="100%"
					viewBox="0 -2 1920 157"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
				>
					<title>wave-down</title>
					<g
						id="Page-1"
						stroke="none"
						strokeWidth="1"
						fill="none"
						fillRule="evenodd"
					>
						<g id="Artboard" fill="#FFFFFF" fillRule="nonzero">
							<g id="wave-down">
								<path
									d="M0,60.8320331 C299.333333,115.127115 618.333333,111.165365 959,47.8320321 C1299.66667,-15.5013009 1620.66667,-15.2062179 1920,47.8320331 L1920,156.389409 L0,156.389409 L0,60.8320331 Z"
									id="Path-Copy-2"
									transform="translate(960.000000, 78.416017) rotate(180.000000) translate(-960.000000, -78.416017) "
								/>
							</g>
						</g>
					</g>
				</svg>
			</div>
			<div className="container position-relative mt-lg-8">
				<div className="row ">
					<div className="col-lg-2 col-md-2 col-6 mt-3">
						<h5 className="text-white fs-6">for Investors</h5>
						<ul className="flex-column ms-n3 nav">
							<li className="nav-item">
								<a
									className="nav-link text-white opacity-8"
									href=""
									target="_blank"
								>
									My Account
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link text-white opacity-8"
									href=""
									target="_blank"
								>
									Rolling Funds
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link text-white opacity-8"
									href=""
									target="_blank"
								>
									Fund Share NFTs
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link text-white opacity-8"
									href=""
									target="_blank"
								>
									Calcurate Fund Returns
								</a>
							</li>
						</ul>
					</div>
					<div className="col-lg-2 col-md-2 col-6 mt-3">
						<h5 className="text-white fs-6">for Fund Managers</h5>
						<ul className="flex-column ms-n3 nav">
							<li className="nav-item">
								<a
									className="nav-link text-white opacity-8"
									href=""
									target="_blank"
								>
									Start your own fund
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link text-white opacity-8"
									href=""
									target="_blank"
								>
									Fund Cost Calculator
								</a>
							</li>
						</ul>
					</div>
					<div className="col-lg-2 col-md-2 col-6 mt-3">
						<h5 className="text-white fs-6">About</h5>
						<ul className="flex-column ms-n3 nav">
							<li className="nav-item">
								<a
									className="nav-link text-white opacity-8"
									href=""
									target="_blank"
								>
									About Us
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link text-white opacity-8"
									href=""
									target="_blank"
								>
									Blog
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link text-white opacity-8"
									href=""
									target="_blank"
								>
									Pressrelease
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link text-white opacity-8"
									href=""
									target="_blank"
								>
									Jobs
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link text-white opacity-8"
									href=""
									target="_blank"
								>
									Affiliates
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link text-white opacity-8"
									href=""
									target="_blank"
								>
									Media kit
								</a>
							</li>
						</ul>
					</div>
					<div className="col-lg-2 col-md-2 col-6 mt-3">
						<h5 className="text-white fs-6">Legal</h5>
						<ul className="flex-column ms-n3 nav">
							<li className="nav-item">
								<a
									className="nav-link text-white opacity-8"
									href=""
									target="_blank"
								>
									Term & Conditions
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link text-white opacity-8"
									href=""
									target="_blank"
								>
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-12 col-12 ms-md-auto text-center">
						<img className="fotter_logo" src={Logo} />
						<h6 className="mt-3 mb-2 opacity-8 text-white fs-7">Social</h6>
						<div className="d-flex justify-content-center">
							<ul className="d-flex flex-row ms-n3 nav">
								<li className="nav-item">
									<a
										className="nav-link pe-1 text-white"
										href=""
										target="_blank"
									>
										<i className="fab fa-twitter text-lg opacity-8" />
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link pe-1 text-white"
										href=""
										target="_blank"
									>
										<i className="fab fa-youtube text-lg opacity-8" />
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link pe-1 text-white"
										href=""
										target="_blank"
									>
										<i className="fab fa-facebook text-lg opacity-8" />
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link pe-1 text-white"
										href="h"
										target="_blank"
									>
										<i className="fab fa-instagram text-lg opacity-8" />
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link pe-1 text-white"
										href="h"
										target="_blank"
									>
										<i className="fab fa-tiktok text-lg opacity-8" />
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link pe-1 text-white"
										href=""
										target="_blank"
									>
										<i className="fab fa-github text-lg opacity-8" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="horizontal light mb-4 mt-md-4 mt-md-0" />
				<div className="row">
					<div className="col-lg-6 text-start">
						<h6 className="text-white">Subscribe to our newsletters</h6>
						<p className="text-white opacity-8 mb-lg-0 fs-7">
							The latest news, articles and resources sent to your inbox
							weekely.
						</p>
					</div>
					<div className="col-lg-4 ms-auto text-end my-auto">
						<div className="row">
							<div className="col-md-8 col-8">
								<div className="form-group mb-0">
									<div className="input-group input-group-alternative">
										<input
											className="form-control"
											placeholder="E-mail"
											type="email"
										/>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-4 text-start ps-0">
								<button
									type="button"
									className="btn bg-gradient-info mb-0 h-100 w-100"
								>
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</div>
				<hr className="horizontal light my-4" />
				<div className="row">
					<div className="col-lg-12 text-sm-right">
						<p className="text-white mb-sm-0 opacity-8 fs-7">
							Disclaimer:
							<br />
							Investing in venture capital funds is inherently risky and
							illiquid. It involves a high degree of risk and is suitable only
							for sophisticated and qualified investors. Past performance is not
							indicative of future results. Examples of portfolio companies are
							purely for illustrative purposes and selected based on name
							recognition. There is no guarantee that any fund will achieve the
							same exposure to, or quality of, investments held by any existing
							fund. Nothing on this page shall constitute an offer to sell or a
							solicitation of an offer to buy an interest in the partnership or
							other security. Any offer to sell or solicitation of an offer to
							buy an interest in the partnership maybe made only by way of the
							partnership's final definitive confidential disclosure document.
							<br />
							<br />
							*Some of the funds listed on this page are advised by GOEMON
							CAPITAL - FZCO.
						</p>
					</div>
				</div>
				<hr className="horizontal light my-4" />
				<div className="row">
					<div className="col-lg-12 text-center">
						<p className="text-white mb-sm-0 opacity-8 fs-7">
							© 2022 GOEMON CAPITAL - FZCO. | All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default Footer;
