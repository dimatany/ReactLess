import React from 'react';
import styles from './WhatWeDo.module.css'
function WhatWeDo(props) {
	const posts = [
		{id:1, title: 'Перукарські послуги', uri: require("./ab1.png"), alt: 'is top image', },
		{id:2, title: 'Манікюр', uri: require("./ab2.png"), alt: 'is top image',},
		{id:3, title: 'Педикюр', uri: require("./ab3.png"), alt: 'is top image', },
		{id:4, title: 'Косметологія', uri: require("./ab4.png"), alt: 'is top image', },
		{id:5, title: 'Естет із тіла', uri: require("./ab5.png"), alt: 'is top image',},
		{id:6, title: 'Візаж', uri: require("./ab6.png"), alt: 'is top image',},
	];
	
	return (
		<div className={[styles["services"], styles['wrap']].join(" ")}>
			<h2>Наші послуги</h2>
			<div className={styles.card}>
				{posts.map(el =>
					<div className={styles.shadow} key={el.id}>
						<img key={el.id} src={el.uri} alt={el.alt}/>
						<span>{el.title}</span>
					</div>)}
			</div>
		</div>
	);
}
export default WhatWeDo;