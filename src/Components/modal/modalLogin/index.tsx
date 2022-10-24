/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */

import { LOGO_DISCORD, LOGO_FACEBOOK, LOGO_GOOGLE, LOGO_LINE, LOGO_TWITTER } from "@assets";
import { GOEMON_LOGO } from "@assets/template/img";

interface IProps  {
  visible: Boolean
  setVisible: any
}

function ModalLogin({visible, setVisible} :IProps) {
console.log(visible)
	return (
		<div
      className={ `modal fade ${visible ? "show" : ""}`} 
      style={{
        display: `${visible ? "block" : "hidden"}`
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
                  <a className="btn btn-outline-light px-3" href="/">
                    <img src={LOGO_GOOGLE} alt="" width={26} />
                  </a>
                  <a className="btn btn-outline-light px-3" href="/">
                    <img src={LOGO_TWITTER} alt=""  width={26} />
                  </a>
                  <a className="btn btn-outline-light px-3" href="/">
                    <img src={LOGO_FACEBOOK} alt="" width={26} />
                  </a>
                  <a className="btn btn-outline-light px-3" href="/">
                    <img src={LOGO_LINE} alt="" width={26} />
                  </a>
                  <a className="btn btn-outline-light px-3" href="/">
                    <img src={LOGO_DISCORD} alt=""  width={26} />
                  </a>
                </div>
                <div className="my-3 position-relative text-center">
                  <p className="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
                    or
                  </p>
                </div>
                <p className="text-sm my-1">Email</p>
                <form className="mx-2">
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="hello@exsample.com" aria-label="Email" />
                  </div>
                  <div className="text-center">
                    <button type="button" className="btn bg-gradient-primary w-100">Continue with Email</button>
                  </div>
                </form>
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
