import React from 'react';
import {useDispatch} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {setUser} from '../../BLL/reducers/loginReducer';
import Headings from '../Headings/Headings';
import FormInOut from '../FormInOut/FormInOut';
import styles from './FormWrapSingUp.module.css'


function FormWrapSingUp(props) {
	const dispatch = useDispatch();
	const {push} = useNavigate();
	const handleRegister = (email, password) => {
		const auth = getAuth();
		createUserWithEmailAndPassword (auth, email, password)
		.then(({user}) => {
			console.log(user);
			dispatch(setUser({
				email: user.email,
				id: user.uid,
				token: user.accessToken,
			}));
			push('/');
		})
		.catch(console.error)
	};
	
	return (
		<div className={styles.wrap}>
			<Headings heading={props.title}/>
			<FormInOut handleClick={handleRegister}/>
			<div className={styles.transition}>
				<Link to='/about'>{props.linkTitle}</Link>
			</div>
		</div>
	);
}

FormWrapSingUp.defaultProps = {
	title: 'Реєстрація',
	linkTitle: 'Якщо ви не хочете увійти в свій обліковий запис, ви можете перейти на головну сторінку сайту!'
};

export default FormWrapSingUp;