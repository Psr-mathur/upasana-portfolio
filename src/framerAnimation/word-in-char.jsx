'use client';
import { motion } from 'framer-motion';

export function WordInChar({ word = 'DESIGNER' }) {
	const charAni = {
		hidden: (i) => ({
			opacity: 0,
			y: 50,
			rotateX: 90,
		}),
		visible: (i) => ({
			opacity: 1,
			y: 0,
			rotateX: 0,
			transition: {
				delay: i * 0.2,
				duration: 0.5,
				ease: 'easeInOut',
				type: 'spring',
				stiffness: 100,
				repeat: Infinity,
				repeatDelay: 5,
			},
		}),
	};

	return (
		<span className="flex">
			{word.split('').map((char, i) => (
				<motion.span
					variants={charAni}
					initial="hidden"
					// animate="visible"
					whileInView="visible"
					exit="hidden"
					custom={i}
					key={i}
					className="text-blue-500 block"
					data-scroll
					data-scroll-speed={Math.random() * 8 * 0.01}
				>
					{char}
				</motion.span>
			))}
		</span>
	);
}

// 'use client';
// import { motion } from 'framer-motion';

// export function WordInChar({ word = 'DESIGNER' }) {
// 	const charAni = {
// 		hidden: {
// 			opacity: 0,
// 			y: 50,
// 		},
// 		visible: {
// 			opacity: 1,
// 			y: 0,
// 		},
// 	};

// 	return (
// 		<motion.span
// 			initial="hidden"
// 			whileInView="visible"
// 			// animate="visible"
// 			transition={{
// 				staggerChildren: 0.1,
// 				type: 'spring',
// 				stiffness: 100,
// 			}}
// 			className="flex"
// 		>
// 			{word.split('').map((char, i) => (
// 				<motion.span
// 					variants={charAni}
// 					key={i}
// 					className="text-blue-500 block"
// 				>
// 					{char}
// 				</motion.span>
// 			))}
// 		</motion.span>
// 	);
// }
