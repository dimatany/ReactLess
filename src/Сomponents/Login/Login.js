import React from 'react';
import styles from './Login.module.css'
import Tab from '../Tab/Tab';
import Headings from '../Headings/Headings';

function Login(props) {
	const tabData = [
		{
			title: 'Вхід',
			content: 'Перший розділ с формою'
		},
		{
			title:'Вихід',
			content: 'Другий розділ с формою'
		},
	]
	return (
		<div className={styles.wrap}>
			<Headings heading={props.title}/>
			<Tab data={tabData}/>
		</div>
	);
}

Login.defaultProps = {
	title: 'Форма',
};

export default Login;