import React from 'react';
import styles from './Authorization.module.css'
import Headings from '../Headings/Headings';
import FormLogin from '../FormLogin/FormLogin';


function Authorization(props) {
	return (
		<div className={styles.wrap}>
			<Headings heading={props.title}/>
			<FormLogin/>
		</div>
	);
}

Authorization.defaultProps = {
	title: 'Авторизація',
};

export default Authorization;