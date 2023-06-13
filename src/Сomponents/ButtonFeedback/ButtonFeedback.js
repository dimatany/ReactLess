import React from 'react';
import styles from './ButtonFeedback.module.css'
import Modal from '../Modal/Modal';
import Form from '../Form/Form';

import { flash } from 'react-animations';
import Radium, {StyleRoot} from 'radium';


function ButtonFeedback(props) {
	const [modalOpen, setModalOpen] = React.useState(false);
	
	const style = {
		flash : {
			animation: 'infinite 2s',
			animationName: Radium.keyframes(flash, 'flash'),
		}
	};
	
	return (
		<div className={styles.wrap}>
			<div className={styles.wrapButton}>
				<StyleRoot>
					<div className="test" style={style.flash}>
						<div className={styles.buttonAria}>
							<div onClick={() => setModalOpen(true)}
							     className={styles.buttonWrapSVG}>
								{props.children}
							</div>
						</div>
					</div>
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

export default ButtonFeedback;