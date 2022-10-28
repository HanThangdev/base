/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react';
import { useWeb3Auth } from '@hooks/useWeb3auth';
import { GOEMON_LOGO, DownArrowDark } from '@assets/template/img';
import { getLocalStorage } from '@utils/storage';
import { ModalLogin } from '@components/modal';
import { LOCAL_WEB3AUTH_LOGINED } from '@constants';
import SiderBar from '../sidebar';
import { Wrapper } from './styled';

function Navbar() {
	const [visibleSideBar, setVisibleSideBar] = useState(false);
	const [visibleModalLogin, setVisibleModalLogin] = useState(false);
	const [profile, setProfile] = useState<unknown | null>(null);
	const { provider, logout, web3Auth } = useWeb3Auth();
	const isLogined = getLocalStorage(LOCAL_WEB3AUTH_LOGINED);

	const onResetVissble = () => {
		setVisibleSideBar(false);
		setVisibleModalLogin(false);
	};

	useEffect(() => {
		if (web3Auth) {
			const getProfile = async () => {
				const user = await web3Auth?.getUserInfo();
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
								<ul className="navbar-nav d-lg-block d-none">
									<ul className="navbar-nav d-lg-block d-none">
										<li className="nav-item" />
										<li className="nav-item">
											{isLogined ? (
												<div
													onClick={() => setVisibleSideBar(true)}
													className="btn btn-sm btn btn-outline-primary btn-round mb-0 me-1 px-4"
													// htmlFor="expand-toggle"
												>
													<i className="fas fa-user me-2" />
													MY ACCOUNT
												</div>
											) : (
												<button
													type="button"
													className="btn btn-sm bg-gradient-primary btn-round mb-0 me-1 px-4"
													onClick={() => setVisibleModalLogin(true)}
												>
													Login / Sign up
												</button>
											)}
										</li>
									</ul>
								</ul>
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
