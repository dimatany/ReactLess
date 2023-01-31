import React from 'react';
import { useParams } from 'react-router-dom';
import dataMasters from './DataMasters'
import styles from '../../components/MastersF/MasterDetail.module.css';

function MastersDetail(props) {
	const params = useParams();
	
	const currentMD = dataMasters.find(
		(el) => el.id === params.mastersDetail
	);
	
	const {altImage, image1, image2, image3, image4, image5, image6, subTitle1, subTitle2, subTitle3, subTitle4, subTitle5, subTitle6, text1, text2, text3, text4, text5, text6} = currentMD;
	
	return (
		<div className={styles.wrap}>
				<div className={styles.wrapBlock}>
					<h4 className={styles.wrapTitle}>{subTitle1}</h4>
					<div className={styles.wrapDescription}>
						<div className={styles.descriptionImg}>
							<img src={image1} alt={altImage}/>
						</div>
						<div className={styles.descriptionText}>
							<p>{text1}</p>
						</div>
					</div>
				</div>
				<div className={styles.wrapBlock}>
					<h4 className={styles.wrapTitle}>{subTitle2}</h4>
					<div className={styles.wrapDescription}>
						<div className={styles.descriptionImg}>
							<img src={image2} alt={altImage}/>
						</div>
						<div className={styles.descriptionText}>
							<p>{text2}</p>
						</div>
					</div>
				</div>
				<div className={styles.wrapBlock}>
					<h4 className={styles.wrapTitle}>{subTitle3}</h4>
					<div className={styles.wrapDescription}>
						<div className={styles.descriptionImg}>
							<img src={image3} alt={altImage}/>
						</div>
						<div className={styles.descriptionText}>
							<p>{text3}</p>
						</div>
					</div>
				</div>
				<div className={styles.wrapBlock}>
					<h4 className={styles.wrapTitle}>{subTitle4}</h4>
					<div className={styles.wrapDescription}>
						<div className={styles.descriptionImg}>
							<img src={image4} alt={altImage}/>
						</div>
						<div className={styles.descriptionText}>
							<p>{text4}</p>
						</div>
					</div>
				</div>
				<div className={styles.wrapBlock}>
					<h4 className={styles.wrapTitle}>{subTitle5}</h4>
					<div className={styles.wrapDescription}>
						<div className={styles.descriptionImg}>
							<img src={image5} alt={altImage}/>
						</div>
						<div className={styles.descriptionText}>
							<p>{text5}</p>
						</div>
					</div>
				</div>
				<div className={styles.wrapBlock}>
					<h4 className={styles.wrapTitle}>{subTitle6}</h4>
					<div className={styles.wrapDescription}>
						<div className={styles.descriptionImg}>
							<img src={image6} alt={altImage}/>
						</div>
						<div className={styles.descriptionText}>
							<p>{text6}</p>
						</div>
					</div>
				</div>
			</div>
	);
}

MastersDetail.defaultProps = {
	currency: 'грн',
	text: '',
	text2: '',
};
export default MastersDetail;