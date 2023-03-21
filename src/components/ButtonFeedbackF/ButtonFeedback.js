import React from 'react';
import styles from './ButtonFeedback.module.css'
import Modal from '../ModalF/Modal';
import Form from '../FormF/Form';


function ButtonFeedback(props) {
	const [modalOpen, setModalOpen] = React.useState(false);
	return (
		<section className={styles.wrap}>
			<div className={styles.wrapButton}>
				<div className={styles.buttonAria}>
					<div onClick={() => setModalOpen(true)}
					     className={styles.buttonWrapSVG}>
						{props.children}
					</div>
				</div>
				{modalOpen && (
					<Modal
						isVisible={modalOpen}
						content={<Form/>}
						onClose={() => setModalOpen(false)}
					/>
				)}
			</div>
		</section>
	);
}

export default ButtonFeedback;