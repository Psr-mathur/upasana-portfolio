import { twMerge } from 'tailwind-merge';

/* eslint-disable react/prop-types */
function InputGroup({
	label = '',
	name = '',
	value = '',
	onChange = () => null,
	type = 'text',
	disabled = false,
	textarea = false,
	required = false,
	inputClass = '',
	labelClass = '',
}) {
	return (
		<div className="relative z-0 w-full">
			{!textarea ? (
				<input
					type={type}
					id={name}
					name={name}
					value={value}
					onChange={onChange}
					className={twMerge(
						`peer block py-2.5 px-1 w-full text-sm text-gray-600 bg-transparent border-0 border-b-[2px] appearance-none focus:outline-none focus:ring-0 focus:border-[#64ff92] ${
							disabled ? 'border-gray-300' : 'border-gray-400'
						}`,
						inputClass
					)}
					placeholder=" "
					disabled={disabled}
					required={required}
				/>
			) : (
				<textarea
					id={name}
					name={name}
					value={value}
					onChange={onChange}
					rows="4"
					maxrows="5"
					className={twMerge(
						`peer block py-2.5 px-1 w-full text-sm text-gray-600 bg-transparent border-0 border-b-[2px] appearance-none focus:outline-none focus:ring-0 focus:border-[#64ff92] ${
							disabled ? 'border-gray-300' : 'border-gray-400'
						}`,
						inputClass
					)}
					placeholder=" "
					required={required}
				/>
			)}
			<label
				htmlFor={name}
				className={twMerge(
					'peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#64ff92] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8',
					labelClass
				)}
			>
				{label}
			</label>
		</div>
	);
}

export { InputGroup };
