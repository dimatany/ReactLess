import React from 'react';
import ErrorBoundary from '../ErrorBoundaryC/ErrorBoundary';
import styles from './Blog.module.css';
import Headings from '../HeadingsF/Headings';
import Pagination from '../PaginationF/Pagination';

function Blog(props) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.block}>
				<Headings heading={props.title}/>
			</div>
			<h3>{props.subtitle}</h3>
			<ErrorBoundary>
				<Pagination/>
			</ErrorBoundary>
		</div>
	);
}

Blog.defaultProps = {
	title: 'Запитання та відповіді',
	subtitle: 'Можливо, у вас виникли питання?',
};

export default Blog;