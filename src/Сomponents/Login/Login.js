import React from 'react';
import {useDispatch} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {setUser} from '../../BLL/reducers/loginReducer';
import Headings from '../Headings/Headings';
import FormLoginSingUp from '../FormLoginSingUp/FormLoginSingUp';
import styles from './Login.module.css'

function Login(props) {
	const dispatch = useDispatch();
	let navigate = useNavigate();
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
			navigate('/masters');
		})
		.catch(console.error)
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
	linkTitle: 'Якщо ви ще не зареєстровані на сайті, будь ласка, перейдіть на сторінку реєстрації!',
	attention: 'Забули свій пароль?',
};

export default Login;