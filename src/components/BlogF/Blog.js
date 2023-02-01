import React from 'react';
import styles from './Blog.module.css';
import Headings from '../HeadingsF/Headings';

function Blog(props) {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.block}>
					<Headings heading={props.title}/>
				</div>
			</div>
		</>
	);
}

Blog.defaultProps = {
	title: 'Блог статей',
};

export default Blog;