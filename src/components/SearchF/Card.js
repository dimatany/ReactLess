import React from 'react';

function Card({searchData}) {
	return(
		<div>
			<h2>{searchData.name}</h2>
			<p>{searchData.type}</p>
			<p>{searchData.forWhat}</p>
		</div>
	);
}

export default Card;