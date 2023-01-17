import React from 'react';
import dataItems from './DataGoods';
import styles from './GoodsFilter.module.css'

function GoodsFilter(props) {
	const [value, setValue] = React.useState('');
	const newDataItems = [];
	const result = dataItems.filter(({type}) =>(!newDataItems[type] && (newDataItems[type] = 1)));
	
	function handleChange(event) {
		setValue(event.target.value);
	}
	
	return (
		<>
			<div className={styles.wrap}>
				<div className={styles.wrapSelect}>
					<select className={styles.type} value={value} onChange={handleChange}>
						<option selected>визначитесь з типом</option>
						{result.map(el =>
							<option key={el.id} value={el.type}>{el.type}</option>
						)}
					</select>
					<p>
						Выбрана опция: {value}
					</p>
				</div>
				<div className={styles.wrapSelect}>
					<select className={styles.type} value={value} onChange={handleChange}>
						<option selected>визначитесь за користю</option>
						{result.map(el =>
							<option key={el.id} value={el.forWhat}>{el.forWhat}</option>
						)}
					</select>
					<p>
						Выбрана опция: {value}
					</p>
				</div>
			</div>
			
		</>
	);
}

export default GoodsFilter;