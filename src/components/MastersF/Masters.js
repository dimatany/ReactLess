import React from 'react';
import dataMasters from './DataMasters'
import styles from '../../components/MastersF/Masters.module.css';
import '../../components/ModalF/Modal.module.css';
import CardItem from '../../components/CardItemF/CardItem';
import Descriptions from '../DescriptionsF/Descriptions';


function Masters(props) {
	
	return (
		<>
			<div className={styles.block}>
				<h2>{props.title}</h2>
				<span className={styles.explanation}>{props.subtitle}</span>
				<div className={styles.cardmaster}>
					{dataMasters.map(el =>
						<CardItem post={el} key={el.id} style={{backgroundImage: `url(${el.background})`}}/>
					)}
				</div>
				<Descriptions text={props.text}/>
			</div>
		</>
	);
}

Masters.defaultProps = {
	title: 'Майстри',
	subtitle: 'Натисніть на фото майстра і подивіться його роботи',
	text: 'Ми раді представити досвідчених, кваліфікованих і креативних художників, які знають абсолютно все про зміну іміджу!Тут працює команда салону краси «Фурор» — перукарі, стилісти, майстри манікюру, педикюру, пірсингу, перукарі, косметологи, лікарі та естетики. Вивчіть профілі майстрів, подивіться роботи, сертифікати та відгуки про роботу. Вибирайте фахівця, який ближче вам по духу, настрою і неодмінно відповідає вашим уявленням про професіоналізм.',
};

export default Masters;