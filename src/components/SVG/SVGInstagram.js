import React from 'react';

function SvgInstagram({fill, stroke}) {
	return (
		<div>
			<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
				<path d="M18.5341 1H7.46592C3.89455 1 1 3.89507 1 7.46592V18.5341C1 22.1054 3.89507 25 7.46643 25H18.5336C22.1049 25 25 22.1049 25 18.5336V7.46592C25 3.89455 22.1049 1 18.5336 1H18.5341Z" stroke={stroke} strokeWidth="2" strokeMiterlimit="10"/>
				<path d="M13 18.7932C16.1995 18.7932 18.7932 16.1995 18.7932 13C18.7932 9.8005 16.1995 7.20679 13 7.20679C9.80049 7.20679 7.20679 9.8005 7.20679 13C7.20679 16.1995 9.80049 18.7932 13 18.7932Z" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
				<path d="M20.0345 7.20688C20.72 7.20688 21.2757 6.65115 21.2757 5.96562C21.2757 5.2801 20.72 4.72437 20.0345 4.72437C19.3489 4.72437 18.7932 5.2801 18.7932 5.96562C18.7932 6.65115 19.3489 7.20688 20.0345 7.20688Z" fill={fill}/>
			</svg>
		</div>
	);
}

export default SvgInstagram;