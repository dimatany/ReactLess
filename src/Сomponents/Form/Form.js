import React, {useRef, useState} from 'react';
import { useForm } from "react-hook-form";
import styles from './Form.module.css';


function Form({handleClick ,...props}) {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
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
							autoComplete='username'
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
							onChange={(e) => setPass(e.target.value)}
						/>
					</label>
					<input type={'submit'}
					       className={styles.btn}
					       value={props.text}
					       disabled={!isValid}
					       onClick={() => handleClick(email, pass)}
					/>
				</div>
			</form>
			
		</>
	);
}

Form.defaultProps = {
	title: 'Авторизація',
	text: 'Відправити',
};


export default Form;