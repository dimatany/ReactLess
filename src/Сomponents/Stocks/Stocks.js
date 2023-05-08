import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import styles from './Stocks.module.css'
import Countdown from '../Countdown/Countdown';
import Video from "../../BLL/video/video.mp4";
import Headings from '../Headings/Headings';

function Stocks(props) {
	return (
		<>
			<ErrorBoundary>
				<div className={styles.block}>
					<Headings heading={props.title}/>
					<div className={styles.description}>
					<p>{props.subtitle}</p>
					</div>
				</div>
				<div className={styles.countdownBlock}>
					<Countdown date={new Date('Wed, 31 Dec 2023 00:00:00')}/>
				</div>
				<div className={styles.description}>
					<p>{props.description}</p>
					<p>{props.period}</p>
					<p>{props.reference}</p>
				</div>
				<div className={styles.video}>
					<video src={Video} width="600" height="300" controls="controls" autoPlay={true}/>
				</div>
				<div className={styles.transition}>
					<a href="/goods">{props.transition}</a>
				</div>
			</ErrorBoundary>
		</>
	)
}

Stocks.defaultProps = {
	title: 'Акції',
	subtitle: 'До кінця акції залишилося:',
	description: 'Знижки до 40% на всі продукти Lador.',
	period: 'Період проведення акції з 9 грудня по 31 грудня 2022 року',
	reference: 'Поспішайте! Кількість товарів обмежена!',
	transition: 'Щоб замовити товар, натисніть на цей напис та перейдіть на сторінку замовлення.',
};
export default Stocks;