const ADD_COMMENT = 'ADD-COMMENT';
const UPDATE_NEW_COMMENT_TEXT = 'UPDATE-NEW-COMMENT-TEXT';

const commentReducer = (data, action) => {
	if (action.type === ADD_COMMENT) {
		let newComment = {
			id: 5,
			message: this._data.newCommentText,
			likesCount: 0,
		};
		data.dataComment.push(newComment);
		data.newCommentText = '';
	} else if (action.type === UPDATE_NEW_COMMENT_TEXT) {
		data.newCommentText = action.newCommentMessage;
	}
	return data;
};
