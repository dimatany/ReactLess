import React from 'react';
import ErrorBoundary from '../ErrorBoundaryC/ErrorBoundary';
import styles from './Goods.module.css';
import Headings from '../HeadingsF/Headings';
import GoodsCard from './GoodsCard';

function Goods(props) {
	
	return (
		<>
			<div className={styles.block}>
				<Headings heading={props.title}/>
			</div>
			<ErrorBoundary>
				<GoodsCard dataGoods={props.dataGoods}/>
			</ErrorBoundary>
		</>
	);
}

Goods.defaultProps = {
	title: 'Товари',
	button: 'Купити',
	label: 'дізнайтеся більше',
	currency: 'грн',
};
export default Goods;