import React from 'react';
import styles from './BlogPost.module.css';

function BlogPost({ notes }) {
	return (
		<>
			{notes.map(el=>
				<div key={el.id} className={styles.wrap}>
					<div className={styles.wrapPost}>
						<span className={styles.postNumber}>{el.id}</span>
						<div className={styles.postContent}>
							<p className={styles.postContentHeader}>{el.header}</p>
							<p className={styles.postContentText}>{el.text}</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default BlogPost;