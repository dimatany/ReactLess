import React, {useCallback, useState} from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import Map from '../GoogleMapF/Map';
import Autocomplete from '../GoogleMapF/Autocomplete';
import styles from './Contacts.module.css';
import SVGInstagram from '../SVG/SVGInstagram';
import SvgTelegram from '../SVG/SVGTelegram';
import SvgFacebook from '../SVG/SVGFacebook';
import SvgTelefon from '../SVG/SVGTelefon';
import Descriptions from '../DescriptionsF/Descriptions';
import SVGDivision from '../SVG/SVGDivision';
import Headings from '../HeadingsF/Headings';

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
	lat: 50.387008,
	lng: 30.624215,
};

const libraries = ['places']

function Contacts(props) {
	const [center, setCenter] = useState(defaultCenter);
	
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: API_KEY,
		libraries
	});
	
	const onPlaceSelect = useCallback(
		(coordinates) => {
			setCenter(coordinates)
		},
		[],
	)
	
	
	return (
		<section>
			<div className={styles.wrapper}>
				<Headings heading={props.title}/>
				<div className={styles.wrapBlock}>
					<div className={styles.wrapMap}>
						<div className={styles.addressSearchContainer}>
							<Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect}/>
						</div>
						{isLoaded ? <Map center={center}/> : <p>Loading</p>}
					</div>
					<div className={styles.wrapNetwork}>
						<div className={styles.networkComponent}>
							<a href="https://telegram.me/+Lecz3Fu-4MIwNjI6"
							   target="_blank"
							   rel="noopener noreferrer nofollow"
							   title="telegram">
							   <SvgTelegram fill='#ffffff'/></a>
						</div>
						<div className={styles.networkComponent}>
							<a href="tel:+380670000000">
							   <SvgTelefon fill='#ffffff'/></a>
						</div>
						<div className={styles.networkComponent}>
							<a href="https://www.facebook.com/"
							   target="_blank"
							   rel="noopener noreferrer nofollow"
							   title="facebook">
								<SvgFacebook fill='#ffffff'/></a>
						</div>
						<div className={styles.networkComponent}>
							<a href="https://instagram.com/ideality.beauty.studio?igshid=YmMyMTA2M2Y="
							   target="_blank"
							   rel="noopener noreferrer nofollow"
							   title="instagram">
								<SVGInstagram fill='#ffffff'/>
							</a>
						</div>
					</div>
				</div>
			</div>
			<span className={styles.test}><SVGDivision fill="white"/></span>
			<Descriptions text={props.text}/>
			<span className={styles.test}><SVGDivision fill="white"/></span>
			<Descriptions text={props.text2}/>
		</section>
	);
}

Contacts.defaultProps = {
	title: 'Контакти',
	button: 'Встановити маркери',
	text: 'Якщо ви не знаєте, як знайти салон краси в Соломенку, просто подивіться на список відділень на сайті або зателефонуйте менеджеру, щоб дізнатися, як туди дістатися.',
	text2: 'Ми гарантуємо, що ви отримаєте саме той результат, який ви очікуєте. Всі салони регулярно санітуються і чарівники щеплені - ви можете відвідати їх і не турбуватися про своє здоров\'я.',
};
export default Contacts;
