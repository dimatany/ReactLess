import React, { lazy, Suspense } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';

import Loading from './components/Loading/Loading';
import GoodsDetail from './components/GoodsDetail/GoodsDetail';
import WhatWeDoDetail from './components/WhatWeDoDetail/WhatWeDoDetail';
import Header from './components/Header/Header';
import MastersDetail from './components/MastersDetail/MastersDetail';
import ButtonFeedback from './components/ButtonFeedback/ButtonFeedback';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import SVGLetter from '../../land/src/components/SVG/SVGLetter';
import Footer from './components/Footer/Footer';
import Toggle from './components/Toggle/Toggle';
import { ThemeContext, themes } from './contexts/ThemeContext';

const About = lazy(() => import('./components/About/About'));
const Masters = lazy(() => import('./components/Masters/Masters'));
const Goods = lazy(() => import('./components/Goods/Goods'));
const Stocks = lazy(() => import('./components/Stocks/Stocks'));
const Blog = lazy(() => import('./components/Blog/Blog'));
const Contacts = lazy(() => import('./components/Contact/Contacts'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));
const renderLoader = () => <Loading/>;

function App(props) {
  return (
      <div className="container">
          <Suspense fallback={renderLoader()}>
              <BrowserRouter>
                  <div className="buttonTheme">
                      <ThemeContext.Consumer>
                          {({ theme, setTheme }) => (
                              <Toggle
                                  onChange={() => {
                                      if (theme === themes.light) setTheme(themes.dark)
                                      if (theme === themes.dark) setTheme(themes.light)
                                  }}
                                  value={theme === themes.dark}
                              />
                          )}
                      </ThemeContext.Consumer>
                  </div>
                  <ErrorBoundary>
                      <header>
                          <Header/>
                      </header>
                  </ErrorBoundary>
                  <ErrorBoundary>
                      <main>
                          <Routes>
                              <Route index element={<About/>} />
                              <Route path="about" element={
                                  <About
                                      dataWWD={props.appData.dataWWD}
                                      store={props.store}
                                  />}
                              />
                              <Route path="about/:whatWeDoDetail" element={
                                  <WhatWeDoDetail
                                      dataWWD={props.appData.dataWWD}
                                  />}
                              />
                              <Route path="masters" element={
                                  <Masters
                                      dataMasters={props.appData.dataMasters}
                                  />}
                              />
                              <Route path="masters/:mastersDetail" element={
                                  <MastersDetail
                                      dataMasters={props.appData.dataMasters}
                                  />}
                              />
                              <Route path="goods" element={
                                  <Goods
                                      dataGoods={props.appData.dataGoods}
                                  />}
                              />
                              <Route path="goods/:goodsDetail" element={
                                  <GoodsDetail
                                      dataGoods={props.appData.dataGoods}
                                  />}
                              />
                              <Route path="stocks" element={<Stocks/>}/>
                              <Route path="blog" element={
                                  <Blog
                                      dataBlog={props.appData.dataBlog}
                                      store={props.store}
                                  />}
                              />
                              <Route path="contacts" element={<Contacts/>}/>
                              <Route path="*" element={<NotFound/>}/>
                          </Routes>
                          <ButtonFeedback>
                              <SVGLetter fill='#5383ed'/>
                          </ButtonFeedback>
                      </main>
                  </ErrorBoundary>
                  <ErrorBoundary>
                      <footer>
                          <Footer/>
                      </footer>
                  </ErrorBoundary>
              </BrowserRouter>
          </Suspense>
      </div>
  );
}

export default App;


