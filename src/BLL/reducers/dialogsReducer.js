const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
	dialogs: [
		{id:1, name: 'Dima'},
		{id:2, name: 'Andrew'},
		{id:3, name: 'Svetlana'},
	],
	messages: [
		{id:1, message: 'Hi'},
		{id:2, message: 'Yo'},
		{id:3, message: 'Yeh'},
	],
	newMessageText: '',
};
const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.newMessage;
			break;
		case SEND_MESSAGE:
			let newMessage = state.newMessageText;
			state.newMessageText = '';
			state.messages.push({id: 5, message: newMessage});
			break;
		default:
			return state;
	}
	return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextCreator = (textMessage) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	newMessage: textMessage
})

export default dialogsReducer;