import React, { useState } from "react";
import styles from './Tooltip.module.css';

function Tooltip(props) {
	let timeout;
	const [active, setActive] = useState(false);
	
	const showTip = () => {
		timeout = setTimeout(() => {
			setActive(true);
		}, props.delay || 400);
	};
	
	const hideTip = () => {
		clearInterval(timeout);
		setActive(false);
	};
	
	return (
		<>
			<div className={styles.wrap} onMouseEnter={showTip} onMouseLeave={hideTip}>
				{props.children}
				{active && (
					<div className={styles.tooltip}>
						{props.content}
					</div>
				)}
			</div>
		</>
	);
}

export default Tooltip;