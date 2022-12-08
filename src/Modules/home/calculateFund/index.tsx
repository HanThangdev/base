/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-useless-return */
/* eslint-disable no-else-return */
import { useState } from 'react';
import { WavesWhite } from '@assets/template/img';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { isEmpty } from 'lodash';
import { Collapse, ModalBody, ModalHeader } from 'reactstrap';
import { FormInput } from '@components';
import { Modal } from '@components/modal';
import { formatCurrentcy } from '@utils/number';
import { regex } from '@utils/regex';
// import { errorForm } from '@constants';
import { Divider } from '@themes/goemon';
import { CALCULATE, errorForm } from '@constants';
import Calculator from './calculate';

const validationSchema = yup
	.object({
		invest_per_quarter: yup
			.number()
			.typeError(errorForm.REQUIRED)
			.required(errorForm.REQUIRED)
			.moreThan(CALCULATE.MIN_INVEST_PER_QUARTER, errorForm.GREATER_THAN_5K_QUARTER)
			.max(CALCULATE.MAX_INVEST_PER_QUARTER, errorForm.INVESTMENT_PER_QUARTER_MAX),
		how_long_do_you_invester: yup
			.number()
			.typeError(errorForm.REQUIRED)
			.required(errorForm.REQUIRED)
			.moreThan(0, errorForm.GREATER_THAN_0),
		management_fee: yup
			.number()
			.typeError(errorForm.REQUIRED)
			.required(errorForm.REQUIRED)
			.moreThan(CALCULATE.MIN_MANAGEMENT_FEE, errorForm.MANAGERMENT_FEE_LIMITED)
			.max(CALCULATE.MAX_MANAGEMENT_FEE, errorForm.MANAGERMENT_FEE_LIMITED),
		carry: yup
			.number()
			.typeError(errorForm.REQUIRED)
			.required(errorForm.REQUIRED)
			.moreThan(CALCULATE.MIN_CARRY, errorForm.CARRY_LIMITED)
			.max(CALCULATE.MAX_CARRY, errorForm.CARRY_LIMITED),
		expected_return_multiple: yup
			.number()
			.typeError(errorForm.REQUIRED)
			.required(errorForm.REQUIRED)
			.moreThan(CALCULATE.MIN_EXPECTED_RETURN_MULTIPLE, errorForm.GREATER_THAN_0),
	})
	.required();

const defaultValues = {
	invest_per_quarter: '',
	how_long_do_you_invester: '',
	management_fee: '',
	carry: '',
	expected_return_multiple: '',
};

