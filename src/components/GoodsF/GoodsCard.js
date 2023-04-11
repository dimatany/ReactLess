import React from 'react';
import { useState } from "react";
import styles from './GoodsCard.module.css';
import {Link} from 'react-router-dom';
import SVGTrolley from '../SVG/SVGTrolley';

function GoodsCard(props) {
	const [checked, setChecked] = useState(true);
	function handleChange() {
		setChecked(!checked);
	}
	
	////////////////////////////////////////////////////
	const [items, setItems] = useState(props.dataGoods);
	function onSelectChange(event) {
		const sortDirection = event.target.value;
		// создать новый массив и не мутировать состояние
		const copyArray = [...items];
		copyArray.sort((a, b) => {
			return sortDirection === "0" ? a.prise - b.prise : b.prise - a.prise;
		});
		setItems(copyArray);
	}
	
	//////////////////////////////////////////////////для поиска
	const [searchField, setSearchField] = useState("");
	const handleChange2 = event => {
		setSearchField(event.target.value);
	};
	
	const filteredSearchData = props.dataGoods.filter(el => {
			return (
				el.name.toLowerCase().includes(searchField.toLowerCase()) ||
				el.type.toLowerCase().includes(searchField.toLowerCase())
			);
		}
	);
	
	/////////////////////////////////////////////////
	
	return (
		<>
			<form className={styles.form}>
				<fieldset>
					<label className={styles.label}>{props.select}</label>
					<select className={styles.select} onChange={onSelectChange}>
						<option defaultValue={0}>выбери значение</option>
						<option value={0}>ціна за зростанням</option>
						<option value={1}>ціна за спаданням</option>
					</select>
				</fieldset>
				<fieldset>
					<label className={styles.label}>{props.select2}</label>
					<input
						onChange = {handleChange2}
						type = "search"
						placeholder = "Search People"
					/>
				</fieldset>
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
			<div>
				{filteredSearchData.map( el =>
					<div>
						<h2>{el.name}</h2>
						<p>{el.type}</p>
						<p>{el.forWhat}</p>
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
	select2: 'Пошук',
};

export default GoodsCard;