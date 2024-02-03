'use client';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export function ParaWordReveal({
	para = 'write paragraph here',
	className = '',
}) {
	const wordAni = {
		hidden: (i) => ({
			// opacity: 0,
			y: 0,
			rotateX: '-90deg',
			transformOrigin: 'bottom',
		}),
		visible: (i) => ({
			// opacity: 1,
			y: 0,
			rotateX: '0deg',
			transformOrigin: 'bottom',
			transition: {
				delay: i * 0.02,
				duration: 0.5,
				ease: 'easeInOut',
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
					className="inline-block"
					style={{ willChange: 'transform' }}
				>
					{word}&nbsp;
				</motion.span>
			))}
		</p>
	);
}
