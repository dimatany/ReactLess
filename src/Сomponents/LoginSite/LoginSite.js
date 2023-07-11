import React from 'react';
import {Navigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useAuth} from '../FormInOut/useAuth';
import {removeUser} from '../../BLL/reducers/loginReducer';

const LoginSite = () => {
	const dispatch = useDispatch();
	const {isAuth, email} = useAuth();
	return isAuth ? (
		<div>
			<h1>Welcome!</h1>
			<button
				onClick={()=>dispatch(removeUser())}
			>Log out from {email}</button>
		</div>
	) : (
		<Navigate to="/masters" />
	);
}

export default LoginSite;
