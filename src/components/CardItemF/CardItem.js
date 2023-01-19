import React from 'react';
import Modal from '../../components/ModalF/Modal';
import useModal from '../../components/ModalF/useModal';
import styles from '../../components/CardItemF/CardItem.module.css';
import '../../components/ModalF/Modal.module.css';

function CardItem(props) {
	const {isShowing, toggle} = useModal();
	return (
		<>
			<div className={[styles["first"], styles['card']].join(" ")}>
				<div className={styles.frame}>
					<div className={styles.frameName}>{props.post.name}
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