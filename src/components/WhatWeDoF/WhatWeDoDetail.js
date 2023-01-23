import React from 'react';
import { useParams } from 'react-router-dom';
import dataItems from './DataWWD';
import styles from './WhatWeDoDetail.module.css';
import Descriptions from '../DescriptionsF/Descriptions';

function WhatWeDoDetail(props) {
	const params = useParams();
	
	const currentWWD = dataItems.find(
		(el) => el.id === params.whatWeDoDetail
	);
	
	const { title, subtitle1, subtitlePrice1, subSubTitle1 } = currentWWD;
	
	return (
		<>
			<div className={styles.wrap}>
				<h2 className={styles.wrapTitle}>{title}</h2>
				<Descriptions text={props.text2}/>
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
				<Descriptions text={props.text}/>
			</div>
			
		</>
	);
}

WhatWeDoDetail.defaultProps = {
	currency: 'грн',
	text: 'У нас є багато різних послуг в асортименті - якщо ви хочете зареєструватися на консультацію по номерах або електронній пошті, наданих в капелюсі сайту',
	text2: 'Ми надаємо послуги популяції по догляду за волоссям (різання, створення волосся, фарбування, танення та іншого фарбування, стрижки, гоління та стрижки, стрижка та стрижка бороди та вус тощо) в номері обладнаному спеціально для цього.',
};
export default WhatWeDoDetail;