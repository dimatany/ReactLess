import React, {useState} from 'react';
import SVGLanguage from '../SVG/SVGLanguage';
import Tooltip from '../Tooltip/Tooltip';

function LanguageButton() {
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
						<SVGLanguage fill='#4fa19d'/>
					</Tooltip>
				</button>)
				:
				(<button onClick={handleOnClick}>
					<Tooltip content='На українську мову'>
						<SVGLanguage fill='#ffffff'/>
					</Tooltip>
				</button>)
			}
		</>
	);
}

export default LanguageButton;