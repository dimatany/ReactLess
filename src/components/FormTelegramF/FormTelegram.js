import React from "react";
import ReactDOM from "react-dom";
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
			<div className={styles.error}>
				{errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}
			</div>
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
			<div className={styles.error}>
				{errors?.lastName && <p>{errors?.lastName?.message || 'Error!'}</p>}
			</div>
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
			<div className={styles.error}>
				{errors?.textMessage && <p>{errors?.textMessage?.message || 'Error!'}</p>}
			</div>
			<input type="submit" disabled={!isValid}/>
		</form>
	);
}

export default FormTelegram;