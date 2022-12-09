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
	title: 'Студія краси Осокорки',
}

export default Title;