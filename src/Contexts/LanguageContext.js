import React from 'react';

const LanguageContext = React.createContext({
	language: 'ukrainian',
	setLanguage: () => { }
})

export default LanguageContext;