import React from 'react';
import {
	addCommentActionCreator,
	updateNewCommentTextActionCreator,
} from '../../BLL/Data';




function Comments(props) {
	
	let newCommentElement = React.createRef();
	let addComment = () => {
		props.dispatch( addCommentActionCreator() );
	}
	
	let onCommentChange = () => {
		let text = newCommentElement.current.value;
		let action = updateNewCommentTextActionCreator(text);
		props.dispatch (action);
	}
	
	return (
		<>
			<div>
				{props.dataComment.map(el =>
				<div key={el.id}>
					<span>{el.message}</span>
					<span>{el.likesCount}</span>
				</div>
				)}
			</div>
			<div>
				<textarea
					ref={newCommentElement}
					value={props.newCommentText}
					onChange={onCommentChange}
				/>
			</div>
			<div>
				<button onClick={addComment}>add comment</button>
			</div>
		</>
	);
}

export default Comments;