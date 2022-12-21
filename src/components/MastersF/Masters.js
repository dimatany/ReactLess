import React from 'react';
import styles from '../../components/MastersF/Masters.module.css';
import '../../components/ModalF/Modal.module.css';
import CardItem from '../../components/CardItemF/CardItem';

function Masters(props) {
	const blocks = [
		{id: 1, title: 'Перукар', name: 'Анна', background: require("../../components/CardItemF/CI1.png"),},
		{id: 2, title: 'Манікюр', name: 'Елена',  background: require("../../components/CardItemF/CI2.png"),},
		{id: 3, title: 'Педикюр', name: 'Розанна',  background: require("../../components/CardItemF/CI3.png"),},
		{id: 4, title: 'Косметолог', name: 'Вера',  background: require("../../components/CardItemF/CI4.png"),},
		{id: 5, title: 'Масажист', name: 'Леся',  background: require("../../components/CardItemF/CI5.png"),},
		{id: 6, title: 'Візаж', name: 'Тетяна',  background: require("../../components/CardItemF/CI6.png"),},
	];
	
	return (
		<>
			<div className={styles.block}>
				<h2>{props.title}</h2>
				<span className={styles.explanation}>{props.subtitle}</span>
				<div className={styles.cardmaster} >
					{blocks.map((el) =>
						<CardItem post={el} key={el.id} style={{backgroundImage: `url(${el.background})`}}/>
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