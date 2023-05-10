import React from 'react';
import styles from './ButtonSubmit.module.css'

function ButtonSubmit({ onClick, children }) {
	return (
		<button onClick={onClick} className={styles.professionRef}>
			{children}
		</button>
	);
}

export default ButtonSubmit;