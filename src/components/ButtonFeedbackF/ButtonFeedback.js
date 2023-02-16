import React from 'react';
import styles from './ButtonFeedback.module.css'
import SVGLetter from '../SVG/SVGLetter';

function ButtonFeedback(props) {
	return (
		<section className={styles.wrap}>
			<div role="button" tabIndex="0" className={styles.wrapButton}>
				<div className={styles.buttonAria}>
					<div className={styles.buttonPosition}>
						<div className={styles.buttonWrapSVG}>
							<SVGLetter fill='#5383ed'/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ButtonFeedback;