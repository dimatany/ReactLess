const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const dialogsReducer = (data, action) => {
	if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
		data.newMessageText = action.newMessage;
	} else if (action.type === SEND_MESSAGE) {
		let newMessage = data.newMessageText;
		data.newMessageText = '';
		data.messages.push({id:4, message: newMessage},);
	}
	return data;
}