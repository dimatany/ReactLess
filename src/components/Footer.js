import React from 'react';
import styles from './Footer.module.css'


function Footer() {
	return (
		<>
			<footer>
				<div className={[styles["section"], styles['wrap'], styles['border']].join(" ")}>
					<div>
						<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M39.1904 34.5978H34.9553C37.7664 30.8686 39.3147 26.2056 39.3147 21.4677C39.3147 9.99511 30.6501 0.661377 19.9988 0.661377C9.34791 0.661377 0.682858 9.99552 0.682858 21.4677C0.682858 26.2064 2.23032 30.8694 5.04109 34.5978H0.809553C0.36268 34.5978 0 34.9605 0 35.4074V38.5298C0 38.9767 0.36268 39.3394 0.809553 39.3394H12.3663C12.8132 39.3394 13.1759 38.9767 13.1759 38.5298V35.0516C13.1759 34.8589 13.1075 34.6731 12.9828 34.527L12.9379 34.474C12.8925 34.4201 12.8399 34.3728 12.782 34.3331C8.8047 31.5766 6.33354 26.6472 6.33354 21.4673C6.33354 13.1103 12.4639 6.31165 19.9988 6.31165C27.5333 6.31165 33.6636 13.1107 33.6636 21.4673C33.6636 26.6691 31.1771 31.609 27.1755 34.3598C26.9557 34.5108 26.8245 34.7601 26.8245 35.0265V38.529C26.8245 38.9759 27.1872 39.3386 27.6341 39.3386H39.1904C39.6373 39.3386 40 38.9759 40 38.529V35.4066C40 34.9601 39.6381 34.5978 39.1904 34.5978Z" fill="white"/>
							<defs>
								<rect width="40" height="40" fill="white"/>
							</defs>
						</svg>
					</div>
					<div className={styles.contacts}>
						<span>Контакти</span>
						<ul>
							<li> <a href="mailto:cheize2020@gmail.com?subject=contact for joint work">Email me(cheize2020@gmail.com)</a></li>
							<li><a href="tel:+380670000000">Сall me (+3 80(00) 000 00 00)</a></li>
						</ul>
					</div>
					<div className={styles.mode}>
						<span>Pежим роботи</span>
						<ul>
							<li>C 10:00 до 21:00 (Пн-Пт)</li>
							<li>С 11:00 до 20:00 (Сб-Вс)</li>
						</ul>
					</div>
					<div className={styles.social}>
						<span>Мы в Instagram</span>
						<a href="https://www.instagram.com/cheize20/?hl=ru" target="_blank" rel="noopener noreferrer nofollow" title="instagram">
							<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
								<path d="M18.5341 1H7.46592C3.89455 1 1 3.89507 1 7.46592V18.5341C1 22.1054 3.89507 25 7.46643 25H18.5336C22.1049 25 25 22.1049 25 18.5336V7.46592C25 3.89455 22.1049 1 18.5336 1H18.5341Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
								<path d="M13 18.7932C16.1995 18.7932 18.7932 16.1995 18.7932 13C18.7932 9.8005 16.1995 7.20679 13 7.20679C9.80049 7.20679 7.20679 9.8005 7.20679 13C7.20679 16.1995 9.80049 18.7932 13 18.7932Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
								<path d="M20.0345 7.20688C20.72 7.20688 21.2757 6.65115 21.2757 5.96562C21.2757 5.2801 20.72 4.72437 20.0345 4.72437C19.3489 4.72437 18.7932 5.2801 18.7932 5.96562C18.7932 6.65115 19.3489 7.20688 20.0345 7.20688Z" fill="white"/>
							</svg>
						</a>
					</div>
				</div>
				<div className={styles.copyright}>
					<span>Copyright © 2017 - 2022</span>
				</div>
			</footer>
		</>
	);
}

export default Footer;