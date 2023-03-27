import React, { lazy, Suspense } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';

import Loading from '../../land/src/components/LoadingF/Loading';
import GoodsDetail from '../../land/src/components/GoodsF/GoodsDetail';
import WhatWeDoDetail from '../../land/src/components/WhatWeDoF/WhatWeDoDetail';
import Header from './components/HeaderF/Header';
import MastersDetail from '../../land/src/components/MastersF/MastersDetail';
import ButtonFeedback from '../../land/src/components/ButtonFeedbackF/ButtonFeedback';
import ErrorBoundary from '../../land/src/components/ErrorBoundaryC/ErrorBoundary';
import SVGLetter from '../../land/src/components/SVG/SVGLetter';
import Footer from './components/FooterF/Footer';

const About = lazy(() => import('../../land/src/components/AboutF/About'));
const Masters = lazy(() => import('../../land/src/components/MastersF/Masters'));
const Goods = lazy(() => import('../../land/src/components/GoodsF/Goods'));
const Stocks = lazy(() => import('../../land/src/components/StocksF/Stocks'));
const Blog = lazy(() => import('../../land/src/components/BlogF/Blog'));
const Contacts = lazy(() => import('../../land/src/components/ContactF/Contacts'));
const NotFound = lazy(() => import('../../land/src/components/NotFoundF/NotFound'));
const renderLoader = () => <Loading/>;

function App(props) {
  return (
      <div className="container">
          <Suspense fallback={renderLoader()}>
              <BrowserRouter>
                  <ErrorBoundary>
                      <header>
                          <Header/>
                      </header>
                  </ErrorBoundary>
                  <ErrorBoundary>
                      <main>
                          <Routes>
                              <Route index element={<About/>} />
                              <Route path="about" element={<About
                                  dataWWD={props.appData.dataWWD}
                                  dataComment={props.appData.dataComment}
                                  addComment={props.addComment}
                                  updateNewCommentText={props.updateNewCommentText}
                                  newCommentText={props.appData.newCommentText}/>}
                              />
                              <Route path="about/:whatWeDoDetail" element={<WhatWeDoDetail
                                  dataWWD={props.appData.dataWWD}/>}
                              />
                              <Route path="masters" element={<Masters
                                  dataMasters={props.appData.dataMasters}/>}
                              />
                              <Route path="masters/:mastersDetail" element={<MastersDetail
                                  dataMasters={props.appData.dataMasters}/>}
                              />
                              <Route path="goods" element={<Goods
                                  dataGoods={props.appData.dataGoods}/>}
                              />
                              <Route path="goods/:goodsDetail" element={<GoodsDetail
                                  dataGoods={props.appData.dataGoods}/>}
                              />
                              <Route path="stocks" element={<Stocks/>}/>
                              <Route path="blog" element={<Blog
                                  dataBlog={props.appData.dataBlog}/>}
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


