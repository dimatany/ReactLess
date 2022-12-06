import React, {useState} from 'react';
import styles from '../../components/MastersF/Masters.module.css';
import '../../components/ModalF/Modal.css';
import CardItem from '../../components/CardItemF/CardItem';

import '../../components/CardItemF/CI1.png';
import '../../components/CardItemF/CI2.png';
import '../../components/CardItemF/CI3.png';
import '../../components/CardItemF/CI4.png';
import '../../components/CardItemF/CI5.png';
import '../../components/CardItemF/CI6.png';


function Masters() {
	let blocks, setBlocks;
	[blocks, setBlocks] = useState([
			{
				id: 1,
				title: 'Перукар',
				name: 'Анна',
				photo: 'CI1.png',
				picCollection: [
					'MP1.jpg',
					'MP2.jpg',
					'MP3.jpg',
					'MP4.jpg',
					'MP5.jpg',
					'MP6.jpg'],
			},
			{
				id: 2,
				title: 'Манікюр',
				name: 'Елена',
				photo: 'CI2.png',
				picCollection: [
					'MM1.jpg',
					'MM2.jpg',
					'MM3.jpg',
					'MM4.jpg',
					'MM5.jpg',
					'MM6.jpg'],
			},
			{
				id: 3,
				title: 'Педикюр',
				name: 'Розанна',
				photo: 'CI3.png',
				picCollection: [
					'MPP1.jpg',
					'MPP2.jpg',
					'MPP3.jpg',
					'MPP4.jpg',
					'MPP5.jpg',
					'MPP6.jpg'],
			},
			{
				id: 4,
				title: 'Косметолог',
				name: 'Вера',
				photo: 'CI4.png',
				picCollection: [
					'MK1.jpg',
					'MK2.jpg',
					'MK3.jpg',
					'MK4.jpg',
					'MK5.jpg',
					'MK6.jpg'],
			},
			{
				id: 5,
				title: 'Масажист',
				name: 'Леся',
				photo: 'CI5.png',
				picCollection: [
					'MF1.jpg',
					'MF2.jpg',
					'MF3.jpg',
					'MF4.jpg',
					'MF5.jpg',
					'MF6.jpg'],
			},
			{
				id: 6,
				title: 'Візаж',
				name: 'Тетяна',
				photo: 'CI1.png',
				picCollection: [
					'MV1.jpg',
					'MV2.jpg',
					'MV3.jpg',
					'MV4.jpg',
					'MV5.jpg',
					'MV6.jpg'],
			},
		],
	);
	
	return (
		<>
			<div className={styles.block}>
				<h2>Майстри</h2>
				<span className={styles.explanation}>Натисніть на фото майстра і подивіться його роботи</span>
				<div className={styles.cardmaster}>
					{blocks.map((post) =>
						<CardItem post={post} key={post.id}/>
					)}
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