import React from 'react';
import styles from './Stocks.module.css'
import Countdown from '../CountdownF/Countdown';

function Stocks(props) {
	return (
		<>
			<div className={styles.block}>
				<h2>{props.title}</h2>
				<p>{props.subtitle}</p>
			</div>
			<Countdown date={new Date('Wed, 1 Jan 2023 00:00:00')}/>
		</>
	)
}

Stocks.defaultProps = {
	title: 'Акции',
	subtitle: 'До конца акции осталось:',
	description: 'Скидки до 40% на все товары производителя Lador.',
	period: 'Период проведения акции с 9 декабря до 31 декабря 2022 года',
	reference: 'Спешите! Количество товаров ограниченно!',
	
};
export default Stocks;