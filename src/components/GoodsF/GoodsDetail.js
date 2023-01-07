import { useParams } from 'react-router-dom';
import dataItems from './DataGoods';
import styles from './GoodsDetail.module.css';

const GoodsDetail = () => {
	const params = useParams();
	
	const currentGoods = dataItems.find(
		(el) => el.id === params.goodsDetail
	);
	
	const { name, description } = currentGoods;
	
	return (
		<>
			<div className={styles.test}>
				<h2>{name}</h2>
				<p>{description}</p>
			</div>
		</>
	);
}

export default GoodsDetail;