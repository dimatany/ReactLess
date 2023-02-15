import React from 'react';
import styles from './DetailBlock.module.css'
function DetailBlock(props) {
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
						<span>{props.subTitlePrice}</span>
						<span className={styles.currency}>{props.currency}</span>
					</details>
				</div>
			</div>
		</>
	);
}

DetailBlock.defaultProps = {
	currency: 'грн',
};
export default DetailBlock;