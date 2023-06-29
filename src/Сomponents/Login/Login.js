import React from 'react';
import styles from './Login.module.css'
import Headings from '../Headings/Headings';
import FormAuthorization from '../FormAuthorization/FormAuthorization';



function Login(props) {
	return (
		<div className={styles.wrap}>
			<Headings heading={props.title}/>
			<FormAuthorization/>
		</div>
	);
}

Login.defaultProps = {
	title: 'Форма',
};

export default Login;