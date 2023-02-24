import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import styles from './FormTelegram.module.css'

function FormTelegram(props) {
	const form = useRef();
	
	const {
		register,
		formState: {errors, isValid},
		reset,
	} = useForm({
		mode: 'onBlur',
	});
	const sendEmail = (e) => {
		e.preventDefault(); // prevents the page from reloading when you hit “Send”
		
		emailjs.sendForm('service_s8rt1yt', 'template_k49zeit', form.current, 'MMSRppZb4YlpmEjqY')
		.then((result) => {
			alert('Ваше повідомлення успішно доставлено!');
		}, (error) => {
			alert('Помилка - Будь ласка, спробуйте ще раз!');
		});
		reset();
	};
	
	return (
		<form ref={form} onSubmit={sendEmail}>
			<label>Your First Name:
				<input
					{...register('firstName', {
						required: 'Це поле потрібно заповнити!',
						minLength: {
							value: 2,
							message: 'У імені повинно бути щонайменше два символи!',
						},
						maxLength: {
							value: 10,
							message: 'Это слишком длинное имя',
						},
				})} type="text"/>
			</label>
			<span className={styles.error}>
				{errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}
			</span>
			<label>Your Last Name:
				<input
					{...register('lastName', {
						required: 'Це поле потрібно заповнити!',
						minLength: {
							value: 2,
							message: 'У імені повинно бути щонайменше два символи!',
						},
						maxLength: {
							value: 10,
							message: 'Це занадто довге ім\'я',
						},
					})} type="text"/>
			</label>
			<span className={styles.error}>
				{errors?.lastName && <p>{errors?.lastName?.message || 'Error!'}</p>}
			</span>
			<label>Your Email: name@gmail.com
				<input
					{...register('email', {
						required: 'Це поле потрібно заповнити!',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: "Додайте адресу у встановленому форматі!"
						}
					})} type="text"/>
			</label>
			<span className={styles.error}>
				{errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
			</span>
			<label>Your Telefon: 380676742376
				<input
					{...register('telefon', {
						required: 'Це поле потрібно заповнити!',
						minLength: {
							value: 12,
							message: 'Потрібно не менше 12 цифр в позначеному форматі',
						},
						maxLength: {
							value: 12,
							message: 'Потрібно не більше 12 цифр в позначеному форматі',
						},
					})} type="number"/>
			</label>
			<span className={styles.error}>
				{errors?.telefon && <p>{errors?.telefon?.message || 'Error!'}</p>}
			</span>
			<label>Your message:
				<textarea
					{...register('textMessage', {
						required: 'Це поле потрібно заповнити!',
						minLength: {
							value: 10,
							message: 'У зверненні повинно бути щонайменше 10 символів!',
						},
						maxLength: {
							value: 3000,
							message: 'Це занадто довге звернення',
						},
					})}/>
			</label>
			<span className={styles.error}>
				{errors?.textMessage && <p>{errors?.textMessage?.message || 'Error!'}</p>}
			</span>
			<input type="submit" disabled={!isValid} value={props.text}/>
		</form>
	);
}

FormTelegram.defaultProps = {
	text: 'Відправити',
	
};

export default FormTelegram;