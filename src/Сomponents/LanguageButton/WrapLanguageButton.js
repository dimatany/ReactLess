import React, {useContext} from 'react';
import {LanguageContext} from '../../Contexts/multiLingualContext';
import LanguageButton from './LanguageButton';

function WrapLanguageButton(props) {
	const {  toggleLanguage } = useContext(LanguageContext);
	return (
		<>
			<LanguageButton onClick={toggleLanguage}/>
		</>
	);
}

export default WrapLanguageButton;