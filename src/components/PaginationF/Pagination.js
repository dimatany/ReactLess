import React from 'react';
import styles from './Pagination.module.css';

function Pagination() {
	const [currentPage, setCurrentPage] = React.useState(1);
	const maxPages = 100;
	let items = [];
	let leftSide = currentPage - 1;
	if(leftSide <= 0 ) leftSide = 1;
	let rightSide = currentPage + 1;
	if(rightSide > maxPages) rightSide = maxPages;
	
	for (let number = leftSide; number <= rightSide; number++) {
		items.push(
			<div key={number}
			     className={(number === currentPage ? [styles['roundEffect'], styles['active']].join(" ") : styles.roundEffect)}
			     onClick={()=>{ setCurrentPage(number)}}>
				{number}
			</div>,
		);
	}
	
	const nextPage = () => {
		if(currentPage < maxPages){
			setCurrentPage(currentPage + 1)
		}
	}
	const prevPage = () => {
		if(currentPage > 1){
			setCurrentPage(currentPage - 1)
		}
	}
	
	return (
		<>
			<div className={styles.flexContainer}>
				<div className={styles.paginateCtn}>
					<div className={styles.roundEffect} onClick={prevPage}> &lsaquo; </div>
					{items}
					<div className={styles.roundEffect} onClick={nextPage}> &rsaquo; </div>
				</div>
			</div>
		</>
	);
}

export default Pagination;
