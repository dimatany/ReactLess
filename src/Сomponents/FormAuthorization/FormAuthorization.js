import React from 'react';
import "react-tabs/style/react-tabs.css";
import styles from './FormAuthorization.module.css'
import SVGUser from '../SVG/SVGUser';
import SVGEmail from '../SVG/SVGEmail';
import SvgPassword from '../SVG/SVGPassword';

function FormAuthorization() {
	return (
		<div className={styles.section}>
			<h6>
				<span>Log In </span>
				<span>Sign Up</span>
			</h6>
			<input className={styles.checkbox}
			       type="checkbox"
			       id="reg-log"
			/>
			<label htmlFor="reg-log"></label>
			<div className={styles.card3dWrap}>
				<div className={styles.card3dWrapper}>
					<div className={styles.cardFront}>
						<div className={styles.centerWrap}>
							<div className={styles.centerWrapBlock}>
								<h4 className={styles.logIn}>Log In</h4>
								<div className={styles.formGroup}>
									<input type="email"
									       className={styles.formStyle}
									       placeholder="Your Email"
									       autoComplete="on"
									/>
									<span className={[styles["inputIcon"], styles['emailIcon']].join(" ")}>
										<SVGEmail fill='#edae3b'/>
									</span>
								</div>
								<div className={styles.formGroup}>
									<input type="text"
									       className={styles.formStyle}
									       placeholder="Your Password"
									/>
									<span className={styles.inputIcon}>
										<SvgPassword fill='#edae3b'/>
									</span>
								</div>
								<button className={[styles["btn"], styles['frontSubmit']].join(" ")}>submit</button>
								<p>
									<a href="https://dimatany.github.io/WorkingExamples/" className={styles.link}>Forgot you password?</a>
								</p>
							</div>
						</div>
					</div>
					<div className={styles.cardBack}>
						<div className={styles.centerWrap}>
							<div className={styles.centerWrapBlock}>
								<h4 className={styles.singUp}>Sign Up</h4>
								<div className={styles.formGroup}>
									<input type="text"
									       className={styles.formStyle}
									       placeholder="Your Full Name"
									       autoComplete="on"
									/>
									<span className={[styles["inputIcon"], styles['backUserIcon']].join(" ")}>
										<SVGUser fill='#4fa19d'/>
									</span>
								</div>
								<div className={styles.formGroup}>
									<input type="email"
									       className={styles.formStyle}
									       placeholder="Your Email"
									       autoComplete="on"
									/>
									<span className={[styles["inputIcon"], styles['emailIcon']].join(" ")}>
										<SVGEmail fill='#4fa19d'/>
									</span>
								</div>
								<div className={styles.formGroup}>
									<input type="text"
									       className={styles.formStyle}
									       placeholder="Your Password"
									/>
									<span className={styles.inputIcon}>
										<SvgPassword fill='#4fa19d'/>
									</span>
								</div>
								<button className={[styles["btn"], styles['backSubmit']].join(" ")}>submit</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FormAuthorization;