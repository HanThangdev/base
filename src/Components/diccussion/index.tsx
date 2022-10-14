/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-boolean-value */

import { useEffect, useRef, useState } from 'react';
import { createDiccussion, getDiccussionByProject } from '@apis/firesbaseApi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FundLogo5 } from '@assets/template/img';
import DiccussionItem from './DiccussionItem';
import { ImageDiccussion, Wrapper } from './styled';

function Diccussion({ idFund }: any) {
	const initialValues = {
		content: '',
		aggreeCheckbox: false,
	};
	const diccussionRef = useRef();
	const [listDiccussInFund, setListDiccussInFund] = useState([]);

	const inforUser = {
		image: FundLogo5,
		name: 'Thanghan',
	};

	const validationSchema = Yup.object().shape({
		content: Yup.string().required('Required'),
		aggreeCheckbox: Yup.boolean().required('Required'),
	});

	const onSubmit = async (values: any) => {
		const { content, aggreeCheckbox } = values;
		if (content && aggreeCheckbox) {
			await createDiccussion({ content, inforUser }, idFund);
		} else {
			console.log('error');
		}
	};

	useEffect(() => {
		async function fetchData() {
			const arr = await getDiccussionByProject(idFund);
			if (arr.length) {
				setListDiccussInFund(arr);
			}
		}
		fetchData();
	}, [idFund]);

	return (
		<Wrapper>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
				ref={diccussionRef}
			>
				{(props) => (
					<Form className="row">
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
							<Field
								name="aggreeCheckbox"
								type="checkbox"
								required
								helperText={<ErrorMessage name="aggreeCheckbox" />}
							/>
							<span className="fs-6 p-2">
								I&apos;m affiliated with Norrth Carolina Beach Rental Portfolio
							</span>
							<button
								className={`btn w-15 bg-gradient-primary text-center ${
									props.isSubmitting ? 'disabled' : ''
								}`}
								type="submit"
								disabled={props.isSubmitting}
							>
								Post
							</button>
						</div>
					</Form>
				)}
			</Formik>
			{listDiccussInFund &&
				listDiccussInFund.map((item) => (
					<DiccussionItem idFund={idFund} diccussionData={item} />
				))}
		</Wrapper>
	);
}

export default Diccussion;
