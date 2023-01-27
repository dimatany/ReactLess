import React, {useRef} from 'react';
import {GoogleMap} from '@react-google-maps/api';
import styles from './Map.module.css'
import Theme from './Theme'
import SvgLocation from '../SVG/SVGLocation';

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
	scrollwheel: true,
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
				<p className={[styles["text"], styles['containerSignature']].join(" ")}>Наш офіс</p>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={10}
					onLoad={onLoad}
					onUnmount={onUnmount}
					options={defaultOptions}
				>
				</GoogleMap>
				<div className={styles.wrap}>
					<div>
						<SvgLocation fill='#191d1c'/>
					</div>
					<div>
						<p className={[styles["text"], styles['containerAddress']].join(" ")}>Григорій Ващенко 5, Київ, Україна</p>
						<p className={styles.text}>3 этаж 35 кабинет</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Map;