import React from 'react';
import styles from './Headings.module.css';

function Headings({heading}) {
	return (
		<div className={styles.boxTitle}>
			<p>
				<span className={styles.primary}>{heading}</span>
				<span className={styles.secondary} aria-hidden="true">{heading}</span>
			</p>
		</div>
	);
}

export default Headings;