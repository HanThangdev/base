/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/naming-convention */
import { useState } from 'react';
import { WavesWhite } from '@assets/template/img';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Collapse, ModalBody, ModalHeader } from 'reactstrap';
import { Modal } from '@components/modal';
import { formatCurrentcy } from '@utils/number';
// import { errorForm } from '@constants';
import { Divider } from '@themes/goemon';
import Calculator from './calculate';

const validationSchema = yup
	.object({
		invest_per_quarter: yup.number(),
		how_long_do_you_invester: yup.number(),
		management_fee: yup.number(),
		carry: yup.number(),
		expected_return_multiple: yup.number(),
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
		defaultValues,
	});
	const { register, handleSubmit, reset } = form;
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
		setColapse(false)
	};

	const onResetCalculate = () => {
		setVisibleModal(!visibleModal);
		setColapse(!colapse)
		reset(defaultValues)
	}

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
				<div className="row py-md-3">
					<div className="col-6 font-weight-bolder">Invested capital</div>
					<div className="col-6 text-end">
						$ {formatCurrentcy(dataCalculate.investmentCapital())}
					</div>
				</div>
				<Divider />
				<div className="row py-md-3">
					<div className="col-6 font-weight-bolder">Distribution</div>

					<div className="col-6 text-end">$ {formatCurrentcy(dataCalculate.distribution())}</div>
				</div>

				<Divider />
				<div className="row py-md-3">
					<div className="col-6 font-weight-bolder">
						Carry Paid to the Fund Manager
					</div>
					<div className="col-6 text-end">
						$ {formatCurrentcy(dataCalculate.carryPaidToTheFundManager())}
					</div>
				</div>

				<Divider style={{ height: '2px', backgroundColor: '#000' }} />
				<div className="row py-md-3">
					<div className="col-6 font-weight-bolder">
						Net distribution paid out to the investor
					</div>
					<div className="col-6 text-end">
						$ {formatCurrentcy(dataCalculate.netDistributionPaidOutToTheInvestor())}
					</div>
				</div>
				<Divider />
				<div className="row py-md-3">
					<div className="col-6 font-weight-bolder">Net Return Multiple</div>
					<div className="col-6 text-end">
						{dataCalculate.netReturnMultiple()}x
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
					<h5 className="row py-md-3 font-weight-bold">Inputs</h5>
					<Divider style={{ height: '2px', backgroundColor: '#000' }} />
					<div className="row py-md-3">
						<div className="col-6 font-weight-bolder">
							Invested capital per quarter
						</div>
						<div className="col-6 text-end">
							$ {formatCurrentcy(dataCalculate.invest_per_quarter)}
						</div>
					</div>
					<Divider />
					<div className="row py-md-3">
						<div className="col-6 font-weight-bolder">
							Minimum subscription period
						</div>
						<div className="col-6 text-end">
							{dataCalculate.how_long_do_you_invester} quarters
						</div>
					</div>
					<Divider />
					<div className="row py-md-3">
						<div className="col-6 font-weight-bolder">Management fee</div>
						<div className="col-6 text-end">
							{dataCalculate.management_fee}%
						</div>
					</div>
					<Divider />
					<div className="row py-md-3">
						<div className="col-6 font-weight-bolder">Carry percentage</div>
						<div className="col-6 text-end">{dataCalculate.carry}%</div>
					</div>
					<Divider />
					<div className="row py-md-3">
						<div className="col-6 font-weight-bolder">
							Gross Return Multiple
						</div>
						<div className="col-6 text-end">
							{dataCalculate.expected_return_multiple}x
						</div>
					</div>
					<Divider />
					<h5 className="row py-md-3 font-weight-bold">Breakdown</h5>
					<Divider style={{ height: '2px', backgroundColor: '#000' }} />
					<div className="row py-md-3">
						<div className="col-6 font-weight-bolder">Contributed capital</div>
						<div className="col-6 text-end">
							{formatCurrentcy(dataCalculate.contributedCapital())}
						</div>
					</div>
					<Divider />
					<div className="row py-md-3">
						<div className="col-6 font-weight-bolder">Management fees</div>
						<div className="col-6 text-end">
						-$ {formatCurrentcy(dataCalculate.managementFees())}
						</div>
					</div>
					<Divider />
					<div className="row py-md-3">
						<div className="col-6 font-weight-bolder">
							AngelList admin. fees
						</div>
						<div className="col-6 text-end">
							-$ {formatCurrentcy(dataCalculate.goemonAdminFees())}
						</div>
					</div>
					<Divider />
					<div className="row py-md-3">
						<div className="col-6 font-weight-bolder">Investable capital</div>
						<div className="col-6 text-end">
							$ {formatCurrentcy(dataCalculate.investableCapital())}
						</div>
					</div>
					<Divider />
					<div className="row py-md-3">
						<div className="col-6 font-weight-bolder">Distribution</div>
						<div className="col-6 text-end">$ {formatCurrentcy(dataCalculate.distribution())}</div>
					</div>
					<Divider />
					<div className="row py-md-3">
						<div className="col-6 font-weight-bolder">
							Carry paid to the fund manager
						</div>
						<div className="col-6 text-end">
							$ {formatCurrentcy(dataCalculate.carryPaidToTheFundManager())}
						</div>
					</div>
					<Divider />
					<h5 className="row py-md-3 font-weight-bold">Net returns</h5>
					<Divider style={{ height: '2px', backgroundColor: '#000' }} />
					<div className="row py-md-3">
						<div className="col-6 font-weight-bolder">
							Net distribution paid out to the investor
						</div>
						<div className="col-6 text-end">
							$ {formatCurrentcy(dataCalculate.netDistributionPaidOutToTheInvestor())}
						</div>
					</div>
					<Divider />
					<div className="row py-md-3">
						<div className="col-6 font-weight-bolder">Net Return Multiple</div>
						<div className="col-6 text-end">
							{dataCalculate.netReturnMultiple()}x
						</div>
					</div>
					<Divider />
					<div className="row py-md-3 justify-content-center">
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
		<section className="pt-9 pb-8 my-10 bg-gradient-primary position-relative overflow-hidden">
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
												<div className="input-group mb-4">
													<span className="input-group-text">$</span>
													<input
														type="text"
														{...register('invest_per_quarter', {
															required: true,
														})}
														name="invest_per_quarter"
														className="form-control"
														inputMode="numeric"
														placeholder="0"
													/>
												</div>
											</div>
											<div className="col-md-6">
												<label className="">How long do you invest?</label>
												<div className="input-group mb-4">
													<input
														type="text"
														{...register('how_long_do_you_invester', {
															required: true,
														})}
														name="how_long_do_you_invester"
														className="form-control"
														inputMode="numeric"
														placeholder="0"
													/>
													<span className="input-group-text input-right-text">
														Quarter
													</span>
												</div>
											</div>
											<div className="col-md-4">
												<label className="">Management Fee</label>
												<div className="input-group mb-4">
													<input
														type="text"
														{...register('management_fee', { required: true })}
														className="form-control"
														inputMode="numeric"
														placeholder="0"
													/>
													<span className="input-group-text input-right-text">
														%
													</span>
												</div>
											</div>
											<div className="col-md-4">
												<label className="">Carry</label>
												<div className="input-group mb-4">
													<input
														type="text"
														{...register('carry', { required: true })}
														className="form-control"
														inputMode="numeric"
														placeholder="0"
													/>
													<span className="input-group-text input-right-text">
														%
													</span>
												</div>
											</div>
											<div className="col-md-4">
												<label className="">Expected return multiple</label>
												<div className="input-group mb-4">
													<input
														type="text"
														{...register('expected_return_multiple', {
															required: true,
														})}
														className="form-control"
														inputMode="numeric"
														placeholder="0"
													/>
													<span className="input-group-text input-right-text">
														X
													</span>
												</div>
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
