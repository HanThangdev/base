/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import navigator from '@routes/navigation';
import { Wrapper } from './styled';

interface ICardProps {
	avatar: string;
	description: string;
	isWhiteList: boolean;
	followCount: number;
	backgroundImage: string;
	navigate?: (path: string) => void;
}

function Card({
	avatar,
	description,
	isWhiteList,
	followCount,
	backgroundImage,
	navigate = () => { }
}: ICardProps) {

	return (
		<Wrapper className="col-lg-4 col-sm-6 mb-4 hover-effect">
			<div className="card shadow-md mt-md-0 mt-5 funds-card">
				<div className={`card-header ${backgroundImage}`}>
					<div className="row">
						<div className="col-lg-12 text-end">
							<span className="badge bg-gradient-warning">Featured</span>
						</div>
						<img className="fund_logo" src={avatar} />
					</div>
				</div>
				<div className="card-body mt-0 pt-2">
					<div className="row">
						<div className="col-lg-12 text-end mb-0">
							<button
								type="button"
								className="btn btn-twitter btn-simple text-secondary px-2"
							>
								<i className="fab fa-twitter text-lg" />
							</button>
							<button
								type="button"
								className="btn btn-linkedin btn-simple text-secondary px-2"
							>
								<i className="fab fa-linkedin text-lg" />
							</button>
							<button
								type="button"
								className="btn btn-dribbble btn-simple text-secondary px-2"
							>
								<i className="fab fa-dribbble text-lg" />
							</button>
							<button
								type="button"
								className="btn btn-follow btn-outline-secondary mt-2 ms-2"
							>
								<span>Following</span>
								<span className="badge badge-danger border-white">
									{followCount}
								</span>
							</button>
						</div>
						<div className="col-lg-12 mt-2">
							<h2>GOEMON Web3 Fund</h2>
							<span className="fs-8 font-weight-bold">
								<i className="ni ni-calendar-grid-58 fs-7 me-1" />
								Started December, 2022
							</span>
						</div>
						<div className="col-lg-12 fs-7 description">{description}</div>
						<button type="button" className="btn col-lg-12 d-flex justify-content-center" onClick={() => navigate(navigator.FUND_DETAIL)}>
							<a
								className="btn bg-gradient-primary w-100 my-3 active"
								role="button"
								aria-pressed="true"
							>
								Invest Now
								{isWhiteList && (
									<span className="badge badge-primary ms-2">
										Only Whitelist
									</span>
								)}
							</a>
						</button>
					</div>
					<div className="row">
						<hr className="horizontal dark" />
						<div className="col-6">
							<span className="fs-8">Min Quarterly Investment</span>
							<p className="fs-7 font-weight-bolder mt-minus1 mb-1">$1,000</p>
						</div>
						<div className="col-6">
							<span className="fs-8">Min Subscription Period</span>
							<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
								4 Quarters
							</p>
						</div>
						<div className="col-6">
							<span className="fs-8">Investors</span>
							<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
								356 (1,424 NFTs)
							</p>
						</div>
						<div className="col-6">
							<span className="fs-8">Fund Size</span>
							<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
								$1.2M per quarter
							</p>
						</div>
						<div className="col-6">
							<span className="fs-8">Carry</span>
							<p className="fs-7 font-weight-bolder mt-minus1 mb-1">20-25%</p>
						</div>
						<div className="col-6">
							<span className="fs-8">Fee</span>
							<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
								Mgmt 2% (+ 0.15%)
							</p>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default Card;
