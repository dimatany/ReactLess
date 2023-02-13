import React from 'react';
import styles from './Blog.module.css';
import Headings from '../HeadingsF/Headings';
import Test from '../PaginationF/Test';

function Blog(props) {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.block}>
					<Headings heading={props.title}/>
				</div>
				<h3>{props.subtitle}</h3>
				<Test/>
			</div>
		</>
	);
}

Blog.defaultProps = {
	title: 'Запитання та відповіді',
	subtitle: 'Можливо, у вас виникли питання?',
};

export default Blog;