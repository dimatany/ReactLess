import React from 'react';
import styles from './Headings.module.css';

function Headings({heading}) {
	return (
		<section className={styles.boxTitle}>
			<a href="">
				<span className={styles.primary}>{heading}</span>
				<span className={styles.secondary} aria-hidden="true">{heading}</span>
			</a>
		</section>
	);
}

export default Headings;