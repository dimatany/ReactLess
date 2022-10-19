import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import './App.css';
import './Reset.css';
import Main from './Main';
import Header from './Header';
import About from './About';
import Masters from './Masters';
import Contacts from './Contacts';
import NotFound from './NotFound';

function App() {
  return (
      <body>
      <div className="container">
          <Router>
              <Header/>
              <Routes>
                  <Route path="/" element={<Main/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/masters" element={<Masters/>}/>
                  <Route path="/contacts" element={<Contacts/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Routes>
          </Router>
      </div>
      </body>
  );
}

export default App;


