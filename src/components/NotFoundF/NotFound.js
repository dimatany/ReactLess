import React from 'react';
import styles from './NotFound.module.css'

function NotFound(props) {
	return (
		<div className={styles.wrap}>
			<div className={[styles["conic"], styles['conicDemo']].join(" ")}>
				<h2>{props.title}</h2>
				<p>{props.subtitle}</p>
			</div>
		</div>
	);
}

NotFound.defaultProps = {
	title: '404',
	subtitle: 'Щось пішло не так ... перейдіть на попередню сторінку!',
};

export default NotFound;

