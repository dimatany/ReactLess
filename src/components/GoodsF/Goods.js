import { Link } from "react-router-dom";
import dataItems from './DataGoods';
import styles from './Goods.module.css';
import Pagination from '../PaginationF/Pagination';
import React from 'react';

function Goods(props) {
	
	const [checked, setChecked] = React.useState(true);
	
	function handleChange() {
		setChecked(!checked);
	}
	
	return (
		<>
			<div className={styles.block}>
				<h2>{props.title}</h2>
			</div>
			<div className={styles.wrapper}>
				{dataItems.map(el =>
					<div className={styles.container}>
						<div className={styles.productDetails} key={el.id}>
							<h4>{el.name}</h4>
							<div className={styles.wrapBlock}>
								<p>{el.description}</p>
							</div>
							<Link key={el.id} to={el.id}>
								<label htmlFor="button">{props.label}</label>
								<input type="checkbox" checked={checked} onChange={handleChange} />
							</Link>
							<div className={styles.control}>
								<button className={styles.btn}>
									<span className={styles.price}>{el.prise} {props.currency}</span>
									<span className={styles.shoppingCart}>
										<svg width="17px" height="17px" viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
											<g stroke="none" stroke-width="1" fill="none">
												<g transform="translate(1.000000, 0.000000)" fill="white">
													<ellipse cx="4.471" cy="14.478" rx="1.471" ry="1.478" className="si-glyph-fill"></ellipse>
													<circle cx="12.481" cy="14.481" r="1.481" className="si-glyph-fill"></circle>
													<path d="M15.342,11.062 L2.938,11.062 L2.938,3.075 L1.206,0.267 C0.99,-0.018 0.576,-0.081 0.281,0.126 C-0.015,0.335 -0.079,0.735 0.135,1.022 L2.033,3.53 L2.033,11.062 C2.033,11.062 1.062,10.895 1.062,11.479 C1.062,12 1.627,11.948 1.996,11.948 L15.342,11.948 C15.71,11.948 15.951,11.884 15.951,11.535 C15.951,11.186 15.71,11.062 15.342,11.062 L15.342,11.062 Z" className="si-glyph-fill"></path>
													<path d="M6.223,7.5 L6.223,7.5 L6.223,7.459 L6.223,7.5 Z" className="si-glyph-fill"></path>
													<path d="M6.889,9.297 C6.889,9.65 6.61,9.936 6.264,9.936 L4.681,9.936 C4.336,9.936 4.057,9.65 4.057,9.297 L4.057,2.663 C4.057,2.31 4.336,2.024 4.681,2.024 L6.264,2.024 C6.61,2.024 6.889,2.31 6.889,2.663 L6.889,9.297 L6.889,9.297 Z" className="si-glyph-fill"></path>
													<path d="M10.928,9.272 C10.928,9.638 10.646,9.935 10.299,9.935 L8.705,9.935 C8.356,9.935 8.076,9.638 8.076,9.272 L8.076,3.77 C8.076,3.403 8.356,3.106 8.705,3.106 L10.299,3.106 C10.646,3.106 10.928,3.403 10.928,3.77 L10.928,9.272 L10.928,9.272 Z" className="si-glyph-fill"></path>
													<path d="M14.946,9.259 C14.946,9.655 14.661,9.978 14.308,9.978 L12.691,9.978 C12.337,9.978 12.052,9.656 12.052,9.259 L12.052,4.801 C12.052,4.405 12.337,4.084 12.691,4.084 L14.308,4.084 C14.661,4.084 14.946,4.405 14.946,4.801 L14.946,9.259 L14.946,9.259 Z" className="si-glyph-fill"></path>
												</g>
											</g>
										</svg>
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
			<Pagination/>
		</>
	);
}

Goods.defaultProps = {
	title: 'Товари',
	button: 'Купити',
	label: 'Дізнайтеся більше',
	currency: 'грн',
};
export default Goods;