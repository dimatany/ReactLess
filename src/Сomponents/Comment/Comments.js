import React from 'react';
import styles from './Comment.module.css'
import {addCommentActionCreator, updateNewCommentTextActionCreator,} from '../../BLL/reducers/commentReducer';

function Comments(props) {
	
	let state = props.store.getState().dataCommentPage;
	let newCommentText = state.newCommentText;
	
	let addComments = () => {
		props.store.dispatch(addCommentActionCreator());
	}
	let onNewCommentChange = (event) => {
		let text = event.target.value;
		props.store.dispatch(updateNewCommentTextActionCreator(text));
	}
	
	
	return (
		<div className={styles.blockWrap}>
			<div className={styles.wrap}>
				{state.dataComments.map(el =>
				<div className={styles.wrapComment} key={el.id}>
					<span className={styles.commentMessage}>{el.message}</span>
					<span className={styles.commentLike}>{el.likesCount}</span>
					<span className={styles.commentDate}>{el.date}</span>
				</div>
				)}
			</div>
			<div className={styles.wrapText}>
				<textarea
					onChange={onNewCommentChange}
					value={newCommentText}
				/>
			</div>
			<div className={styles.btn}>
				<button onClick={addComments}>{props.buttonSub}</button>
			</div>
		</div>
	);
}

Comments.defaultProps = {
	buttonSub: 'Додати',
	subtitle: 'Можливо, у вас виникли питання?',
};


export default Comments;