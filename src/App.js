import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'

import './Reset.css';
import './index.css';
import Main from './components/Main';
import Header from './components/Header';
import About from './components/About';
import Masters from './components/Masters';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';

function App() {
  return (
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
  );
}

export default App;


