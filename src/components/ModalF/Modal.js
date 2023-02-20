import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../ModalF/Modal.module.css';
import SVGChange from '../SVG/SVGChange';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
	<>
		<div className={styles.overlay}/>
		<div className={styles.wrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
			<div className={styles.modal}>
				<div className={styles.header}>
					<button type="button" className={styles.close} data-dismiss="modal" aria-label="Close" onClick={hide}>
						<span aria-hidden="true">
							<SVGChange fill='white'/>
						</span>
					</button>
				</div>
			</div>
		</div>
	</>, document.body
) : null;


export default Modal;