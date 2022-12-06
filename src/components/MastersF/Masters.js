import React, {useState} from 'react';
import styles from '../../components/MastersF/Masters.module.css';
import '../../components/ModalF/Modal.css';
import CardItem from '../../components/CardItemF/CardItem';


function Masters() {
	
	const [blocks, setBlocks] = useState([
			{id: 1, title: 'Перукар', name: 'Анна', picCollection: ['MP1.jpg', 'MP2.jpg', 'MP3.jpg', 'MP4.jpg', 'MP5.jpg','MP6.jpg']},
			{id: 2, title: 'Манікюр', name: 'Елена', picCollection: ['MM1.jpg', 'MM2.jpg', 'MM3.jpg', 'MM4.jpg', 'MM5.jpg','MM6.jpg']},
			{id: 3, title: 'Педикюр', name: 'Розанна', picCollection: ['MPP1.jpg', 'MPP2.jpg', 'MPP3.jpg', 'MPP4.jpg', 'MPP5.jpg','MPP6.jpg']},
			{id: 4, title: 'Косметолог', name: 'Вера', picCollection: ['MK1.jpg', 'MK2.jpg', 'MK3.jpg', 'MK4.jpg', 'MK5.jpg','MK6.jpg']},
			{id: 5, title: 'Масажист', name: 'Леся', picCollection: ['MF1.jpg', 'MF2.jpg', 'MF3.jpg', 'MF4.jpg', 'MF5.jpg','MF6.jpg']},
			{id: 6, title: 'Візаж', name: 'Тетяна', picCollection: ['MV1.jpg', 'MV2.jpg', 'MV3.jpg', 'MV4.jpg', 'MV5.jpg','MV6.jpg']},
		]
	)
	
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