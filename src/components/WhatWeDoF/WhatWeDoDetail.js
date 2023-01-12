import React from 'react';
import { useParams } from 'react-router-dom';
import dataItems from './DataWWD';
import styles from './WhatWeDoDetail.module.css';

function WhatWeDoDetail(props) {
	const params = useParams();
	
	const currentWWD = dataItems.find(
		(el) => el.id === params.whatWeDoDetail
	);
	
	const { title, description, subtitle1, subtitlePrice1, subSubTitle1, subtitle2, subtitlePrice2, subSubTitle2, subtitle3, subtitlePrice3, subSubTitle3, subtitle4, subtitlePrice4, subSubTitle4, image, image1, image2, image3, image4, alt } = currentWWD;
	
	return (
		<>
			<div className={styles.wrap}>
				<h2 className={styles.wrapTitle}>{title}</h2>
				<p className={styles.wrapDescription}>{description}</p>
				<div className={styles.infoBlock}>
					<div className={styles.infoImage}>
						<img src={image1} alt={alt}/>
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
				<div className={styles.infoBlock}>
					<div className={styles.infoImage}>
						<img src={image2} alt={alt}/>
					</div>
					<div className={styles.infoDetails}>
						<details>
							<summary>{subtitle2}</summary>
							<p>{subSubTitle2}</p>
							<span>{subtitlePrice2}</span>
							<span className={styles.currency}>{props.currency}</span>
						</details>
					</div>
				</div>
				<div className={styles.infoBlock}>
					<div className={styles.infoImage}>
						<img src={image3} alt={alt}/>
					</div>
					<div className={styles.infoDetails}>
						<details>
							<summary>{subtitle3}</summary>
							<p>{subSubTitle3}</p>
							<span>{subtitlePrice3}</span>
							<span className={styles.currency}>{props.currency}</span>
						</details>
					</div>
				</div>
				<div className={styles.infoBlock}>
					<div className={styles.infoImage}>
						<img src={image4} alt={alt}/>
					</div>
					<div className={styles.infoDetails}>
						<details>
							<summary>{subtitle4}</summary>
							<p>{subSubTitle4}</p>
							<span>{subtitlePrice4}</span>
							<span className={styles.currency}>{props.currency}</span>
						</details>
					</div>
				</div>
				<p className={styles.wrapDescription}>{props.title}</p>
			</div>
			
		</>
	);
}

WhatWeDoDetail.defaultProps = {
	title: 'У нас є багато різних послуг в асортименті - якщо ви хочете зареєструватися на консультацію по номерах або електронній пошті, наданих в капелюсі сайту',
	currency: 'грн',
};
export default WhatWeDoDetail;