import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import './Reset.css';
import './index.css';
import data from '../src/BLL/Data'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <StrictMode>
    <App appData={data}/>
  </StrictMode>
);
