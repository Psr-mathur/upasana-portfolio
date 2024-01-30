'use client';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export function ParaWordReveal({
	para = 'write paragraph here',
	className = '',
}) {
	const wordAni = {
		hidden: (i) => ({
			opacity: 0,
			y: 25,
			color: 'rgb(59 130 246)',
		}),
		visible: (i) => ({
			opacity: 1,
			y: 0,
			color: 'rgb(30 30 30)',
			transition: {
				delay: i * 0.02,
				duration: 0.5,
				ease: 'easeInOut',
				type: 'spring',
				stiffness: 100,
			},
		}),
	};

	return (
		<p className={twMerge('flex flex-wrap', className)}>
			{para.split(' ').map((word, i) => (
				<motion.span
					variants={wordAni}
					initial="hidden"
					whileInView="visible"
					exit="hidden"
					custom={i}
					key={i}
					className="text-blue-500 inline-block"
				>
					{word}&nbsp;
				</motion.span>
			))}
		</p>
	);
}
