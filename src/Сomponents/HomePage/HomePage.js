import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {endSession, getSession, isLoggedIn} from '../../session';
import styles from './HomePage.module.css';
import Headings from '../Headings/Headings';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

const HomePage = (props) => {
	let navigate = useNavigate();
	const [email, setEmail] = useState('');
	
	useEffect(() => {
		if (!isLoggedIn()) {
			navigate("/login");
		}
		let session = getSession();
		setEmail(session.email);
		console.log("Your access token is: " + session.accessToken);
	}, [navigate]);
	
	
	const onLogout = () => {
		endSession();
		navigate("/about");
	}
	
	return (
		<div className={styles.wrap}>
			<Headings heading={props.title}/>
			<h2>Ви увійшли під ім'ям:</h2>
			<p>{email}</p>
			<h2>Хочете піти? Натисніть на кнопку:</h2>
			<div className={styles.buttonSubmit}>
				<ButtonSubmit onClick={onLogout} children={props.buttonSub}/>
			</div>
		</div>
	)
}

HomePage.defaultProps = {
	title: 'Ваша облікова сторінка',
	buttonSub: 'Log out',
};

export default HomePage;
