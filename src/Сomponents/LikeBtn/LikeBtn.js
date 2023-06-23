import React, { useState } from "react";
import SVGHeart from '../SVG/SVGHeart';

const posts = [
	{ id: 1, body: "Item1 " },
];

function LikeBtn() {
	const [likes, setLikes] = useState([]);
	const onClickLike = (item) => {
		let index = likes.findIndex((x) => x === item.id);
		if (index >= 0) likes.splice(index, 1);
		else likes.push(item.id);
		setLikes([...likes]);
	};
	return posts.map((item) => (
		<div key={item.id}>
			<button onClick={onClickLike.bind(this, item)}>
				{likes.findIndex((x) => x === item.id) >= 0 ? (
					<div><SVGHeart fill='#FE2E2E'/></div>
				) : (
					<div><SVGHeart fill='#434343'/></div>
				)}
			</button>
		</div>
	));
}

export default LikeBtn;