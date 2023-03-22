import React, { lazy, Suspense } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';

import Loading from '../../land/src/components/LoadingF/Loading';
import GoodsDetail from '../../land/src/components/GoodsF/GoodsDetail';
import WhatWeDoDetail from '../../land/src/components/WhatWeDoF/WhatWeDoDetail';
import NavHeader from '../../land/src/components/NavHeaderF/NavHeader';
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
                          <NavHeader/>
                      </header>
                  </ErrorBoundary>
                  <ErrorBoundary>
                      <main>
                          <Routes>
                              <Route index element={<About/>} />
                              <Route path="about" element={<About/>}/>
                              <Route path="about/:whatWeDoDetail" element={<WhatWeDoDetail/>}/>
                              <Route path="masters" element={<Masters/>}/>
                              <Route path="masters/:mastersDetail" element={<MastersDetail/>}/>
                              <Route path="goods" element={<Goods/>}/>
                              <Route path="goods/:goodsDetail" element={<GoodsDetail/>}/>
                              <Route path="stocks" element={<Stocks/>}/>
                              <Route path="blog" element={<Blog/>}/>
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


