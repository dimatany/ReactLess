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
const dialogsReducer = (data = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_TEXT:
			data.newMessageText = action.newMessage;
			break;
		case SEND_MESSAGE:
			let newMessage = data.newMessageText;
			data.newMessageText = '';
			data.messages.push({id: 5, message: newMessage});
			break;
	}
	return data;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextCreator = (textMessage) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	newMessage: textMessage
})

export default dialogsReducer;