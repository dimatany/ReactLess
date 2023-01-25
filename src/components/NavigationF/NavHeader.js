import React from 'react';
import styles from './NavHeader.module.css';
import SVGAvatar from '../SVG/SVGAvatar';

function NavHeader(props) {
	return (
		<>
			<header className={styles.header}>
				<a href="#" className={styles.logo}>
					<SVGAvatar fill='white'/>
				</a>
				<input className={styles.sideMenu} type="checkbox" id="sideMenu"/>
				<label className={styles.hamb} htmlFor="sideMenu">
					<span className={styles.hambLine}></span>
				</label>
				<nav className={styles.nav}>
					<ul className={styles.menu}>
						<li><a href="/about">Головна</a></li>
						<li><a href="/masters">Майстри</a></li>
						<li><a href="/goods">Товари</a></li>
						<li><a href="/stocks">Акції</a></li>
						<li><a href="/blog">Блог</a></li>
						<li><a href="/contacts">Контакти</a></li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default NavHeader;