import React from 'react';
import "react-tabs/style/react-tabs.css";
import './TabForForm.css';
import SVGUser from '../SVG/SVGUser';
import SVGEmail from '../SVG/SVGEmail';
import SvgPassword from '../SVG/SVGPassword';

function TabForForm() {
	return (
		<div className='section'>
			<h6>
				<span>Log In </span>
				<span>Sign Up</span>
			</h6>
			<input className="checkbox"
			       type="checkbox"
			       id="reg-log"
			/>
			<label htmlFor="reg-log"></label>
			<div className='card-3d-wrap'>
				<div className="card-3d-wrapper">
					<div className="card-front">
						<div className="center-wrap">
							<div className="center-wrap-block">
								<h4 className='logIn'>Log In</h4>
								<div className="form-group">
									<input type="email"
									       className="form-style"
									       placeholder="Your Email"
									       autoComplete="on"
									/>
									<span className="input-icon emailIcon">
										<SVGEmail fill='#edae3b'/>
									</span>
								</div>
								<div className="form-group">
									<input type="password"
									       className="form-style"
									       placeholder="Your Password"
									/>
									<span className="input-icon">
										<SvgPassword fill='#edae3b'/>
									</span>
								</div>
								<button className="btn frontSubmit">submit</button>
								<p>
									<a href="#" className="link">Forgot you password?</a>
								</p>
							</div>
						</div>
					</div>
					<div className="card-back">
						<div className="center-wrap">
							<div className="center-wrap-block">
								<h4 className='singUp'>Sign Up</h4>
								<div className="form-group">
									<input type="text"
									       className="form-style"
									       placeholder="Your Full Name"
									       autoComplete="on"
									/>
									<span className="input-icon backUserIcon">
										<SVGUser fill='#4fa19d'/>
									</span>
								</div>
								<div className="form-group">
									<input type="email"
									       className="form-style"
									       placeholder="Your Email"
									       autoComplete="on"
									/>
									<span className="input-icon emailIcon">
										<SVGEmail fill='#4fa19d'/>
									</span>
								</div>
								<div className="form-group">
									<input type="password"
									       className="form-style"
									       placeholder="Your Password"
									/>
									<span className="input-icon">
										<SvgPassword fill='#4fa19d'/>
									</span>
								</div>
								<button className="btn backSubmit">submit</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TabForForm;