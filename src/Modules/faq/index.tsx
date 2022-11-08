/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import { useMemo } from 'react';
import { listFaq } from '@config';
import { useFaq } from '@hooks';
import { useTranslation } from 'react-i18next';
import { formatIdEle } from '@utils/string';
import { FAQ_TABNAME } from '@constants';
import { Wrapper } from './styled';
import FormContact from './send_contact';

function Faq() {
	const { FundManagerFaq, InvestorFaq } = listFaq;
	const { typeTab } = useFaq();
	const [trans] = useTranslation('common');

	const listCurrentFaq = useMemo(
		() => (typeTab ? InvestorFaq : FundManagerFaq),
		[typeTab]
	);

	return (
		<Wrapper className="fund_detail">
			{/* Frequently Asked Questions */}
			<section className="pt-3 pt-md-5 pb-md-5 pt-lg-7">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 mb-lg-0 mb-3">
							<ul className="nav flex-column bg-white border-radius-lg p-3 position-sticky top-100px">
								<h4 className="ps-3">
									{typeTab
										? trans(FAQ_TABNAME.INVESTOR)
										: trans(FAQ_TABNAME.FUND_MANAGER)}
								</h4>
								{listCurrentFaq?.map((it: any) => (
									<li className="nav-item">
										<a
											className="nav-link text-dark"
											data-scroll
											href={`#${formatIdEle(it?.name)}`}
										>
											<i className="fa-solid fa-angle-right me-2" />
											{it?.name}
										</a>
									</li>
								))}
							</ul>
						</div>
						<div className="col-lg-9">
							<div className="accordion" id="Faq_investor">
								{listCurrentFaq?.map((item: any) => (
									<Wrapper key={item.id}>
										<h4 className="pt-7 mb-4 ps-3" id={formatIdEle(item?.name)}>
											{trans(item?.name)}
										</h4>
										{item?.children?.map((it: any) => (
											<div className="accordion-item mb-3">
												<h6 className="accordion-header" id="faqcat2-1">
													<button
														className="accordion-button border-bottom font-weight-bold text-start"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#collapse2-1"
														aria-expanded="true"
														aria-controls="collapse2-1"
													>
														{trans(it?.name)}
														<i className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3" />
														<i className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3" />
													</button>
												</h6>
												<div
													id="collapse2-1"
													className="accordion-collapse collapsing show"
													aria-labelledby="faqcat2-1"
													data-bs-parent="#Faq_investor"
													// style={{height:"100px"}}
												>
													<div className="accordion-body text-m opacity-8">
														{trans(it?.description)}
													</div>
												</div>
											</div>
										))}
									</Wrapper>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Inauery Form */}
			<FormContact />
		</Wrapper>
	);
}

export default Faq;
