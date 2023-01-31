import React from 'react';
import { Link } from "react-router-dom";
import dataMasters from './DataMasters'
import styles from '../../components/MastersF/Masters.module.css';
import Descriptions from '../DescriptionsF/Descriptions';

function Masters(props) {
	const [checked, setChecked] = React.useState(true);
	
	function handleChange() {
		setChecked(!checked);
	}
	
	return (
		<div className={styles.block}>
				<h2 className={styles.blockTitle}>{props.title}</h2>
				<span className={styles.explanation}>{props.subtitle}</span>
				<div className={styles.cardmaster}>
					{dataMasters.map(el =>
						<div className={styles.cardmasterWrap} key={el.id}>
							<div className={styles.wrapCard} key={el.id}>
								<div className={styles.wrapBlock}>
									<img key={el.id} src={el.avatar} alt={el.alt}/>
									<div className={styles.profession}>
										<p className={styles.professionTitle}>{el.title}</p>
										<span className={styles.professionRef}>
											<Link key={el.id} to={el.id}>
												<label htmlFor="button">{props.label}</label>
												<input type="checkbox" checked={checked} onChange={handleChange} />
											</Link>
										</span>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
				<Descriptions text={props.text}/>
			</div>
	);
}

Masters.defaultProps = {
	title: 'Майстри',
	subtitle: 'Натисніть на фото майстра і подивіться його роботи',
	text: 'Ми раді представити досвідчених, кваліфікованих і креативних художників, які знають абсолютно все про зміну іміджу!Тут працює команда салону краси «Фурор» — перукарі, стилісти, майстри манікюру, педикюру, пірсингу, перукарі, косметологи, лікарі та естетики. Вивчіть профілі майстрів, подивіться роботи, сертифікати та відгуки про роботу. Вибирайте фахівця, який ближче вам по духу, настрою і неодмінно відповідає вашим уявленням про професіоналізм.',
	label: 'Детально',
};
export default Masters;