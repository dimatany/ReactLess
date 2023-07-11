import React, { useState } from 'react';
import styles from './NavBurger.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {NavLink} from 'react-router-dom';
import SVGAvatar from '../SVG/SVGAvatar';
import SVGLogin from '../SVG/SVGLogin';
import Tooltip from '../Tooltip/Tooltip';
import Radium, {StyleRoot} from 'radium';
import {zoomIn} from 'react-animations';

function NavBurger() {
	const [nav, setNav] = useState(false);
	const style = {
		zoomIn : {
			animation: 'infinite 6s',
			animationName: Radium.keyframes(zoomIn, 'zoomIn'),
		}
	};
	
	return (
		<header className={styles.header}>
			<div className={styles.wrap}>
				<a href="/about" className={styles.logo}>
					<StyleRoot>
						<div style={style.zoomIn}>
							<SVGAvatar fill='#5383ed'/>
						</div>
					</StyleRoot>
				</a>
				<ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
					<li onClick={() => setNav(!nav)} className={styles.login}><NavLink  style={({ isActive }) => (isActive ? {color: '#FE2E2E'} : {color: '#ffffff'})} to="/login"><Tooltip content='Вхід'><SVGLogin fill='#4fa19d'/></Tooltip></NavLink></li>
					<li onClick={() => setNav(!nav)} className={styles.navItem}><NavLink  style={({ isActive }) => (isActive ? {color: '#FE2E2E'} : {color: '#ffffff'})} to="/about">Головна</NavLink></li>
					<li onClick={() => setNav(!nav)} className={styles.navItem}><NavLink  style={({ isActive }) => (isActive ? {color: '#FE2E2E'} : {color: '#ffffff'})} to="/masters">Майстри</NavLink></li>
					<li onClick={() => setNav(!nav)} className={styles.navItem}><NavLink  style={({ isActive }) => (isActive ? {color: '#FE2E2E'} : {color: '#ffffff'})} to="/goods">Товари</NavLink></li>
					<li onClick={() => setNav(!nav)} className={styles.navItem}><NavLink  style={({ isActive }) => (isActive ? {color: '#FE2E2E'} : {color: '#ffffff'})} to="/stocks">Акції</NavLink></li>
					<li onClick={() => setNav(!nav)} className={styles.navItem}><NavLink  style={({ isActive }) => (isActive ? {color: '#FE2E2E'} : {color: '#ffffff'})} to="/blog">Блог</NavLink></li>
					<li onClick={() => setNav(!nav)} className={styles.navItem}><NavLink  style={({ isActive }) => (isActive ? {color: '#FE2E2E'} : {color: '#ffffff'})} to="/contacts">Контакти</NavLink></li>
				</ul>
				<div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
					{nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
				</div>
			</div>
		</header>
	);
}

export default NavBurger;