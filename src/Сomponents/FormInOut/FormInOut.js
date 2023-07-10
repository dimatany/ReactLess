import React, {useRef} from 'react';
import { useForm } from "react-hook-form";
import styles from './FormInOut.module.css';


function FormInOut(props) {
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
		if (userData) {
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
			<form className={styles.form} ref={form} onSubmit={handleSubmit(onSubmit)}>
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
				</div>
			</form>
			
		</>
	);
}

FormInOut.defaultProps = {
	title: 'Авторизація',
	text: 'Відправити',
};


export default FormInOut;