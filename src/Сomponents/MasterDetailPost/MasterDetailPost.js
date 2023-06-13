import React from 'react';
import styles from './MasterDetailPost.module.css';

import { slideInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const style = {
	slideInLeft  : {
		animation: 'x 4s',
		animationName: Radium.keyframes(slideInLeft, 'slideInLeft'),
	}
};

function MasterDetailPost(props) {
	return (
		<div className={styles.wrapBlock}>
			<h4 className={styles.wrapTitle}>{props.subTitle}</h4>
			<div className={styles.wrapDescription}>
				<div className={styles.descriptionImg}>
					<StyleRoot>
						<div className="test" style={style.slideInLeft}>
					<img src={props.image} alt={props.alt}/>
						</div>
					</StyleRoot>
				</div>
				<div className={styles.descriptionText}>
					<p>{props.text}</p>
				</div>
			</div>
		</div>
	);
}

export default MasterDetailPost;