import React from 'react';
import ErrorBoundary from '../ErrorBoundaryC/ErrorBoundary';
import styles from '../../components/MastersF/Masters.module.css';
import Descriptions from '../DescriptionsF/Descriptions';
import Headings from '../HeadingsF/Headings';
import MasterCard from './MasterCard';

function Masters(props) {
	
	return (
		<section className={styles.block}>
			<Headings heading={props.title}/>
			<span className={styles.explanation}>{props.subtitle}</span>
			<ErrorBoundary>
				<MasterCard/>
			</ErrorBoundary>
			<Descriptions text={props.text}/>
		</section>
	);
}

Masters.defaultProps = {
	title: 'Майстри',
	subtitle: 'Натисніть на фото майстра і подивіться його роботи',
	text: 'Ми раді представити досвідчених, кваліфікованих і креативних художників, які знають абсолютно все про зміну іміджу!Тут працює команда салону краси «Фурор» — перукарі, стилісти, майстри манікюру, педикюру, пірсингу, перукарі, косметологи, лікарі та естетики. Вивчіть профілі майстрів, подивіться роботи, сертифікати та відгуки про роботу. Вибирайте фахівця, який ближче вам по духу, настрою і неодмінно відповідає вашим уявленням про професіоналізм.',
	label: 'Детально',
};
export default Masters;