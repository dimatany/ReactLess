import React from 'react';
import styles from './MasterDetailPost.module.css';

function MasterDetailPost(props) {
	return (
		<div className={styles.wrapBlock}>
			<h4 className={styles.wrapTitle}>{props.subTitle}</h4>
			<div className={styles.wrapDescription}>
				<div className={styles.descriptionImg}>
					<img src={props.image} alt={props.alt}/>
				</div>
				<div className={styles.descriptionText}>
					<p>{props.text}</p>
				</div>
			</div>
		</div>
	);
}

export default MasterDetailPost;