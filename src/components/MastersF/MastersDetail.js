import React from 'react';
import { useParams } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundaryC/ErrorBoundary';
import styles from '../MastersF/MasterDetail.module.css';
import Headings from '../HeadingsF/Headings';
import DetailPost from './DetailPost';

function MastersDetail(props) {
	const params = useParams();
	
	const currentMD = props.dataMasters.find(
		(el) => el.id === params.mastersDetail
	);
	
	const {altImage, image1, image2, image3, image4, image5, image6, subTitle1, subTitle2, subTitle3, subTitle4, subTitle5, subTitle6, text1, text2, text3, text4, text5, text6} = currentMD;
	
	return (
		<div className={styles.wrap}>
			<Headings heading={props.title}/>
			<ErrorBoundary>
				<DetailPost subTitle={subTitle1} image={image1} alt={altImage} text={text1}/>
				<DetailPost subTitle={subTitle2} image={image2} alt={altImage} text={text2}/>
				<DetailPost subTitle={subTitle3} image={image3} alt={altImage} text={text3}/>
				<DetailPost subTitle={subTitle4} image={image4} alt={altImage} text={text4}/>
				<DetailPost subTitle={subTitle5} image={image5} alt={altImage} text={text5}/>
				<DetailPost subTitle={subTitle6} image={image6} alt={altImage} text={text6}/>
			</ErrorBoundary>
		</div>
	);
}

MastersDetail.defaultProps = {
	title: 'Варіанти',
};
export default MastersDetail;