import React from 'react';
import styles from './Descriptions.module.css'

function Descriptions({text}) {
	return (
		<>
			<div className={styles.wrapDescription}>{text}</div>
		</>
	);
}

export default Descriptions;