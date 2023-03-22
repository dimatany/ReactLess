import React, { useState } from "react";
import styles from './Pagination.module.css';
import data from '../../BLL/Data';
import ReactPaginate from "react-paginate";
import SVGHand from '../SVG/SVGHand';

function Pagination(props) {
	const [users, setUsers] = useState(data.dataBlog.slice(0, 100));
	const [pageNumber, setPageNumber] = useState(0);
	
	const usersPerPage = 3;
	const pagesVisited = pageNumber * usersPerPage;
	
	const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((el) => {
		return (
			<div className={styles.wrapBlock} key={el.id}>
				<div className={styles.card}>
					<div className={[styles['cardSide'], styles['front']].join(" ")} key={el.id}>
						<p className={styles.title}>{el.title}</p>
						<p className={styles.question}>{el.header}</p>
						<div className={styles.handSVG}>
							<SVGHand fill='#191d1c'/>
						</div>
					</div>
					<div className={[styles['cardSide'], styles['back']].join(" ")}>
						<p>{el.text}</p>
					</div>
				</div>
			</div>
		);
	});
	
	const pageCount = Math.ceil(users.length / usersPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};
	
	return (
		<div className={styles.wrapPagination}>
			{displayUsers}
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
