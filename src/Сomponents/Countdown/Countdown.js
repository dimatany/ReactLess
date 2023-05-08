import React, { useEffect, useState } from "react";
import styles from './Countdown.module.css';

let Countdown = ({ date }) => {
	const [finishTime] = useState(date.getTime());
	const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
	const [tick, setTick] = useState(false);
	const [isTimeout, setIsTimeout] = useState(false);
	const [timerId, setTimerID] = useState(0);
	
	useEffect(() => {
		const diff = (finishTime - new Date()) / 1000;
		if (diff < 0) {
			setIsTimeout(true);
			return;
		}
		setDiff([
			Math.floor(diff / 86400), // дни
			Math.floor((diff / 3600) % 24),
			Math.floor((diff / 60) % 60),
			Math.floor(diff % 60)
		]);
	}, [tick, finishTime]);
	useEffect(() => {
		if (isTimeout) clearInterval(timerId);
	}, [isTimeout, timerId]);
	useEffect(() => {
		const timerID = setInterval(() => {
			setTick(!tick);
		}, 1000);
		setTimerID(timerID);
		return () => clearInterval(timerID);
	}, [tick]);
	
	return (
		<>
			<div className={styles.wrap}>
				<div className={styles.timeBox}>
					<div className={styles.days}>
						<h3>{diffDays.toString().padStart(2, "0")}</h3>
						<span>days</span>
					</div>
					<div className={styles.hours}>
						<h3>{diffH.toString().padStart(2, "0")}</h3>
						<span>hours</span>
					</div>
					<div className={styles.minutes}>
						<h3>{diffM.toString().padStart(2, "0")}</h3>
						<span>minutes</span>
					</div>
					<div className={styles.seconds}>
						<h3>{diffS.toString().padStart(2, "0")}</h3>
						<span>seconds</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Countdown;