import React from 'react';
import styles from './WhoWeAre.module.css'
import SVGDivision from '../SVG/SVGDivision';
import {useTranslation} from 'react-i18next';

function WhoWeAre() {
	const { t } = useTranslation();
	return (
		<div className={[styles["about"], styles['wrap']].join(" ")}>
			<span>
				<SVGDivision fill="#5383ed"/>
			</span>
			<p>{t('WhoWeAre.explanation1')}</p>
			<p>{t('WhoWeAre.explanation2')}</p>
			<p>{t('WhoWeAre.explanation3')}</p>
		</div>
	);
}

export default WhoWeAre;