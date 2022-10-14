/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-boolean-value */
// import { Logo } from '@assets/template/img';
import { FundLogo5 } from '@assets/template/img';
import CommentItem from './CommentItem';
import { ImageDisscussion, Wrapper, Avatar, Button, IconLike, TagName } from './styled';

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
                <TagName className='font-weight-bolder'>Travis Powell</TagName>
              </div>
              <div className='col-12'><span className='fs-8'>13 days ago</span></div>
            </div>
          </div>
          <div className='row'>
            <p className='p-3'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </p>
          </div>
          <div className='d-flex'>
            <Button className='me-4'>
              <IconLike disabled={false} className="fa-solid fa-heart" /> Like
            </Button>
            <Button>
              <span className="fa-regular fa-pen" /> Reply
            </Button>
          </div>
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </div>
      </div>
    </Wrapper>
  );
}

export default Diccussion;
