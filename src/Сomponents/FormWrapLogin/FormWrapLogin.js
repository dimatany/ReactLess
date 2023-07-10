import React from 'react';
import {useDispatch} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {setUser} from '../../BLL/reducers/loginReducer';
import Headings from '../Headings/Headings';
import FormInOut from '../FormInOut/FormInOut';
import styles from './FormWrapLogin.module.css'

function FormWrapLogin(props) {
	const dispatch = useDispatch();
	const {push} = useNavigate();
	const handleLogin = (email, password) => {
		const auth = getAuth();
		console.log(auth);
		signInWithEmailAndPassword(auth, email, password)
		.then(({user}) => {
			console.log(user);
			dispatch(setUser({
				email: user.email,
				id: user.uid,
				token: user.accessToken,
			}));
			push('/');
		})
		.catch(() => alert('Invalid user!'))
	};

	return (
		<div className={styles.wrap}>
			<Headings heading={props.title}/>
			<FormInOut handleClick={handleLogin}/>
			<p className={styles.wrapLink}>
				<a href="https://dimatany.github.io/WorkingExamples/" className={styles.link}>{props.attention}</a>
			</p>
			<div className={styles.transition}>
				<Link to='/registration'>{props.linkTitle}</Link>
			</div>
		</div>
	);
}

FormWrapLogin.defaultProps = {
	title: 'Авторизація',
	linkTitle: 'Якщо ви ще не зареєстровані на сайті, будь ласка, перейдіть на сторінку реєстрації!',
	attention: 'Забули свій пароль?',
};

export default FormWrapLogin;