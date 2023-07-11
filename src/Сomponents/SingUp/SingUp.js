import React from 'react';
import {useDispatch} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {setUser} from '../../BLL/reducers/loginReducer';
import Headings from '../Headings/Headings';
import Form from '../Form/Form';
import styles from './SingUp.module.css'


function SingUp(props) {
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
			<Form handleClick={handleRegister}/>
			<div className={styles.transition}>
				<Link to='/about'>{props.linkTitle}</Link>
			</div>
		</div>
	);
}

SingUp.defaultProps = {
	title: 'Реєстрація',
	linkTitle: 'Якщо ви не хочете увійти в свій обліковий запис, ви можете перейти на головну сторінку сайту!'
};

export default SingUp;