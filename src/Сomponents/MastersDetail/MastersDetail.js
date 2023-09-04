import React from 'react';
import { useParams } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import styles from './MastersDetail.module.css';
import Headings from '../Headings/Headings';
import MasterDetailPost from '../MasterDetailPost/MasterDetailPost';
import {useTranslation} from 'react-i18next';
import {getSlideInfo} from '../../BLL/data/masters';

function MastersDetail() {
	const params = useParams();
	const { t } = useTranslation();
	const slideInfo = getSlideInfo(t);
	
	const currentMD = slideInfo.find(
		(el) => el.id === params.mastersDetail
	);
	
	const {altImage, image1, image2, image3, image4, image5, image6, subTitle1, subTitle2, subTitle3, subTitle4, subTitle5, subTitle6, text1, text2, text3, text4, text5, text6} = currentMD;
	
	return (
		<div className={styles.wrap}>
			<Headings heading={t('MasterCard.heading')}/>
			<ErrorBoundary>
				<MasterDetailPost subTitle={subTitle1} image={image1} alt={altImage} text={text1}/>
				<MasterDetailPost subTitle={subTitle2} image={image2} alt={altImage} text={text2}/>
				<MasterDetailPost subTitle={subTitle3} image={image3} alt={altImage} text={text3}/>
				<MasterDetailPost subTitle={subTitle4} image={image4} alt={altImage} text={text4}/>
				<MasterDetailPost subTitle={subTitle5} image={image5} alt={altImage} text={text5}/>
				<MasterDetailPost subTitle={subTitle6} image={image6} alt={altImage} text={text6}/>
			</ErrorBoundary>
		</div>
	);
}

export default MastersDetail;