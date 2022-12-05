import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import About from '../../components/AboutF/About';
import Masters from '../../components/MastersF/Masters';
import Goods from '../../components/GoodsF/Goods';
import Stocks from '../../components/StocksF/Stocks';
import Reviews from '../../components/ReviewsF/Reviews';
import Contacts from '../../components/ContactF/Contacts';
import NotFound from '../../components/ErrorF/NotFound';
import styles from './Header.module.css'

function Header() {
	return (
		<>
			<header>
				<nav className={styles.nav}>
					<ul className={styles.border}>
						<li><a href="/about">Главная</a></li>
						<li><a href="/masters">Мастера</a></li>
						<li><a href="/goods">Косметика</a></li>
						<li><a href="#">
							<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M39.1904 34.5978H34.9553C37.7664 30.8686 39.3147 26.2056 39.3147 21.4677C39.3147 9.99511 30.6501 0.661377 19.9988 0.661377C9.34791 0.661377 0.682858 9.99552 0.682858 21.4677C0.682858 26.2064 2.23032 30.8694 5.04109 34.5978H0.809553C0.36268 34.5978 0 34.9605 0 35.4074V38.5298C0 38.9767 0.36268 39.3394 0.809553 39.3394H12.3663C12.8132 39.3394 13.1759 38.9767 13.1759 38.5298V35.0516C13.1759 34.8589 13.1075 34.6731 12.9828 34.527L12.9379 34.474C12.8925 34.4201 12.8399 34.3728 12.782 34.3331C8.8047 31.5766 6.33354 26.6472 6.33354 21.4673C6.33354 13.1103 12.4639 6.31165 19.9988 6.31165C27.5333 6.31165 33.6636 13.1107 33.6636 21.4673C33.6636 26.6691 31.1771 31.609 27.1755 34.3598C26.9557 34.5108 26.8245 34.7601 26.8245 35.0265V38.529C26.8245 38.9759 27.1872 39.3386 27.6341 39.3386H39.1904C39.6373 39.3386 40 38.9759 40 38.529V35.4066C40 34.9601 39.6381 34.5978 39.1904 34.5978Z" fill="white"/>
								<defs>
									<rect width="40" height="40" fill="white"/>
								</defs>
							</svg>
						</a></li>
						<li><a href="/stocks">Акции</a></li>
						<li><a href="/reviews">Отзывы</a></li>
						<li><a href="/contacts">Контакты</a></li>
					</ul>
				</nav>
				<Router>
					<Routes>
						<Route path="/about" element={<About/>}/>
						<Route path="/masters" element={<Masters/>}/>
						<Route path="/goods" element={<Goods/>}/>
						<Route path="/stocks" element={<Stocks/>}/>
						<Route path="/reviews" element={<Reviews/>}/>
						<Route path="/contacts" element={<Contacts/>}/>
						<Route path="*" element={<NotFound/>}/>
					</Routes>
				</Router>
			</header>
		</>
	);
}

export default Header;