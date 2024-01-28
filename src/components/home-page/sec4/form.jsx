'use client';
import { useState } from 'react';

import { InputGroup } from '../../ui/form-input';
import { GradientSubmitButton } from '../../ui/gradient-button';
import { SendEmail } from './actions';
import { EmailTemplate } from './email-template';
import { twMerge } from 'tailwind-merge';

const initialState = {
	name: '',
	email: '',
	message: '',
};

export function Form() {
	const [msgState, setMsgState] = useState(initialState);
	const { name, email, message } = msgState;
	const [status, setStatus] = useState({
		submitting: false,
		submitError: false,
		submitSuccess: false,
	});
	const handleChange = (e) => {
		setStatus({
			submitting: false,
			submitError: false,
			submitSuccess: false,
		});
		setMsgState({ ...msgState, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		setStatus({ ...status, submitting: true });
		e.preventDefault();
		const emailContent = EmailTemplate(name, email, message);
		const res = await SendEmail(emailContent);
		if (res.status === 'error')
			return setStatus({
				...status,
				submitting: false,
				submitError: true,
			});
		setStatus({ ...status, submitting: false, submitSuccess: true });
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
				type="email"
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
			{(status.submitting ||
				status.submitSuccess ||
				status.submitError) && (
				<div
					className={twMerge(
						'px-8 py-3 transition-all border border-gray-500',
						status.submitting && 'bg-inherit',
						status.submitSuccess && 'bg-green-400',
						status.submitError && 'bg-red-400'
					)}
				>
					<p className="text-white font-semibold text-center">
						{status.submitting && 'Submitting...'}
						{status.submitSuccess && 'Message Sent!'}
						{status.submitError && 'Error Sending Message'}
					</p>
				</div>
			)}
			<GradientSubmitButton
				disabled={status.submitting}
				label="Send Message"
				gradient="teal_lime"
				className=" bg-[#353535] text-white hover:text-[#353535] w-full font-semibold tracking-wider"
			/>
		</form>
	);
}
