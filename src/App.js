import React, { lazy, Suspense } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';


import Loading from './Сomponents/Loading/Loading';
import GoodsDetail from './Сomponents/GoodsDetail/GoodsDetail';
import WhatWeDoDetail from './Сomponents/WhatWeDoDetail/WhatWeDoDetail';
import MastersDetail from './Сomponents/MastersDetail/MastersDetail';
import ButtonFeedback from './Сomponents/ButtonFeedback/ButtonFeedback';
import ErrorBoundary from './Сomponents/ErrorBoundary/ErrorBoundary';
import SVGLetter from './Сomponents/SVG/SVGLetter';
import Footer from './Сomponents/Footer/Footer';
import Toggle from './Сomponents/Toggle/Toggle';
import { ThemeContext, themes } from './Contexts/ThemeContext';
import NavBurger from './Сomponents/NavBurger/NavBurger';

const About = lazy(() => import('./Сomponents/About/About'));
const Masters = lazy(() => import('./Сomponents/Masters/Masters'));
const Goods = lazy(() => import('./Сomponents/Goods/Goods'));
const Stocks = lazy(() => import('./Сomponents/Stocks/Stocks'));
const Blog = lazy(() => import('./Сomponents/Blog/Blog'));
const Contacts = lazy(() => import('./Сomponents/Contact/Contacts'));
const NotFound = lazy(() => import('./Сomponents/NotFound/NotFound'));
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
                      <NavBurger/>
                  </ErrorBoundary>
                  <ErrorBoundary>
                      <main>
                          <Routes>
                              <Route index element={
                                  <About
                                      dataWWD={props.appData.dataWWD}
                                      store={props.store}
                                  />}
                              />
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


