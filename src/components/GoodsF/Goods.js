import React from 'react';
import { Link } from "react-router-dom";
import dataItems from './DataGoods';
import styles from './Goods.module.css';
import SVGTrolley from '../SVG/SVGTrolley';
import GoodsFilter from './GoodsFilter';
import Headings from '../HeadingsF/Headings';

function Goods(props) {
	const [checked, setChecked] = React.useState(true);
	function handleChange() {
		setChecked(!checked);
	}
	
	return (
		<>
			<div className={styles.block}>
				<Headings heading={props.title}/>
			</div>
			<GoodsFilter/>
			<div className={styles.wrapper}>
				{dataItems.map(el =>
					<div className={styles.container} key={el.id}>
						<div className={styles.productDetails} key={el.id}>
							<h4>{el.name}</h4>
							<div className={styles.wrapBlock}>
								<p>{el.description}</p>
							</div>
							<Link key={el.id} to={el.id} className={styles.Link}>
								<label htmlFor="button">{props.label}</label>
								<input type="checkbox" checked={checked} onChange={handleChange} />
							</Link>
							<div className={styles.control}>
								<button className={styles.btn}>
									<span className={styles.price}>{el.prise} {props.currency}</span>
									<span className={styles.shoppingCart}>
										<SVGTrolley fill='white'/>
									</span>
									<span className={styles.buy}>{props.button}</span>
								</button>
							</div>
						</div>
						<div className={styles.productImage}>
							<img key={el.id} src={el.image} alt={el.alt}/>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

Goods.defaultProps = {
	title: 'Товари',
	button: 'Купити',
	label: 'дізнайтеся більше',
	currency: 'грн',
};
export default Goods;