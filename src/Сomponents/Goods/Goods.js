import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import styles from './Goods.module.css';
import Headings from '../Headings/Headings';
import GoodsFilter from '../GoodsFilter/GoodsFilter';

function Goods(props) {
	return (
		<>
			<div className={styles.block}>
				<Headings heading={props.title}/>
			</div>
			<ErrorBoundary>
				<GoodsFilter dataGoods={props.dataGoods}/>
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