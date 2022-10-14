/* eslint-disable react/no-array-index-key */

import { DOTS, usePaginationRange } from '@hooks/usePaginationRange';
import { useState } from 'react';
import { Button, Wrapper } from './styled';

interface IProps {
	data: any;
	buttonConst: number;
	contentPerPage: any;
	siblingCount: any;
}

function Pagination({
	data,
	buttonConst,
	contentPerPage,
	siblingCount,
}: IProps) {
	const [totalPageCount] = useState<number>(
		Math.ceil(data.length / contentPerPage)
	);
	const [currentPage, setCurrentPage] = useState<number>(1);

	const paginationRange = usePaginationRange({
		totalPageCount,
		buttonConst,
		siblingCount,
		currentPage,
	});

	function goToNextPage() {
		setCurrentPage((page) => page + 1);
	}
	function gotToPreviousPage() {
		setCurrentPage((page) => page - 1);
	}
	function changePage(event: any) {
		const pageNumber = Number(event.target.textContent);
		setCurrentPage(pageNumber);
	}

	return (
		<Wrapper className="col-lg-12 d-flex justify-content-center">
			<ul className="pagination pagination-primary mt-4">
				<li
					className={`page-item ms-auto ${currentPage === 1 ? 'disabled' : ''}`}
				>
					<Button
						onClick={() => gotToPreviousPage()}
						type="button"
						className="page-link"
						aria-label="Previous"
					>
						<span aria-hidden="true">
							<i className="fa fa-angle-double-left" aria-hidden="true" />
						</span>
					</Button>
				</li>
				{paginationRange?.map((item, index) => {
					if (item === DOTS) {
						return (
							<li key={index} className="page-item">
								&#8230;
							</li>
						);
					}
					return (
						<li
							key={index}
							className={`page-item ${currentPage === item ? 'active' : null}`}
						>
							<Button
								type="button"
								onClick={(e) => changePage(e)}
								className="page-link"
							>
								{item}
							</Button>
						</li>
					);
				})}
				<li
					className={`page-item ${
						currentPage === totalPageCount ? 'disabled' : ''
					}`}
				>
					<Button
						onClick={() => goToNextPage()}
						type="button"
						className="page-link"
						aria-label="Next"
					>
						<span aria-hidden="true">
							<i className="fa fa-angle-double-right" aria-hidden="true" />
						</span>
					</Button>
				</li>
			</ul>
		</Wrapper>
	);
}

export default Pagination;
