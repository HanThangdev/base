/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import { useFaq } from '@hooks';

const Wrapper = styled.section``;

const schema = yup.object({
  fullname: yup.string().required("Full name is required"),
  email: yup.string().email('Invalid Email').required("Email is required"),
  content: yup.string().required("Content is required"),
}).required();

function FormContact() {
	const { register, handleSubmit, } = useForm({
    resolver: yupResolver(schema)
  });
	const { sendContactAction } = useFaq();

	const onSubmit = (data: any) => sendContactAction(data);
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
							<form onSubmit={handleSubmit(onSubmit)} id="contact-form" method="post" autoComplete="off">
								<div className="card-body">
									<div className="row">
										<div className="col-md-6">
											<label>Full Name</label>
											<div className="input-group mb-4">
												<input
													{...register("fullname", { required: true })} 
													className="form-control"
													placeholder="Full Name"
													aria-label="Full Name"
													type="text"
												/>
											</div>
										</div>
										<div className="col-md-6 ps-md-2">
											<label>Email</label>
											<div className="input-group">
												<input
												 	{...register("email", { required: "Email Address is required" })} 
													type="email"
													className="form-control"
													placeholder="hello@creative-tim.com"
												/>
											</div>
										</div>
									</div>
									<div className="form-group mb-4 mt-md-0 mt-4">
										<label>What can we help you?</label>
										<textarea
											{...register("content", { required: "Content is required" })} 
											className="form-control"
											id="message"
											rows={6}
											placeholder="Describe your problem in at least 250 characters"
											defaultValue=""
										/>
									</div>
									<div className="row">
										<div className="col-md-12 text-center">
											<button
												type="submit"
												className="btn bg-gradient-dark mt-4"
											>
												Send Message
											</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default FormContact;
