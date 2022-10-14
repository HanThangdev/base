/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-boolean-value */
import { useEffect, useRef, useState } from 'react';
import CommentItem from '@components/diccussion/CommentItem';
import { getCommentByDiccussion, replyDiccussion } from '@apis/firesbaseApi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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

function DiccussionItem({ idFund, diccussionData }: any) {
	const diccussionItemRef = useRef();
	const [isReplyDiccussion, setIsReplyDiccussion] = useState<boolean>(false);
	const [listReplyDiccussion, setListReplyDiccussion] = useState([]);

	const initialValues = {
		content: '',
	};

	const validationSchema = Yup.object().shape({
		content: Yup.string().required('Required'),
	});

	const onSubmit = async (values: any) => {
		const { content } = values;
		const response = await replyDiccussion({ content }, idFund, diccussionData?.id);
		console.log("response", response);
	};

	const onReplyDiccussion = () => {
		setIsReplyDiccussion(true);
	};

	useEffect(() => {
		async function fetchData() {
			const arr = await getCommentByDiccussion(idFund, diccussionData?.id);
			if (arr.length) {
				setListReplyDiccussion(arr);
			}
		}
		fetchData();
	}, [idFund, diccussionData]);
	console.log('error', listReplyDiccussion);

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
							<div className="col-12 py-sm-2">
								{diccussionData?.content}
							</div>
							<div className="d-flex">
								<Button className="me-4">
									<IconLike disabled={false} className="fa-solid fa-heart" />{' '}
									Like
								</Button>
								<Button onClick={onReplyDiccussion}>
									<span className="fa-regular fa-pen" /> Reply
								</Button>
							</div>
							{isReplyDiccussion && (
					<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
					ref={diccussionItemRef}
				>
					{() => (
					<Form className="row py-sm-2">
						<div className="col-1">
							<ImageDiccussion
								src={FundLogo5}
								alt="Dubai Real Estate Investment Fund"
							/>
						</div>
						<div className="col-11">
							<Field
								className="form-control"
								name="content"
								required
								placeholder="Post a new question or comment"
								type="text"
								helperText={<ErrorMessage name="content" />}
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
					</Form>
					)}
				</Formik>
				)}
						</div>
				{listReplyDiccussion &&
					listReplyDiccussion.map((item) => (
						<CommentItem idFund={idFund} commentData={item} diccussionData={diccussionData} />
					))}
			</div>
		</Wrapper>
	);
}

export default DiccussionItem;
