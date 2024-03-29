/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useCallback, useMemo } from 'react';
import { ICON_WAVES } from '@assets';
import { useFaq } from '@hooks';
import { Payload } from '@type/Store';
import { Input } from 'reactstrap';
import { Link, Wrapper } from './styled';

function HeaderFaq() {
	const { typeTab, toggleTabFaqAction } = useFaq();

	const handleToggleTab = useCallback(
		(isInvestorFaqTab: Payload) => {
			toggleTabFaqAction(isInvestorFaqTab);
		},
		[toggleTabFaqAction, typeTab]
	);

	const isInvestorActive = useMemo(() => (typeTab ? 'active' : ''), [typeTab]);

	const isFundManager = useMemo(() => (!typeTab ? 'active' : ''), [typeTab]);

	return (
		<Wrapper>
			{/* Page Header */}
			<div className="page-header min-vh-50 position-sticky">
				<span className="mask bg-gradient-info" />
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6 text-center mx-auto">
							<h2 className="text-white mb-3">Frequently Asked Questions</h2>
							<p className="lead text-white mb-6">
								Got a question? We&apos;d love to help!
							</p>
						</div>
					</div>
				</div>
				<div className="position-absolute w-100 z-index-1 bottom-0">
					<ICON_WAVES className="waves" />
				</div>
			</div>
			<div className="container w-60">
				<div className="row bg-white shadow-lg mt-n8 border-radius-md pb-4 p-3 mx-sm-0 mx-1 position-relative d-flex justify-content-center">
					<div className="col-lg-8 mt-lg-n2 mt-2">
						<label className="">Search: </label>
						<div className="input-group">
							<span className="input-group-text">
								<i className="fas fa-search" aria-hidden="true" />
							</span>
							<Input
								type="text"
								className="form-control"
								inputMode="text"
								placeholder="Search the FAQ..."
								//   onfocus="focused(this)" onfocusout="defocused(this)"
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
			<div className="container mt-7">
				<div className="row justify-space-between py-2">
					<div className="col-lg-6 mx-auto">
						<div className="nav-wrapper position-relative end-0">
							<ul className="nav nav-pills nav-fill p-1" role="tablist">
								<li
									className="nav-item moving-tab"
									onClick={() => handleToggleTab({ data: { typeTab: true } })}
								>
									<Link
										className={`nav-link mb-0 px-0 py-1 ${isInvestorActive}`}
										data-bs-toggle="tab"
										href="#profile-tabs-icons"
										role="tab"
										aria-selected="true"
									>
										Investor FAQ
									</Link>
								</li>
								<li
									className="nav-item moving-tab"
									onClick={() => handleToggleTab({ data: { typeTab: false } })}
								>
									<Link
										className={`nav-link mb-0 px-0 py-1 ${isFundManager}`}
										data-bs-toggle="tab"
										href="#dashboard-tabs-icons"
										role="tab"
										aria-selected="false"
									>
										Fund Manager FAQ
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default HeaderFaq;
