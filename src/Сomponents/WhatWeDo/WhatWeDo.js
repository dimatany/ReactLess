import React, {useState} from 'react';
import { Link } from "react-router-dom";
import styles from './WhatWeDo.module.css';
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
		</div>
	);
}

WhatWeDo.defaultProps = {
	title: 'Наші послуги',
	label: 'Дізнайтеся більше...',
};
export default WhatWeDo;