function CalculateFund() {
	const form = useForm({
		resolver: yupResolver(validationSchema),
	});
	const {
		handleSubmit,
		reset,
		setValue
		// formState: { errors },
	} = form;

	const [dataCalculate, setDataCalculate] = useState(
		new Calculator(0, 0, 0, 0, 0)
	);
	const [visibleModal, setVisibleModal] = useState<boolean>(false);
	const [colapse, setColapse] = useState<boolean>(false);
	const calculatedNow = async (value: any) => {
		const {
			invest_per_quarter,
			how_long_do_you_invester,
			management_fee,
			carry,
			expected_return_multiple,
		} = value;
		const calculator = new Calculator(
			invest_per_quarter,
			how_long_do_you_invester,
			management_fee,
			carry,
			expected_return_multiple
		);
		setDataCalculate(calculator);
		setVisibleModal(!visibleModal);
	};

	const toggle = () => {
		setVisibleModal(!visibleModal);
		setColapse(false);
	};

	const onResetCalculate = () => {
		setVisibleModal(!visibleModal);
		setColapse(!colapse);
		reset(defaultValues);
	};
	const renderCalculated = () => (
		<>
			<ModalHeader className="border-0 pb-0">
				<button
					type="button"
					className="btn-close text-dark"
					data-bs-dismiss="modal"
					aria-label="Close"
					onClick={toggle}
				>
					<i className="fas fa-times" aria-hidden="true" />
				</button>
				<div className="text-center mt-2">
					<h5 className="text-sm text-gradient text-primary">YOUR RESULT</h5>
				</div>
			</ModalHeader>
			<ModalBody>
				<div className="row py-3">
					<div className="col-md-6 font-weight-bolder">Invested capital</div>
					<div className="col-md-6 text-md-end">
						$ {formatCurrentcy(dataCalculate.investmentCapital())}
					</div>
				</div>
				<Divider />
				<div className="row py-3">
					<div className="col-md-6 font-weight-bolder">Distribution</div>

					<div className="col-md-6 text-md-end">
						$ {formatCurrentcy(dataCalculate.distribution())}
					</div>
				</div>

				<Divider />
				<div className="row py-3">
					<div className="col-md-6 font-weight-bolder">
						Carry Paid to the Fund Manager
					</div>
					<div className="col-md-6 text-md-end">
						$ {formatCurrentcy(dataCalculate.carryPaidToTheFundManager())}
					</div>
				</div>

				<Divider style={{ height: '2px', backgroundColor: '#000' }} />
				<div className="row py-3">
					<div className="col-md-6 font-weight-bolder">
						Net distribution paid out to the investor
					</div>
					<div className="col-md-6 text-md-end">
						${` `}
						{formatCurrentcy(
							dataCalculate.netDistributionPaidOutToTheInvestor()
						)}
					</div>
				</div>
				<Divider />
				<div className="row py-3">
					<div className="col-md-6 font-weight-bolder">Net Return Multiple</div>
					<div className="col-md-6 text-md-end">
						{formatCurrentcy(dataCalculate.netReturnMultiple())}x
					</div>
				</div>
				<button
					type="button"
					className="btn text-primary"
					onClick={() => setColapse(!colapse)}
				>
					Show more details
				</button>
				<Collapse
					className="row px-3 max-height-vh-40 overflow-y-scroll"
					isOpen={colapse}
				>
					<h5 className="row py-3 font-weight-bold">Inputs</h5>
					<Divider style={{ height: '2px', backgroundColor: '#000' }} />
					<div className="row py-3">
						<div className="col-md-6 font-weight-bolder">
							Invested capital per quarter
						</div>
						<div className="col-md-6 text-md-end">
							$ {formatCurrentcy(dataCalculate.invest_per_quarter)}
						</div>
					</div>
					<Divider />
					<div className="row py-3">
						<div className="col-md-6 font-weight-bolder">
							Minimum subscription period
						</div>
						<div className="col-md-6 text-md-end">
							{dataCalculate.how_long_do_you_invester} quarters
						</div>
					</div>
					<Divider />
					<div className="row py-3">
						<div className="col-md-6 font-weight-bolder">Management fee</div>
						<div className="col-md-6 text-md-end">
							{formatCurrentcy(dataCalculate.management_fee)}%
						</div>
					</div>
					<Divider />
					<div className="row py-3">
						<div className="col-md-6 font-weight-bolder">Carry percentage</div>
						<div className="col-md-6 text-md-end">{dataCalculate.carry}%</div>
					</div>
					<Divider />
					<div className="row py-3">
						<div className="col-md-6 font-weight-bolder">
							Expected Return Multiple
						</div>
						<div className="col-md-6 text-md-end">
							{formatCurrentcy(dataCalculate.expected_return_multiple)}x
						</div>
					</div>
					<Divider />
					<h5 className="row py-3 font-weight-bold">Breakdown</h5>
					<Divider style={{ height: '2px', backgroundColor: '#000' }} />
					<div className="row py-3">
						<div className="col-sm-4 font-weight-bolder">Contributed capital</div>
						<span className="col-sm-4 fs-8">{`[${formatCurrentcy(
							dataCalculate.invest_per_quarter
						)} per quarter x ${dataCalculate.how_long_do_you_invester
							} quarters]`}</span>
						<div className="col-sm-4 text-sm-end">
							$ {formatCurrentcy(dataCalculate.contributedCapital())}
						</div>
					</div>
					<Divider />
					<div className="row py-3">
						<div className="col-sm-4 font-weight-bolder">Management fees</div>
						<span className="col-sm-4 fs-8">{`
[invested capital x ${dataCalculate.management_fee}%] paid out over ${CALCULATE.PAID_YEAR} years`}</span>
						<div className="col-sm-4 text-sm-end">
							-$ {formatCurrentcy(dataCalculate.managementFees())}
						</div>
					</div>
					<Divider />
					<div className="row py-3">
						<div className="col-sm-4 font-weight-bolder">Goemon admin. fees</div>
						<span className="col-sm-4 fs-8">{`[invested capital x ${CALCULATE.GOEMON_ADMIN_FEES}%] paid out over ${CALCULATE.PAID_YEAR} years`}</span>
						<div className="col-sm-4 text-sm-end">
							-$ {formatCurrentcy(dataCalculate.goemonAdminFees())}
						</div>
					</div>
					<Divider />
					<div className="row py-3">
						<div className="col-sm-4 font-weight-bolder">Investable capital</div>
						<span className="col-sm-4 text-modal-nowrap fs-8">[invested capital - (management fees + Goemon admin. fees)]</span>
						<div className="col-sm-4 text-sm-end">
							$ {formatCurrentcy(dataCalculate.investableCapital())}
						</div>
					</div>
					<Divider />
					<div className="row py-3">
						<div className="col-sm-4 font-weight-bolder">Distribution</div>
						<span className="col-sm-4 fs-8">{`
[investable capital x ${dataCalculate.expected_return_multiple}x Expected return multiple]`}</span>
						<div className="col-sm-4 text-sm-end">
							$ {formatCurrentcy(dataCalculate.distribution())}
						</div>
					</div>
					<Divider />
					<div className="row py-3">
						<div className="col-sm-4 font-weight-bolder">
							Carry paid to the fund manager
						</div>
						<span className="col-sm-4 fs-8">{`
							[${dataCalculate.carry}% carry of distribution]`}</span>
						<div className="col-sm-4 text-sm-end">
							-$ {formatCurrentcy(dataCalculate.carryPaidToTheFundManager())}
						</div>
					</div>
					<Divider />
					<h5 className="row py-3 font-weight-bold">Net returns</h5>
					<Divider style={{ height: '2px', backgroundColor: '#000' }} />
					<div className="row py-3">
						<div className="col-sm-4 font-weight-bolder">
							Net distribution paid out to the investor
						</div>
						<span className="col-sm-4 fs-8">
							[distribution - carry paid to the fund manager]
						</span>
						<div className="col-sm-4 text-sm-end">
							${' '}
							{formatCurrentcy(
								dataCalculate.netDistributionPaidOutToTheInvestor()
							)}
						</div>
					</div>
					<Divider />
					<div className="row py-3">
						<div className="col-sm-4 font-weight-bolder">Net Return Multiple</div>
						<span className="col-sm-4 fs-8">[net distribution / invested capital]</span>
						<div className="col-sm-4 text-sm-end">
							{formatCurrentcy(dataCalculate.netReturnMultiple())}x
						</div>
					</div>
					<Divider />
					<div className="row py-3 justify-content-center">
						<button
							type="button"
							className="btn text-primary w-25"
							onClick={onResetCalculate}
						>
							Reset
						</button>
					</div>
				</Collapse>
			</ModalBody>
		</>
	);

	return (
		<section className="pt-9 pb-8 my-10 bg-gradient-primary position-relative overflow-hidden" id="calculator">
			<img
				src={WavesWhite}
				alt="pattern-lines"
				className="position-absolute start-0 top-0 h-100 z-index-1 opacity-6"
			/>
			<div className="container position-relative z-index-1">
				<div className="row">
					<div className="col-lg-6 col-md-12 d-flex justify-content-top flex-column">
						<h2 className="text-white fadeIn2 fadeInBottom">
							Rolling Funds Fees & Distributions Breakdown
						</h2>
						<p className="lead pe-5 text-white pacity-9 z-index-1 fadeIn2 fadeInBottom">
							Use our Rolling Funds Fees & Distribution Calculator to explore
							different investment scenarios and understand the associated fees
							and returns.
						</p>
						<p className="mt-4 text-white opacity-8 z-index-1 fadeIn2 fadeInBottom">
							This cariculate is used to provide approximate estimates of
							performance. Actual performance may vary significantly depending
							on the specific terms of the Rolling Fund. Smaller funds may incur
							higher fees. Please check each fund&apos;s associated fees.
						</p>
					</div>
					<div className="col-lg-6">
						<div className="card mt-5 mt-lg-0 pt-3">
							<FormProvider {...form}>
								<form
									onSubmit={handleSubmit(calculatedNow)}
									id="contact-form"
									method="post"
									autoComplete="off"
								>
									<div className="card-body">
										<div className="row">
											<div className="col-md-6">
												<label className="">Investment per Quarter</label>
												<FormInput
													type="text"
													name="invest_per_quarter"
													placeholder="0,000"
													className="input-group mb-2"
													prefix="$"
													onChange={
														(e: any) => {
															if ((!regex.integerNumber0.test((e.target.value)) && e.target.value !== '') || e.target.value > CALCULATE.MAX_INVEST_PER_QUARTER  ) {
																return;
															}else{
																setValue("invest_per_quarter", e.target.value)
															}
														}}
												/>
											</div>
											<div className="col-md-6">
												<label className="">How long do you invest?</label>
												<FormInput
													className="input-group  mb-2"
													type="text"
													name="how_long_do_you_invester"
													placeholder="0"
													suffix="quarter"
													onChange={
														(e: any) => {
															if (!regex.interger0to100.test(e.target.value) && e.target.value !== '') {
																return;
															}else{
																setValue("how_long_do_you_invester", e.target.value)
															}
														}}
												/>
											</div>
											<div className="col-md-4">
												<label className="">Management Fee</label>
												<FormInput
													className="input-group mb-2"
													type="text"
													name="management_fee"
													placeholder="0"
													suffix="%"
													onChange={
														(e: any) => {
															if (!regex.decimal0to99_2digit.test(e.target.value) && e.target.value !== '') {
																return;
															}else{
																setValue("management_fee", e.target.value)
															}
														}}
												/>
											</div>
											<div className="col-md-4">
												<label className="">Carry</label>
												<FormInput
													className="input-group mb-2"
													type="text"
													name="carry"
													placeholder="0"
													suffix="%"
													onChange={
														(e: any) => {
															if (!regex.decimal0to99_2digit.test(e.target.value) && e.target.value !== '') {
																return;
															}else{
																setValue("carry", e.target.value)
															}
														}}
												/>
											</div>
											<div className="col-md-4">
												<label className="">Expected return multiple</label>
												<FormInput
													className="input-group mb-2"
													type="text"
													name="expected_return_multiple"
													placeholder="0"
													suffix="X"
													onChange={
														(e: any) => {
															if ((!regex.decimal1to100_2digit.test(e.target.value) && e.target.value !== '') ||  e.target.value > CALCULATE.MAX_EXPECTED_RETURN_MULTIPLE ) {
																return;
															}else{
																setValue("expected_return_multiple", e.target.value)
															}
														}}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-md-12">
												<button
													type="submit"
													className="btn bg-gradient-dark w-100"
												>
													Calculate Now
												</button>
											</div>
										</div>
									</div>
								</form>
							</FormProvider>
						</div>
					</div>
				</div>
			</div>
			<Modal visible={visibleModal} toggle={toggle}>
				{renderCalculated()}
			</Modal>
		</section>
	);
}

export default CalculateFund;
