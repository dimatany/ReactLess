import React, {useState} from 'react';
import SVGRu from '../SVG/SVGRu';
import SVGUa from '../SVG/SVGUa';


function LanguageButton() {
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