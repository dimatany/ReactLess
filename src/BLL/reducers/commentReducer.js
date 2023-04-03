const ADD_COMMENT = 'ADD-COMMENT';
const UPDATE_NEW_COMMENT_TEXT = 'UPDATE-NEW-COMMENT-TEXT';

let initialState = {
	dataComments: [
		{id:1, message:'гребаный тест', likesCount: 1,}
	],
	newCommentText: '',
};
const commentReducer = (data = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_COMMENT_TEXT:
			data.newCommentText = action.newCommentMessage;
			break;
		case ADD_COMMENT:
			let newCommentMessage = data.newCommentText;
			data.newCommentText = '';
			data.dataComments.push(
				{id: 2, message: newCommentMessage, likesCount: 3});
			break;
	}
	return data;
}

export const addCommentActionCreator = () => ({type: ADD_COMMENT});
export const updateNewCommentTextActionCreator = (text) => ({
	type: UPDATE_NEW_COMMENT_TEXT,
	newCommentMessage: text
})

export default commentReducer;