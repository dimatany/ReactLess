import React from 'react';
import styles from './Loading.module.css';

function Loading(props) {
	return (
		<>
			<h2 className={styles.title}>{props.title}</h2>
			<div className={[styles["contain"], styles['wrap'], styles['wrap']].join(" ")}>
				<div className={styles.ring}></div>
				<div className={styles.ring}></div>
				<div className={styles.ring}></div>
			</div>
		</>
	)
}

Loading.defaultProps = {
	title: 'Будь ласка, зачекайте! Ми намагаємося завантажити контент для вас як найшвидше.',
};

export default Loading;
