import React from 'react';
import store from './BLL/Data';
import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import './Reset.css';
import './index.css';
import App from './App';
import './BLL/fonts/Gilroy/Gilroy-Light.woff';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (data) => {
	root.render (
		<StrictMode>
			<App
				appData={data}
				dispatch={store.dispatch.bind(store)}
			/>
		</StrictMode>
	);
}

rerenderEntireTree(store.getData());
store.subscribe(rerenderEntireTree);
