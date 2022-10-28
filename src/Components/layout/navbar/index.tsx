/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react';
import { useWeb3Auth } from '@hooks/useWeb3auth';
import { GOEMON_LOGO, DownArrowDark, FundLogo1 } from '@assets/template/img';
import { getLocalStorage, STORAGE } from '@utils/storage';
import { ModalLogin } from '@components/modal';
import SiderBar from '../sidebar';
import { Wrapper } from './styled';

function Navbar() {
	const [visibleSideBar, setVisibleSideBar] = useState(false);
	const [visibleModalLogin, setVisibleModalLogin] = useState(false);
	const [profile, setProfile] = useState<unknown | null>(null);
	const { provider, logout, web3Auth, isLoading } = useWeb3Auth();
	const isLogined = getLocalStorage(STORAGE.USER_TOKEN);

	const onResetVissble = () => {
		setVisibleSideBar(false);
		setVisibleModalLogin(false);
	};

	useEffect(() => {
		if (web3Auth) {
			const getProfile = async () => {
				const user = await web3Auth.getUserInfo();
				const account = await provider?.getAccounts();
				setProfile({ ...user, walletAddress: account[0] });
			};
			getProfile();
		}
	}, [web3Auth]);

	return (
		<Wrapper className="container position-sticky z-index-sticky top-0">
			<div className="row">
				<div className="col-12">
					<nav className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-1 nav_header_menu">
						<div className="container-fluid px-0">
							<a
								className="navbar-brand font-weight-bolder ms-sm-3"
								href=" https://mockup.goemon.io/v01"
								title="GOEMON - Crypto Rolling Fund"
								data-placement="bottom"
								target="_blank"
							>
								<img src={GOEMON_LOGO} width="150" alt="logo goemon" />
							</a>
							<button
								className="navbar-toggler shadow-none ms-md-2"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navigation"
								aria-controls="navigation"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon mt-2">
									<span className="navbar-toggler-bar bar1" />
									<span className="navbar-toggler-bar bar2" />
									<span className="navbar-toggler-bar bar3" />
								</span>
							</button>
							<div
								className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
								id="navigation"
							>
								<a
									href="/"
									className="btn btn-sm  bg-gradient-primary btn-round my-3 ms-auto d-lg-none d-block"
								>
									SIGN IN
								</a>
								<ul className="navbar-nav navbar-nav-hover mx-auto">
									<li className="nav-item dropdown dropdown-hover mx-3">
										<a
											className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center font-weight-bolder"
											role="button"
											id="dropdownMenuBlocks"
											data-bs-toggle="dropdown"
											aria-expanded="false"
											href="/"
										>
											<span>Admin Panel</span>
											<img
												src={DownArrowDark}
												alt="down-arrow"
												className="arrow ms-1"
											/>
										</a>
										<div
											className="dropdown-menu dropdown-menu-animation dropdown-xl p-3 border-radius-xl mt-0 mt-lg-3"
											aria-labelledby="dropdownMenuPages10"
										>
											<div className="row d-none d-lg-block">
												<div className="col-12 px-4 py-2">
													<div className="row">
														<div className="col-4 position-relative">
															<div className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center px-0">
																<div className="d-inline-block">
																	<div className="icon icon-shape icon-xs border-radius-md bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center">
																		<i className="far fa-user fs-6" />
																	</div>
																</div>
																Dashbord
															</div>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span className="ps-3">Overview</span>
															</a>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span className="ps-3">Fundraising</span>
															</a>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span className="ps-3">Investing</span>
															</a>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span className="ps-3">Post</span>
															</a>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span className="ps-3">Message</span>
															</a>
															<div className="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3">
																<div className="d-inline-block">
																	<div className="icon icon-shape icon-xs border-radius-md bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center ps-0">
																		<i className="far fa-user fs-6" />
																	</div>
																</div>
																Create Fund
															</div>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span className="ps-3">Apply</span>
															</a>
															<hr className="vertical dark" />
														</div>
														<div className="col-4 position-relative">
															<div className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center px-0">
																<div className="d-inline-block">
																	<div className="icon icon-shape icon-xs border-radius-md bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center ps-0">
																		<i className="far fa-user fs-6" />
																	</div>
																</div>
																Setting
															</div>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span className="ps-3">Account</span>
															</a>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span className="ps-3">Security</span>
															</a>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span className="ps-3">Connected Address</span>
															</a>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span className="ps-3">Privacy and safety</span>
															</a>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span className="ps-3">Notifications</span>
															</a>
															<hr className="vertical dark" />
														</div>
														<div className="col-4 position-relative">
															<div className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center px-0">
																<div className="d-inline-block">
																	<div className="icon icon-shape icon-xs border-radius-md bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center ps-0">
																		<i className="far fa-user fs-6" />
																	</div>
																</div>
																Setting
															</div>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span className="ps-3">Account</span>
															</a>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span className="ps-3">Security</span>
															</a>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span className="ps-3">Connected Address</span>
															</a>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span className="ps-3">Privacy and safety</span>
															</a>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span className="ps-3">Notifications</span>
															</a>
														</div>
													</div>
												</div>
											</div>

											<div className="d-lg-none">
												<div className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center px-0">
													<div className="d-inline-block">
														<div className="icon icon-shape icon-xs border-radius-md bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center">
															<i className="far fa-user fs-6" />
														</div>
													</div>
													Dashbord
												</div>
												<a href="/" className="dropdown-item border-radius-md">
													<span className="ps-3">Overview</span>
												</a>
												<a href="/" className="dropdown-item border-radius-md">
													<span className="ps-3">Fundraising</span>
												</a>
												<a href="/" className="dropdown-item border-radius-md">
													<span className="ps-3">Investing</span>
												</a>
												<a href="/" className="dropdown-item border-radius-md">
													<span className="ps-3">Post</span>
												</a>
												<a href="/" className="dropdown-item border-radius-md">
													<span className="ps-3">Message</span>
												</a>
												<div className="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3">
													<div className="d-inline-block">
														<div className="icon icon-shape icon-xs border-radius-md bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center ps-0">
															<i className="far fa-user fs-6" />
														</div>
													</div>
													Create Fund
												</div>
												<a href="/" className="dropdown-item border-radius-md">
													<span className="ps-3">Apply</span>
												</a>
												<div className="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3">
													<div className="d-inline-block">
														<div className="icon icon-shape icon-xs border-radius-md bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center ps-0">
															<i className="far fa-user fs-6" />
														</div>
													</div>
													Setting
												</div>
												<a href="/" className="dropdown-item border-radius-md">
													<span className="ps-3">Account</span>
												</a>
												<a href="/" className="dropdown-item border-radius-md">
													<span className="ps-3">Security</span>
												</a>
												<a href="/" className="dropdown-item border-radius-md">
													<span className="ps-3">Connected Address</span>
												</a>
												<a href="/" className="dropdown-item border-radius-md">
													<span className="ps-3">Privacy and safety</span>
												</a>
												<a href="/" className="dropdown-item border-radius-md">
													<span className="ps-3">Notifications</span>
												</a>
											</div>
										</div>
									</li>
									<li className="nav-item dropdown dropdown-hover mx-3">
										<a
											className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center font-weight-bolder"
											role="button"
											id="dropdownMenuDocs"
											data-bs-toggle="dropdown"
											aria-expanded="false"
											href="/"
										>
											Funds
											<img
												src={DownArrowDark}
												alt="down-arrow"
												className="arrow ms-1"
											/>
										</a>
										<div
											className="dropdown-menu dropdown-menu-animation dropdown-lg mt-0 mt-lg-3 p-3 border-radius-lg"
											aria-labelledby="dropdownMenuDocs"
										>
											<div className="d-none d-lg-block">
												<ul className="list-group">
													<li className="nav-item list-group-item border-0 p-0">
														<a
															className="dropdown-item py-2 ps-3 border-radius-md"
															href="/"
														>
															<div className="d-flex">
																<div className="icon h-10 me-3 d-flex mt-1">
																	<i className="fas fa-sync-alt fs-6 text-secondary" />
																</div>
																<div>
																	<h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
																		Explore all Funds
																	</h6>
																	<span className="text-sm">
																		Subscribe quarterly invest in experienced
																		VCs.
																	</span>
																</div>
															</div>
														</a>
													</li>
													<li className="nav-item list-group-item border-0 p-0">
														<a
															className="dropdown-item py-2 ps-3 border-radius-md"
															href="/"
														>
															<div className="d-flex">
																<div className="icon h-10 me-3 d-flex mt-1">
																	<i className="fas fa-medal fs-6 text-secondary" />
																</div>
																<div>
																	<h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
																		Ranking
																	</h6>
																	<span className="text-sm">
																		Find the most profitable funds here
																	</span>
																</div>
															</div>
														</a>
													</li>
													<li className="nav-item list-group-item border-0 p-0">
														<a
															className="dropdown-item py-2 ps-3 border-radius-md"
															href="/"
														>
															<div className="d-flex">
																<div className="icon h-10 me-3 d-flex mt-1">
																	<i className="fas fa-calculator fs-6 text-secondary" />
																</div>
																<div>
																	<h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
																		Calculate Fund Returns
																	</h6>
																	<span className="text-sm">
																		Rolling Fund Fees Breakdown
																	</span>
																</div>
															</div>
														</a>
													</li>
												</ul>
											</div>
											<div className="row d-lg-none">
												<div className="col-md-12 g-0">
													<a
														className="dropdown-item py-2 ps-3 border-radius-md"
														href="/"
													>
														<div className="d-flex">
															<div className="icon h-10 me-3 d-flex mt-1">
																<i className="fas fa-sync-alt fs-6 text-secondary" />
															</div>
															<div>
																<h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
																	Explore all Funds
																</h6>
																<span className="text-xs">
																	Invest in experienced VCs.
																</span>
															</div>
														</div>
													</a>
													<a
														className="dropdown-item py-2 ps-3 border-radius-md"
														href="/"
													>
														<div className="d-flex">
															<div className="icon h-10 me-3 d-flex mt-1">
																<i className="fas fa-eye fs-6 text-secondary" />
															</div>
															<div>
																<h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
																	Ranking
																</h6>
																<span className="text-xs">
																	Find the most profitable funds here
																</span>
															</div>
														</div>
													</a>
													<a
														className="dropdown-item py-2 ps-3 border-radius-md"
														href="/"
													>
														<div className="d-flex">
															<div className="icon h-10 me-3 d-flex mt-1">
																<i className="fas fa-calculator fs-6 text-secondary" />
															</div>
															<div>
																<h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
																	Calculate Fund Returns
																</h6>
																<span className="text-xs">
																	Rolling Fund Fees Breakdown
																</span>
															</div>
														</div>
													</a>
												</div>
											</div>
										</div>
									</li>
									<li className="nav-item dropdown dropdown-hover mx-3">
										<a
											role="button"
											className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center font-weight-bolder"
											id="dropdownMenuAccount"
											data-bs-toggle="dropdown"
											aria-expanded="false"
											href="/"
										>
											Share NFTs
											<img
												src={DownArrowDark}
												alt="down-arrow"
												className="arrow ms-1"
											/>
										</a>
										<div
											className="dropdown-menu dropdown-menu-animation dropdown-lg mt-0 mt-lg-3 p-3 border-radius-lg"
											aria-labelledby="dropdownMenuDocs"
										>
											<div className="d-none d-lg-block">
												<ul className="list-group">
													<li className="nav-item list-group-item border-0 p-0">
														<a
															className="dropdown-item py-2 ps-3 border-radius-md"
															href="/"
														>
															<div className="d-flex">
																<div className="icon h-10 me-3 d-flex mt-1">
																	<i className="fas fa-exchange-alt fs-6 text-secondary" />
																</div>
																<div>
																	<h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
																		Trade NFTs
																	</h6>
																	<span className="text-sm">
																		Earn profit to trade Fund share NFTs
																	</span>
																</div>
															</div>
														</a>
													</li>
													<li className="nav-item list-group-item border-0 p-0">
														<a
															className="dropdown-item py-2 ps-3 border-radius-md"
															href="/"
														>
															<div className="d-flex">
																<div className="icon h-10 me-3 d-flex mt-1">
																	<i className="fas fa-medal fs-6 text-secondary" />
																</div>
																<div>
																	<h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
																		Ranking
																	</h6>
																	<span className="text-sm">
																		Find the most trending NFTs here
																	</span>
																</div>
															</div>
														</a>
													</li>
												</ul>
											</div>
											<div className="row d-lg-none">
												<div className="col-md-12 g-0">
													<a
														className="dropdown-item py-2 ps-3 border-radius-md"
														href="/"
													>
														<div className="d-flex">
															<div className="icon h-10 me-3 d-flex mt-1">
																<i className="fas fa-sync-alt fs-6 text-secondary" />
															</div>
															<div>
																<h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
																	Trade NFTs
																</h6>
																<span className="text-sm">
																	Earn profit to trade Fund share NFTs
																</span>
															</div>
														</div>
													</a>
													<a
														className="dropdown-item py-2 ps-3 border-radius-md"
														href="/"
													>
														<div className="d-flex">
															<div className="icon h-10 me-3 d-flex mt-1">
																<i className="fas fa-eye fs-6 text-secondary" />
															</div>
															<div>
																<h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
																	Ranking
																</h6>
																<span className="text-sm">
																	Find the most trending NFTs here
																</span>
															</div>
														</div>
													</a>
												</div>
											</div>
										</div>
									</li>
									<li className="nav-item dropdown dropdown-hover mx-3">
										<a
											className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center font-weight-bolder"
											role="button"
											id="dropdownMenuBlocks"
											data-bs-toggle="dropdown"
											aria-expanded="false"
											href="/"
										>
											<span>About</span>
											<img
												src={DownArrowDark}
												alt="down-arrow"
												className="arrow ms-1"
											/>
										</a>
										<div
											className="dropdown-menu dropdown-menu-animation dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
											aria-labelledby="dropdownMenuPages10"
										>
											<div className="row d-none d-lg-block">
												<div className="col-12 px-4 py-2">
													<div className="row">
														<div className="col-12 position-relative">
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span>Blog</span>
															</a>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span>Pressrelease</span>
															</a>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span>About Us</span>
															</a>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span>Jobs</span>
															</a>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span>Affiliates</span>
															</a>
															<a
																href="/"
																className="dropdown-item border-radius-md"
															>
																<span>Mediakit</span>
															</a>
														</div>
													</div>
												</div>
											</div>

											<div className="d-lg-none">
												<a href="/" className="dropdown-item border-radius-md">
													<span>Blog</span>
												</a>
												<a href="/" className="dropdown-item border-radius-md">
													<span>Pressrelease</span>
												</a>
												<a href="/" className="dropdown-item border-radius-md">
													<span>About Us</span>
												</a>
												<a href="/" className="dropdown-item border-radius-md">
													<span>Jobs</span>
												</a>
												<a href="/" className="dropdown-item border-radius-md">
													<span>Affiliates</span>
												</a>
												<a href="/" className="dropdown-item border-radius-md">
													<span>Mediakit</span>
												</a>
											</div>
										</div>
									</li>
								</ul>
								{isLogined ? (
									<ul className="navbar-nav d-lg-block d-none">
										<li className="nav-item dropdown dropdown-hover px-1 me-1">
											<a href='/' className="nav-link btn btn-link mb-0 px-3">
												<i className="fa-regular fa-bell fs-5 text-gray-600" />
												<span className="unread" />
											</a>
											<div
												className="dropdown-menu dropdown-menu-animation dropdown-lg dropdown-right p-3 border-radius-xl mt-0 mt-lg-3"
												aria-labelledby="dropdownMenuPages10"
											>
												<div className="row d-none d-lg-block">
													<div className="col-12 px-1 py-2">
														<div className="row">
															<div className="col-12 position-relative">
																<div className="d-flex justify-content-between px-2">
																	<div className="fs-7 font-weight-bold">
																		<i className="fa-regular fa-bell fs-5 text-gray-600 me-2" />
																		Notifications (999)
																	</div>
																	<button
																		type="button"
																		className="btn btn-outline-primary btn-xs mb-0"
																	>
																		Read All
																	</button>
																</div>
																<hr className="horizontal dark mt-3 mb-2" />
																<a
																	href="\"
																	className="dropdown-item border-radius-md text-wrap"
																>
																	<div className="d-flex justify-content-start align-items-center">
																		<div className="me-2">
																			<img
																				src="./assets/img/goemon/announce_100x100-2.png"
																				className="avatar_img"
																				alt=''
																			/>
																		</div>
																		<div className="w-100">
																			<p className="fs-8 text-secondary mt-minus1 mb-0 text-end">
																				3 hour
																			</p>
																			<span className="fs-7 font-weight-bolder">
																				ABC Crypto Fund
																			</span>
																			<p className="fs-7 mb-0 lh-sm">
																				Added fund investment destinations.
																				Please check here for details.
																			</p>
																		</div>
																	</div>
																</a>
																<hr className="horizontal dark mt-3 mb-2" />
																<a
																	href="\"
																	className="dropdown-item border-radius-md text-wrap"
																>
																	<div className="d-flex justify-content-start align-items-center">
																		<div className="me-2">
																			<img
																				src="./assets/img/goemon/announce_100x100-2.png"
																				className="avatar_img"
																				alt=''
																			/>
																		</div>
																		<div className="w-100">
																			<p className="fs-8 text-secondary mt-minus1 mb-0 text-end">
																				3 hour
																			</p>
																			<span className="fs-7 font-weight-bolder">
																				ABC Crypto Fund
																			</span>
																			<p className="fs-7 mb-0 lh-sm">
																				Added fund investment destinations.
																				Please check here for details.
																			</p>
																		</div>
																	</div>
																</a>
																<hr className="horizontal dark mt-3 mb-2" />
																<a
																	href="\"
																	className="dropdown-item border-radius-md text-wrap"
																>
																	<div className="d-flex justify-content-start align-items-center">
																		<div className="me-2">
																			<img
																				src="./assets/img/goemon/announce_100x100-2.png"
																				className="avatar_img"
																				alt=''
																			/>
																		</div>
																		<div className="w-100">
																			<p className="fs-8 text-secondary mt-minus1 mb-0 text-end">
																				10-23 16:00
																			</p>
																			<span className="fs-7 font-weight-bolder">
																				Deposit Confirmed
																			</span>
																			<p className="fs-7 mb-0 lh-sm">
																				Your deposit has been confirmed. Deposit
																				amount: 10000.0000 USDT
																			</p>
																		</div>
																	</div>
																</a>
																<hr className="horizontal dark mt-3 mb-2" />
															</div>
														</div>
													</div>
												</div>
												{/* Message > Mobile */}
												<div className="d-lg-none">
													<a
														href="/"
														className="dropdown-item border-radius-md"
													>
														<span>Blog</span>
													</a>
													<a
														href="/"
														className="dropdown-item border-radius-md"
													>
														<span>Pressrelease</span>
													</a>
													<a
														href="/"
														className="dropdown-item border-radius-md"
													>
														<span>About Us</span>
													</a>
													<a
														href="/"
														className="dropdown-item border-radius-md"
													>
														<span>Jobs</span>
													</a>
													<a
														href="/"
														className="dropdown-item border-radius-md"
													>
														<span>Affiliates</span>
													</a>
													<a
														href="/"
														className="dropdown-item border-radius-md"
													>
														<span>Mediakit</span>
													</a>
												</div>
											</div>
										</li>
										{/* Message */}
										<li className="nav-item dropdown dropdown-hover px-1 me-2">
											<a href="/" className="nav-link btn btn-link mb-0 px-3">
												<i className="far fa-envelope fs-5 text-gray-600" />
												<span className="unread" />
											</a>
											<div
												className="dropdown-menu dropdown-menu-animation dropdown-lg dropdown-right p-3 border-radius-xl mt-0 mt-lg-3"
												aria-labelledby="dropdownMenuPages10"
											>
												<div className="row d-none d-lg-block">
													<div className="col-12 px-1 py-2">
														<div className="row">
															<div className="col-12 position-relative">
																<div className="d-flex justify-content-between px-2">
																	<div className="fs-7 font-weight-bold">
																		<i className="far fa-envelope fs-5 text-gray-600 me-2" />
																		Inbox (999)
																	</div>
																	<button
																		type="button"
																		className="btn btn-outline-primary btn-xs mb-0"
																	>
																		See All in Inbox
																	</button>
																</div>
																<hr className="horizontal dark mt-3 mb-2" />
																<a
																	href="\"
																	className="dropdown-item border-radius-md text-wrap"
																>
																	<div className="d-flex justify-content-start align-items-center">
																		<div className="me-2">
																			<img
																				src="./assets/img/goemon/avatar_2.png"
																				className="avatar_img"
																				alt=""
																			/>
																		</div>
																		<div className="w-100">
																			<p className="fs-8 text-secondary mt-minus1 mb-0 text-end">
																				3 hour
																			</p>
																			<span className="fs-7 font-weight-bolder">
																				Mark Zackerbarg
																			</span>
																			<p className="fs-7 mb-0 lh-sm">
																				HHi thanks for contacting me! Nothing
																				will ever enter my wallet. The earnings
																				will go into the contract and can be...
																			</p>
																		</div>
																	</div>
																</a>
																<hr className="horizontal dark mt-3 mb-2" />
																<a
																	href="\"
																	className="dropdown-item border-radius-md text-wrap"
																>
																	<div className="d-flex justify-content-start align-items-center">
																		<div className="me-2">
																			<img
																				src="./assets/img/goemon/avatar_2.png"
																				className="avatar_img"
																				alt=""
																			/>
																		</div>
																		<div className="w-100">
																			<p className="fs-8 text-secondary mt-minus1 mb-0 text-end">
																				10-20 17:45
																			</p>
																			<span className="fs-7 font-weight-bolder">
																				Mark Zackerbarg
																			</span>
																			<p className="fs-7 mb-0 lh-sm">
																				HHi thanks for contacting me! Nothing
																				will ever enter my wallet. The earnings
																				will go into the contract and can be...
																			</p>
																		</div>
																	</div>
																</a>
																<hr className="horizontal dark mt-3 mb-2" />
																<a
																	href="\"
																	className="dropdown-item border-radius-md text-wrap"
																>
																	<div className="d-flex justify-content-start align-items-center">
																		<div className="me-2">
																			<img
																				src="./assets/img/goemon/avatar_2.png"
																				className="avatar_img"
																				alt=""
																			/>
																		</div>
																		<div className="w-100">
																			<p className="fs-8 text-secondary mt-minus1 mb-0 text-end">
																				10-1 18:00
																			</p>
																			<span className="fs-7 font-weight-bolder">
																				Mark Zackerbarg
																			</span>
																			<p className="fs-7 mb-0 lh-sm">
																				HHi thanks for contacting me! Nothing
																				will ever enter my wallet. The earnings
																				will go into the contract and can be...
																			</p>
																		</div>
																	</div>
																</a>
																<hr className="horizontal dark mt-3 mb-2" />
															</div>
														</div>
													</div>
												</div>
												{/* Message > Mobile */}
												<div className="d-lg-none">
													<a
														href="\"
														className="dropdown-item border-radius-md"
													>
														<span>Blog</span>
													</a>
													<a
														href="\"
														className="dropdown-item border-radius-md"
													>
														<span>Pressrelease</span>
													</a>
													<a
														href="\"
														className="dropdown-item border-radius-md"
													>
														<span>About Us</span>
													</a>
													<a
														href="\"
														className="dropdown-item border-radius-md"
													>
														<span>Jobs</span>
													</a>
													<a
														href="\"
														className="dropdown-item border-radius-md"
													>
														<span>Affiliates</span>
													</a>
													<a
														href="\"
														className="dropdown-item border-radius-md"
													>
														<span>Mediakit</span>
													</a>
												</div>
											</div>
										</li>
										<li className="nav-item" onClick={() => setVisibleSideBar(true)}>
        							<label className="btn btn-link mb-0 me-3 p-0" htmlFor="expand-toggle"><img src={FundLogo1} className="avatar_img" alt=''/></label>
      							</li>
									</ul>
								) : (
									<button
										type="button"
										className="btn btn-sm bg-gradient-primary btn-round mb-0 me-1 px-4"
										onClick={() => setVisibleModalLogin(true)}
										disabled={isLoading}
									>
										{isLoading ? (
											<i className="fa-solid fa-sync input-right-text fa-spin fs-6 me-2" />
										) : (
											``
										)}
										Login / Sign up
									</button>
								)}
							</div>
						</div>
					</nav>
				</div>
			</div>
			<label
				id="nav-close"
				className={`${visibleSideBar || visibleModalLogin ? 'pd-modal' : ''}`}
				onClick={onResetVissble}
			/>
			<SiderBar
				visible={visibleSideBar}
				setVisible={setVisibleSideBar}
				logout={logout}
				profile={profile}
			/>
			<ModalLogin
				visible={visibleModalLogin}
				setVisible={setVisibleModalLogin}
			/>
		</Wrapper>
	);
}

export default Navbar;
