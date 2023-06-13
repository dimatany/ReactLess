import React, {useState} from 'react';
import styles from './WhatWeDo.module.css';
import { Link } from "react-router-dom";
import Headings from '../Headings/Headings';

function WhatWeDo(props) {
	const [checked, setChecked] = useState(true);
	function handleChange() {
		setChecked(!checked);
	}
	return (
		<div className={[styles["services"], styles['wrap']].join(" ")}>
			<Headings heading={props.title}/>
			<div className={styles.card}>
				{props.dataWWD.map(el =>
					<div className={styles.shadow} key={el.id}>
						<img key={el.id} src={el.image} alt={el.alt}/>
						{/*Без `../about/${el.id}` - такой топорной конкатенации не получается загрузить сразу компонент на первой странице из-за того что она индексная - не нашла другого варианта как исправить баг*/}
						<Link to={`../about/${el.id}`} className={styles.link}>
							<label htmlFor="button">{props.label}</label>
							<input className={styles.checkbox}  checked={checked} onChange={handleChange} />
						</Link>
						<p className={styles.wrapDescr}>{el.title}</p>
					</div>
				)}
			</div>
		</div>
	);
}

WhatWeDo.defaultProps = {
	title: 'Наші послуги',
	label: 'Дізнайтеся більше...',
};
export default WhatWeDo;