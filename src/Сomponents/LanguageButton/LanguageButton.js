import React, {useState} from 'react';
import { useContext } from "react";
import { LanguageContext } from '../../Contexts/multiLingualContext';
import SVGLanguage from '../SVG/SVGLanguage';
import Tooltip from '../Tooltip/Tooltip';

function LanguageButton() {
	const { language } = useContext(LanguageContext);
	const [isClicked, setClicked] = useState(true);
	const handleOnClick = () => {
		setClicked(!isClicked);
	};
	
	
	return (
		<>
			{
				isClicked ?
				(<button onClick={handleOnClick}>
					<Tooltip content='На русский язык'>
						<SVGLanguage fill='#ffffff'/>{language}
					</Tooltip>
				</button>)
				:
				(<button onClick={handleOnClick}>
					<Tooltip content='На українську мову'>
						<SVGLanguage fill='#4fa19d'/>{language}
					</Tooltip>
				</button>)
			}
		</>
	);
}

export default LanguageButton;