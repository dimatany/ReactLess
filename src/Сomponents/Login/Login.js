import React from 'react';
import styles from './Login.module.css'
import Headings from '../Headings/Headings';




function Login(props) {
	return (
		<div className={styles.wrap}>
			<Headings heading={props.title}/>
		</div>
	);
}

Login.defaultProps = {
	title: 'Форма',
};

export default Login;