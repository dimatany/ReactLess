import React from 'react';
import styles from './WhatWeDo.module.css'

function WhatWeDo(props) {
	const posts = [
		{id:1, title: 'Перукарські послуги', image: require("./ab1.png"), alt: 'is top image', },
		{id:2, title: 'Манікюр', image: require("./ab2.png"), alt: 'is top image',},
		{id:3, title: 'Педикюр', image: require("./ab3.png"), alt: 'is top image', },
		{id:4, title: 'Косметологія', image: require("./ab4.png"), alt: 'is top image', },
		{id:5, title: 'Естет із тіла', image: require("./ab5.png"), alt: 'is top image',},
		{id:6, title: 'Візаж', image: require("./ab6.png"), alt: 'is top image',},
	];
	
	return (
		<div className={[styles["services"], styles['wrap']].join(" ")}>
			<h2>{props.title}</h2>
			<div className={styles.card}>
				{posts.map(el =>
					<div className={styles.shadow} key={el.id}>
						<img key={el.id} src={el.image} alt={el.alt}/>
						<span>{el.title}</span>
					</div>)}
			</div>
		</div>
	);
}

WhatWeDo.defaultProps = {
	title: 'Наші послуги',
};
export default WhatWeDo;