import { twMerge } from 'tailwind-merge';

/* eslint-disable react/prop-types */
function GradientButton({
	gradient = 'purple_blue',
	label = 'Button',
	className = '',
	onClick = (e) => {
		alert('Onclick Fn is not implemented.');
	},
}) {
	const gradientCSS = {
		purple_blue:
			'bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300',
		cyan_blue:
			'bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-cyan-200',
		green_blue:
			'bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white  focus:ring-4 focus:outline-none focus:ring-green-200 ',
		teal_lime:
			'bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200 ',
		red_yellow:
			'bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100',
	};
	return (
		<button
			className={twMerge(
				'relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group',
				gradientCSS[gradient]
			)}
			onClick={onClick}
		>
			<span
				className={twMerge(
					'relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0',
					className
				)}
			>
				{label}
			</span>
		</button>
	);
}

export { GradientButton };
