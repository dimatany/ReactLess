import React, {useState} from 'react';
import styles from '../../components/MastersF/Masters.module.css';
import Modal from '../../components/ModalF/Modal';
import useModal from '../../components/ModalF/useModal';
import '../../components/ModalF/Modal.css';

import './Mas1.png';
import './Mas2.png';
import './Mas3.png';
import './Mas4.png';
import './Mas5.png';
import './Mas6.png';

import '../../components/ModalF/MP1.jpg';
import '../../components/ModalF/MP2.jpg';
import '../../components/ModalF/MP3.jpg';
import '../../components/ModalF/MP4.jpg';
import '../../components/ModalF/MP5.jpg';
import '../../components/ModalF/MP6.jpg';

import '../../components/ModalF/MM1.jpg';
import '../../components/ModalF/MM2.jpg';
import '../../components/ModalF/MM3.jpg';
import '../../components/ModalF/MM4.jpg';
import '../../components/ModalF/MM5.jpg';
import '../../components/ModalF/MM6.jpg';

import '../../components/ModalF/MPP1.jpg';
import '../../components/ModalF/MPP2.jpg';
import '../../components/ModalF/MPP3.jpg';
import '../../components/ModalF/MPP4.jpg';
import '../../components/ModalF/MPP5.jpg';
import '../../components/ModalF/MPP6.jpg';

import '../../components/ModalF/MK1.jpg';
import '../../components/ModalF/MK2.jpg';
import '../../components/ModalF/MK3.jpg';
import '../../components/ModalF/MK4.jpg';
import '../../components/ModalF/MK5.jpg';
import '../../components/ModalF/MK6.jpg';

import '../../components/ModalF/MF1.jpg';
import '../../components/ModalF/MF2.jpg';
import '../../components/ModalF/MF3.jpg';
import '../../components/ModalF/MF4.jpg';
import '../../components/ModalF/MF5.jpg';
import '../../components/ModalF/MF6.jpg';

