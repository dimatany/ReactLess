import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import styles from './FormLoginSingUp.module.css';


function FormLoginSingUp({handleClick ,...props}) {
	const [error, setError] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const {
		register,
		handleSubmit,
		formState: {errors, isValid},
		reset,
	} = useForm({
		mode: 'onBlur',
	});
	
	const onSubmit = async (form, event) => {
		event.preventDefault();
		if (error) {
			setError("Помилка даних! Перевірте данні та пробуйте знову!");
			reset();
		}
	};
	
	
	return (
		<>
			{error && <p>{error}</p>}
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.wrapForm}>
					<label>Ваш Email: name@gmail.com
						<input
							{...register('email', {
								required: 'Це поле потрібно заповнити!',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "Додайте адресу у встановленому форматі!"
								}
							})}
							type="email"
							autoComplete='email'
							autoFocus={true}
							onChange={(e) => setEmail(e.target.value)}
						/>
						{errors.email && <span style={{ color: 'red' }}>
							Додайте адресу у встановленому форматі!</span>}
					</label>
					<label>Ваш пароль:
						<input
							{...register('password')}
							type='password'
							autoComplete='current-password'
							id="current-password"
							autoFocus={true}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
					<input type={'submit'}
					       disabled={!isValid}
					       value={props.text}
					       className={styles.btn}
					       onClick={() => handleClick(email, password)}
					/>
				</div>
			</form>
		</>
	);
}

FormLoginSingUp.defaultProps = {
	title: 'Авторизація',
	text: 'Відправити',
	linkTitle: 'Якщо ви ще не зареєстровані на сайті, будь ласка, перейдіть на сторінку реєстрації!',
};


export default FormLoginSingUp;