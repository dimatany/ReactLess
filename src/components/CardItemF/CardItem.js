import React from 'react';
import Modal from '../../components/ModalF/Modal';
import useModal from '../../components/ModalF/useModal';
import styles from '../../components/CardItemF/CardItem.module.css';
import '../../components/ModalF/Modal.module.css';

function CardItem(props) {
	const {isShowing, toggle} = useModal();
	return (
		<>
			<div className={styles.wrap}>
				<div className={styles.wrapCard}>
					<div className={styles.wrapBlock}>
						<img src={props.post.avatar} alt={props.post.alt}/>
						<div className={styles.profession}>
							<span>{props.post.title}</span>
							<button onClick={toggle}>{props.button}</button>
						</div>
					</div>
				</div>
			</div>
			<div className="modalApp">
				<Modal
					isShowing={isShowing}
					hide={toggle}
				/>
			</div>
		</>
	)
}

CardItem.defaultProps = {
	button: 'Приклади',
};

export default CardItem;