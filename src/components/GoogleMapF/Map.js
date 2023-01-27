import React, {useRef} from 'react';
import {GoogleMap, Marker} from '@react-google-maps/api';
import styles from './Map.module.css'
import Theme from './Theme'

const containerStyle = {
	width: '100%',
	height: '100%'
};

const defaultOptions = {
	panControl: true,
	zoomControl: true,
	mapTypeControl: false,
	scaleControl: false,
	streetViewControl: false,
	rotateControl: false,
	clickableIcons: false,
	keyboardShortcuts: false,
	scrollwheel: false,
	disableDoubleClickZoom: false,
	fullscreenControl: false,
	styles: Theme,
}
function Map({center}) {
	const mapRef = useRef(undefined)
	
	const onLoad = React.useCallback(function callback(map) {
		mapRef.current = map;
	}, [])
	
	const onUnmount = React.useCallback(function callback(map) {
		mapRef.current= undefined;
	}, [])
	
	return (
		<>
			<div className={styles.container}>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={10}
					onLoad={onLoad}
					onUnmount={onUnmount}
					options={defaultOptions}
				>
					<Marker position={center}/>
				</GoogleMap>
			</div>
		</>
	);
}

Map.defaultProps = {
	title: 'Контакти',
};

export default Map;