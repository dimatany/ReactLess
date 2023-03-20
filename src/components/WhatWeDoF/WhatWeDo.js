import React from 'react';
import { Link } from "react-router-dom";
import data from '../../BLL/Data';
import styles from './WhatWeDo.module.css';
import Headings from '../HeadingsF/Headings';

function WhatWeDo(props) {
	const [checked, setChecked] = React.useState(true);
	function handleChange() {
		setChecked(!checked);
	}
	
	return (
		<section className={[styles["services"], styles['wrap']].join(" ")}>
			<Headings heading={props.title}/>
			<div className={styles.card}>
				{data.dataWWD.map(el =>
					<div className={styles.shadow} key={el.id}>
						<img key={el.id} src={el.image} alt={el.alt}/>
						<span>
							<Link key={el.id} to={el.id}>
								<label htmlFor="button">{props.label}</label>
								<input type="checkbox" checked={checked} onChange={handleChange} />
							</Link>
						</span>
						<p className={styles.wrapDescr}>{el.title}</p>
					</div>
				)}
			</div>
		</section>
	);
}

WhatWeDo.defaultProps = {
	title: 'Наші послуги',
	label: 'Дізнайтеся більше...',
};
export default WhatWeDo;