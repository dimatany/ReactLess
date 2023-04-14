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
	
	////////////////////////////////
	let [items, setItems] = useState(props.dataGoods);
	function onSelectSort(event) {
		const sortDirection = event.target.value;
		// создать новый массив и не мутировать состояние
		const copyArray = [...items];
		copyArray.sort((a, b) => {
			return sortDirection === "0" ? a.prise - b.prise : b.prise - a.prise;
		});
		setItems(copyArray);
	}
	/////////////////////////////////////
	
	const [searchField, setSearchField] = useState("");
	const onSelectSearch = event => {
		setSearchField(event.target.value);
	};
	items = items.filter(el => {
			return (
				el.description.toLowerCase().includes(searchField.toLowerCase()) ||
				el.type.toLowerCase().includes(searchField.toLowerCase())
			);
		}
	);
	//////////////////////////////////////
	const [filterTags, setFilterTags] = useState([]);
	items = items.filter(el =>
		filterTags.length > 0
			? filterTags.every((filterTag) =>
				el.tags.map((tag) => tag.slug).includes(filterTag)
			)
			: props.dataGoods
	)
	const filterHandler = (event) => {
		if (event.target.checked) {
			setFilterTags([...filterTags, event.target.value])
		} else {
			setFilterTags(
				filterTags.filter((filterTag) => filterTag !== event.target.value)
			)
		}
	}
	/////////////////////////////////////
	
	return (
		<>
			<form className={styles.form}>
				<fieldset>
					<label className={styles.label}>{props.select}</label>
					<select className={styles.selectSort} onChange={onSelectSort}>
						<option defaultValue={0}>{props.optionDefaultValue}</option>
						<option value={0}>{props.optionValue0}</option>
						<option value={1}>{props.optionValue1}</option>
					</select>
				</fieldset>
				<fieldset>
					<label className={styles.label}>{props.select2}</label>
					<input className={styles.selectSearch}
						onChange = {onSelectSearch}
						type = "search"
						placeholder={props.placeholder}
					/>
				</fieldset>
			</form>
			<form>
				<fieldset>
					<label htmlFor="price">Цена
						<input
							type="checkbox"
							onChange={filterHandler}
							value="discount"
							id="discount"
						/>
						<span>скидка</span>
					</label>
					<label htmlFor="cleaning">Для чого
						<input
							type="checkbox"
							onChange={filterHandler}
							value="cleaning"
							id="cleaning"
						/>
						<span>очищення</span>
						<input
							type="checkbox"
							onChange={filterHandler}
							value="renewal"
							id="renewal"
						/>
						<span>відновлення</span>
						<input
							type="checkbox"
							onChange={filterHandler}
							value="moisturizing"
							id="moisturizing"
						/>
						<span>зволоження і живлення</span>
						<input
							type="checkbox"
							onChange={filterHandler}
							value="thermalProtection"
							id="thermalProtection"
						/>
						<span>термозахист</span>
					</label>
					<label htmlFor="shampoo">Тип товару
						<input
							type="checkbox"
							onChange={filterHandler}
							value="shampoo"
							id="shampoo"
						/>
						<span>шампунь</span>
						<input
							type="checkbox"
							onChange={filterHandler}
							value="filler"
							id="filler"
						/>
						<span>філер</span>
						<input
							type="checkbox"
							onChange={filterHandler}
							value="mask"
							id="mask"
						/>
						<span>маска</span>
						<input
							type="checkbox"
							onChange={filterHandler}
							value="balm"
							id="balm"
						/>
						<span>бальзам</span>
						<input
							type="checkbox"
							onChange={filterHandler}
							value="conditioner"
							id="conditioner"
						/>
						<span>кондиціонер</span>
						<input
							type="checkbox"
							onChange={filterHandler}
							value="mist"
							id="mist"
						/>
						<span>міст</span>
						<input
							type="checkbox"
							onChange={filterHandler}
							value="protection"
							id="protection"
						/>
						<span>термозахист</span>
					</label>
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
								<input className={styles.checkbox} checked={checked} onChange={handleChange} />
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
	title: 'товари',
	button: 'купити',
	label: 'дізнайтеся більше',
	currency: 'грн',
	select: 'сортування',
	select2: 'пошук',
	select3: 'фільтр',
	placeholder: 'пошук по товарам',
	optionDefaultValue: 'виберіть значення',
	optionValue0: 'ціна за зростанням',
	optionValue1: 'ціна за спаданням',
};

export default GoodsCard;