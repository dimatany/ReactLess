import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import './Reset.css';
import './index.css';
import {addComment, updateNewCommentText} from './BLL/Data';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (data) => {
	root.render (
		<StrictMode>
			<App
				appData={data}
				addComment={addComment}
				updateNewCommentText={updateNewCommentText}
			/>
		</StrictMode>
	);
}
