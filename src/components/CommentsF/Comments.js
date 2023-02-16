import React from 'react';

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
		<section>{result}
			<input value={value} onChange={event => setValue(event.target.value)} />
			<button onClick={() => setNotes([...notes, value])}>add</button>
		</section>
	)
}

Comments.defaultProps = {
	value: 'напишіть коментар',
};

export default Comments;