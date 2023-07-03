import React from 'react';
import {useDispatch} from 'react-redux';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import FormAuto from './FormAuto';
import {setUser} from '../../BLL/reducers/loginReducer';

function TestLogin() {
	const dispatch = useDispatch();
	const handleLogin = (email, password) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
		.then(({user}) => {
			console.log(user);
			dispatch(setUser({
				email: user.email,
				id: user.uid,
				token: user.accessToken,
			}));
			//push('/');
		})
		.catch(() => alert('Invalid user!'))
	};
	return (
		<FormAuto title="sign in"
		          handleClick={handleLogin}
		/>
	);
}

export default TestLogin;