import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../ModalF/Modal.module.css';

import './MP1.jpg';
import './MP2.jpg';
import './MP3.jpg';
import './MP4.jpg';
import './MP5.jpg';
import './MP6.jpg';
import './MM1.jpg';
import './MM2.jpg';
import './MM3.jpg';
import './MM4.jpg';
import './MM5.jpg';
import './MM6.jpg';
import './MPP1.jpg';
import './MPP2.jpg';
import './MPP3.jpg';
import './MPP4.jpg';
import './MPP5.jpg';
import './MPP6.jpg';
import './MK1.jpg';
import './MK2.jpg';
import './MK3.jpg';
import './MK4.jpg';
import './MK5.jpg';
import './MK6.jpg';
import './MF1.jpg';
import './MF2.jpg';
import './MF3.jpg';
import './MF4.jpg';
import './MF5.jpg';
import './MF6.jpg';
import './MV1.jpg';
import './MV2.jpg';
import './MV3.jpg';
import './MV4.jpg';
import './MV5.jpg';
import './MV6.jpg';


const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
	<>
		<div className={styles.overlay}/>
		<div className={styles.wrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
			<div className={styles.modal}>
				<div className={styles.header}>
					<button type="button" className={styles.close} data-dismiss="modal" aria-label="Close" onClick={hide}>
						<span aria-hidden="true">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28">
								<path d="M10 22.5c0 0.438 0.203 1.5-0.5 1.5h-5c-2.484 0-4.5-2.016-4.5-4.5v-11c0-2.484 2.016-4.5 4.5-4.5h5c0.266 0 0.5 0.234 0.5 0.5 0 0.438 0.203 1.5-0.5 1.5h-5c-1.375 0-2.5 1.125-2.5 2.5v11c0 1.375 1.125 2.5 2.5 2.5h4.5c0.391 0 1-0.078 1 0.5zM24.5 14c0 0.266-0.109 0.516-0.297 0.703l-8.5 8.5c-0.187 0.187-0.438 0.297-0.703 0.297-0.547 0-1-0.453-1-1v-4.5h-7c-0.547 0-1-0.453-1-1v-6c0-0.547 0.453-1 1-1h7v-4.5c0-0.547 0.453-1 1-1 0.266 0 0.516 0.109 0.703 0.297l8.5 8.5c0.187 0.187 0.297 0.438 0.297 0.703z" fill="red"></path>
							</svg>
						</span>
					</button>
				</div>
				<p>
					тут должны быть фото которые тянутся из массива объектов но при нажатии на каждую кнопку тянется свои массив фото
				</p>
			</div>
		</div>
	</>, document.body
) : null;

export default Modal;