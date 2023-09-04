import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as i18 from 'i18next';
import translation from './BLL/data/resources';

const resources = translation;

i18.use(initReactI18next).init({
	lng: 'ua',
	fallbackLng: 'ua',
	interpolation: {
		escapeValue: false,
	},
	resources,
});

export default i18n;

