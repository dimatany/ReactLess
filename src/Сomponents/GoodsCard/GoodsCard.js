import React, {useState} from 'react';
import Radium, {StyleRoot} from 'radium';
import {flash} from 'react-animations';
import styles from './GoodsCard.module.css';
import {Link} from 'react-router-dom';
import SVGTrolley from '../SVG/SVGTrolley';
import LikeBtn from '../LikeBtn/LikeBtn';

function GoodsCard({ items, ...props }) {
	const style = {
		flash : {
			animation: 'infinite 5s',
			animationName: Radium.keyframes(flash, 'flash'),
		}
	};
	const [checked, setChecked] = useState(true);
	const onHandleChange = () => {
		setChecked(!checked);
	};
	
	return (
		<>
			{items.map(el =>
				<div className={styles.container} key={el.id}>
					<div className={styles.productDetails} key={el.id}>
						<h4>{el.name}</h4>
						<div className={styles.wrapBlock}>
							<p>{el.description}</p>
						</div>
						<Link key={el.id} to={el.id} className={styles.link}>
							<label htmlFor="button">{props.label}</label>
							<input className={styles.checkbox} checked={checked} onChange={onHandleChange} />
						</Link>
						<div className={styles.control}>
							<button className={styles.btn}>
								<span className={styles.price}>{el.prise} {props.currency}</span>
								<span className={styles.shoppingCart}>
										<SVGTrolley fill='white'/>
									</span>
								<span className={styles.buy}>{props.button}</span>
							</button>
							<StyleRoot>
								<div className={styles.likeBtn} style={style.flash}>
									<LikeBtn/>
								</div>
							</StyleRoot>
						</div>
					</div>
					<div className={styles.productImage}>
						<img key={el.id} src={el.image} alt={el.alt}/>
					</div>
				</div>
			)}
			<span className={styles.supportingBlock}></span>
		</>
	);
}

GoodsCard.defaultProps = {
	button: 'купити',
	label: 'дізнайтеся більше',
	currency: 'грн',
};
export default GoodsCard;