import React from 'react';
import Goods from '../GoodsF/Goods';

function Comments(props) {
	const [notes, setNotes] = React.useState([]);
	const [value, setValue] = React.useState('');
	const result = notes.map((note, index) => {
		return (
			<>
				<div key={index}>{note}</div>
				<button onClick={() => remItem(index)}>del</button>
			</>
		)
	});
	function remItem(index) {
		setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
	}
	return (
		<div>{result}
			<input value={value} onChange={event => setValue(event.target.value)} />
			<button onClick={() => setNotes([...notes, value])}>add</button>
		</div>
	)
}

Comments.defaultProps = {
	value: 'напишіть коментар',
};

export default Comments;