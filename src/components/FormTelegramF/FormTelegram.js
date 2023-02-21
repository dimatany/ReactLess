import React from "react";
import { useForm } from "react-hook-form";
import styles from './FormTelegram.module.css'

function FormTelegram(props) {
	const {
		register,
		formState: {errors, isValid},
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onBlur',
	});
	const onSubmit = (data) => {
		alert(JSON.stringify(data));
		reset();
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
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
							message: 'Это слишком длинное имя',
						},
					})} type="text"/>
			</label>
			<span className={styles.error}>
				{errors?.lastName && <p>{errors?.lastName?.message || 'Error!'}</p>}
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