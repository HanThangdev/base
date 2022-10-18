/* eslint-disable react/jsx-boolean-value */
import { useEffect, useState } from 'react';
import {
	getReplyCommentByComment,
	replyCommentByComment,
} from '@apis/firesbaseApi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FundLogo4, FundLogo5 } from '@assets/template/img';
import {
	Wrapper,
	Avatar,
	Button,
	IconLike,
	TagName,
	ImageDiccussion,
} from '../styled';


const validationSchema = Yup.object().shape({
	content: Yup.string().required('Required'),
});

type FormData = {
  content: string;
};

function CommentItem({ idFund, diccussionData, commentData }: any) {
	const  { register, handleSubmit } = useForm<FormData>({
		resolver: yupResolver(validationSchema),
	});
	const [replying, setReplying] = useState<boolean>(false);
	const [listReplyComment, setListReplyComment] = useState([]);

	const onReplyComment = () => {
		setReplying(!replying);
	};

	const onSubmit = async (values: any) => {
		const { content } = values;
		await replyCommentByComment(
			{ content },
			idFund,
			diccussionData.id,
			commentData?.id
		);
		const arr = await getReplyCommentByComment(
			idFund,
			diccussionData?.id,
			commentData?.id
		);
		if (arr.length) {
			setListReplyComment(arr);
		}
	};

	useEffect(() => {
		async function fetchData() {
			const arr = await getReplyCommentByComment(
				idFund,
				diccussionData?.id,
				commentData?.id
			);
			if (arr.length) {
				setListReplyComment(arr);
			}
		}
		fetchData();
	}, [idFund, diccussionData, commentData]);

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
						{commentData?.content}
					</div>
				</div>
			</div>
			<div className="position-relative">
				<div className="d-flex ms-6">
					<Button className="me-4 ">
						<IconLike disabled={true} className="fa-solid fa-heart" /> Like
					</Button>
					<Button role="button" onClick={onReplyComment}>
						<span>Reply</span>
					</Button>
				</div>
			</div>
			{listReplyComment &&
				listReplyComment.map((item: any) => (
					<div className="d-flex align-items-center position-relative px-5 py-sm-2">
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
								{item.content}
							</div>
						</div>
					</div>
				))}
			{replying && (
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="row">
						<div className="col-1">
							<ImageDiccussion
								src={FundLogo5}
								alt="Dubai Real Estate Investment Fund"
							/>
						</div>
						<div className="col-11">
							<input
								className="form-control"
								{...register("content", { required: true })} 
								placeholder="Post a new question or comment"
								type="text"
							/>
						</div>
					</div>
					<div className="col-12 text-end mt-2">
						<button
							type="submit"
							className="btn w-15 bg-gradient-primary text-center"
						>
							Reply
						</button>
					</div>
				</form>
			)}
		</Wrapper>
	);
}

export default CommentItem;
