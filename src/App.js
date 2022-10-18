import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Main from './Main';
import Header from './Header';
import About from './About';
import Masters from './Masters';
import Contacts from './Contacts';
import NotFound from './NotFound';

function App() {
  return (
      <>
          <Router>
              <Header/>
                  <Routes>
                      <Route exact path="/" element={<Main/>}/>
                      <Route exact path="/about" element={<About/>}/>
                      <Route exact path="/masters" element={<Masters/>}/>
                      <Route exact path="/contacts" element={<Contacts/>}/>
                      <Route exact path="*" element={<NotFound/>}/>
                  </Routes>
          </Router>
      </>
  );
}

export default App;


