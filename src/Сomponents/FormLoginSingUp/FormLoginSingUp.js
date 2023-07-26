import React, {useState} from 'react';
import styles from './FormLoginSingUp.module.css';


function FormLoginSingUp({handleClick ,...props}) {
	const [error, setError] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	
	const onSubmit = async (form, event) => {
		event.preventDefault();
		if (error) {
			setError("Помилка даних! Перевірте данні та пробуйте знову!");
		}
	};
	
	
	return (
		<>
			{error && <p>{error}</p>}
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.wrapForm}>
					<label>Ваш Email: name@gmail.com
						<input
							type="email"
							autoComplete='email'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
					<label>Ваш пароль:
						<input
							type='password'
							autoComplete='current-password'
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