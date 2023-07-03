import React, {useRef} from 'react';
import { useForm } from "react-hook-form";
import styles from './FormLogin.module.css';

function FormLogin(props) {
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
		<>
			<form ref={form} className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.wrapForm}>
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
					<p className={styles.wrapLink}>
						<a href="https://dimatany.github.io/WorkingExamples/" className={styles.link}>Forgot you password?</a>
					</p>
				</div>
			</form>
			<div className={styles.transition}>
				<a href="/registration">{props.linkTitle}</a>
			</div>
		</>
	);
}

FormLogin.defaultProps = {
	title: 'Авторизація',
	text: 'Відправити',
	linkTitle: 'Якщо ви ще не зареєстровані на сайті, будь ласка, перейдіть на сторінку реєстрації!'
};


export default FormLogin;