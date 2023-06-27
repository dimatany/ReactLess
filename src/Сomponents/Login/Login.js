import React from 'react';
import styles from './Login.module.css'
import Headings from '../Headings/Headings';
import TabForForm from '../TabForForm/TabForForm';



function Login(props) {
	return (
		<div className={styles.wrap}>
			<Headings heading={props.title}/>
			<TabForForm/>
		</div>
	);
}

Login.defaultProps = {
	title: 'Форма',
};

export default Login;