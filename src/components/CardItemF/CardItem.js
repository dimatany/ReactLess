import React from 'react';
import styles from '../../components/CardItemF/CardItem.module.css';
import Modal from '../../components/ModalF/Modal';
import useModal from '../../components/ModalF/useModal';
import '../../components/ModalF/Modal.css';

import './CI1.png'
import './CI2.png'
import './CI3.png'
import './CI4.png'
import './CI5.png'
import './CI6.png'
import '../../../src/components/ModalF/MP1.jpg';
import '../../../src/components/ModalF/MP2.jpg';
import '../../../src/components/ModalF/MP3.jpg';
import '../../../src/components/ModalF/MP4.jpg';
import '../../../src/components/ModalF/MP5.jpg';
import '../../../src/components/ModalF/MP6.jpg';
import '../../../src/components/ModalF/MM1.jpg';
import '../../../src/components/ModalF/MM2.jpg';
import '../../../src/components/ModalF/MM3.jpg';
import '../../../src/components/ModalF/MM4.jpg';
import '../../../src/components/ModalF/MM5.jpg';
import '../../../src/components/ModalF/MM6.jpg';
import '../../../src/components/ModalF/MPP1.jpg';
import '../../../src/components/ModalF/MPP2.jpg';
import '../../../src/components/ModalF/MPP3.jpg';
import '../../../src/components/ModalF/MPP4.jpg';
import '../../../src/components/ModalF/MPP5.jpg';
import '../../../src/components/ModalF/MPP6.jpg';
import '../../../src/components/ModalF/MK1.jpg';
import '../../../src/components/ModalF/MK2.jpg';
import '../../../src/components/ModalF/MK3.jpg';
import '../../../src/components/ModalF/MK4.jpg';
import '../../../src/components/ModalF/MK5.jpg';
import '../../../src/components/ModalF/MK6.jpg';
import '../../../src/components/ModalF/MF1.jpg';
import '../../../src/components/ModalF/MF2.jpg';
import '../../../src/components/ModalF/MF3.jpg';
import '../../../src/components/ModalF/MF4.jpg';
import '../../../src/components/ModalF/MF5.jpg';
import '../../../src/components/ModalF/MF6.jpg';
import '../../../src/components/ModalF/MV1.jpg';
import '../../../src/components/ModalF/MV2.jpg';
import '../../../src/components/ModalF/MV3.jpg';
import '../../../src/components/ModalF/MV4.jpg';
import '../../../src/components/ModalF/MV5.jpg';
import '../../../src/components/ModalF/MV6.jpg';

function CardItem(props) {
	const {isShowing, toggle} = useModal();
	return (
		<>
			<div className={[styles["first"], styles['card']].join(" ")}>
				<div className={styles.frame}>
					<p>{props.post.name}
						<div className={styles.profession}>
							<span>{props.post.title}</span>
							<button className="button-default" onClick={toggle}>Приклади<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d="M9 20h-4c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h4c0.552 0 1-0.448 1-1s-0.448-1-1-1zM18.586 11h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5-5c0.092-0.092 0.166-0.202 0.217-0.324 0.15-0.362 0.078-0.795-0.217-1.090l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" fill="red"></path>
							</svg></button>
						</div>
					</p>
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

export default CardItem;