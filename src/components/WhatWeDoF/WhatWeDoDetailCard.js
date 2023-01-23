import React from 'react';
import { useParams } from 'react-router-dom';
import dataItems from './DataWWD';
import styles from './WhatWeDoDetailCard.module.css';

function WhatWeDoDetailCard(props) {
	const params = useParams();
	
	const currentWWD = dataItems.find(
		(el) => el.id === params.whatWeDoDetail
	);
	
	const { subtitle1, subtitlePrice1, subSubTitle1 } = currentWWD;
	
	return (
		<>
			<div className={styles.wrap}>
				<div>
					{dataItems.map(el =>
						<div key={el.id} className={styles.infoDescr}>
							<div className={styles.infoImage} key={el.id}>
								<img key={el.id} src={el.image} alt={el.alt}/>
							</div>
							<div className={styles.infoDetails}>
								<details>
									<summary>{subtitle1}</summary>
									<p>{subSubTitle1}</p>
									<span>{subtitlePrice1}</span>
									<span className={styles.currency}>{props.currency}</span>
								</details>
							</div>
						</div>
					)}
				</div>
			</div>
		
		</>
	);
}

export default WhatWeDoDetailCard;