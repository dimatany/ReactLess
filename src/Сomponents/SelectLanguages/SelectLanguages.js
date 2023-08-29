import React from 'react';
import styles from './SelectLanguages.module.css';
import {LANGUAGES} from '../../Сonstants/constants';
import {useTranslation} from 'react-i18next';

function SelectLanguages() {
	const { i18n, t } = useTranslation();
	const onChangeLang = (e) => {
		const languageCode = e.target.value;
		i18n.changeLanguage(languageCode )
		.then(r => e.target.value);
	};
	
	return (
		<div className={styles.customSelect}>
			<select defaultValue={i18n.language} onChange={onChangeLang}>
				{LANGUAGES.map(({ code, label }) => (
					<option key={code} value={code}>
						{label}
					</option>
				))}
			</select>
		</div>
	);
}

export default SelectLanguages;