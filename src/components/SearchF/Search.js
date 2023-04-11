import React, { useState } from 'react';

function Search(props) {
	const [searchField, setSearchField] = useState("");
	const handleChange = event => {
		setSearchField(event.target.value);
	};
	const filteredSearchData = props.dataGoods.filter(
		searchData => {
			return (
				searchData.name.toLowerCase().includes(searchField.toLowerCase()) ||
				searchData.type.toLowerCase().includes(searchField.toLowerCase())
			);
		}
	);
	return (
		<section>
			<div>
				<h2>Search your course</h2>
			</div>
			<div>
				<input
					type = "search"
					placeholder = "Search People"
					onChange = {handleChange}
				/>
			</div>
			<div>
				{filteredSearchData.map( searchData =>
					<div>
						<h2>{searchData.name}</h2>
						<p>{searchData.type}</p>
						<p>{searchData.forWhat}</p>
					</div>
				)}
			</div>
		</section>
	);
}

export default Search;