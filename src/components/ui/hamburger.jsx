import { twMerge } from 'tailwind-merge';

export function Hamburger({ isActive, setIsActive, className }) {
	const handleClick = () => setIsActive(!isActive);
	return (
		<div
			className={twMerge(
				'space-y-2 cursor-pointer h-[22px] *:w-10 overflow-y-clip z-[10]',
				className
			)}
			onClick={handleClick}
		>
			<div
				className={twMerge(
					'h-0.5 bg-gray-600 transition-all duration-700',
					isActive
						? 'transform -rotate-45 origin-right bg-white'
						: 'rotate-0'
				)}
			/>
			<div
				className={twMerge(
					'h-0.5 bg-gray-600 transition-all duration-700',
					isActive ? 'opacity-0' : 'opacity-100'
				)}
			/>
			<div
				className={twMerge(
					'h-0.5 bg-gray-600 transition-all duration-700',
					isActive
						? 'transform rotate-45 origin-right bg-white'
						: 'rotate-0'
				)}
			/>
		</div>
	);
}
