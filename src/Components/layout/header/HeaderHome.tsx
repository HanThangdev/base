/* eslint-disable jsx-a11y/label-has-associated-control */
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoadFund } from '@hooks';
import { FundListPayload } from '@type/Store/fund';
import { useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Form, Input, InputGroup, InputGroupText } from 'reactstrap';
import * as yup from 'yup';
import { Wrapper } from './styled';

const validationSchema = yup
	.object({
		name: yup.string(),
	})
	.required();

function HeaderHome() {
	const form = useForm({
		resolver: yupResolver(validationSchema),
	});
	const { getFundListAction } = useLoadFund();
	const { register, handleSubmit } = form;

	useEffect(() => {
		getFundListAction({});
	}, []);

	const onSubmit = useCallback(
		(data: FundListPayload) => {
			getFundListAction(data);
		},
		[getFundListAction]
	);

	return (
		<Wrapper>
			<div className="page-header min-vh-50">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 text-white">
							<p className="text-white fs-2 font-weight-bolder mb-minus1 fadeIn2 fadeInBottom">
								Invest in
							</p>
							<h2 className="text-white fs-1 fadeIn2 fadeInBottom">
								Crypto Rolling Fund
							</h2>
							<p className="lead opacity-9 fadeIn2 fadeInBottom">
								Browse Rolling Funds to find the right fit for you. Subscribe
								quarterly, invest alongside top VCs, and adjust your investment
								size as your goals evolve.
							</p>
							<button type="button" className="btn btn-outline-light my-4">
								Calculate Fund Returns
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				className="position-relative overflow-hidden"
				style={{ height: 36, marginTop: -33 }}
			>
				<div
					className="w-full absolute bottom-0 start-0 end-0"
					style={{
						transform: 'scale(2)',
						transformOrigin: 'top center',
						color: '#fff',
					}}
				>
					<svg
						viewBox="0 0 2880 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
							fill="currentColor"
						/>
					</svg>
				</div>
			</div>
			<FormProvider {...form}>
				<Form
					className="container"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="row bg-white shadow-lg mt-n6 border-radius-md pb-4 p-3 mx-sm-0 mx-1 position-relative">
						<div className="col-lg-3 mt-lg-n2 mt-2">
							<label className="">Filter by: </label>
							<select
								className="form-control"
								name="choices-button"
								id="choices-button"
							>
								<option value="allfunds" selected>
									All Funds
								</option>
								<option value="featured">Featured</option>
								<option value="notwhitelist">Not Whitelist</option>
							</select>
						</div>
						<div className="col-lg-3 mt-lg-n2 mt-2">
							<label className="">Sort by: </label>
							<select
								className="form-control"
								name="choices-remove-button"
								id="choices-remove-button"
							>
								<option value="mostfollower" selected>
									Most Follower
								</option>
								<option value="hiestfundsize">Hiest Fund size</option>
								<option value="newest">Newest</option>
								<option value="oldest">Oldest</option>
								<option value="mininvest_low">Min Invest: Low to High</option>
								<option value="mininvest_high">Min Invest: high to Low</option>
							</select>
						</div>
						<div className="col-lg-3 mt-lg-n2 mt-2">
							<label>Search: </label>
							<InputGroup>
								<InputGroupText>
									<i className="fas fa-search" aria-hidden="true" />
								</InputGroupText>
								<Input
									className="form-control"
									placeholder="Fund name etc..."
									{...register('name')}
									name="name"
								/>
							</InputGroup>
						</div>
						<div className="col-lg-3 mt-lg-n2 mt-2">
							<label className="">&nbsp;</label>
							<button type="submit" className="btn bg-gradient-dark w-100 mb-0">
								Search
							</button>
						</div>
					</div>
				</Form>
			</FormProvider>
		</Wrapper>
	);
}

export default HeaderHome;
