import React from 'react';
import { useParams } from 'react-router-dom';
import dataItems from './DataWWD';
import styles from './WhatWeDoDetail.module.css';

function WhatWeDoDetail(props) {
	const params = useParams();
	
	const currentWWD = dataItems.find(
		(el) => el.id === params.whatWeDoDetail
	);
	
	const { title, image, alt } = currentWWD;
	
	return (
		<>
			<div>
				<h2 className={styles.test}>{props.title1}</h2>
				<img className={styles.test2} src={image} alt={alt}/>
			</div>
		
		</>
	);
}

WhatWeDoDetail.defaultProps = {
	title1: 'SKU',
	title2: 'опис',
};
export default WhatWeDoDetail;