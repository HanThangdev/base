/* eslint-disable jsx-a11y/label-has-associated-control */

import { Wrapper } from './styled';

function HeaderInvest() {
	return (
		<Wrapper>
			<div className="page-header min-vh-35">
				<div className="container">
					<div className="row">
						<div className="col-lg-12" />
					</div>
				</div>
			</div>
			<div
				className="position-relative overflow-hidden"
				style={{ height: '36px', marginTop: '-33px' }}
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
		</Wrapper>
	);
}

export default HeaderInvest;
