import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

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
		</div>
	)
}

export default HomePage;
