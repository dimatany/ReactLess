import React from 'react';
import styles from './ButtonFeedback.module.css'
import SVGLetter from '../SVG/SVGLetter';
import Modal from '../../components/ModalAllF/Modal';
import Form from '../FormTelegramF/Form';


function ButtonFeedback(props) {
	const [modalOpen, setModalOpen] = React.useState(false);
	return (
		<section className={styles.wrap}>
			<div className={styles.wrapButton}>
				<div className={styles.buttonAria}>
					<div onClick={() => setModalOpen(true)} className={styles.buttonWrapSVG}>
						<SVGLetter fill='#5383ed'/>
					</div>
				</div>
				{modalOpen && (
					<Modal
						isVisible={modalOpen}
						content={<span><Form/></span>}
						onClose={() => setModalOpen(false)}
					/>
				)}
			</div>
		</section>
	);
}

export default ButtonFeedback;