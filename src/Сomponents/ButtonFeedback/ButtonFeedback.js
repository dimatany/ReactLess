import React from 'react';
import styles from './ButtonFeedback.module.css'
import Modal from '../Modal/Modal';
import FormFeedback from '../FormFeedback/FormFeedback';

function ButtonFeedback(props) {
	const [modalOpen, setModalOpen] = React.useState(false);
	
	return (
		<div className={styles.wrap}>
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
						content={<FormFeedback/>}
						onClose={() => setModalOpen(false)}
					/>
				)}
			</div>
		</div>
	);
}

ButtonFeedback.defaultProps = {
	button: 'Натисніть',
};

export default ButtonFeedback;