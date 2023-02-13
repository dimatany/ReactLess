import React from 'react';
import styles from './BlogCard.module.css';
import SVGHand from '../SVG/SVGHand';

function BlogCard(props) {
	return (
		<>
			<div className={styles.wrapBlock}>
				<div className={styles.card}>
					<div className={[styles['cardSide'], styles['front']].join(" ")}>
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
		</>
	);
}

export default BlogCard;