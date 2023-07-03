import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate } from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import FormAuto from './FormAuto';
import {setUser} from '../../BLL/reducers/loginReducer';

function TestRegistration() {
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
				//token: user.accessToken,
			}));
			push('/');
		})
		.catch(console.error)
	};
	
	return (
		<FormAuto  title="register"
		           handleClick={handleRegister}
		/>
	);
}

export default TestRegistration;