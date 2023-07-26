import React, {useEffect, useState} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useAuth} from '../FormLoginSingUp/useAuth';
import {removeUser} from '../../BLL/reducers/loginReducer';

import {endSession, getSession, isLoggedIn} from '../../session';

const HomePage = () => {
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
		navigate("/login");
	}
	
	return (
		<div>
			<h1>Welcome!</h1>
			<button onClick={()=>dispatch(removeUser())}>Log out from {email}</button>
		</div>
	)
}

export default HomePage;
