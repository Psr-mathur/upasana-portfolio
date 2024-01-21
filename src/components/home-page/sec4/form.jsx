'use client';
import { useState } from 'react';
// import { InputGroup } from '../../ui/form-input-icon';

import { InputGroup } from '../../ui/form-input';
import { GradientButton } from '../../ui/gradient-button';

const initialState = {
	name: '',
	email: '',
	message: '',
};

export function Form() {
	const [msgState, setMsgState] = useState(initialState);
	const { name, email, message } = msgState;
	const handleChange = (e) => {
		setMsgState({ ...msgState, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(msgState);
		setMsgState(initialState);
	};
	return (
		<form
			className=" max-w-screen-md flex flex-col gap-10 w-full"
			onSubmit={handleSubmit}
		>
			<InputGroup
				label="Name"
				name="name"
				required
				value={name}
				onChange={handleChange}
				inputClass="text-[#f5f5f5]"
				labelClass="text-[lightslategray]"
			/>
			<InputGroup
				label="Email"
				name="email"
				required
				value={email}
				onChange={handleChange}
				inputClass="text-[#f5f5f5]"
				labelClass="text-[lightslategray]"
			/>
			<InputGroup
				label="Message"
				name="message"
				textarea
				value={message}
				onChange={handleChange}
				inputClass="text-[#f5f5f5]"
				labelClass="text-[lightslategray]"
			/>
			<GradientButton
				onClick={handleSubmit}
				label="Send Message"
				gradient="teal_lime"
				className=" bg-[#353535] text-white hover:text-[#353535] w-full font-semibold tracking-wider"
			/>
		</form>
	);
}
