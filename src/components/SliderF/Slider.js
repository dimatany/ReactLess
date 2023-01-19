import React, {useEffect, useState} from 'react';
import styles from './Slider.module.css';

import MP1 from './MP1.jpg';
import MP2 from './MP2.jpg';
import MP3 from './MP3.jpg';
import MP4 from './MP4.jpg';
import MP5 from './MP5.jpg';
import MP6 from './MP6.jpg';
import MM1 from './MM1.jpg';
import MM2 from './MM2.jpg';
import MM3 from './MM3.jpg';
import MM4 from './MM4.jpg';
import MM5 from './MM5.jpg';
import MM6 from './MM6.jpg';
import MPP1 from './MPP1.jpg';
import MPP2 from './MPP2.jpg';
import MPP3 from './MPP3.jpg';
import MPP4 from './MPP4.jpg';
import MPP5 from './MPP5.jpg';
import MPP6 from './MPP6.jpg';
import MK1 from './MK1.jpg';
import MK2 from './MK2.jpg';
import MK3 from './MK3.jpg';
import MK4 from './MK4.jpg';
import MK5 from './MK5.jpg';
import MK6 from './MK6.jpg';
import MF1 from './MF1.jpg';
import MF2 from './MF2.jpg';
import MF3 from './MF3.jpg';
import MF4 from './MF4.jpg';
import MF5 from './MF5.jpg';
import MF6 from './MF6.jpg';
import MV1 from './MV1.jpg';
import MV2 from './MV2.jpg';
import MV3 from './MV3.jpg';
import MV4 from './MV4.jpg';
import MV5 from './MV5.jpg';
import MV6 from './MV6.jpg';

const img1 = [
	<img key={MP1} src={MP1}  alt={"example of work"}/>,
	<img key={MP2} src={MP2}  alt={"example of work"}/>,
	<img key={MP3} src={MP3}  alt={"example of work"}/>,
	<img key={MP4} src={MP4}  alt={"example of work"}/>,
	<img key={MP5} src={MP5}  alt={"example of work"}/>,
	<img key={MP6} src={MP6}  alt={"example of work"}/>,
];
const img2 = [
	<img key={MM1} src={MM1}  alt={"example of work"}/>,
	<img key={MM2} src={MM2}  alt={"example of work"}/>,
	<img key={MM3} src={MM3}  alt={"example of work"}/>,
	<img key={MM4} src={MM4}  alt={"example of work"}/>,
	<img key={MM5} src={MM5}  alt={"example of work"}/>,
	<img key={MM6} src={MM6}  alt={"example of work"}/>,
];
const img3 = [
	<img key={MPP1} src={MPP1}  alt={"example of work"}/>,
	<img key={MPP2} src={MPP2}  alt={"example of work"}/>,
	<img key={MPP3} src={MPP3}  alt={"example of work"}/>,
	<img key={MPP4} src={MPP4}  alt={"example of work"}/>,
	<img key={MPP5} src={MPP5}  alt={"example of work"}/>,
	<img key={MPP6} src={MPP6}  alt={"example of work"}/>,
];
const img4 = [
	<img key={MK1} src={MK1}  alt={"example of work"}/>,
	<img key={MK2} src={MK2}  alt={"example of work"}/>,
	<img key={MK3} src={MK3}  alt={"example of work"}/>,
	<img key={MK4} src={MK4}  alt={"example of work"}/>,
	<img key={MK5} src={MK5}  alt={"example of work"}/>,
	<img key={MK6} src={MK6}  alt={"example of work"}/>,
];
const img5 = [
	<img key={MF1} src={MF1}  alt={"example of work"}/>,
	<img key={MF2} src={MF2}  alt={"example of work"}/>,
	<img key={MF3} src={MF3}  alt={"example of work"}/>,
	<img key={MF4} src={MF4}  alt={"example of work"}/>,
	<img key={MF5} src={MF5}  alt={"example of work"}/>,
	<img key={MF6} src={MF6}  alt={"example of work"}/>,
];
const img6 = [
	<img key={MV1} src={MV1}  alt={"example of work"}/>,
	<img key={MV2} src={MV2}  alt={"example of work"}/>,
	<img key={MV3} src={MV3}  alt={"example of work"}/>,
	<img key={MV4} src={MV4}  alt={"example of work"}/>,
	<img key={MV5} src={MV5}  alt={"example of work"}/>,
	<img key={MV6} src={MV6}  alt={"example of work"}/>,
];


function Slider(props) {
	// Индекс текущего слайда
	const [activeIndex, setActiveIndex] = useState(0);
	// Хук Effect
	useEffect(() => {
		// Запускаем интервал
		const interval = setInterval(() => {
			// Меняем состояние
			setActiveIndex((current) => {
				// Вычисляем индекс следующего слайда, который должен вывестись
				// Возврат индекса
				return current === img1.length - 1 ? 0 : current + 1
			})
		}, 2000)
		// Выключаем интервал
		return () => clearInterval()
	}, [])
	
	return (
		<>
			<div className={styles.slider}>
				<div className={styles.sliderImg}
				     key={activeIndex}>
					{img1[activeIndex]}
				</div>
			</div>
		</>
	);
}

export default Slider;













