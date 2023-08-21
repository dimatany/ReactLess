import React, {useState, useContext} from 'react';
import styles from './LanguageButton.module.css'
import LanguageContext from '../../Contexts/LanguageContext';
import SVGRu from '../SVG/SVGRu';
import SVGUa from '../SVG/SVGUa';


function LanguageButton() {
	const {language, setLanguage} = useContext(LanguageContext);
	const [isClicked, setIsClicked] = useState(true);
	const handleOnClick = () => {
		setIsClicked(!setIsClicked);
	};
	
	return (
		<>
			{
				isClicked ?
					(<button onClick={handleOnClick}>
						<SVGUa/>
					</button>)
					:
					(<button onClick={handleOnClick}>
						<SVGRu/>
					</button>)
			}
		</>
	);
}

export default LanguageButton;