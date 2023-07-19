import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from "react";
import store from './BLL/reduxStore';
import './Reset.css';
import './index.css';
import App from './App';
import './BLL/fonts/Gilroy/Gilroy-Light.woff';
import './BLL/fonts/Dahlia/Dahlia.ttf';
import {Provider} from 'react-redux';
import reduxStore from './BLL/reduxStore';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './Providers/ThemeProvider';
import '../src/firebase';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
	root.render (
		<StrictMode>
			<ThemeProvider>
				<Provider store={store}>
					<App appData={state} store={reduxStore}/>
				</Provider>
			</ThemeProvider>
		</StrictMode>
	);
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state);
});

reportWebVitals()