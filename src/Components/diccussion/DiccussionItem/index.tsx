/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-boolean-value */
import { useEffect, useState } from 'react';
import CommentItem from '@components/diccussion/CommentItem';
import { getCommentByDiccussion, replyDiccussion } from '@apis/firesbaseApi';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { FundLogo5 } from '@assets/template/img';
import {
	ImageDiccussion,
	Wrapper,
	Avatar,
	Button,
	IconLike,
	TagName,
} from '../styled';

const validationSchema = Yup.object().shape({
	content: Yup.string().required('Required'),
});

type FormData = {
	content: string;
};

function DiccussionItem({ idFund, diccussionData }: any) {
	const { register, handleSubmit } = useForm<FormData>({
		resolver: yupResolver(validationSchema),
	});
	const [isReplyDiccussion, setIsReplyDiccussion] = useState<boolean>(false);
	const [listReplyDiccussion, setListReplyDiccussion] = useState([]);

	const onSubmit = async (values: any) => {
		const { content } = values;
		await replyDiccussion({ content }, idFund, diccussionData?.id);
		const response = await getCommentByDiccussion(idFund, diccussionData?.id);
			if (response.length) {
				setListReplyDiccussion(response);
			}
	};

	const onReplyDiccussion = () => {
		setIsReplyDiccussion(true);
	};

	useEffect(() => {
		async function fetchData() {
			const response = await getCommentByDiccussion(idFund, diccussionData?.id);
			if (response.length) {
				setListReplyDiccussion(response);
			}
		}
		fetchData();
	}, [idFund, diccussionData]);

	return (
		<Wrapper>
			<div className="row shadow p-2 py-3">
				<div className="col-12">
					<div className="d-flex align-items-center position-relative">
						<div className="flex-shrink-0">
							<Avatar
								src={diccussionData?.inforUser?.image}
								alt="Dubai Real Estate Investment Fund"
							/>
						</div>
						<div className="flex-grow-1 ms-2">
							<div className="col-12">
								<TagName className="font-weight-bolder">
									{diccussionData?.inforUser?.name}
								</TagName>
							</div>
							<div className="col-12">
								<span className="fs-8">13 days ago</span>
							</div>
						</div>
					</div>
					<div className="col-12 py-sm-2">{diccussionData?.content}</div>
					<div className="d-flex">
						<Button className="me-4">
							<IconLike disabled={false} className="fa-solid fa-heart" /> Like
						</Button>
						<Button onClick={onReplyDiccussion}>
							<span className="fa-regular fa-pen" /> Reply
						</Button>
					</div>
					{isReplyDiccussion && (
						<form className="row py-sm-2" onSubmit={handleSubmit(onSubmit)}>
							<div className="col-1">
								<ImageDiccussion
									src={FundLogo5}
									alt="Dubai Real Estate Investment Fund"
								/>
							</div>
							<div className="col-11">
								<input
									className="form-control"
									{...register('content', { required: true })}
									name="content"
									required
									placeholder="Post a new question or comment"
									type="text"
								/>
							</div>
							<div className="col-12 text-end mt-2">
								<button
									type="submit"
									className={`btn w-15 bg-gradient-primary text-center `}
								>
									Reply
								</button>
							</div>
						</form>
					)}
				</div>
				{listReplyDiccussion &&
					listReplyDiccussion.map((item) => (
						<CommentItem
							idFund={idFund}
							commentData={item}
							diccussionData={diccussionData}
						/>
					))}
			</div>
		</Wrapper>
	);
}

export default DiccussionItem;
