import React from 'react';
import styles from './ButtonFeedback.module.css'
import Modal from '../Modal/Modal';
import Form from '../Form/Form';
import { headShake } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Tooltip from '../Tooltip/Tooltip';



function ButtonFeedback(props) {
	const [modalOpen, setModalOpen] = React.useState(false);
	
	const style = {
		headShake : {
			animation: 'infinite 3s',
			animationName: Radium.keyframes(headShake, 'headShake'),
		}
	};
	
	return (
		<div className={styles.wrap}>
			<div className={styles.wrapButton}>
				<StyleRoot>
					<Tooltip content={props.button}>
						<div className="test" style={style.headShake}>
							<div className={styles.buttonAria}>
								<div onClick={() => setModalOpen(true)}
								     className={styles.buttonWrapSVG}>
									{props.children}
								</div>
							</div>
						</div>
					</Tooltip>
				</StyleRoot>
				{modalOpen && (
					<Modal
						isVisible={modalOpen}
						content={<Form/>}
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