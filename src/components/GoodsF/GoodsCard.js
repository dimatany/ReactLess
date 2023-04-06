import React from 'react';
import { useState } from "react";
import styles from './GoodsCard.module.css';
import {Link} from 'react-router-dom';
import SVGTrolley from '../SVG/SVGTrolley';

function GoodsCard(props) {
	//нужно разделить логику фильтрации и вывода
	// карточки с линком по разным компонентам
	//лучше сделать это все через store и reducers
	const [checked, setChecked] = useState(true);
	const [items, setItems] = useState(props.dataGoods);
	function handleChange() {
		setChecked(!checked);
	}
	
	function onSelectionChange(e) {
		const sortDirection = e.target.value;
		// создать новый массив и не мутировать состояние
		const copyArray = [...items];
		
		copyArray.sort((a, b) => {
			return sortDirection === "0" ? a.prise - b.prise : b.prise - a.prise;
		});
		setItems(copyArray);
	}
	
	return (
		<>
			<form className={styles.form}>
				<label className={styles.label}>{props.select}</label>
				<select className={styles.select} onChange={onSelectionChange}>
					<option defaultValue={0}>выбери значение</option>
					<option value={0}>ціна за зростанням</option>
					<option value={1}>ціна за спаданням</option>
				</select>
			</form>
			<div className={styles.wrapper}>
				{items.map(el =>
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

GoodsCard.defaultProps = {
	title: 'Товари',
	button: 'Купити',
	label: 'дізнайтеся більше',
	currency: 'грн',
	select: 'Сортування',
};

export default GoodsCard;