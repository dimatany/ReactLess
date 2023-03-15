import React from 'react';
import ErrorBoundary from '../ErrorBoundaryC/ErrorBoundary';
import { useParams } from 'react-router-dom';
import dataItems from '../../BLL/DataGoods';
import styles from './GoodsDetail.module.css';

function GoodsDetail(props) {
	const params = useParams();
	
	const currentGoods = dataItems.find(
		(el) => el.id === params.goodsDetail
	);
	
	const { article, name, description, forWhat, type, application, composition, prise, image, alt } = currentGoods;
	
	return (
		<>
			<ErrorBoundary>
				<div className={styles.wrap}>
					<div className={styles.illustration}>
						<img src={image} alt={alt}/>
					</div>
					<div className={styles.sinopsis}>
						<h2 className={styles.name}>{name}</h2>
						<span>{props.title1}</span>
						<p className={styles.article}>{article}</p>
						<span>{props.title3}</span>
						<p className={styles.forWhat}>{forWhat}</p>
						<span>{props.title4}</span>
						<p className={styles.type}>{type}</p>
						<span>{props.title7}</span>
						<p className={styles.prise}>{prise} {props.currency}</p>
					</div>
				</div>
				<div className={styles.info}>
					<span>{props.title2}</span>
					<p className={styles.description}>{description}</p>
					<span>{props.title5}</span>
					<p className={styles.application}>{application}</p>
					<span>{props.title6}</span>
					<p className={styles.composition}>{composition}</p>
				</div>
			</ErrorBoundary>
		</>
	);
}

GoodsDetail.defaultProps = {
	title1: 'SKU',
	title2: 'опис',
	title3: 'для чого',
	title4: 'тип',
	title5: 'як використовувати',
	title6: 'склад',
	title7: 'ціна',
	currency: 'грн',
};
export default GoodsDetail;