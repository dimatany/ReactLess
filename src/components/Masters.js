import React from 'react';
import styles from './Masters.module.css'

import './Mas1.png';
import './Mas2.png';
import './Mas3.png';
import './Mas4.png';
import './Mas5.png';
import './Mas6.png';


function Masters() {
	return (
		<>
			<div className={styles.block}>
				<h2>Майстри</h2>
				<div className={styles.cardmaster}>
					<div className={[styles["first"], styles['card']].join(" ")}>
						<div className={styles.frame}>
							<p>Анна
								<div className={styles.profession}>
									<span>Перукар</span>
									<button>Приклади</button>
								</div>
							</p>
						</div>
					</div>
					<div className={[styles["second"], styles['card']].join(" ")}>
						<div className={styles.frame}>
							<p>Елена
								<div className={styles.profession}>
									<span>Манікюр</span>
									<button>Приклади</button>
								</div>
							</p>
						</div>
					</div>
					<div className={[styles["third"], styles['card']].join(" ")}>
						<div className={styles.frame}>
							<p>Розанна
								<div className={styles.profession}>
									<span>Педікюр</span>
									<button>Приклади</button>
								</div>
							</p>
						</div>
					</div>
					<div className={[styles["fourth"], styles['card']].join(" ")}>
						<div className={styles.frame}>
							<p>Вера
								<div className={styles.profession}>
									<span>Косметолог</span>
									<button>Приклади</button>
								</div>
							</p>
						</div>
					</div>
					<div className={[styles["fifth"], styles['card']].join(" ")}>
						<div className={styles.frame}>
							<p>Леся
								<div className={styles.profession}>
									<span>Масажист</span>
									<button>Приклади</button>
								</div>
							</p>
						</div>
					</div>
					<div className={[styles["sixth"], styles['card']].join(" ")}>
						<div className={styles.frame}>
							<p>Татьяна
								<div className={styles.profession}>
									<span>Вiзаж</span>
									<button>Приклади</button>
								</div>
							</p>
						</div>
					</div>
				</div>
				<div className={styles.description}>
					<p>Ми раді представити досвідчених, кваліфікованих і креативних художників, які знають абсолютно все про зміну іміджу!
						Тут працює команда салону краси «Фурор» — перукарі, стилісти, майстри манікюру, педикюру, пірсингу, перукарі, косметологи, лікарі та естетики. Вивчіть профілі майстрів, подивіться роботи, сертифікати та відгуки про роботу. Вибирайте фахівця, який ближче вам по духу, настрою і неодмінно відповідає вашим уявленням про професіоналізм.</p>
				</div>
			</div>
		</>
	);
}


export default Masters;