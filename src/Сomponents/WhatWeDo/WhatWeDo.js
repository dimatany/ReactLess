import React, {useState} from 'react';
import styles from './WhatWeDo.module.css';
import { Link } from "react-router-dom";
import Headings from '../Headings/Headings';
import {useTranslation} from 'react-i18next';
import {getSlideInfo} from '../../BLL/data/wwdData';

function WhatWeDo() {
	const [checked, setChecked] = useState(true);
	const { t } = useTranslation();
	const slideInfo = getSlideInfo(t);
	function handleChange() {
		setChecked(!checked);
	}
	
	return (
		<div className={[styles["services"], styles['wrap']].join(" ")}>
			<Headings heading={t('WhatWeDo.section1')}/>
			<div className={styles.card}>
				{slideInfo.map(el =>
					<div className={styles.shadow} key={el.id}>
						<img key={el.id} src={el.image} alt={el.alt}/>
						{/*Без `../about/${el.id}` - такой топорной конкатенации
						не получается загрузить сразу компонент на первой странице
						из-за того что она индексная - не нашла другого варианта
						как исправить баг*/}
						<Link to={`../about/${el.id}`} className={styles.link}>
							<label htmlFor="button">{t('WhatWeDo.label1')}</label>
							<input className={styles.checkbox} checked={checked} onChange={handleChange} />
						</Link>
						<p className={styles.wrapDescr}>{el.title}</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default WhatWeDo;