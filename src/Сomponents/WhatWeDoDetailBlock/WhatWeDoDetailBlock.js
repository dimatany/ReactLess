import React from 'react';
import styles from './WhatWeDoDetailBlock.module.css'
function WhatWeDoDetailBlock(props) {
	return (
		<>
			<div className={styles.infoBlock}>
				<div className={styles.infoImage}>
					<img src={props.image} alt={props.alt}/>
				</div>
				<div className={styles.infoDetails}>
					<details>
						<summary>{props.subTitle}</summary>
						<p>{props.subTitle2}</p>
						<div className={styles.price}>
							<span>{props.subTitlePrice}</span>
							<span className={styles.currency}>{props.currency}</span>
						</div>
					</details>
				</div>
			</div>
		</>
	);
}

WhatWeDoDetailBlock.defaultProps = {
	currency: 'грн',
};
export default WhatWeDoDetailBlock;