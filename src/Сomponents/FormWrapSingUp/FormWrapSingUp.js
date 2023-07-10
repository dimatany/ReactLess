import React from 'react';
import styles from './FormWrapSingUp.module.css'
import Headings from '../Headings/Headings';
import FormInOut from '../FormInOut/FormInOut';

function FormWrapSingUp(props) {
	return (
		<div className={styles.wrap}>
			<Headings heading={props.title}/>
			<FormInOut/>
			<div className={styles.transition}>
				<a href="/about">{props.linkTitle}</a>
			</div>
		</div>
	);
}

FormWrapSingUp.defaultProps = {
	title: 'Реєстрація',
	linkTitle: 'Якщо ви не хочете увійти в свій обліковий запис, ви можете перейти на головну сторінку сайту!'
};

export default FormWrapSingUp;