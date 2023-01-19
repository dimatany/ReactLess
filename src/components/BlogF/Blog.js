import React from 'react';
import styles from './Blog.module.css';



function Blog(props) {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.block}>
					<h2>{props.title}</h2>
				</div>
			</div>
		</>
	);
}

Blog.defaultProps = {
	title: 'Блог статей',
};


export default Blog;