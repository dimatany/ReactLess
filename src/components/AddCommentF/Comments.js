import React from 'react';

function Comments(props) {
	
	let newCommentElement = React.createRef();
	let addComment = () => {
		props.addComment();
	}
	
	let onCommentChange = () => {
		let text = newCommentElement.current.value;
		props.updateNewCommentText(text);
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
				<textarea ref={newCommentElement}
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