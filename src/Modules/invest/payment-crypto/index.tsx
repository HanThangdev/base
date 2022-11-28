/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/return-await */
import React from 'react';
import { ERC20Test } from '@constants';
import Web3Class from '@utils/web3';
import { yupResolver } from '@hookform/resolvers/yup';
import { LOGO_USDC } from '@assets';
// import { FormInput } from '@components';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { transactionRequestHandle } from '@utils/investHandle';

const validationSchema = yup.object({
  amount: yup.number().required("Amount is required"),
}).required();

function CryptoPayment() {
  const form = useForm({
		resolver: yupResolver(validationSchema)
	});
  const { handleSubmit, register } = form;
	// const [loading, setLoading] = useState<boolean>(false);	

	const FundAddess = '0xe5510ffd8dE5Ca2E2e756c9fb8a7025D22918332';

  const investCrypto = async (value: any) => {
		try {
      const {amount} = value
			const { ethContract, web3 } = await Web3Class.getWeb3Instance();
      web3.currentProvider.enable()
			const response = await ethContract.methods.transfer(FundAddess, amount);
			const accounts = await window.ethereum.request({
				method: 'eth_requestAccounts',
			});
			const data = response.encodeABI();
			const gas = await response.estimateGas({ from: accounts[0] });
			const transactionParameters = {
				// nonce: "0x00", 
				// gasPrice: "0x0", 
				gas: gas.toString(16),
				from: accounts[0], 
				to: ERC20Test,
				data, 
			};
			transactionRequestHandle(transactionParameters)
		} catch (error) {
			console.log(error);
		}
	};

  // const withDrawInvest = async() => {
  //   try {
	// 		const { ethContract, web3 } = await Web3Class.getWeb3Instance();
  //     web3.currentProvider.enable()
	// 		const response = await ethContract.methods.transfer(FundAddess, 10);
	// 		const accounts = await window.ethereum.request({
	// 			method: 'eth_requestAccounts',
	// 		});
	// 		const data = response.encodeABI();
	// 		const gas = await response.estimateGas({ from: accounts[0] });
	// 		const transactionParameters = {
	// 			// nonce: "0x00", // ignored by MetaMask
	// 			// gasPrice: "0x0", // customizable by user during MetaMask confirmation.
	// 			gas: gas.toString(16), // customizable by user during MetaMask confirmation.
	// 			from: accounts[0], // must match user's active address.
	// 			to: ERC20Test,
	// 			data, // Optional, but used for defining smart contract creation and interaction.
	// 		};
	// 		const txhash = await window.ethereum.request({
	// 			method: 'eth_sendTransaction',
	// 			params: [transactionParameters],
	// 		});
	// 		// const txhash = await Web3Class.sendInvestTransaction(accounts[0], "0x10ced108c2f0f793bb7b9d014667a1d29e2a226b" )
  //     if (!txhash?.code && !txhash?.message) {
  //       setLoading(true)
  //       let tx = await web3.eth.getTransactionReceipt(txhash);
  //       while (!tx || !tx.blockHash) {
  //         await new Promise(resolve => setTimeout(resolve, 1000));
  //         tx = await web3.eth.getTransactionReceipt(txhash);
  //       }
  //       if (
  //         !tx.status 
  //       ) {
  //         setLoading(false)
  //         Message.error("lỗi");
  //       }else{
  //         setLoading(false)
  //         Message.success("oke");
  //       }
  //     }
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
  // }

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
            <div className="font-weight-bold my-2">
              Choose Payment wallet
            </div>
            <div className="col-md-6">
              <label className="card-radio-btn">
                <input
                  type="radio"
                  name="demo"
                  className="card-input-element d-none"
                  id="demo1"
                  defaultChecked
                />
                <div className="card card-body">
                  <div className="fs-6 font-weight-normal">
                    Pay with Deposit funds
                  </div>
                  <div className="d-flex align-items-center my-2">
                    <div className="me-3">
                      <img
                        alt=""
                        src={LOGO_USDC}
                        style={{ width: '32px' }}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <span className="fs-7 font-weight-bolder">
                        USDC
                      </span>
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
                      Send the Investment amount from any your
                      wallet.
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <hr className="horizontal dark my-3 d-xl-block d-none" />
          <div className="row mb-4">
            <div className="font-weight-bold my-3">
              Review Terms
            </div>
            <div className="form-check ps-5">
              <input
                className="form-check-input"
                type="checkbox"
                id="terms-5"
              />
              <label
                className="form-check-label"
                htmlFor="terms-5"
              >
                I acknowledge that GOEMON will not be responsible
                for any of my investment losses.
              </label>
            </div>
            <div className="form-check ps-5">
              <input
                className="form-check-input"
                type="checkbox"
                id="terms-6"
              />
              <label
                className="form-check-label"
                htmlFor="terms-6"
              >
                I am aware there will be penalties for non-payment
                or cancellation within the minimum subscription
                period.
              </label>
            </div>
            <div className="form-check ps-5">
              <input
                className="form-check-input"
                type="checkbox"
                id="terms-7"
              />
              <label
                className="form-check-label"
                htmlFor="terms-7"
              >
                I understand the risks associated with venture
                investing.
              </label>
            </div>
            <div className="form-check ps-5">
              <input
                className="form-check-input"
                type="checkbox"
                id="terms-8"
              />
              <label
                className="form-check-label"
                htmlFor="terms-8"
              >
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
            onClick={investCrypto}
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
    </div>
  );
}

export default CryptoPayment;
