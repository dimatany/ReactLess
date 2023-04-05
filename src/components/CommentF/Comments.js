import React from 'react';
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
		<>
			<div>
				{state.dataComments.map(el =>
				<div key={el.id}>
					<span>{el.message}</span>
					<span>{el.likesCount}</span>
				</div>
				)}
			</div>
			<div>
				<textarea
					onChange={onNewCommentChange}
					value={newCommentText}
				/>
			</div>
			<div>
				<button onClick={addComments}>add comment</button>
			</div>
		</>
	);
}

export default Comments;