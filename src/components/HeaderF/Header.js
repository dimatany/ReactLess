import React, { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from '../NavigationF/Navigation';
import Loading from '../LoadingF/Loading';

const About = lazy(() => import('../../components/AboutF/About'));
const Masters = lazy(() => import('../../components/MastersF/Masters'));
const Goods = lazy(() => import('../../components/GoodsF/Goods'));
const Stocks = lazy(() => import('../../components/StocksF/Stocks'));
const Reviews = lazy(() => import('../../components/ReviewsF/Reviews'));
const Contacts = lazy(() => import('../../components/ContactF/Contacts'));
const NotFound = lazy(() => import('../../components/ErrorF/NotFound'));

const renderLoader = () => <Loading/>;

function Header() {
	return (
		<>
			<header>
				<Navigation/>
			</header>
			<main>
				<Suspense fallback={renderLoader()}>
					<Router>
						<Routes>
							<Route index element={<About/>} />
							<Route path="/about" element={<About/>}/>
							<Route path="/masters" element={<Masters/>}/>
							<Route path="/goods" element={<Goods/>}/>
							<Route path="/stocks" element={<Stocks/>}/>
							<Route path="/reviews" element={<Reviews/>}/>
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