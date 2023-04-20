import React, { useState } from "react";
import styles from './Pagination.module.css';
import ReactPaginate from "react-paginate";
import SVGHand from '../SVG/SVGHand';


function Pagination(props) {
	const [items, setItems] = useState(props.dataBlog);
	const [pageNumber, setPageNumber] = useState(0);
	
	
	const usersPerPage = 2;
	const pagesVisited = pageNumber * usersPerPage;
	
	const displayItems = items.slice(pagesVisited, pagesVisited + usersPerPage)
	.map(el => {
		return (
			<div key={el.id} className={styles.wrap}>
				<div className={styles.wrapPost}>
					<span className={styles.postNumber}>{el.id}</span>
					<div className={styles.postContent}>
						<p className={styles.postContentHeader}>{el.header}</p>
						<p className={styles.postContentText}>{el.text}</p>
					</div>
				</div>
			</div>
		);
	});
	
	const pageCount = Math.ceil(items.length / usersPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	
	return (
		<div className={styles.wrapPagination}>
			<div className={styles.paginationBlock}>
				{displayItems}
			</div>
			<ReactPaginate
				previousLabel={" ‹ "}
				nextLabel={" › "}
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
