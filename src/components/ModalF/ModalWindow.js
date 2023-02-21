import React from 'react';
import styles from './ModalWindow.module.css'
import SVGChange from '../SVG/SVGChange';

const ModalWindow = ({ isVisible = false, content, onClose }) => {
	const keydownHandler = ({ key }) => {
		switch (key) {
			case 'Escape':
				onClose();
				break;
			default:
		}
	};
	
	React.useEffect(() => {
		document.addEventListener('keydown', keydownHandler);
		return () => document.removeEventListener('keydown', keydownHandler);
	});
	
	return !isVisible ? null : (
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
};

export default ModalWindow;