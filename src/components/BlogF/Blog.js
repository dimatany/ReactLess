import React from 'react';
import styles from './Blog.module.css';
import blogFaq from './BlogFaq';
import Headings from '../HeadingsF/Headings';
import SVGHand from '../SVG/SVGHand';
import Pagination from '../PaginationF/Pagination';

function Blog(props) {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.block}>
					<Headings heading={props.title}/>
					<div className={styles.wrapBlock}>
						{blogFaq.map(el =>
							<div key={el.id} className={styles.card}>
								<div key={el.id} className={[styles['cardSide'], styles['front']].join(" ")}>
									<p className={styles.title}>{el.title}</p>
									<p className={styles.question}>{el.header}</p>
									<div className={styles.handSVG}>
										<SVGHand fill='#191d1c'/>
									</div>
									
								</div>
								<div key={el.id} className={[styles['cardSide'], styles['back']].join(" ")}>
									<p>{el.text}</p>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className={styles.pagination}>
					<Pagination/>
				</div>
				<h3>{props.subtitle}</h3>
			</div>
		</>
	);
}

Blog.defaultProps = {
	title: 'Запитання та відповіді',
	subtitle: 'Можливо, у вас виникли питання?',
};

export default Blog;