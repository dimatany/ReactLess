import React, { useState } from "react";
import styles from './GoodsFilter.module.css';
import GoodsCard from '../GoodsCard/GoodsCard';

function GoodsFilter(props) {
	let [items, setItems] = useState(props.dataGoods);
	const onSelectSort = (event) => {
		const sortDirection = (event.target.value);
		// создать новый массив и не мутировать состояние
		const copyArray = [...items];
		copyArray.sort((a, b) => {
			return sortDirection === "0" ? a.prise - b.prise : b.prise - a.prise;
		});
		setItems(copyArray);
	}

	const [searchField, setSearchField] = useState("");
	const onSelectSearch = (event) => {
		setSearchField(event.target.value);
	};
	items = items.filter(el => {
			return (
				el.description.toLowerCase().includes(searchField.toLowerCase()) ||
				el.type.toLowerCase().includes(searchField.toLowerCase())
			);
		}
	);
	
	const [filterTags, setFilterTags] = useState([]);
	const onFilterHandler = (event) => {
		if (event.target.checked) {
			setFilterTags([...filterTags, event.target.value])
		} else {
			setFilterTags(
				filterTags.filter((filterTag) => filterTag !== event.target.value)
			)
		}
	}
	items = items.filter(el =>
		filterTags.length > 0
			? filterTags.every((filterTag) =>
				el.tags.map((tag) => tag.slug).includes(filterTag)
			)
			: props.dataGoods)
	
	return (
		<>
			<form className={styles.form}>
				<div className={styles.formSortSearch}>
					<fieldset className={styles.formSort}>
						<label className={styles.label}>{props.select}</label>
						<select className={styles.selectSort} onChange={onSelectSort}>
							<option defaultValue={0}>{props.optionDefaultValue}</option>
							<option value={0}>{props.optionValue0}</option>
							<option value={1}>{props.optionValue1}</option>
						</select>
					</fieldset>
					<fieldset className={styles.formSearch}>
						<label className={styles.label}>{props.select2}</label>
						<input className={styles.selectSearch}
						       onChange = {onSelectSearch}
						       type = "search"
						       placeholder={props.placeholder}
						/>
					</fieldset>
				</div>
				<div className={styles.formCheckbox}>
					<fieldset className={styles.fieldsetCheckbox}>
						<div className={styles.checkBlockOne}>
							<div>
								<label className={styles.labelCheckbox} htmlFor="price">{props.select4}
									<label className={styles.checkLabel}>
										<input
											type="checkbox"
											onChange={onFilterHandler}
											value="discount"
											id="discount"
										/>
										<span>скидка</span>
									</label>
								</label>
							</div>
							<div>
								<label className={styles.labelCheckbox} htmlFor="cleaning">{props.select5}
									<label className={styles.checkLabel}>
										<input
											type="checkbox"
											onChange={onFilterHandler}
											value="cleaning"
											id="cleaning"
										/>
										<span>очищення</span>
									</label>
									<label className={styles.checkLabel}>
										<input
											type="checkbox"
											onChange={onFilterHandler}
											value="renewal"
											id="renewal"
										/>
										<span>відновлення</span>
									</label>
									<label className={styles.checkLabel}>
										<input
											type="checkbox"
											onChange={onFilterHandler}
											value="moisturizing"
											id="moisturizing"
										/>
										<span>зволоження і живлення</span>
									</label>
									<label className={styles.checkLabel}>
										<input
											type="checkbox"
											onChange={onFilterHandler}
											value="thermalProtection"
											id="thermalProtection"
										/>
										<span>термозахист</span>
									</label>
								</label>
							</div>
						</div>
						<div className={styles.checkBlockTwo}>
							<label className={styles.labelCheckbox} htmlFor="shampoo">{props.select6}
								<label className={styles.checkLabel}>
									<input
										type="checkbox"
										onChange={onFilterHandler}
										value="shampoo"
										id="shampoo"
									/>
									<span>шампунь</span>
								</label>
								<label className={styles.checkLabel}>
									<input
										type="checkbox"
										onChange={onFilterHandler}
										value="filler"
										id="filler"
									/>
									<span>філер</span>
								</label>
								<label className={styles.checkLabel}>
									<input
										type="checkbox"
										onChange={onFilterHandler}
										value="mask"
										id="mask"
									/>
									<span>маска</span>
								</label>
								<label className={styles.checkLabel}>
									<input
										type="checkbox"
										onChange={onFilterHandler}
										value="balm"
										id="balm"
									/>
									<span>бальзам</span>
								</label>
								<label className={styles.checkLabel}>
									<input
										type="checkbox"
										onChange={onFilterHandler}
										value="conditioner"
										id="conditioner"
									/>
									<span>кондиціонер</span>
								</label>
								<label className={styles.checkLabel}>
									<input
										type="checkbox"
										onChange={onFilterHandler}
										value="mist"
										id="mist"
									/>
									<span>міст</span>
								</label>
								<label className={styles.checkLabel}>
									<input
										type="checkbox"
										onChange={onFilterHandler}
										value="protection"
										id="protection"
									/>
									<span>термозахист</span>
								</label>
							</label>
						</div>
					</fieldset>
				</div>
			</form>
			<div className={styles.wrapper}>
				<GoodsCard items={items}/>
			</div>
		</>
	);
}

GoodsFilter.defaultProps = {
	title: 'товари',
	select: 'сортування',
	select2: 'пошук',
	select3: 'фільтр',
	select4: 'ціна',
	select5: 'для чого',
	select6: 'тип товару',
	placeholder: 'пошук по товарам',
	optionDefaultValue: 'виберіть значення',
	optionValue0: 'ціна за зростанням',
	optionValue1: 'ціна за спаданням',
};

export default GoodsFilter;