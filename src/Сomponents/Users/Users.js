import React from 'react';
import styles from './Users.module.css'
import userPhoto from '../../BLL/img/General/social-avatar.png';
import Headings from '../Headings/Headings';

function Users(props) {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++ ) {
		pages.push(i);
	}
	
	return (
		<section className={styles.wrap}>
			<Headings heading={props.title}/>
			<div className={styles.pagination}>
				{pages.map(el => {
					return (
						<span
							key={el.id}
							className={props.currentPage === el ? styles.active : styles.test}
							onClick={() => {props.onPageChanged(el);}}>{el}
						</span>
					)
				})}
			</div>
			{
				props.users.map(el =>
					<div key={el.id} className={styles.wrapUsers}>
						<div className={styles.introduce}>
							<div className={styles.userPhoto}>
								<img src={el.photos.small !=null ? el.photos.small : userPhoto} alt=""/>
							</div>
							<div className={styles.follow} key={el.id}>
								{el.followed
									?
									<button onClick={() => {props.unfollow(el.id)}}>{props.button2}</button>
									:
									<button onClick={() => {props.follow(el.id)}}>{props.button1}</button>}
							</div>
						</div>
						<div>
							<div>
								<div>{el.name}</div>
								<div>{el.status}</div>
							</div>
							<div>
								<div>{'el.location.country'}</div>
								<div>{'el.location.city'}</div>
							</div>
						</div>
					</div>
				)
			}
		</section>
	);
}

Users.defaultProps = {
	button1: 'підписатись',
	button2: 'відписатись',
	title: 'Стадія розробки...'
};
export default Users;