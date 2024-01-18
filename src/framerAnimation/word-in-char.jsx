'use client';
import { motion } from 'framer-motion';

export function WordInChar({ word = 'DESIGNER' }) {
	const charAni = {
		hidden: {
			opacity: 0,
			y: 50,
			transition: {
				duration: 0.5,
				ease: 'easeInOut',
			},
		},
		visible: {
			opacity: 1,
			y: 0,
		},
	};

	return (
		<span>
			{word.split('').map((char, i) => (
				<motion.span
					variants={charAni}
					initial="hidden"
					// animate="visible"
					whileInView="visible"
					exit="hidden"
					transition={{
						delay: 0.5 + i * 0.25,
						ease: 'easeInOut',
						stiffness: 10,
						type: 'spring',
					}}
					key={i}
					className="text-blue-500"
				>
					{char}
				</motion.span>
			))}
		</span>
	);
}
