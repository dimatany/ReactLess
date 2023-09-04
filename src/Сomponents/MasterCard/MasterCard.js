import React, {useState} from 'react';
import styles from './MasterCard.module.css';
import {Link} from 'react-router-dom';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import {useTranslation} from 'react-i18next';
import {getSlideInfo} from '../../BLL/data/masters';

function MasterCard() {
	const [checked, setChecked] = useState(true);
	const { t } = useTranslation();
	const slideInfo = getSlideInfo(t);
	function handleChange() {
		setChecked(!checked);
	}
	return (
		<div className={styles.cardmaster}>
			{slideInfo.map(el =>
				<div className={styles.cardmasterWrap} key={el.id}>
					<div className={styles.wrapCard}>
						<div className={styles.wrapBlock}>
							<img key={el.id} src={el.avatar} alt={el.alt}/>
							<div className={styles.profession}>
								<p className={styles.professionTitle}>{el.title}</p>
								<Link key={el.id} to={el.id}>
									<ButtonSubmit onClick={handleChange} children={t('MasterCard.label')}/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default MasterCard;