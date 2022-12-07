/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import navigator from '@routes/navigation';
import { formatFundSize } from '@utils/number';
import { Wrapper } from './styled';

function SideCard({navigate, fund}: any) {
	return (
		<Wrapper className="card shadow-md mt-md-0 mt-5 position-sticky top-100px">
			<div className="card-header py-2" />
			<div className="card-body mt-0 pt-2">
				<div className="row">
					<div className="col-12 text-end px-5">
						<p className="nav_raised text-black fs-3">$15,250,000</p>
						<span className="nav_subtitle">Fund size</span>
						<div className="progress mb-3">
							<div
								className="progress-bar bg-green"
								role="progressbar"
								aria-valuenow={100}
								aria-valuemin={0}
								aria-valuemax={100}
								aria-label="Mute volume"
								style={{ width: '100%' }}
							/>
						</div>
					</div>
					<div className="col-12 text-end px-5">
						<p className="nav_raised text-black fs-4">$1,315,000</p>
						<span className="nav_subtitle">per Quarterly</span>
						<hr className="horizontal dark" />
					</div>
					<div className="col-12 text-end px-5">
						<p className="nav_raised text-black fs-4">
							265
							<span className="fs-6 text-black-50 ms-2">/ 500</span>
						</p>
						<span className="nav_subtitle">Investors</span>
						<hr className="horizontal dark" />
					</div>
					<div className="col-12 text-end px-5 mb-4">
						<p className="nav_raised text-black fs-4">45 Days</p>
						<span className="nav_subtitle">Left to Invest for Q4, 2022 </span>
					</div>
					<div className="col-lg-12 mb-0">
						<button
							type="button"
							className="btn bg-gradient-primary btn-lg w-100"
							onClick={() => navigate(navigator.INVEST)}
						>
							Subscribe Now
							<span className="badge badge-primary ms-2">Only Whitelist</span>
						</button>
					</div>
				</div>
				<div className="row">
					<hr className="horizontal dark" />
					<div className="col-6">
						<span className="fs-8">Min Quarterly Investment</span>
						<p className="fs-7 font-weight-bolder mt-minus1 mb-1">${formatFundSize(fund?.min_investment_amount)}</p>
					</div>
					<div className="col-6">
						<span className="fs-8">Min Subscription Period</span>
						<p className="fs-7 font-weight-bolder mt-minus1 mb-1">{fund?.min_subscription_period} Quarters</p>
					</div>
					<div className="col-6">
						<span className="fs-8">Subscription Start Date</span>
						<p className="fs-7 font-weight-bolder mt-minus1 mb-1">
							Q4 ) Oct 1, 2022
						</p>
					</div>
					<div className="col-6">
						<span className="fs-8">Redemption period</span>
						<p className="fs-7 font-weight-bolder mt-minus1 mb-1">5 years</p>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default SideCard;
