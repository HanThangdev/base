/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-boolean-value */
import { useEffect, useState } from 'react';
import { createDiccussion, getDiccussionByProject } from '@apis/firesbaseApi';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { FundLogo5 } from '@assets/template/img';
import DiccussionItem from './DiccussionItem';
import { ImageDiccussion, Wrapper } from './styled';

const validationSchema = Yup.object().shape({
	content: Yup.string().required('Required'),
	aggreeCheckbox: Yup.boolean().required('Required'),
});

type FormData = {
	content: string;
	aggreeCheckbox: boolean;
};

function Diccussion({ idFund }: any) {
	const { register, handleSubmit } = useForm<FormData>({
		resolver: yupResolver(validationSchema),
	});
	const [listDiccussInFund, setListDiccussInFund] = useState([]);

	const inforUser = {
		image: FundLogo5,
		name: 'Thanghan',
	};

	const onSubmit = async (values: any) => {
		const { content, aggreeCheckbox } = values;
		if (content && aggreeCheckbox) {
			await createDiccussion({ content, inforUser }, idFund)
			const response = await getDiccussionByProject(idFund);
			if (response.length) {
				setListDiccussInFund(response);
			};
		} else {
			console.log('error');
		}
	};

	useEffect(() => {
		async function fetchData() {
			const response = await getDiccussionByProject(idFund);
			if (response.length) {
				setListDiccussInFund(response);
			}
		}
		fetchData();
	}, [idFund]);

	return (
		<Wrapper>
			<form className="row" onSubmit={handleSubmit(onSubmit)}>
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
						required
						placeholder="Post a new question or comment"
						type="text"
					/>
				</div>
				<div className="col-12 text-end mt-2">
					<input
						type="checkbox"
						{...register('aggreeCheckbox', { required: true })}
						required
					/>
					<span className="fs-6 p-2">
						I&apos;m affiliated with Norrth Carolina Beach Rental Portfolio
					</span>
					<button
						className="btn w-15 bg-gradient-primary text-center"
						type="submit"
					>
						Post
					</button>
				</div>
			</form>

			{listDiccussInFund &&
				listDiccussInFund.map((item) => (
					<DiccussionItem idFund={idFund} diccussionData={item} />
				))}
		</Wrapper>
	);
}

export default Diccussion;
