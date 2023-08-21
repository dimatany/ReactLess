import React, { useState} from 'react';
import LanguageContext from '../../Contexts/LanguageContext';

function WrapLanguageButton({ children }) {
	const [language, setLanguage] = useState('');
	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>{ children }</LanguageContext.Provider>
	);
}

export default WrapLanguageButton;