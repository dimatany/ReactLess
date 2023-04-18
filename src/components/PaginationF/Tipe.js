import React, {useState} from 'react';
import styles from '../GoodsF/GoodsCard.module.css';
import SVGHand from '../SVG/SVGHand';

function Tipe(props) {
	const [items, setItems] = useState(props.dataBlog.slice(0, 100));
	return (
		<>
			{items.map(el=>
					<div className={styles.wrapBlock} key={el.id}>
						<div className={styles.card}>
			<div className={[styles['cardSide'], styles['front']].join(" ")} key={el.id}>
				<p className={styles.title}>{el.title}</p>
				<p className={styles.question}>{el.header}</p>
				<div className={styles.handSVG}>
					<SVGHand fill='#191d1c'/>
				</div>
			</div>
			<div className={[styles['cardSide'], styles['back']].join(" ")}>
				<p>{el.text}</p>
			</div>
		</div>
		</div>
			)}
		</>
	);
}

export default Tipe;