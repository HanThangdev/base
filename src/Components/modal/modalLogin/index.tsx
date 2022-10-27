/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { GOEMON_LOGO } from "@assets/template/img";
import { FormInput } from "@components/form";
import { useWeb3Auth } from "@hooks/useWeb3auth";
import { LOGIN_PROVIDER, LOGIN_VIA_EMAIL, TypeLoginProvider } from "@constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { WALLET_ADAPTERS } from "@web3auth/base";
import { FormProvider, useForm } from "react-hook-form";
import { validationSchema } from "./schema";

interface IProps {
  visible: Boolean
  setVisible: any
}

function ModalLogin({ visible, setVisible }: IProps) {
  const form = useForm({
		resolver: yupResolver(validationSchema)
	});
  const { handleSubmit } = form;
  const [show, setShow] = useState("")
  const { login } = useWeb3Auth();

  useEffect(() => {
    setTimeout(() =>
      visible ? setShow("show") : setShow("")
      , 100)
  }, [visible])


  const loginSocial = async (type: TypeLoginProvider) => {
    await login(WALLET_ADAPTERS.OPENLOGIN, type) 
  }  

  const loginViaEmail = async (data: any) => {
    const {email} =  data
    await login(WALLET_ADAPTERS.OPENLOGIN, LOGIN_VIA_EMAIL, email) 
  }  
    
return (
  <div
    className={`modal fade ${visible ? `${show}` : ""}`}
    style={{
      display: `${visible ? "block" : "none"}`,
      zIndex: 11001
    }}
  >
    <div className="modal-dialog modal-dialog-centered modal-400 " role="document">
      <div className="modal-content">
        <div className="modal-header border-0 pb-0">
          <img src={GOEMON_LOGO} alt="" width={150} />
          <button type="button" className="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close" onClick={() => setVisible(false)}>
            <i className="fas fa-times" aria-hidden="true" />
          </button>
          <div className="text-center mt-2">
            <h5 className="text-sm text-gradient text-primary">LOGIN / SIGN UP</h5>
          </div>
        </div>
        <div className="modal-body">
          <div className="px-4">
            <p className="text-sm my-1">Continue with</p>
            <div className="d-flex justify-content-around">
              {Object.entries(LOGIN_PROVIDER).map(([k, v]) => (<button key={k} type="button" className="btn btn-outline-light px-3" onClick={() => {v?.function(loginSocial)}}>
                <img src={v?.logo} alt="" width={26} />
              </button>))}
            </div>
            <div className="my-3 position-relative text-center">
              <p className="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
                or
              </p>
            </div>
            <p className="text-sm my-1">Email</p>
            <FormProvider {...form}>
              <form className="mx-2" onSubmit={handleSubmit(loginViaEmail)} >
                <div className="mb-3">
                  <FormInput name="email" className="form-control" placeholder="hello@exsample.com" aria-label="Email"/>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn bg-gradient-primary w-100">Continue with Email</button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
        <div className="modal-footer mx-4 mb-3">
          <p className="fs-8">GOEMON is partnered with Web3Auth to provide you with the highest level of security for your GOEMON account.</p>
        </div>
      </div>
    </div>
  </div>
);
}

export default ModalLogin;
