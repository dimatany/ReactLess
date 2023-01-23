import React from 'react';
import styles from './Descriptions.module.css'

function Descriptions({text}) {
	return (
		<>
			<p className={styles.wrapDescription}>{text}</p>
		</>
	);
}

export default Descriptions;