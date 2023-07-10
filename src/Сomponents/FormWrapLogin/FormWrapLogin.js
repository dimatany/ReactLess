import React from 'react';
import styles from './FormWrapLogin.module.css'
import Headings from '../Headings/Headings';
import FormInOut from '../FormInOut/FormInOut';


function FormWrapLogin(props) {
	return (
		<div className={styles.wrap}>
			<Headings heading={props.title}/>
			<FormInOut/>
			<p className={styles.wrapLink}>
				<a href="https://dimatany.github.io/WorkingExamples/" className={styles.link}>Forgot you password?</a>
			</p>
			<div className={styles.transition}>
				<a href="/registration">{props.linkTitle}</a>
			</div>
		</div>
	);
}

FormWrapLogin.defaultProps = {
	title: 'Авторизація',
	linkTitle: 'Якщо ви ще не зареєстровані на сайті, будь ласка, перейдіть на сторінку реєстрації!'
};

export default FormWrapLogin;