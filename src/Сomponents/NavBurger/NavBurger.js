import React, { useState } from 'react';
import styles from './NavBurger.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {NavLink} from 'react-router-dom';
import SVGAvatar from '../SVG/SVGAvatar';
import SVGLogin from '../SVG/SVGLogin';
import Tooltip from '../Tooltip/Tooltip';
import Radium, {StyleRoot} from 'radium';
import {zoomIn} from 'react-animations';
import {LANGUAGES} from '../../Сonstants/constants';
import {useTranslation} from 'react-i18next';

function NavBurger() {
	const [nav, setNav] = useState(false);
	const { i18n, t } = useTranslation();
	
	const onChangeLang = (e) => {
		const languageCode = e.target.value;
		i18n.changeLanguage(languageCode )
		.then(r => e.target.value);
	};
	
	const style = {
		zoomIn : {
			animation: 'infinite 6s',
			animationName: Radium.keyframes(zoomIn, 'zoomIn'),
		}
	};
	const isActive = ({ isActive }) => (isActive ? {color: '#FE2E2E'} : {color: '#ffffff'});
	
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
					<div className={styles.customSelect}>
						<select defaultValue={i18n.language} onChange={onChangeLang}>
							{LANGUAGES.map(({ code, label }) => (
								<option key={code} value={code}>
									{label}
								</option>
							))}
						</select>
					</div>
					<li onClick={() => setNav(!nav)} className={styles.login}><NavLink to="/login"><Tooltip content='Вхід'><SVGLogin fill='#4fa19d'/></Tooltip></NavLink></li>
					<li onClick={() => setNav(!nav)} className={styles.navItem}><NavLink  style={isActive}  to="/about">{t('NavBurger.navLiMain')}</NavLink></li>
					<li onClick={() => setNav(!nav)} className={styles.navItem}><NavLink  style={isActive}  to="/masters">{t('NavBurger.navLiMasters')}</NavLink></li>
					<li onClick={() => setNav(!nav)} className={styles.navItem}><NavLink  style={isActive}  to="/goods">{t('NavBurger.navLiGoods')}</NavLink></li>
					<li onClick={() => setNav(!nav)} className={styles.navItem}><NavLink  style={isActive}  to="/stocks">{t('NavBurger.navLiStocks')}</NavLink></li>
					<li onClick={() => setNav(!nav)} className={styles.navItem}><NavLink  style={isActive}  to="/blog">{t('NavBurger.navLiBlog')}</NavLink></li>
					<li onClick={() => setNav(!nav)} className={styles.navItem}><NavLink  style={isActive}  to="/contacts">{t('NavBurger.navLiContacts')}</NavLink></li>
				</ul>
				<div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
					{nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
				</div>
			</div>
		</header>
	);
}
export default NavBurger;