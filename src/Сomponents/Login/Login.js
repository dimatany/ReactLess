import React from 'react';
import styles from './Login.module.css'
import Headings from '../Headings/Headings';
import FormLogin from '../FormLogin/FormLogin';


function Login(props) {
	return (
		<div className={styles.wrap}>
			<Headings heading={props.title}/>
			<FormLogin/>
		</div>
	);
}

Login.defaultProps = {
	title: 'Авторизація',
};

export default Login;