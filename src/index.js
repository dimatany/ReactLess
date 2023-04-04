import React from 'react';
import store from './BLL/reduxStore';
import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import './Reset.css';
import './index.css';
import App from './App';
import './BLL/fonts/Gilroy/Gilroy-Light.woff';
import './BLL/fonts/Dahlia/Dahlia.ttf';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
	root.render (
		<StrictMode>
			<App
				appData={state}
				dispatch={store.dispatch.bind(store)}
				store={store}
			/>
		</StrictMode>
	);
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state);
});
