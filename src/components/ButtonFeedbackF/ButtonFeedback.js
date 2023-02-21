import React from 'react';
import styles from './ButtonFeedback.module.css'
import SVGLetter from '../SVG/SVGLetter';
import ModalWindow from '../ModalF/ModalWindow';
import FormTelegram from '../FormTelegramF/FormTelegram';

function ButtonFeedback(props) {
	const [isModal, setModal] = React.useState(false);
	return (
		<section className={styles.wrap}>
			<div className={styles.wrapButton}>
				<div className={styles.buttonAria}>
					<div onClick={() => setModal(true)} className={styles.buttonWrapSVG}>
						<SVGLetter fill='#5383ed'/>
					</div>
				</div>
				<ModalWindow
					isVisible={isModal}
					title="Modal Title"
					content={<p><FormTelegram/></p>}
					onClose={() => setModal(false)}
				/>
			</div>
		</section>
	);
}

export default ButtonFeedback;