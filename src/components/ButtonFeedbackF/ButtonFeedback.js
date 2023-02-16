import React from 'react';
import styles from './ButtonFeedback.module.css'
import SVGLetter from '../SVG/SVGLetter';
import Modal from '../ModalF/Modal';
import useModal from '../ModalF/useModal';

function ButtonFeedback(props) {
	const {isShowing, toggle} = useModal();
	return (
		<section className={styles.wrap}>
			<div role="button" onClick={toggle} tabIndex="0" className={styles.wrapButton}>
				<div className={styles.buttonAria}>
					<div className={styles.buttonWrapSVG}>
						<SVGLetter fill='#5383ed'/>
					</div>
				</div>
				<Modal isShowing={isShowing} hide={toggle}/>
			</div>
		</section>
	);
}

export default ButtonFeedback;