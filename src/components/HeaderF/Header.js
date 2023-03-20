import React, { lazy, Suspense } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Loading from '../LoadingF/Loading';
import GoodsDetail from '../GoodsF/GoodsDetail';
import WhatWeDoDetail from '../WhatWeDoF/WhatWeDoDetail';
import NavHeader from '../NavigationF/NavHeader';
import MastersDetail from '../MastersF/MastersDetail';
import ButtonFeedback from '../ButtonFeedbackF/ButtonFeedback';
import ErrorBoundary from '../ErrorBoundaryC/ErrorBoundary';
import data from '../../BLL/Data';

const About = lazy(() => import('../AboutF/About'));
const Masters = lazy(() => import('../MastersF/Masters'));
const Goods = lazy(() => import('../GoodsF/Goods'));
const Stocks = lazy(() => import('../StocksF/Stocks'));
const Blog = lazy(() => import('../BlogF/Blog'));
const Contacts = lazy(() => import('../ContactF/Contacts'));
const NotFound = lazy(() => import('../ErrorF/NotFound'));
const renderLoader = () => <Loading/>;
function Header() {
	return (
		<>
		<Suspense fallback={renderLoader()}>
			<BrowserRouter>
				<ErrorBoundary>
					<header>
						<NavHeader/>
					</header>
				</ErrorBoundary>
				<main>
					<Routes>
						{/* dataWWD={data.dataWWD} - можно удалить?*/}
						<Route index element={<About/>} />
						<Route path="about" element={<About/>}/>
						<Route path="about/:whatWeDoDetail" element={<WhatWeDoDetail dataWWD={data.dataWWD}/>}/>
						<Route path="masters" element={<Masters/>}/>
						<Route path="masters/:mastersDetail" element={<MastersDetail dataMasters={data.dataMasters}/>}/>
						<Route path="goods" element={<Goods dataGoods={data.dataGoods}/>}/>
						<Route path="goods/:goodsDetail" element={<GoodsDetail dataGoods={data.dataGoods}/>}/>
						<Route path="stocks" element={<Stocks/>}/>
						<Route path="blog" element={<Blog dataBlog={data.dataBlog}/>}/>
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