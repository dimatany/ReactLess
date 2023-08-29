import React from 'react';
import styles from './SelectLanguages.module.css';
import {useTranslation} from 'react-i18next';

export const LANGUAGES = [
	{ label: "Ukraine", code: "ua" },
	{ label: "English", code: "en" },
	{ label: "Russian", code: "ru" },
];

function SelectLanguages() {
	const { i18n} = useTranslation();
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