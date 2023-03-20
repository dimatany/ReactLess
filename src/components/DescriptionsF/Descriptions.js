import React from 'react';
import styles from './Descriptions.module.css'

function Descriptions({text}) {
	return (
		<>
			<section className={styles.wrapDescription}>{text}</section>
		</>
	);
}

export default Descriptions;