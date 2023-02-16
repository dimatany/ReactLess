import React from 'react';
import styles from './Title.module.css'

function Title(props) {
	return (
		<section className={[styles["background"], styles['wrap']].join(" ")}>
			<h1>{props.title}</h1>
		</section>
	);
}

Title.defaultProps = {
	title: 'Beauty Salon',
}

export default Title;