import React from 'react';
import styles from './Title.module.css'


function Title(props) {
	return (
		<nav className={[styles["background"], styles['wrap']].join(" ")}>
			<h1>{props.title}</h1>
		</nav>
	);
}

Title.defaultProps = {
	title: 'Beauty Salon',
}

export default Title;