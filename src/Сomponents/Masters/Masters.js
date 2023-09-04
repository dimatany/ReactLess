import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import styles from './Masters.module.css';
import Descriptions from '../Descriptions/Descriptions';
import Headings from '../Headings/Headings';
import MasterCard from '../MasterCard/MasterCard';
import {useTranslation} from 'react-i18next';

function Masters(props) {
	const { t } = useTranslation();
	
	return (
		<div className={styles.block}>
			<Headings heading={t('Masters.title')}/>
			<span className={styles.explanation}>{t('Masters.subtitle')}</span>
			<ErrorBoundary>
				<MasterCard dataMasters={props.dataMasters}/>
			</ErrorBoundary>
			<Descriptions text={t('Masters.text')}/>
		</div>
	);
}

export default Masters;