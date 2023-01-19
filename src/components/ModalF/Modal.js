import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../ModalF/Modal.module.css';
import Slider from '../../components/SliderF/Slider';
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
				<div className={styles.section}>
					<h3>Кращі твори нашого майстра</h3>
					<div>
						<Slider/>
					</div>
				</div>
			</div>
		</div>
	</>, document.body
) : null;


export default Modal;