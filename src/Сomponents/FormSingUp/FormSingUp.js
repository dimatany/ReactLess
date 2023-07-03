import React, {useRef} from 'react';
import {useForm} from 'react-hook-form';
import styles from './FormSingUp.module.css';
import Headings from '../Headings/Headings';

function FormSingUp(props) {
	const form = useRef();
	
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
		reset,
	} = useForm({
		mode: 'onBlur',
	});
	
	const onSubmit = (data) => {
		const userData = JSON.parse(localStorage.getItem(data.email));
		if (userData) { // getItem can return actual value or null
			if (userData.password === data.password) {
				alert(userData.name + 'Ви успішно Авторизувалися');
			} else {
				alert('Email або Пароль не дійсні');
			}
		} else {
			reset();
		}
	};
	return (
		<div className={styles.wrap}>
			<Headings heading={props.title}/>
			<form ref={form} className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.wrapForm}>
					<label>Your Name:
						<input
							{...register('firstName', {
								required: 'Це поле потрібно заповнити!',
								minLength: {
									value: 2,
									message: 'У імені повинно бути щонайменше два символи!',
								},
								maxLength: {
									value: 10,
									message: 'Это слишком длинное имя',
								},
							})}
							type="text"
						/>
						{errors?.firstName && <p style={{ color: 'red' }}>{errors?.firstName?.message || 'Error!'}</p>}
					</label>
					<label>Your Email: name@gmail.com
						<input
							{...register('email', {
								required: 'Це поле потрібно заповнити!',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "Додайте адресу у встановленому форматі!"
								}
							})}
							type="email"
							autoComplete='username'
						/>
						{errors.email && <span style={{ color: 'red' }}>
							Додайте адресу у встановленому форматі!</span>}
					</label>
					<label>Your password:
						<input
							{...register('password')}
							type='password'
							autoComplete='current-password'
						/>
					</label>
					<input type={'submit'}
					       className={styles.btn}
					       value={props.text}
					       disabled={!isValid}
					/>
				</div>
			</form>
			<div className={styles.transition}>
				<a href="/about">{props.linkTitle}</a>
			</div>
		</div>
	);
}

FormSingUp.defaultProps = {
	title: 'Реєстрація',
	text: 'Відправити',
	linkTitle: 'Якщо ви не хочете увійти в свій обліковий запис, ви можете перейти на головну сторінку сайту!'
};

export default FormSingUp;