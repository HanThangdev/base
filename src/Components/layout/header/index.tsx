/* eslint-disable jsx-a11y/label-has-associated-control */
import { Wrapper } from './styled';

function Header() {
	return (
		<Wrapper>
			<div className="page-header min-vh-50">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 text-white">
							<p className="text-white fs-2 font-weight-bolder mb-minus1 fadeIn2 fadeInBottom">
								Invest in
							</p>
							<h2 className="text-white fs-1 fadeIn2 fadeInBottom">
								Crypto Rolling Fund
							</h2>
							<p className="lead opacity-9 fadeIn2 fadeInBottom">
								Browse Rolling Funds to find the right fit for you. Subscribe
								quarterly, invest alongside top VCs, and adjust your investment
								size as your goals evolve.
							</p>
							<button type="button" className="btn btn-outline-light my-4">
								Calculate Fund Returns
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				className="position-relative overflow-hidden"
				style={{ height: 36, marginTop: -33 }}
			>
				<div
					className="w-full absolute bottom-0 start-0 end-0"
					style={{
						transform: 'scale(2)',
						transformOrigin: 'top center',
						color: '#fff',
					}}
				>
					<svg
						viewBox="0 0 2880 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
							fill="currentColor"
						/>
					</svg>
				</div>
			</div>
			<div className="container">
				<div className="row bg-white shadow-lg mt-n6 border-radius-md pb-4 p-3 mx-sm-0 mx-1 position-relative">
					<div className="col-lg-3 mt-lg-n2 mt-2">
						<label className="">Filter by: </label>
						<select
							className="form-control"
							name="choices-button"
							id="choices-button"
						>
							<option value="allfunds" selected>
								All Funds
							</option>
							<option value="featured">Featured</option>
							<option value="notwhitelist">Not Whitelist</option>
						</select>
					</div>
					<div className="col-lg-3 mt-lg-n2 mt-2">
						<label className="">Sort by: </label>
						<select
							className="form-control"
							name="choices-remove-button"
							id="choices-remove-button"
						>
							<option value="mostfollower" selected>
								Most Follower
							</option>
							<option value="hiestfundsize">Hiest Fund size</option>
							<option value="newest">Newest</option>
							<option value="oldest">Oldest</option>
							<option value="mininvest_low">Min Invest: Low to High</option>
							<option value="mininvest_high">Min Invest: high to Low</option>
						</select>
					</div>
					<div className="col-lg-3 mt-lg-n2 mt-2">
						<label className="">Search: </label>
						<div className="input-group">
							<span className="input-group-text">
								<i className="fas fa-search" aria-hidden="true" />
							</span>
							<input
								type="text"
								className="form-control"
								inputMode="text"
								placeholder="Fund name etc..."
								// onFocus="focused(this)"
								// onfocusout="defocused(this)"
							/>
						</div>
					</div>
					<div className="col-lg-3 mt-lg-n2 mt-2">
						<label className="">&nbsp;</label>
						<button type="button" className="btn bg-gradient-dark w-100 mb-0">
							Search
						</button>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default Header;