import '../../components/ModalF/MV1.jpg';
import '../../components/ModalF/MV2.jpg';
import '../../components/ModalF/MV3.jpg';
import '../../components/ModalF/MV4.jpg';
import '../../components/ModalF/MV5.jpg';
import '../../components/ModalF/MV6.jpg';
function Masters() {
	const {isShowing, toggle} = useModal();
	/////////////
	const [block, setBlock] = useState([
		{id: 1, title: 'Зачіски, Стрижки, Кольористика', picCollection: ['MP1.jpg', 'MP2.jpg', 'MP3.jpg', 'MP4.jpg', 'MP5.jpg','MP6.jpg']},
		{id: 2, title: 'Mанікюр', picCollection: ['MM1.jpg', 'MM2.jpg', 'MM3.jpg', 'MM4.jpg', 'MM5.jpg','MM6.jpg']},
		{id: 3, title: 'Педікюр', picCollection: ['MPP1.jpg', 'MPP2.jpg', 'MPP3.jpg', 'MPP4.jpg', 'MPP5.jpg','MPP6.jpg']},
		{id: 4, title: 'Косметологія ін\'єкційна та догляд за шкірою', picCollection: ['MK1.jpg', 'MK2.jpg', 'MK3.jpg', 'MK4.jpg', 'MK5.jpg','MK6.jpg']},
		{id: 5, title: 'test', picCollection: ['MF1.jpg', 'MF2.jpg', 'MF3.jpg', 'MF4.jpg', 'MF5.jpg','MF6.jpg']},
		{id: 6, title: 'test', picCollection: ['MV1.jpg', 'MV2.jpg', 'MV3.jpg', 'MV4.jpg', 'MV5.jpg','MV6.jpg']},
		]
	)
	////////////
	return (
		<>
			<div className={styles.block}>
				<h2>Майстри</h2>
				<span className={styles.explanation}>Натисніть на фото майстра і подивіться його роботи</span>
				<div className={styles.cardmaster}>
					<div className={[styles["first"], styles['card']].join(" ")}>
						<div className={styles.frame}>
							<p>Анна
								<div className={styles.profession}>
									<span>Перукар</span>
									<button className="button-default" onClick={toggle}>Приклади<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path d="M9 20h-4c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h4c0.552 0 1-0.448 1-1s-0.448-1-1-1zM18.586 11h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5-5c0.092-0.092 0.166-0.202 0.217-0.324 0.15-0.362 0.078-0.795-0.217-1.090l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" fill="red"></path>
									</svg></button>
								</div>
							</p>
						</div>
					</div>
					<div className={[styles["second"], styles['card']].join(" ")}>
						<div className={styles.frame}>
							<p>Елена
								<div className={styles.profession}>
									<span>Манікюр</span>
									<button className="button-default" onClick={toggle}>Приклади<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path d="M9 20h-4c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h4c0.552 0 1-0.448 1-1s-0.448-1-1-1zM18.586 11h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5-5c0.092-0.092 0.166-0.202 0.217-0.324 0.15-0.362 0.078-0.795-0.217-1.090l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" fill="red"></path>
									</svg></button>
								</div>
							</p>
						</div>
					</div>
					<div className={[styles["third"], styles['card']].join(" ")}>
						<div className={styles.frame}>
							<p>Розанна
								<div className={styles.profession}>
									<span>Педікюр</span>
									<button className="button-default" onClick={toggle}>Приклади<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path d="M9 20h-4c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h4c0.552 0 1-0.448 1-1s-0.448-1-1-1zM18.586 11h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5-5c0.092-0.092 0.166-0.202 0.217-0.324 0.15-0.362 0.078-0.795-0.217-1.090l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" fill="red"></path>
									</svg></button>
								</div>
							</p>
						</div>
					</div>
					<div className={[styles["fourth"], styles['card']].join(" ")}>
						<div className={styles.frame}>
							<p>Вера
								<div className={styles.profession}>
									<span>Косметолог</span>
									<button className="button-default" onClick={toggle}>Приклади<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path d="M9 20h-4c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h4c0.552 0 1-0.448 1-1s-0.448-1-1-1zM18.586 11h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5-5c0.092-0.092 0.166-0.202 0.217-0.324 0.15-0.362 0.078-0.795-0.217-1.090l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" fill="red"></path>
									</svg></button>
								</div>
							</p>
						</div>
					</div>
					<div className={[styles["fifth"], styles['card']].join(" ")}>
						<div className={styles.frame}>
							<p>Леся
								<div className={styles.profession}>
									<span>Масажист</span>
									<button className="button-default" onClick={toggle}>Приклади<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path d="M9 20h-4c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h4c0.552 0 1-0.448 1-1s-0.448-1-1-1zM18.586 11h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5-5c0.092-0.092 0.166-0.202 0.217-0.324 0.15-0.362 0.078-0.795-0.217-1.090l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" fill="red"></path>
									</svg></button>
								</div>
							</p>
						</div>
					</div>
					<div className={[styles["sixth"], styles['card']].join(" ")}>
						<div className={styles.frame}>
							<p>Тетяна
								<div className={styles.profession}>
									<span>Візаж</span>
									<button className="button-default" onClick={toggle}>Приклади<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path d="M9 20h-4c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h4c0.552 0 1-0.448 1-1s-0.448-1-1-1zM18.586 11h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5-5c0.092-0.092 0.166-0.202 0.217-0.324 0.15-0.362 0.078-0.795-0.217-1.090l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" fill="red"></path>
									</svg></button>
								</div>
							</p>
						</div>
					</div>
				</div>
				<div className={styles.description}>
					<p>Ми раді представити досвідчених, кваліфікованих і креативних художників, які знають абсолютно все про зміну іміджу!
						Тут працює команда салону краси «Фурор» — перукарі, стилісти, майстри манікюру, педикюру, пірсингу, перукарі, косметологи, лікарі та естетики. Вивчіть профілі майстрів, подивіться роботи, сертифікати та відгуки про роботу. Вибирайте фахівця, який ближче вам по духу, настрою і неодмінно відповідає вашим уявленням про професіоналізм.</p>
				</div>
				
			</div>
			<div className="modalApp">
				<Modal
					isShowing={isShowing}
					hide={toggle}
				/>
			</div>
		</>
	);
}


export default Masters;