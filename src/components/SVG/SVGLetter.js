import React from 'react';

function SvgLetter({fill}) {
	return (
		<>
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="28px" y="28px"
			     viewBox="0 0 500 500">
				<path fill={fill} d="M498.5,81.6L326.4,232.1l173.2,183.7c0.3-1.1,0.5-2.3,0.5-3.5V87.7C499.9,85.5,499.4,83.5,498.5,81.6z"/>
				<path fill={fill} d="M485.9,73.1c-0.3,0-0.4,0-0.6,0H14.7c-0.3,0-0.4,0-0.6,0.1L250,279.4L485.9,73.1z"/>
				<path fill={fill} d="M254.9,294.6c-1.4,1.3-3.1,1.8-4.9,1.8s-3.4-0.6-4.9-1.8l-63.3-55.3L7.1,424.8c2.3,1.4,4.8,2.1,7.5,2.1
		h470.7c2.8,0,5.4-0.9,7.5-2.1L318,239.2L254.9,294.6z"/>
				<path fill={fill} d="M1.4,81.6c-0.9,1.9-1.4,4-1.4,6.1v324.6c0,1.3,0.3,2.4,0.5,3.5l173.2-183.7L1.4,81.6z"/>
			</svg>
		</>
	);
}

export default SvgLetter;