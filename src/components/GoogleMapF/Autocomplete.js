import React, {useEffect} from 'react';
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import styles from './Autocomplete.module.css'

function Autocomplete({isLoaded, onSelect}) {
	
	const {
		ready,
		value,
		suggestions: { status, data },
		setValue,
		init,
		clearSuggestions,
	} = usePlacesAutocomplete({
		initOnMount: false,
		debounce: 300,
	});
	const ref = useOnclickOutside(() => {
		clearSuggestions();
	});
	
	const handleInput = (e) => {
		setValue(e.target.value);
	};
	
	const handleSelect =
		({ description }) =>
			() => {
				setValue(description, false);
				clearSuggestions();
				console.log(description);
				getGeocode({ address: description })
				.then((results) => {
					const { lat, lng } = getLatLng(results[0]);
					console.log("📍 Coordinates: ", { lat, lng });
					onSelect({ lat, lng })
				});
			};
	
	const renderSuggestions = () =>
		data.map((suggestion) => {
			const {
				place_id,
				structured_formatting: { main_text, secondary_text },
			} = suggestion;
			
			return (
				<li className={styles.listItem} key={place_id} onClick={handleSelect(suggestion)}>
					<strong>{main_text}</strong> <small>{secondary_text}</small>
				</li>
			);
		});
	
	useEffect(() => {
		if (isLoaded) {
			init()
		}
	}, [isLoaded, init])
	
	
	return (
		<>
			<div className={styles.wrap} ref={ref}>
				<input
					className={styles.input}
					type="text"
					value={value}
					onChange={handleInput}
					disabled={!ready}
					placeholder="Куди потрібно йти?"/>
				{status === "OK" && <ul className={styles.suggestion}>{renderSuggestions()}</ul>}
			</div>
		</>
	);
}

export default Autocomplete;