import React from 'react';
import styles from './WhatWeDo.module.css'
import './ab1.png';
import './ab2.png';
import './ab3.png';
import './ab4.png';
import './ab5.png';
import './ab6.png';

function WhatWeDo(props) {
	return (
		<div className={[styles["services"], styles['wrap']].join(" ")}>
			<h2>Наші послуги</h2>
			<div className={styles.card}>
				<div className={styles.shadow}>
					<img src={require("./ab1.png")}  alt='is top image'/>
					<span>Перукарські послуги</span>
				</div>
				<div className={styles.shadow}>
					<img src={require("./ab2.png")}  alt='is top image'/>
					<span>Манікюр</span>
				</div>
				<div className={styles.shadow}>
					<img src={require("./ab3.png")}  alt='image of the service'/>
					<span>Педикюр</span>
				</div>
				<div className={styles.shadow}>
					<img src={require("./ab4.png")}  alt='image of the service'/>
					<span>Косметологія</span>
				</div>
				<div className={styles.shadow}>
					<img src={require("./ab5.png")}  alt='image of the service'/>
					<span>Естетист з тіла</span>
				</div>
				<div className={styles.shadow}>
					<img src={require("./ab6.png")}  alt='image of the service'/>
					<span>Візаж</span>
				</div>
			</div>
		</div>
	);
}

WhatWeDo.defaultProps = {

}
export default WhatWeDo;