import React from 'react';

function SvgHeart({fill}) {
	return (
		<>
			<svg  width="40pt" height="40pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" fill={fill}>
				<path d="M429.9,95.6c-40.4-42.1-106-42.1-146.4,0L256,124.1l-27.5-28.6c-40.5-42.1-106-42.1-146.4,0c-45.5,47.3-45.5,124.1,0,171.4   L256,448l173.9-181C475.4,219.7,475.4,142.9,429.9,95.6z"/>
			</svg>
		</>
	);
}

export default SvgHeart;