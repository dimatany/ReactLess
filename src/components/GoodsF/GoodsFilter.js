import React from 'react';
import styles from './GoodsFilter.module.css'

function GoodsFilter(props) {
	const [value, setValue] = React.useState('');
	const newDataItems = [];
	const resultType = props.dataGoods.filter(({type}) =>(!newDataItems[type] && (newDataItems[type] = 1)));
	function handleChange(event) {
		setValue(event.target.value);
	}
	
	return (
		<>
			<div className={styles.wrap}>
				<div className={styles.wrapSelect}>
					<select className={styles.type} value={value} onChange={handleChange}>
						<option defaultValue>{props.button1}</option>
						{resultType.map(el =>
							<option key={el.id} value={el.type}>{el.type}</option>
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

GoodsFilter.defaultProps = {
	button1: 'визначитесь з типом',
	button2: 'визначитесь за користю',
};

export default GoodsFilter;