import React from 'react';
import { useParams } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundaryC/ErrorBoundary';
import dataItems from '../../BLL/DataWWD';
import styles from './WhatWeDoDetail.module.css';
import Descriptions from '../DescriptionsF/Descriptions';
import Headings from '../HeadingsF/Headings';
import DetailBlock from './DetailBlock';

function WhatWeDoDetail(props) {
	const params = useParams();
	
	const currentWWD = dataItems.find(
		(el) => el.id === params.whatWeDoDetail
	);
	
	const { title, subtitle1, subtitlePrice1, subSubTitle1, subtitle2, subtitlePrice2, subSubTitle2, subtitle3, subtitlePrice3, subSubTitle3, subtitle4, subtitlePrice4, subSubTitle4, image1, image2, image3, image4, alt } = currentWWD;
	
	return (
		<div className={styles.wrap}>
			<Headings heading={title}/>
			<Descriptions text={props.text2}/>
			<ErrorBoundary>
				<DetailBlock
					image={image1}
					alt={alt}
					subTitle={subtitle1}
					subTitle2={subSubTitle1}
					subTitlePrice={subtitlePrice1}/>
				<DetailBlock
					image={image2}
					alt={alt}
					subTitle={subtitle2}
					subTitle2={subSubTitle2}
					subTitlePrice={subtitlePrice2}/>
				<DetailBlock
					image={image3}
					alt={alt}
					subTitle={subtitle3}
					subTitle2={subSubTitle3}
					subTitlePrice={subtitlePrice3}/>
				<DetailBlock
					image={image4}
					alt={alt}
					subTitle={subtitle4}
					subTitle2={subSubTitle4}
					subTitlePrice={subtitlePrice4}/>
			</ErrorBoundary>
			<Descriptions text={props.text}/>
		</div>
	);
}

WhatWeDoDetail.defaultProps = {
	text: 'У нас є багато різних послуг в асортименті - якщо ви хочете зареєструватися на консультацію по номерах або електронній пошті, наданих в капелюсі сайту',
	text2: 'Ми надаємо послуги популяції по догляду за волоссям (різання, створення волосся, фарбування, танення та іншого фарбування, стрижки, гоління та стрижки, стрижка та стрижка бороди та вус тощо) в номері обладнаному спеціально для цього.',
};
export default WhatWeDoDetail;
