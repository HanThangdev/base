/* eslint-disable react/jsx-boolean-value */
import { useState } from 'react';
import { FundLogo4 } from '@assets/template/img';
import { Wrapper, Avatar, Button, IconLike, TagName } from './styled';

// interface IProps {
// 	id: string;
// }

function CommentItem() {
	const [replying, setReplying] = useState<boolean>(false);

	const onReplyComment = () => {
		setReplying(!replying);
	};

	return (
		<Wrapper className="py-3">
			<div className="d-flex align-items-center position-relative">
				<div className="flex-shrink-0">
					<Avatar src={FundLogo4} alt="Dubai Real Estate Investment Fund" />
				</div>
				<div className="flex-grow-1 ms-2">
					<div className="col-12">
						<TagName
							className="font-weight-bolder mr-2"
							style={{ paddingRight: '0.5rem' }}
						>
							Travis Powell
						</TagName>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry&apos;s standard dummy
						text ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book. It has survived
						not only five centuries.
					</div>
				</div>
			</div>
			<div className="position-relative py-2">
				<div className="d-flex ms-6">
					<Button className="me-4 ">
						<IconLike disabled={true} className="fa-solid fa-heart" /> Like
					</Button>
					<Button role="button" onClick={onReplyComment}>
						<span>Reply</span>
					</Button>
				</div>
			</div>
			{replying && <div>comment ở đây</div>}
		</Wrapper>
	);
}

export default CommentItem;
