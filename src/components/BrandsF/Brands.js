import React from 'react';
import styles from './Brands.module.css'
import './logoBrand1.png';
import './logoBrand2.png';
import './logoBrand3.png';
import './logoBrand4.png';

function Brands() {
	return (
		<section className={styles.partners}>
			<ul>
				<li><img src={require("./logoBrand1.png")}  alt='logo of partners'/></li>
				<li><img src={require("./logoBrand2.png")}  alt='logo of partners'/></li>
				<li><img src={require("./logoBrand3.png")}  alt='logo of partners'/></li>
				<li><img src={require("./logoBrand4.png")}  alt='logo of partners'/></li>
			</ul>
		</section>
	);
}

export default Brands;