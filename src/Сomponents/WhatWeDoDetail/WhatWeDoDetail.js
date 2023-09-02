import React from 'react';
import { useParams } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import styles from './WhatWeDoDetail.module.css';
import Descriptions from '../Descriptions/Descriptions';
import Headings from '../Headings/Headings';
import WhatWeDoDetailBlock from '../WhatWeDoDetailBlock/WhatWeDoDetailBlock';
import {useTranslation} from 'react-i18next';
import {getSlideInfo} from '../../BLL/json/wwdData';

function WhatWeDoDetail() {
	const params = useParams();
	const { t } = useTranslation();
	const slideInfo = getSlideInfo(t);
	const currentWWD = slideInfo.find(
		(el) => el.id === params.whatWeDoDetail
	);
	
	const { subtitle1, subtitlePrice1, subSubTitle1, subtitle2, subtitlePrice2, subSubTitle2, subtitle3, subtitlePrice3, subSubTitle3, subtitle4, subtitlePrice4, subSubTitle4, image1, image2, image3, image4, alt } = currentWWD;
	//const { title, subtitle1, subtitlePrice1, subSubTitle1, subtitle2, subtitlePrice2, subSubTitle2, subtitle3, subtitlePrice3, subSubTitle3, subtitle4, subtitlePrice4, subSubTitle4, image1, image2, image3, image4, alt } = currentWWD;
	
	return (
		<div className={styles.wrap}>
			<Headings heading={t('WhatWeDo.title1')}/>
			<Descriptions text={t('WhatWeDoDetail.explanation1')}/>
			<ErrorBoundary>
				<WhatWeDoDetailBlock
					image={image1}
					alt={alt}
					subTitle={subtitle1}
					subTitle2={subSubTitle1}
					subTitlePrice={subtitlePrice1}/>
				<WhatWeDoDetailBlock
					image={image2}
					alt={alt}
					subTitle={subtitle2}
					subTitle2={subSubTitle2}
					subTitlePrice={subtitlePrice2}/>
				<WhatWeDoDetailBlock
					image={image3}
					alt={alt}
					subTitle={subtitle3}
					subTitle2={subSubTitle3}
					subTitlePrice={subtitlePrice3}/>
				<WhatWeDoDetailBlock
					image={image4}
					alt={alt}
					subTitle={subtitle4}
					subTitle2={subSubTitle4}
					subTitlePrice={subtitlePrice4}/>
			</ErrorBoundary>
			<Descriptions text={t('WhatWeDoDetail.explanation2')}/>
		</div>
	);
}
export default WhatWeDoDetail;
