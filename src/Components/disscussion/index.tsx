/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import { Logo } from '@assets/template/img';
import { FundLogo4, FundLogo5 } from '@assets/template/img';
import { ImageDisscussion, Wrapper, Avatar } from './styled';

function Diccussion() {
 
  return (
    <Wrapper >
      <div className="row">
        <div className="col-1">
          <ImageDisscussion src={FundLogo5} alt="Dubai Real Estate Investment Fund" />
        </div>
        <div className="col-11">
          <input
            className="form-control"
            placeholder="Post a new question or comment"
            type="text"
          />
        </div>
      </div>
      <div className="col-12 text-end mt-2">
        <input type="checkbox" />
        <span className='fs-6 p-2'>
          I'm affiliated with Norrth Carolina Beach Rental Portfolio
        </span>
        <button type="button" className="btn w-15 bg-gradient-primary text-center">
          Post
        </button>
      </div>
      <div className="row shadow p-2">
        <div className="col-12">
          <div className='d-flex align-items-center position-relative'>
            <div className="flex-shrink-0">
              <Avatar src={FundLogo5} alt="Dubai Real Estate Investment Fund" />
            </div>
            <div className="flex-grow-1 ms-2" >
              <div className='col-12'>
                <span className='font-weight-bolder'>Travis Powell</span></div>
              <div className='col-12'><span className='fs-8'>13 days ago</span></div>
            </div>
          </div>
          <div className='row'>
            <p className='p-3'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </p>
          </div>
          <div className='d-flex'>
            <div className='me-4'>
              <span className="fa-regular fa-heart" /> Like
            </div>
            <div>
              <span className="fa-regular fa-pen" /> Reply
            </div>
          </div>
          <div className='py-3'>
            <div className='d-flex align-items-center position-relative'>
              <div className="flex-shrink-0">
                <Avatar src={FundLogo4} alt="Dubai Real Estate Investment Fund" />
              </div>
              <div className="flex-grow-1 ms-2" >
                <div className='col-12'>
                  <span className='font-weight-bolder mr-2' style={{ paddingRight: "0.5rem" }}>Travis Powell</span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                </div>
              </div>
            </div>
            <div className='position-relative py-2'>
              <div className='d-flex ms-6'>
                <div className='me-4 ' >
                  <span className="fa-regular fa-heart" /> Like
                </div>
                <div>
                  Reply
                </div>
              </div>
            </div>
          </div>
          <div className='py-3'>
            <div className='d-flex align-items-center position-relative'>
              <div className="flex-shrink-0">
                <Avatar src={FundLogo4} alt="Dubai Real Estate Investment Fund" />
              </div>
              <div className="flex-grow-1 ms-2" >
                <div className='col-12'>
                  <span className='font-weight-bolder mr-2' style={{ paddingRight: "0.5rem" }}>Travis Powell</span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                </div>
              </div>
            </div>
            <div className='position-relative py-2'>
              <div className='d-flex ms-6'>
                <div className='me-4 ' >
                  <span className="fa-regular fa-heart" /> Like
                </div>
                <div>
                  Reply
                </div>
              </div>
            </div>
          </div>
          <div className='py-3'>
            <div className='d-flex align-items-center position-relative'>
              <div className="flex-shrink-0">
                <Avatar src={FundLogo4} alt="Dubai Real Estate Investment Fund" />
              </div>
              <div className="flex-grow-1 ms-2" >
                <div className='col-12'>
                  <span className='font-weight-bolder mr-2' style={{ paddingRight: "0.5rem" }}>Travis Powell</span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                </div>
              </div>
            </div>
            <div className='position-relative py-2'>
              <div className='d-flex ms-6'>
                <div className='me-4 ' >
                  <span className="fa-regular fa-heart" /> Like
                </div>
                <div>
                  Reply
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Diccussion;
