import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import styles from './Blog.module.css';
import Headings from '../Headings/Headings';
import Pagination from '../Pagination/Pagination';

function Blog(props) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.block}>
				<Headings heading={props.title}/>
			</div>
			<h3>{props.subtitle}</h3>
			<ErrorBoundary>
				<Pagination dataBlog={props.dataBlog} postsPerPage={3}  store={props.store}/>
			</ErrorBoundary>
		</div>
	);
}

Blog.defaultProps = {
	title: 'Запитання та відповіді',
	subtitle: 'Можливо, у вас виникли питання?',
};

export default Blog;