import React from 'react'
import './index.css';
import Header from './components/HeaderF/Header';
import Footer from './components/FooterF/Footer';
import ButtonFeedback from './components/ButtonFeedbackF/ButtonFeedback';

function App() {
  return (
      <div className="container">
          <Header/>
          <ButtonFeedback/>
          <Footer/>
      </div>
  );
}

export default App;


