import React from 'react';
import './Masters.css';

import './Mas1.png';
import './Mas2.png';
import './Mas3.png';
import './Mas4.png';
import './Mas5.png';
import './Mas6.png';


function Masters() {
	return (
		<>
			<div className='masters-block'>
				<h2>Майстри</h2>
				<div className='masters-card'>
					<div className='card card-first'>
						<div className='frame'>
							<p>Анна
								<div className='profession'>
									<span>Перукар</span>
								</div>
							</p>
						</div>
					</div>
					<div className='card card-second'>
						<div className='frame'>
							<p>Елена
								<div className='profession'>
									<span>Майстер манікюру</span>
								</div>
							</p>
						</div>
					</div>
					<div className='card card-third'>
						<div className='frame'>
							<p>Розанна
								<div className='profession'>
									<span>Майстер педікюру</span>
								</div>
							</p>
						</div>
					</div>
					<div className='card card-fourth'>
						<div className='frame'>
							<p>Вера
								<div className='profession'>
									<span>Косметолог</span>
								</div>
							</p>
						</div>
					</div>
					<div className='card card-fifth'>
						<div className='frame'>
							<p>Леся
								<div className='profession'>
									<span>Естетист з тіла</span>
								</div>
							</p>
						</div>
					</div>
					<div className='card card-sixth'>
						<div className='frame'>
							<p>Татьяна
								<div className='profession'>
									<span>Вiзаж</span>
								</div>
							</p>
						</div>
					</div>
				</div>
				<div className='masters-description'>
					<p>Ми раді представити досвідчених, кваліфікованих і креативних художників, які знають абсолютно все про зміну іміджу!
						Тут працює команда салону краси «Фурор» — перукарі, стилісти, майстри манікюру, педикюру, пірсингу, перукарі, косметологи, лікарі та естетики. Вивчіть профілі майстрів, подивіться роботи, сертифікати та відгуки про роботу. Вибирайте фахівця, який ближче вам по духу, настрою і неодмінно відповідає вашим уявленням про професіоналізм.</p>
				</div>
			</div>
		</>
	);
}

export default Masters;