import React, { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from '../NavigationF/Navigation';
import Loading from '../LoadingF/Loading';
import GoodsDetail from '../GoodsF/GoodsDetail';
import WhatWeDoDetail from '../WhatWeDoF/WhatWeDoDetail';
import Blog from '../BlogF/Blog';
import NavHeader from '../NavigationF/NavHeader';

const About = lazy(() => import('../../components/AboutF/About'));
const Masters = lazy(() => import('../../components/MastersF/Masters'));
const Goods = lazy(() => import('../../components/GoodsF/Goods'));
const Stocks = lazy(() => import('../../components/StocksF/Stocks'));
const Reviews = lazy(() => import('../BlogF/Blog'));
const Contacts = lazy(() => import('../../components/ContactF/Contacts'));
const NotFound = lazy(() => import('../../components/ErrorF/NotFound'));
const renderLoader = () => <Loading/>;
function Header() {
	return (
		<>
			<header>
				<NavHeader/>
			</header>
			<main>
				<Suspense fallback={renderLoader()}>
					<Router>
						<Routes>
							<Route index element={<About/>} />
							<Route path="/about" element={<About/>}/>
							<Route path="/about/:whatWeDoDetail" element={<WhatWeDoDetail/>}/>
							<Route path="/masters" element={<Masters/>}/>
							<Route path="/goods" element={<Goods/>}/>
							<Route path="/goods/:goodsDetail" element={<GoodsDetail/>}/>
							<Route path="/stocks" element={<Stocks/>}/>
							<Route path="/blog" element={<Blog/>}/>
							<Route path="/contacts" element={<Contacts/>}/>
							<Route path="*" element={<NotFound/>}/>
						</Routes>
					</Router>
				</Suspense>
			</main>
		</>
	);
}
export default Header;