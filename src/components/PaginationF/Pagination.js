import React, { useState } from "react";
import styles from './Pagination.module.css';
import ReactPaginate from "react-paginate";
import Type from '../BlogF/BlogPost';

function Pagination(props) {
	const items = props.dataBlog;
	const [pageNumber, setPageNumber] = useState(0);
	
	const pageSize = 3;
	const pagesVisited = pageNumber * pageSize;
	const pageCount = Math.ceil(items.length / pageSize);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	
	let displayItems = items.slice(pagesVisited, pagesVisited + pageSize);
	
	return (
		<div className={styles.wrapPagination}>
			<div className={styles.paginationBlock}>
				<Type notes={displayItems}/>
			</div>
			<ReactPaginate
				previousLabel={" ‹ "}
				nextLabel={" › "}
				breakLabel={'...'}
				pageCount={pageCount}
				onPageChange={changePage}
				containerClassName={styles.paginationButton}
				disabledClassName={styles.paginationDisabled}
				activeClassName={styles.paginationActive}
			/>
		</div>
	);
}

export default Pagination;
