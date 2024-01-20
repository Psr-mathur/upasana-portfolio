'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
export function Paragraph({ para = 'Write something here', className = '' }) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start 0.9', 'start 0.4'],
	});

	const length = para.split(' ').length;

	return (
		<motion.p ref={container} className={className}>
			{para.split(' ').map((word, i) => {
				const start = i / length;
				const end = start + 1 / length;
				return (
					<Word
						key={i}
						scrollYProgress={scrollYProgress}
						range={[start, end]}
					>
						{word}
					</Word>
				);
			})}
		</motion.p>
	);
}

const Word = ({ children, scrollYProgress, range }) => {
	const opacity = useTransform(scrollYProgress, range, [0.25, 1]);
	return <motion.span style={{ opacity }}>{children} </motion.span>;
};
