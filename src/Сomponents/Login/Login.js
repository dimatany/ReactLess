import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {getAuth} from 'firebase/auth';
import Headings from '../Headings/Headings';
import FormLoginSingUp from '../FormLoginSingUp/FormLoginSingUp';
import {signInUser} from '../../firebase';
import {startSession} from '../../session';
import styles from './Login.module.css';


function Login(props) {
	let navigate = useNavigate();
	
	const handleLogin = async (email, password) => {
		const auth = getAuth();
		console.log(auth);
		try {
			let [loginResponse] = await Promise.all(
				[signInUser(email, password)]);
			startSession(loginResponse.user);
			navigate('/homePage');
		}
		catch (error) {
			alert(error.message);
		}
	};
	
	return (
		<div className={styles.wrap}>
			<Headings heading={props.title}/>
			<FormLoginSingUp handleClick={handleLogin}/>
			<p className={styles.wrapLink}>
				<a href="https://dimatany.github.io/WorkingExamples/" className={styles.link}>{props.attention}</a>
			</p>
			<div className={styles.transition}>
				<Link to='/registration'>{props.linkTitle}</Link>
			</div>
		</div>
	);
}

Login.defaultProps = {
	title: 'Авторизація',
	linkTitle: 'Якщо ви ще не зареєстровані, перейдіть на сторінку реєстрації!',
	attention: 'Забули свій пароль?',
};

export default Login;
