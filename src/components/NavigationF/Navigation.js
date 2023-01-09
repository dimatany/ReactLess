import React from 'react';
import styles from './Navigation.module.css';
import SVGAvatar from '../SVG/SVGAvatar';

function Navigation() {
	return (
		<>
			<nav className={styles.nav}>
				<ul className={styles.border}>
					<li><a href="/about">Головна</a></li>
					<li><a href="/masters">Майстри</a></li>
					<li><a href="/goods">Товари</a></li>
					<li><a href="#"><SVGAvatar fill='white'/></a></li>
					<li><a href="/stocks">Акції</a></li>
					<li><a href="/reviews">Блог</a></li>
					<li><a href="/contacts">Контакти</a></li>
				</ul>
			</nav>
		</>
	);
}

export default Navigation;