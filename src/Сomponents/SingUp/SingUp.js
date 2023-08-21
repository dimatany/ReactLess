import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {getAuth} from 'firebase/auth';
import Headings from '../Headings/Headings';
import FormLoginSingUp from '../FormLoginSingUp/FormLoginSingUp';
import {createUser} from '../../firebase';
import {startSession} from '../../session';
import styles from './SingUp.module.css';


function SingUp(props) {
	let navigate = useNavigate();
	
	const handleRegister = async (email, password) => {
		const auth = getAuth();
		console.log(auth);
		try {
			let [registerResponse] = await Promise.all(
				[createUser(email, password)]);
			startSession(registerResponse.user);
			navigate('/homePage');
		}
		catch (error) {
			alert(error.message);
		}
	};
	
	return (
		<div className={styles.wrap}>
			<Headings heading={props.title}/>
			<FormLoginSingUp handleClick={handleRegister}/>
			<div className={styles.transition}>
				<Link to='/about'>{props.linkTitle}</Link>
			</div>
		</div>
	);
}

SingUp.defaultProps = {
	title: 'Реєстрація',
	linkTitle: 'Натисніть, щоб перейти на головну сторінку сайту!'
};

export default SingUp;