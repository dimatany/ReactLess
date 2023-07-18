import { useContext } from 'react';
import { LanguageContext } from './multiLingualContext';
import dataWWD from "../BLL/reducers/whatWeDoReducer";

export default function MultiLingualContent({ contentID }) {
	const { language } = useContext(LanguageContext);
	
	return dataWWD[language][contentID];
}