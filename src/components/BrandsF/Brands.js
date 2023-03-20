import React from 'react';
import styles from './Brands.module.css'
import '../../BLL/img/Brands/logoBrand1.png';
import '../../BLL/img/Brands/logoBrand2.png';
import '../../BLL/img/Brands/logoBrand3.png';
import '../../BLL/img/Brands/logoBrand4.png';

function Brands() {
	return (
		<section className={styles.partners}>
			<ul>
				<li><img src={require("../../BLL/img/Brands/logoBrand1.png")} alt='logo of partners'/></li>
				<li><img src={require("../../BLL/img/Brands/logoBrand2.png")} alt='logo of partners'/></li>
				<li><img src={require("../../BLL/img/Brands/logoBrand3.png")} alt='logo of partners'/></li>
				<li><img src={require("../../BLL/img/Brands/logoBrand4.png")} alt='logo of partners'/></li>
			</ul>
		</section>
	);
}

export default Brands;