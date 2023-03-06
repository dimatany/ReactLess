import React from 'react';
import styles from './MasterCard.module.css';
import dataMasters from './DataMasters';
import {Link} from 'react-router-dom';


function MasterCard(props) {
	const [checked, setChecked] = React.useState(true);
	
	function handleChange() {
		setChecked(!checked);
	}
	return (
		<>
			<div className={styles.cardmaster}>
				{dataMasters.map(el =>
					<div className={styles.cardmasterWrap} key={el.id}>
						<div className={styles.wrapCard}>
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
		</>
	);
}
MasterCard.defaultProps = {
	title: 'Майстри',
	subtitle: 'Натисніть на фото майстра і подивіться його роботи',
	text: 'Ми раді представити досвідчених, кваліфікованих і креативних художників, які знають абсолютно все про зміну іміджу!Тут працює команда салону краси «Фурор» — перукарі, стилісти, майстри манікюру, педикюру, пірсингу, перукарі, косметологи, лікарі та естетики. Вивчіть профілі майстрів, подивіться роботи, сертифікати та відгуки про роботу. Вибирайте фахівця, який ближче вам по духу, настрою і неодмінно відповідає вашим уявленням про професіоналізм.',
	label: 'Детально',
};
export default MasterCard;