import React, { useState } from "react";
import styles from './BlogPost.module.css';
import Comments from '../Comment/Comments';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';



function BlogPost({ notes, ...props }) {
	const [showMore, setShowMore] = useState(0);
	const handelShow = (id) => {
		setShowMore(id);
	};
	return (
		<>
			{notes.map((el) => { const isTestOpen = el.id === showMore;
			return (
				<div key={el.id} className={styles.wrap}>
					<div className={styles.wrapPost}>
						<span className={styles.postNumber}>{el.id}</span>
						<div className={styles.postContent}>
							<p className={styles.postContentHeader}>{el.header}</p>
							<p className={styles.postContentText}>
								{isTestOpen
									? el.text
									: el.text.substring(0, 200) + "..."}
							</p>
							{isTestOpen ? (
								<p className={styles.less} onClick={() => handelShow(0)}>{props.buttonLess}</p>
							) : (
								<p className={styles.more} onClick={() => handelShow(el.id)} >{props.buttonMore}</p>)}
						</div>
					</div>
				</div>
			);
			})}
			<ErrorBoundary>
				<Comments store={props.store}/>
			</ErrorBoundary>
		</>
	);
}
BlogPost.defaultProps = {
	buttonLess: '"Показати менше..."',
	buttonMore: '"Показати більше..."',
};

export default BlogPost;