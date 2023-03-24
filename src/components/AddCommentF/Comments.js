import React from 'react';

function Comments(props) {
	
	let newCommentElement = React.createRef();
	let addComment = () => {
		let text = newCommentElement.current.value;
			props.addComment(text);
			newCommentElement.current.value = '';
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
				<textarea ref={newCommentElement}/>
			</div>
			<div>
				<button onClick={addComment}>add comment</button>
			</div>
		</>
	);
}

export default Comments;