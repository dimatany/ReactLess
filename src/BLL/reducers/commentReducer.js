const ADD_COMMENT = 'ADD-COMMENT';
const UPDATE_NEW_COMMENT_TEXT = 'UPDATE-NEW-COMMENT-TEXT';

const commentReducer = (data, action) => {
	if (action.type === UPDATE_NEW_COMMENT_TEXT) {
		data.newCommentText = action.newCommentMessage;
	} else if (action.type === ADD_COMMENT) {
		let newCommentMessage = data.newCommentText;
		data.newCommentText = '';
		data.dataComments.push({id:2, message: newCommentMessage, likesCount: 3,},);
	}
	return data;
}

export default commentReducer;