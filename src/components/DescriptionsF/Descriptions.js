import React from 'react';
import styles from './Descriptions.module.css'

function Descriptions({text,text2,text3,text4}) {
	return (
		<>
			<p className={styles.wrapDescription}>{text}</p>
			<p className={styles.wrapDescription}>{text2}</p>
			<p className={styles.wrapDescription}>{text3}</p>
			<p className={styles.wrapDescription}>{text4}</p>
		</>
	);
}

export default Descriptions;