import React from "react";
import useLockBodyScroll from "./useLockBodyScroll";
import styles from './Modal.module.css'
import SVGChange from '../SVG/SVGChange';

function Modal({ content, onClose }) {
	//call custom hook to lock body scroll
	useLockBodyScroll();
	return (
		<div className={styles.modal} onClick={onClose}>
			<div className={styles.modalDialog} onClick={e => e.stopPropagation()}>
				<div className={styles.modalHeader}>
					<span className={styles.modalClose} onClick={onClose}>
						<SVGChange fill='#5383ed'/>
					</span>
				</div>
				<div className={styles.modalBody}>
					<div className={styles.modalContent}>{content}</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;