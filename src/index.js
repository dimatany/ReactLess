import React from 'react';
import store from './BLL/reduxStore';
import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import './Reset.css';
import './index.css';
import App from './App';
import './BLL/fonts/Gilroy/Gilroy-Light.woff';
import './BLL/fonts/Dahlia/Dahlia.ttf';
import {Provider} from 'react-redux';
import reduxStore from './BLL/reduxStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
	root.render (
		<StrictMode>
			<Provider store={store}>
				<App
					appData={state}
					store={reduxStore}
				/>
			</Provider>
		</StrictMode>
	);
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state);
});
