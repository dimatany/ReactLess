import React from 'react';
import styles from './Footer.module.css'
import SVGAvatar from '../SVG/SVGAvatar';
import SVGInstagram from '../SVG/SVGInstagram';
import {useTranslation} from 'react-i18next';

function Footer(props) {
	const { t } = useTranslation();
	
	return (
		<>
			<address className={[styles["section"], styles['wrap'], styles['border']].join(" ")}>
				<div className={styles.svg}>
					<SVGAvatar fill='#5383ed'/>
				</div>
				<div className={styles.contacts}>
					<span>{t('Footer.title1')}</span>
					<ul>
						<li><a href="mailto:cheize2020@gmail.com?subject=contact for joint work">{props.email}</a></li>
						<li><a href="tel:+380670000000">{props.number}</a></li>
					</ul>
				</div>
				<div className={styles.mode}>
					<span>{t('Footer.title2')}</span>
					<ul>
						<li>{t('Footer.mode1')}</li>
						<li>{t('Footer.mode1')}</li>
					</ul>
				</div>
				<div className={styles.social}>
					<span>{t('Footer.title3')}</span>
					<a href="https://www.instagram.com/cheize20/?hl=ru"
					   target="_blank"
					   rel="noopener noreferrer nofollow"
					   title="instagram">
						<SVGInstagram fill='#5383ed' stroke='#5383ed'/>
					</a>
				</div>
			</address>
			<div className={styles.copyright}>
				<span>{t('copyright')}</span>
			</div>
		</>
	);
}

Footer.defaultProps = {
	title1: 'Контакти',
	title2: 'Pежим роботи',
	title3: 'Ми в Instagram',
	email: 'Email me(cheize2020@gmail.com)',
	number: 'Сall me (+3 80(00) 000 00 00)',
	mode1: 'C 10:00 до 21:00 (Пн-Пт)',
	mode2: 'С 11:00 до 20:00 (Сб-Вс)',
	copyright: 'Copyright © 2017 - 2022',
};

export default Footer;