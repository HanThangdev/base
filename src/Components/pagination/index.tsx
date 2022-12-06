/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/naming-convention */
import { DOTS, usePaginationRange } from '@hooks/usePaginationRange';
import { IPagination } from '@type/Home';
import { useState } from 'react';
import { Button, Wrapper } from './styled';

interface IProps {
	data: IPagination;
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
	const { item_count, has_previous_page, has_next_page } = data;
	const [totalPageCount] = useState<number>(
		Math.ceil(item_count / contentPerPage)
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
			{(has_next_page || has_previous_page) && (
				<ul className="pagination pagination-primary mt-4">
					{has_previous_page && (
						<li
							className={`page-item ms-auto ${
								currentPage === 1 ? 'disabled' : ''
							}`}
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
					)}

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
								className={`page-item ${
									currentPage === item ? 'active' : null
								}`}
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
					{has_next_page && (
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
					)}
				</ul>
			)}
		</Wrapper>
	);
}

export default Pagination;
