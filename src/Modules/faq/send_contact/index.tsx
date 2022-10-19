/* eslint-disable jsx-a11y/label-has-associated-control */
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import { useFaq } from '@hooks';
// import { SendContactPayload } from '@type/Store/faq';
import { FormInput, FormTextContact } from '@components';
import { validationSchema } from '@modules/faq/send_contact/schema';
import { useCallback } from 'react';
import { Payload } from '@type/Store';

const Wrapper = styled.section``;

function FormContact() {
	const form = useForm({
		resolver: yupResolver(validationSchema)
	});

	const { handleSubmit } = form;
	const { sendContactAction } = useFaq();

	const onSubmit = useCallback(
		(data: Payload) => {
			sendContactAction({ data });
		},
		[sendContactAction]
	);
	 
	return (
		<Wrapper className="py-sm-7 ">
			<div className="container">
				<div className="row align-items-center">
					<hr className="horizontal dark" />
					<div className="col-lg-6 mx-auto text-center">
						<div className="ms-3 mb-md-5">
							<h3>We are here for you</h3>
							<p>Can&apos;t find what you&apos;re looking for?</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8 mx-auto">
						<div className="card card-plain">
							<FormProvider {...form}>
								<form onSubmit={handleSubmit(onSubmit)} id="contact-form" method="post" autoComplete="off">
									<div className="card-body">
										<div className="row">
											<div className="col-md-6">
												<label>Full Name</label>
												<div className="input-group mb-4">
													<FormInput name="fullname" placeholder="Full Name"/>
												</div>
											</div>
											<div className="col-md-6 ps-md-2">
												<label>Email</label>
												<div className="input-group">
													<FormInput name="email" placeholder="hello@creative-tim.com"/>
												</div>
											</div>
										</div>
										<div className="form-group mb-4 mt-md-0 mt-4">
											<label>What can we help you?</label>
											<FormTextContact name="content" placeholder="Describe your problem in at least 250 characters"/>
										</div>
										<div className="row">
											<div className="col-md-12 text-center">
													<button type="submit" className="btn bg-gradient-dark mt-4">
														Send Message
													</button>
											</div>
										</div>
									</div>
								</form>
							</FormProvider>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default FormContact;
