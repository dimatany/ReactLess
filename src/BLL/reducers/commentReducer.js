const ADD_COMMENT = 'ADD-COMMENT';
const UPDATE_NEW_COMMENT_TEXT = 'UPDATE-NEW-COMMENT-TEXT';

let initialState = {
	dataComments: [
		{id:1, message:'додайте коментар', likesCount: "",}
	],
	newCommentText: '',
};
const commentReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_COMMENT_TEXT:
			state.newCommentText = action.newCommentMessage;
			break;
		case ADD_COMMENT:
			let newCommentMessage = state.newCommentText;
			state.newCommentText = '';
			state.dataComments.push(
				{id: 2, message: newCommentMessage, likesCount: '', date: new Date().toLocaleDateString()});
			break;
	}
	return state;
}

export const addCommentActionCreator = () => ({type: ADD_COMMENT});
export const updateNewCommentTextActionCreator = (text) => ({
	type: UPDATE_NEW_COMMENT_TEXT,
	newCommentMessage: text
})

export default commentReducer;