/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/return-await */
import React, { useEffect, useState } from 'react';
import { DEFAULT_VISIBLE_MODAL, ERC20Test, errorForm, TYPE_TRANSACTION } from '@constants';
import Web3Class from '@utils/web3';
import { yupResolver } from '@hookform/resolvers/yup';
import { LOGO_USDC } from '@assets';
// import { FormInput } from '@components';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { transactionRequestHandle } from '@utils/investHandle';
import { isEmpty } from 'lodash';
import { useAuth } from '@hooks';
import * as Message from '@components/message';
import { useTranslation } from 'react-i18next';
import { ConfirmingModal, SuccessModal } from '@components';
// import { Spinner } from 'reactstrap';
interface IStateModal  {
  success: boolean,
  confirming: boolean,
  error: boolean
}
const validationSchema = yup
	.object({
		amount: yup.number().required(errorForm.REQUIRED)
	})
	.required();

function CryptoPayment() {
	const form = useForm({
		resolver: yupResolver(validationSchema),
	});
	const { handleSubmit, register } = form;
	const { profile } = useAuth();
	const { t } = useTranslation();
	const [visibleModal, setVisibleModal] = useState<IStateModal>(DEFAULT_VISIBLE_MODAL);
	const [modalHandlingType, setModalHandlingType] = useState<string>("");
	const [valueTx, setValueTx] = useState<string>("");
	const FundAddess = '0xe5510ffd8dE5Ca2E2e756c9fb8a7025D22918332';

  useEffect(() => {
    switch (modalHandlingType) {
      case TYPE_TRANSACTION.PENDING:
        setVisibleModal({
          success:false,
          confirming:true,
          error:false
        })
        break;
      case TYPE_TRANSACTION.COMPLETED:
        setVisibleModal({
          success:true,
          confirming:false,
          error:false
        })
        break;
      case TYPE_TRANSACTION.REJECTED:
        setVisibleModal({
          success:false,
          confirming:false,
          error:true
        })
        break;
      case TYPE_TRANSACTION.FAILED:
        setVisibleModal({
          success:false,
          confirming:false,
          error:true
        })
        break;
      default:
        break;
    }
  }, [modalHandlingType])
  
  
	const investCrypto = async (value: any) => {
		try {
			if (isEmpty(profile)) {
				Message.error(t('error_message:ERROR_NOT_LOGGIN_BEFORE_TRANSACTION'));
			} else {
        setModalHandlingType(TYPE_TRANSACTION.PENDING)
				const { amount } = value;
				const { ethContract } = await Web3Class.getWeb3Instance();
				const response = await ethContract.methods.transfer(FundAddess, amount);
				const accounts = profile.walletAddress;
				const data = response.encodeABI();
				const gas = await response.estimateGas({ from: accounts });
				const transactionParameters = {
					// nonce: "0x00",
					// gasPrice: "0x0",
					gas,
					from: accounts,
					to: ERC20Test,
					data,
					// value: web3.utils.toWei(`${amount}`)
				};
				transactionRequestHandle(transactionParameters, setModalHandlingType, setValueTx);
			}
		} catch (error: any) {
      Message.error(error.message)
			if (
        error.code === 4001 ||
        error.code === -32603 ||
        error.message === "User rejected the transaction"
      ) {
        setModalHandlingType(TYPE_TRANSACTION.REJECTED)
      }
		}
	};


	return (
		<div
			className="tab-pane fade show active"
			id="payment_crypto-tab"
			role="tabpanel"
			aria-labelledby="payment_crypto-tab"
		>
			<FormProvider {...form}>
				<form className="pt-4 px-4" onSubmit={handleSubmit(investCrypto)}>
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<label>Investment per Quarter</label>
								<div className="input-group mb-4">
									<span className="input-group-text">
										<img
											alt=""
											src={LOGO_USDC}
											className="me-2"
											style={{ width: '30px' }}
										/>
										USDC
									</span>
									<input
										type="text"
										{...register('amount', { required: true })}
										className="form-control form-control-lg fs-6 font-weight-bolder digit2"
										placeholder="Min Invest is $500"
									/>
								</div>
							</div>
							<div className="col-md-6">
								<label>Min Subscription Period</label>
								<div className="input-group mb-4">
									<input
										type="text"
										className="form-control form-control-lg fs-6 font-weight-bolder"
										inputMode="numeric"
										placeholder="Min Subscription Period is 4Q"
										maxLength={2}
									/>
									<span className="input-group-text input-right-text">
										Quarter
									</span>
								</div>
							</div>
						</div>
						<hr className="horizontal dark my-3 d-xl-block d-none" />
						<div className="row input-group">
							<div className="font-weight-bold my-2">Choose Payment wallet</div>
							<div className="col-md-6">
                <label className="card-radio-btn">
									<input
										type="radio"
										className="card-input-element d-none"
										id="demo1"
                    {...register('pay_with_deposit')}
                    name="demo"
										defaultChecked
									/>
									<div className="card card-body">
										<div className="fs-6 font-weight-normal">
											Pay with Deposit funds
										</div>
										<div className="d-flex align-items-center my-2">
											<div className="me-3">
												<img alt="" src={LOGO_USDC} style={{ width: '32px' }} />
											</div>
											<div className="flex-grow-1">
												<span className="fs-7 font-weight-bolder">USDC</span>
												<p className="fs-8 text-secondary mt-minus1 mb-1">
													USDC Coin
												</p>
											</div>
											<div className="text-end">
												<span className="fs-7 font-weight-bolder">
													1,000.00
												</span>
												<p className="fs-8 text-secondary mt-minus1 mb-1">
													$1,003.25
												</p>
											</div>
										</div>
									</div>
								</label>
							</div>
							<div className="col-md-6">
								<label className="card-radio-btn">
									<input
										type="radio"
                    {...register('pay_with_wallet')}
                    name="demo"
										className="card-input-element d-none"
										value="demo2"
									/>
									<div className="card card-body">
										<div className="fs-6 font-weight-normal">
											Pay with Your Wallet
										</div>
										<div className="d-flex align-items-center my-2">
											<div className="me-3">
												<i className="fas fa-qrcode fs-3" />
											</div>
											<div className="fs-8 text-secondary font-weight-nomal">
												Send the Investment amount from any your wallet.
											</div>
										</div>
									</div>
								</label>
							</div>
						</div>
						<hr className="horizontal dark my-3 d-xl-block d-none" />
						<div className="row mb-4">
							<div className="font-weight-bold my-3">Review Terms</div>
							<div className="form-check ps-5">
								<input
									className="form-check-input"
									type="checkbox"
									id="terms-5"
								/>
								<label className="form-check-label" htmlFor="terms-5">
									I acknowledge that GOEMON will not be responsible for any of
									my investment losses.
								</label>
							</div>
							<div className="form-check ps-5">
								<input
									className="form-check-input"
									type="checkbox"
									id="terms-6"
								/>
								<label className="form-check-label" htmlFor="terms-6">
									I am aware there will be penalties for non-payment or
									cancellation within the minimum subscription period.
								</label>
							</div>
							<div className="form-check ps-5">
								<input
									className="form-check-input"
									type="checkbox"
									id="terms-7"
								/>
								<label className="form-check-label" htmlFor="terms-7">
									I understand the risks associated with venture investing.
								</label>
							</div>
							<div className="form-check ps-5">
								<input
									className="form-check-input"
									type="checkbox"
									id="terms-8"
								/>
								<label className="form-check-label" htmlFor="terms-8">
									I have read the{' '}
									<a
										href="/"
										className="text-gradient text-primary text-decoration-underline"
										data-bs-toggle="modal"
										data-bs-target="#reviewterms_modal"
									>
										terms and provisions
									</a>{' '}
									and agree to e-sign the above documents.
								</label>
							</div>
						</div>
						<button
							type="submit"
							className="btn bg-gradient-primary btn-lg w-100"
							data-bs-toggle="modal"
							data-bs-target="#paymentaddress_modal"
						>
							Confirm investment
						</button>
					</div>
				</form>
			</FormProvider>
			<SuccessModal
				visible={visibleModal}
        setVisible={setVisibleModal}
        tx={valueTx}
			/>
      <ConfirmingModal
				visible={visibleModal}
			/>
		</div>
	);
}

export default CryptoPayment;
