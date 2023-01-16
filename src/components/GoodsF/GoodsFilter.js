import React from 'react';
import dataItems from './DataGoods';
import styles from './GoodsFilter.module.css'

function GoodsFilter(props) {
	
	const [value, setValue] = React.useState('');
	const newDataItems = [];
	const result = dataItems.filter(({type}) =>(!newDataItems[type] && (newDataItems[type] = 1)));
	
	
	return (
		<>
			<select value={value} onChange={(event) => setValue(event.target.value)}>
				{result.map(el =>
					<option key={el.id} value={el.type}>{el.type}</option>
				)}
			</select>
		</>
	);
}

export default GoodsFilter;