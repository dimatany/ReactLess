import React, { useState } from "react";
import styles from './Pagination.module.css';
import ReactPaginate from "react-paginate";
import BlogPost from '../BlogF/BlogPost';

function Pagination({postsPerPage, ...props}) {
	const items = props.dataBlog;
	const [pageNumber, setPageNumber] = useState(0);
	
	const pagesVisited = pageNumber * postsPerPage;
	const pageCount = Math.ceil(items.length / postsPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	let displayItems = items.slice(pagesVisited, pagesVisited + postsPerPage);
	
	return (
		<div className={styles.wrapPagination}>
			<div className={styles.paginationBlock}>
				<BlogPost notes={displayItems}/>
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
