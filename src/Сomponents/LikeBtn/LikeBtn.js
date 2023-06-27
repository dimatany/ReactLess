import React, { useState } from "react";
import SVGHeart from '../SVG/SVGHeart';

const posts = [
	{ id: 1 },
];

function LikeBtn() {
	const [likes, setLikes] = useState([]);
	const onClickLike = (el) => {
		let index = likes.findIndex((x) => x === el.id);
		if (index >= 0) likes.splice(index, 1);
		else likes.push(el.id);
		setLikes([...likes]);
	};
	return posts.map((el) => (
		<div key={el.id}>
			<button onClick={onClickLike.bind(this, el)}>
				{likes.findIndex((x) => x === el.id) >= 0 ? (
					<div><SVGHeart fill='#FE2E2E'/></div>
				) : (
					<div><SVGHeart fill='#434343'/></div>
				)}
			</button>
		</div>
	));
}

export default LikeBtn;