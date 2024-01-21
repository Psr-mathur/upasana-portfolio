import { EmailIcon } from '../icons/email-icon';

/* eslint-disable react/prop-types */
function InputGroup({
	label = '',
	name = '',
	value = '',
	onChange = () => null,
	type = 'text',
	disabled = false,
	placeholder = 'Placeholder',
	icon = <EmailIcon />,
	className = '',
}) {
	return (
		<div className={className}>
			<label
				htmlFor={name}
				className="block mb-2 text-sm font-medium text-gray-900"
			>
				{label}
			</label>
			<div className="relative">
				<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
					{icon}
				</div>
				<input
					type={type}
					id={name}
					name={name}
					onChange={onChange}
					value={value}
					disabled={disabled}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
					placeholder={placeholder}
				></input>
			</div>
		</div>
	);
}

export { InputGroup };
