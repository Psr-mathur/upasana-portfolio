'use client';
import { motion } from 'framer-motion';

export function SlideChilds({ children, className = '' }) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			// animate="visible"
			transition={{
				staggerChildren: 0.1,
				// type: 'spring',
				// stiffness: 100,
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function MotionPx({ children, className = '' }) {
	const slideAni = {
		hidden: {
			opacity: 0,
			x: 100,
			transition: {
				duration: 0.5,
			},
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
			},
		},
	};
	return (
		<motion.p variants={slideAni} className={className}>
			{children}
		</motion.p>
	);
}

export function MotionPy({ children, className = '' }) {
	const slideAni = {
		hidden: {
			opacity: 0,
			y: 50,
			transition: {
				duration: 0.5,
			},
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};
	return (
		<motion.p variants={slideAni} className={className}>
			{children}
		</motion.p>
	);
}
