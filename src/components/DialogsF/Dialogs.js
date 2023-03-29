import React from 'react';
import styles from './Dialogs.module.css';
import {sendMessageCreator, updateNewMessageTextCreator} from '../../BLL/Data';

function Dialogs(props) {
	
	let data = props.store.getData().dataDialogsPage;
	let newMessageText = data.newMessageText;
	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	}
	let onNewMessageChange = (event) => {
		let textMessage = event.target.value;
		props.store.dispatch(updateNewMessageTextCreator(textMessage));
	}
	
	return (
		<div className={styles.wrap}>
			<div className={styles.wrapDialogs}>
				{data.dialogs.map(el =>
					<div key={el.id}>
						<div>{el.name}</div>
					</div>
				)}
			</div>
			<div className={styles.wrapMessages}>
				<div>
					{data.messages.map(el =>
						<div key={el.id}>
							<div>{el.message}</div>
						</div>
					)}
				</div>
				<div>
					<div>
						<textarea
							placeholder={props.placeholder}
							onChange={ onNewMessageChange }
							value={newMessageText}
						></textarea>
					</div>
					<div>
						<button onClick={ onSendMessageClick } >{props.button}</button>
					</div>
				</div>
			</div>
		</div>
	);
}

Dialogs.defaultProps = {
	button: 'Send',
	placeholder: 'Enter your message',
};
export default Dialogs;