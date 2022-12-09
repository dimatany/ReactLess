import React, {useState} from 'react';
import styles from '../../components/MastersF/Masters.module.css';
import '../../components/ModalF/Modal.module.css';
import CardItem from '../../components/CardItemF/CardItem';

function Masters(props) {
	let blocks, setBlocks;
	[blocks, setBlocks] = useState([
			{
				id: 1,
				title: 'Перукар',
				name: 'Анна',
				photo: 'CI1.png',
			},
			{
				id: 2,
				title: 'Манікюр',
				name: 'Елена',
				photo: 'CI2.png',
			},
			{
				id: 3,
				title: 'Педикюр',
				name: 'Розанна',
				photo: 'CI3.png',
			},
			{
				id: 4,
				title: 'Косметолог',
				name: 'Вера',
				photo: 'CI4.png',
			},
			{
				id: 5,
				title: 'Масажист',
				name: 'Леся',
				photo: 'CI5.png',
			},
			{
				id: 6,
				title: 'Візаж',
				name: 'Тетяна',
				photo: 'CI1.png',
			},
		],
	);
	
	return (
		<>
			<div className={styles.block}>
				<h2>{props.title}</h2>
				<span className={styles.explanation}>{props.subtitle}</span>
				<div className={styles.cardmaster}>
					{blocks.map((post) =>
						<CardItem post={post} key={post.id}/>
					)}
				</div>
				<div className={styles.description}>
					<p>{props.description}</p>
				</div>
			</div>
		</>
	);
}

Masters.defaultProps = {
	title: 'Майстри',
	subtitle: 'Натисніть на фото майстра і подивіться його роботи',
	description: 'Ми раді представити досвідчених, кваліфікованих і креативних художників, які знають абсолютно все про зміну іміджу!Тут працює команда салону краси «Фурор» — перукарі, стилісти, майстри манікюру, педикюру, пірсингу, перукарі, косметологи, лікарі та естетики. Вивчіть профілі майстрів, подивіться роботи, сертифікати та відгуки про роботу. Вибирайте фахівця, який ближче вам по духу, настрою і неодмінно відповідає вашим уявленням про професіоналізм.',
	
};

export default Masters;