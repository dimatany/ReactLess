import React, {useCallback, useState} from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import Map from '../GoogleMapF/Map';
import Autocomplete from '../GoogleMapF/Autocomplete';
import styles from './Contacts.module.css';

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
	lat: 50.4546600,
	lng: 30.5238000,
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
		<>
			<div className={styles.wrapper}>
				<h2>{props.title}</h2>
				<div className={styles.wrapMap}>
					<div className={styles.addressSearchContainer}>
						<Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect}/>
					</div>
					{isLoaded ? <Map center={center}/> : <p>Loading</p>}
				</div>
			</div>
		</>
	);
}

Contacts.defaultProps = {
	title: 'Контакти',
	button: 'Встановити маркери',
};
export default Contacts;
