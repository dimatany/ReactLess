import React, { useState } from 'react';
import styles from './NavBurger.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {NavLink} from 'react-router-dom';
import SVGAvatar from '../SVG/SVGAvatar';

function NavBurger(props) {
	const [nav, setNav] = useState(false);
	return (
		<header className={styles.header}>
			<div className={styles.wrap}>
				<a href="/about" className={styles.logo}>
					<SVGAvatar fill='#5383ed'/>
				</a>
				<ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
					<li><NavLink  style={({ isActive }) => (isActive ? {color: '#FE2E2E'} : {color: '#ffffff'})} to="/about">Головна</NavLink></li>
					<li><NavLink  style={({ isActive }) => (isActive ? {color: '#FE2E2E'} : {color: '#ffffff'})} to="/masters">Майстри</NavLink></li>
					<li><NavLink  style={({ isActive }) => (isActive ? {color: '#FE2E2E'} : {color: '#ffffff'})} to="/goods">Товари</NavLink></li>
					<li><NavLink  style={({ isActive }) => (isActive ? {color: '#FE2E2E'} : {color: '#ffffff'})} to="/stocks">Акції</NavLink></li>
					<li><NavLink  style={({ isActive }) => (isActive ? {color: '#FE2E2E'} : {color: '#ffffff'})} to="/blog">Відповіді</NavLink></li>
					<li><NavLink  style={({ isActive }) => (isActive ? {color: '#FE2E2E'} : {color: '#ffffff'})} to="/contacts">Контакти</NavLink></li>
				</ul>
				<div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
					{nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
				</div>
			</div>
		</header>
	);
}

export default NavBurger;