import React from 'react';
import styles from './AddComment.module.css'

function AddComment(props) {
	const [notes, setNotes] = React.useState([]);
	const [value, setValue] = React.useState('');
	const result = notes.map((note, index) => {
		return (
			<>
				<section className={styles.wrapper} key={index}>
					<div className={styles.comment} key={index}>{note}</div>
					<button className={styles.button} onClick={() => remItem(index)}>{props.delButton}</button>
				</section>
			</>
		)
	});
	function remItem(index) {
		setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
	}
	return (
		<section className={styles.wrap}>{result}
			<textarea className={styles.commentText}
			          placeholder={props.value}
			          value={value}
			          onChange={event => setValue(event.target.value)} />
			<button className={styles.button} onClick={() => setNotes([...notes, value])}>{props.addButton}</button>
		</section>
	)
}

AddComment.defaultProps = {
	value: 'напишіть коментар',
	addButton: 'Додати коментар',
	delButton: 'Видалити коментар'
};

export default AddComment;