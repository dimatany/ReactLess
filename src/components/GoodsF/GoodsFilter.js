import React from 'react';
import styles from './GoodsFilter.module.css'

function GoodsFilter(props) {
	
	let [users, setUsers] = React.useState(props.dataGoods);
	
	function onSelectionChange(e) {
		const sortDirection = e.target.value;
		const copyArray = [...users]; // create a new array & not mutate state
		
		copyArray.sort((a, b) => {
			return sortDirection === "0" ? a.prise - b.prise : b.prise - a.prise;
		});
		setUsers(copyArray);
	}
	
	return (
		<>
			<div className="App">
				<select defaultValue={0} onChange={onSelectionChange}>
					<option value={0}>от меньшего</option>
					<option value={1}>от большего</option>
				</select>
				<div>
					{users.map(el =>
						<div key={el.id}>
							<div>{el.type}</div>
							<div>{el.prise}</div>
						</div>
					)}
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