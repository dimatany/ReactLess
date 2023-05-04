import React from 'react';
import styles from './Header.module.css';
import SVGAvatar from '../SVG/SVGAvatar';
import { NavLink} from 'react-router-dom';

function Header() {
	return (
		<>
			<div className={styles.header}>
				<div className={styles.wrap}>
					<a href="/about" className={styles.logo}>
						<SVGAvatar fill='#5383ed'/>
					</a>
					<input className={styles.sideMenu} type="checkbox" id="sideMenu"/>
					<label className={styles.hamb} htmlFor="sideMenu">
						<span className={styles.hambLine}></span>
					</label>
					<nav className={styles.nav}>
						<ul className={styles.menu}>
							<li><NavLink  style={({ isActive }) =>
								(isActive ? {color: '#FE2E2E'} : {color: '#ffffff'})} to="/about">Головна</NavLink></li>
							<li><NavLink  style={({ isActive }) =>
								(isActive ? {color: '#FE2E2E'} : {color: '#ffffff'})} to="/masters">Майстри</NavLink></li>
							<li><NavLink  style={({ isActive }) =>
								(isActive ? {color: '#FE2E2E'} : {color: '#ffffff'})} to="/goods">Товари</NavLink></li>
							<li><NavLink  style={({ isActive }) =>
								(isActive ? {color: '#FE2E2E'} : {color: '#ffffff'})} to="/stocks">Акції</NavLink></li>
							<li><NavLink  style={({ isActive }) =>
								(isActive ? {color: '#FE2E2E'} : {color: '#ffffff'})} to="/blog">Відповіді</NavLink></li>
							<li><NavLink  style={({ isActive }) =>
								(isActive ? {color: '#FE2E2E'} : {color: '#ffffff'})} to="/contacts">Контакти</NavLink></li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
}
export default Header;