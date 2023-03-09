import React, { lazy, Suspense } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Loading from '../LoadingF/Loading';
import GoodsDetail from '../GoodsF/GoodsDetail';
import WhatWeDoDetail from '../WhatWeDoF/WhatWeDoDetail';
import NavHeader from '../NavigationF/NavHeader';
import MastersDetail from '../MastersF/MastersDetail';
import ButtonFeedback from '../ButtonFeedbackF/ButtonFeedback';

const About = lazy(() => import('../../components/AboutF/About'));
const Masters = lazy(() => import('../../components/MastersF/Masters'));
const Goods = lazy(() => import('../../components/GoodsF/Goods'));
const Stocks = lazy(() => import('../../components/StocksF/Stocks'));
const Blog = lazy(() => import('../../components/BlogF/Blog'));
const Contacts = lazy(() => import('../../components/ContactF/Contacts'));
const NotFound = lazy(() => import('../../components/ErrorF/NotFound'));
const renderLoader = () => <Loading/>;
function Header() {
	return (
		<>
		<Suspense fallback={renderLoader()}>
			<BrowserRouter>
				<header>
					<NavHeader/>
				</header>
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
					<ButtonFeedback/>
				</main>
			</BrowserRouter>
		</Suspense>
		</>
	);
}
export default Header;