import React from 'react';
import styles from './WhatWeDoDetailBlock.module.css';
import {useTranslation} from 'react-i18next';


function WhatWeDoDetailBlock(props) {
	const { t } = useTranslation();
	
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
							<span className={styles.currency}>{t('Technical.currency')}</span>
						</div>
					</details>
				</div>
			</div>
		</>
	);
}

export default WhatWeDoDetailBlock;