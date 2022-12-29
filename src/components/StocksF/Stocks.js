import React from 'react';
import styles from './Stocks.module.css'
import Countdown from '../CountdownF/Countdown';
import Video from "./video.mp4";

function Stocks(props) {
	return (
		<>
			<div className={styles.block}>
				<h2>{props.title}</h2>
				<p>{props.subtitle}</p>
			</div>
			<Countdown date={new Date('Wed, 31 Jan 2023 00:00:00')}/>
			<div className={styles.description}>
				<p>{props.description}</p>
				<p>{props.period}</p>
				<p>{props.reference}</p>
			</div>
			<div className={styles.video}>
				<video src={Video} width="600" height="300" controls="controls" autoPlay="true"/>
			</div>
		</>
	)
}

Stocks.defaultProps = {
	title: 'Акції',
	subtitle: 'До кінця акції залишилося:',
	description: 'Знижки до 40% на всі продукти Lador.',
	period: 'Період проведення акції з 9 грудня по 31 грудня 2022 року',
	reference: 'Поспішайте! Кількість товарів обмежена!',
};
export default Stocks;