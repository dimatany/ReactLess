import React from 'react';
import styles from './NavHeader.module.css';
import SVGAvatar from '../SVG/SVGAvatar';
import { NavLink} from 'react-router-dom';

function NavHeader(props) {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.wrap}>
					<a href="/about" className={styles.logo}>
						<SVGAvatar fill='white'/>
					</a>
					<input className={styles.sideMenu} type="checkbox" id="sideMenu"/>
					<label className={styles.hamb} htmlFor="sideMenu">
						<span className={styles.hambLine}></span>
					</label>
					<nav className={styles.nav}>
						<ul className={styles.menu}>
							<li><NavLink to="/about">Головна</NavLink></li>
							<li><NavLink to="/masters">Майстри</NavLink></li>
							<li><NavLink to="/goods">Товари</NavLink></li>
							<li><NavLink to="/stocks">Акції</NavLink></li>
							<li><NavLink to="/blog">Відповіді</NavLink></li>
							<li><NavLink to="/contacts">Контакти</NavLink></li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
}

export default NavHeader;