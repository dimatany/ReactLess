import React from 'react';
import styles from './Goods.module.css';
import Pagination from '../PaginationF/Pagination';


function Goods(props) {
	const carts = [
		{
			id:1,
			title: 'Безсульфатний шампунь з кератином, 150 мл',
			description: 'https://isei.ua/ua/lador-keratin-lpp-keratinoviq-bezsulfatniy-shampun-150ml',
			prise: 250,
			image: require("./1g.jpg"),
			alt: 'is top image',
		},
		{
			id:2,
			title: 'Шампунь для сухого і нормального волосся безсульфатний, 530 мл',
			description: 'https://isei.ua/ua/lador-keratin-lpp-keratinovoye-bezsulfatny-shampun-530-ml',
			prise: 200,
			image: require("./2g.jpg"),
			alt: 'is top image',
		},
		{
			id:3,
			title: 'Філер для волосся відновлюючий, 4*13 мл',
			description: 'https://isei.ua/ua/filler-dlya-volos-vosstanavlivayushchij-413-ml-7905',
			prise: 129,
			image: require("./3g.jpg"),
			alt: 'is top image',
		},
		{
			id:4,
			title: 'Філер для волосся відновлюючий, 13 мл',
			description: 'https://isei.ua/ua/lador-perfect-hair-fill-upfiler-dlya-volos-13-ml',
			prise: 80,
			image: require("./4g.jpg"),
			alt: 'is top image',
		},
		{
			id:5,
			title: 'Шампунь з амінокислотами, 400 мл',
			description: 'https://isei.ua/ua/shampun-dlya-volos-400-ml-7006',
			prise: 590,
			image: require("./5g.jpg"),
			alt: 'is top image',
		},
		{
			id:6,
			title: 'Шампунь для волосся на основі трав\'яних екстрактів, 150 мл',
			description: 'https://isei.ua/ua/shampun-dlya-volos-na-osnove-travyanyh-ehkstraktov-150-ml-7005',
			prise: 305,
			image: require("./6g.jpg"),
			alt: 'is top image',
		},
		{
			id:7,
			title: 'Маска для волосся на основі трав\'яних екстрактів, 360 мл',
			description: 'https://isei.ua/ua/maska-dlya-volos-na-osnove-travyanyh-ehkstraktov-360-ml-7008',
			prise: 800,
			image: require("./7g.jpg"),
			alt: 'is top image',
		},
		{
			id:8,
			title: 'Маска для волосся на основі трав\'яних екстрактів, 150 мл',
			description: 'https://isei.ua/ua/maska-dlya-volos-na-osnove-travyanyh-ehkstraktov-150-ml-7007',
			prise: 365,
			image: require("./8g.jpg"),
			alt: 'is top image',
		},
		{
			id: 9,
			title: 'Бальзам для пошкодженого волосся з протеїнами шовку, 200 мл',
			description: 'https://isei.ua/ua/lador-wonder-balzam-dlya-silno-povrezhdennykh-volos-200-ml',
			prise: 660,
			image: require("./9g.jpg"),
			alt: 'is top image',
		},
		{
			id: 10,
			title: 'Бальзам-маска для волосся з протеїнами шовку, 250 мл',
			description: 'https://isei.ua/ua/lador-wonder-tear-balzam-maska-dlya-uvlazhneniya-250-ml',
			prise: 720,
			image: require("./10g.jpg"),
			alt: 'is top image',
		},
		{
			id: 11,
			title: 'Шампунь проти випадіння з ментолом для всіх типів волосся, 530 мл',
			description: 'https://isei.ua/ua/lador-dermatical-hair-loss-shampun-530-ml',
			prise: 845,
			image: require("./11g.jpg"),
			alt: 'is top image',
		},
		{
			id: 12,
			title: 'Кондиціонер для сухого та пошкодженого волосся зволожуючий без силіконів, 530 мл',
			description: 'https://isei.ua/ua/lador-balansing-kondicioner-dlya-volos-530-ml-4343',
			prise: 549,
			image: require("./12g.jpg"),
			alt: 'is top image',
		},
		{
			id: 13,
			title: 'Шампунь для сухого волосся органічний безсульфатний, 530 мл',
			description: 'https://isei.ua/ua/lador-triplex-natural-bezsulfatnyy-shampun-530-ml',
			prise: 710,
			image: require("./13g.jpg"),
			alt: 'is top image',
		},
		{
			id: 14,
			title: 'Маска для екстра-відновлення пошкодженого волосся колагенова, 150 мл',
			description: 'https://isei.ua/ua/lador-keratin-lpp-keratinovoye-maska-d-volos-150-ml',
			prise: 249,
			image: require("./14g.jpg"),
			alt: 'is top image',
		},
		{
			id: 15,
			title: 'Шампунь для сухого і пошкодженого волосся зволожуючий без силіконів, 530 мл',
			description: 'https://isei.ua/ua/lador-balansing-shampun-dlya-volos-530-ml-4342',
			prise: 576,
			image: require("./15g.jpg"),
			alt: 'is top image',
		},
		{
			id: 16,
			title: 'Шампунь для сухого і пошкодженого волосся безлужний, 900 мл',
			description: 'https://isei.ua/ua/lador-damage-protector-acid-shampun-900-ml',
			prise: 49,
			image: require("./16g.jpg"),
			alt: 'is top image',
		},
		{
			id: 17,
			title: 'Шампунь для тонкого і пошкодженого волосся органічний безсульфатний, 150 мл',
			description: 'https://isei.ua/ua/lador-triplex-natural-bezsulfatnyy-shampun-150-ml',
			prise: 245,
			image: require("./17g.jpg"),
			alt: 'is top image',
		},
		{
			id: 18,
			title: 'Міст для волосся для зміцнення і захисту, 100 мл',
			description: 'https://isei.ua/ua/lador-wonder-pic-most-dlya-ukrepleniya-i-zashchity-volos-100-ml',
			prise: 480,
			image: require("./18g.jpg"),
			alt: 'is top image',
		},
		{
			id: 19,
			title: 'Філер для волосся відновлюючий, 150 мл',
			description: 'https://isei.ua/ua/lador-perfect-hair-fill-up-filler-dlya-volos-150-ml-4346',
			prise: 480,
			image: require("./19g.jpg"),
			alt: 'is top image',
		},
		{
			id: 20,
			title: 'Шампунь проти лупи, 530 мл',
			description: 'https://isei.ua/ua/lador-anti-dandruff-shampun-dlya-volos-530-ml-4341',
			prise: 570,
			image: require("./20g.jpg"),
			alt: 'is top image',
		},
		{
			id: 21,
			title: 'Набір філерів з кератином',
			description: 'https://isei.ua/ua/nabor-fillerov-s-keratinom-9227',
			prise: 679,
			image: require("./21g.jpg"),
			alt: 'is top image',
		},
		{
			id: 22,
			title: 'Термозахисний спрей для укладки волосся, 100 мл',
			description: 'https://isei.ua/ua/termozashchitnyj-sprej-dlya-ukladki-volos-100-ml-7011',
			prise: 489,
			image: require("./22g.jpg"),
			alt: 'is top image',
		},
		{
			id: 23,
			title: 'Шампунь для волосся зволожуючий, 600 мл',
			description: 'https://isei.ua/ua/shampun-dlya-volos-uvlazhnyayushchij-600-ml-7151',
			prise: 635,
			image: require("./23g.jpg"),
			alt: 'is top image',
		},
		{
			id: 24,
			title: 'Безсульфатний шампунь з кератином, 150 мл',
			description: 'https://isei.ua/ua/lador-keratin-lpp-keratinoviq-bezsulfatniy-shampun-150ml',
			prise: 249,
			image: require("./24g.jpg"),
			alt: 'is top image',
		},
	];
	return (
		<>
			<div className={styles.block}>
				<h2>{props.title}</h2>
			</div>
			<div className={styles.wrap}>
				{carts.map(el =>
					<div className={styles.container}>
						<div className={styles.productDetails} key={el.id}>
							<h4>{el.title}</h4>
							<p>{el.description}</p>
							<button className={styles.more}>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path d="M22,3H5A2,2 0 0,0 3,5V9H5V5H22V19H5V15H3V19A2,2 0 0,0 5,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M7,15V13H0V11H7V9L11,12L7,15M20,13H13V11H20V13M20,9H13V7H20V9M17,17H13V15H17V17Z" />
								</svg>
							</button>
							<div className={styles.control}>
								<button className={styles.btn}>
									<span className={styles.price}>{el.prise} {props.currency}</span>
									<span className={styles.shoppingCart}>
										<svg width="17px" height="17px" viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
											<g stroke="none" stroke-width="1" fill="none">
												<g transform="translate(1.000000, 0.000000)" fill="white">
													<ellipse cx="4.471" cy="14.478" rx="1.471" ry="1.478" className="si-glyph-fill"></ellipse>
													<circle cx="12.481" cy="14.481" r="1.481" className="si-glyph-fill"></circle>
													<path d="M15.342,11.062 L2.938,11.062 L2.938,3.075 L1.206,0.267 C0.99,-0.018 0.576,-0.081 0.281,0.126 C-0.015,0.335 -0.079,0.735 0.135,1.022 L2.033,3.53 L2.033,11.062 C2.033,11.062 1.062,10.895 1.062,11.479 C1.062,12 1.627,11.948 1.996,11.948 L15.342,11.948 C15.71,11.948 15.951,11.884 15.951,11.535 C15.951,11.186 15.71,11.062 15.342,11.062 L15.342,11.062 Z" className="si-glyph-fill"></path>
													<path d="M6.223,7.5 L6.223,7.5 L6.223,7.459 L6.223,7.5 Z" className="si-glyph-fill"></path>
													<path d="M6.889,9.297 C6.889,9.65 6.61,9.936 6.264,9.936 L4.681,9.936 C4.336,9.936 4.057,9.65 4.057,9.297 L4.057,2.663 C4.057,2.31 4.336,2.024 4.681,2.024 L6.264,2.024 C6.61,2.024 6.889,2.31 6.889,2.663 L6.889,9.297 L6.889,9.297 Z" className="si-glyph-fill"></path>
													<path d="M10.928,9.272 C10.928,9.638 10.646,9.935 10.299,9.935 L8.705,9.935 C8.356,9.935 8.076,9.638 8.076,9.272 L8.076,3.77 C8.076,3.403 8.356,3.106 8.705,3.106 L10.299,3.106 C10.646,3.106 10.928,3.403 10.928,3.77 L10.928,9.272 L10.928,9.272 Z" className="si-glyph-fill"></path>
													<path d="M14.946,9.259 C14.946,9.655 14.661,9.978 14.308,9.978 L12.691,9.978 C12.337,9.978 12.052,9.656 12.052,9.259 L12.052,4.801 C12.052,4.405 12.337,4.084 12.691,4.084 L14.308,4.084 C14.661,4.084 14.946,4.405 14.946,4.801 L14.946,9.259 L14.946,9.259 Z" className="si-glyph-fill"></path>
												</g>
											</g>
										</svg>
									</span>
									<span className={styles.buy}>{props.button}</span>
								</button>
							</div>
						</div>
						<div className={styles.productImage}>
							<img key={el.id} src={el.image} alt={el.alt}/>
						</div>
					</div>
				)}
			</div>
			<Pagination/>
		</>
	);
}

Goods.defaultProps = {
	title: 'Товары',
	button: 'Купить',
	currency: 'грн',
	
};
export default Goods;