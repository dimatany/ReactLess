import React, {useState} from 'react';
import styles from '../../components/MastersF/Masters.module.css';
import Modal from '../../components/ModalF/Modal';
import useModal from '../../components/ModalF/useModal';
import '../../components/ModalF/Modal.css';
import CardItem from '../CardItemF/CardItem';

import './Mas1.png';
import './Mas2.png';
import './Mas3.png';
import './Mas4.png';
import './Mas5.png';
import './Mas6.png';


function Masters() {
	
	return (
		<>
			<div className={styles.block}>
				<h2>Майстри</h2>
				<span className={styles.explanation}>Натисніть на фото майстра і подивіться його роботи</span>
				<div className={styles.cardmaster}>
					<CardItem/>
				</div>
				<div className={styles.description}>
					<p>Ми раді представити досвідчених, кваліфікованих і креативних художників, які знають абсолютно все про зміну іміджу!
						Тут працює команда салону краси «Фурор» — перукарі, стилісти, майстри манікюру, педикюру, пірсингу, перукарі, косметологи, лікарі та естетики. Вивчіть профілі майстрів, подивіться роботи, сертифікати та відгуки про роботу. Вибирайте фахівця, який ближче вам по духу, настрою і неодмінно відповідає вашим уявленням про професіоналізм.</p>
				</div>
			</div>
		</>
	);
}


export default Masters;