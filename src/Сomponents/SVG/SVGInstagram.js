import React from 'react';

function SvgInstagram({fill}) {
	return (
		<div>
			<svg width="25pt" height="25pt" version="1.1" viewBox="0 0 32 32">
				<path d="M23,0H9C4,0,0,4,0,9v6v8c0,5,4,9,9,9h14c5,0,9-4,9-9v-8V9C32,4,28,0,23,0z M16,10c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6  S12.7,10,16,10z M22,7c0-1.1,0.9-2,2-2s2,0.9,2,2s-0.9,2-2,2S22,8.1,22,7z" fill={fill}/>
			</svg>
		</div>
	);
}

export default SvgInstagram;